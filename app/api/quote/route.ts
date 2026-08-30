import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import {
  acceptedDrawingExt,
  maxUploadBytes,
  maxUploadFiles,
  quoteMaterials,
  quoteServices,
} from "@/lib/site";

export const runtime = "nodejs";

const allowed = new Set<string>(acceptedDrawingExt);

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function extensionOf(name: string) {
  const ext = path.extname(name).toLowerCase();
  return ext;
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request was too large or could not be read." },
      { status: 413 },
    );
  }

  if (asString(form.get("company_website"))) {
    return NextResponse.json({ ok: true, reference: "ok" });
  }

  const name = asString(form.get("name"));
  const company = asString(form.get("company"));
  const email = asString(form.get("email"));
  const phone = asString(form.get("phone"));
  const service = asString(form.get("service"));
  const material = asString(form.get("material"));
  const qty = asString(form.get("qty"));
  const dueDate = asString(form.get("dueDate"));
  const notes = asString(form.get("notes"));

  if (!name || !company || !email || !phone || !service || !material || !qty) {
    return NextResponse.json(
      { ok: false, error: "Name, company, email, phone, service, material, and quantity are required." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  if (!(quoteServices as readonly string[]).includes(service)) {
    return NextResponse.json({ ok: false, error: "Select a listed service." }, { status: 400 });
  }

  if (!(quoteMaterials as readonly string[]).includes(material)) {
    return NextResponse.json({ ok: false, error: "Select a listed material." }, { status: 400 });
  }

  const incoming = form.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (incoming.length > maxUploadFiles) {
    return NextResponse.json(
      { ok: false, error: `Attach at most ${maxUploadFiles} files.` },
      { status: 400 },
    );
  }

  for (const file of incoming) {
    const ext = extensionOf(file.name);
    if (!allowed.has(ext)) {
      return NextResponse.json(
        {
          ok: false,
          error: `${file.name} is not an accepted drawing type. Use STEP, IGES, DXF, DWG, or PDF.`,
        },
        { status: 400 },
      );
    }
    if (file.size > maxUploadBytes) {
      return NextResponse.json(
        { ok: false, error: `${file.name} exceeds the 20 MB limit.` },
        { status: 400 },
      );
    }
  }

  const reference = `DEM-${Date.now().toString(36).toUpperCase()}-${randomUUID().slice(0, 8).toUpperCase()}`;
  const dir = path.join(process.cwd(), "data", "quotes", reference);
  await mkdir(dir, { recursive: true });

  const saved: string[] = [];
  for (const file of incoming) {
    const safe = file.name.replace(/[^\w.\-]+/g, "_").slice(0, 120);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(dir, safe), buffer);
    saved.push(safe);
  }

  await writeFile(
    path.join(dir, "request.json"),
    JSON.stringify(
      {
        reference,
        receivedAt: new Date().toISOString(),
        name,
        company,
        email,
        phone,
        service,
        material,
        qty,
        dueDate,
        notes,
        files: saved,
      },
      null,
      2,
    ),
  );

  return NextResponse.json({
    ok: true,
    reference,
    files: saved,
    message:
      "Request received with any attached drawings. Our team will review the job and respond.",
  });
}
