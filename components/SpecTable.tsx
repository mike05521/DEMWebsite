import type { SpecRow } from "@/lib/services";

export function SpecTable({
  title,
  intro,
  rows,
}: {
  title: string;
  intro?: string;
  rows: SpecRow[];
}) {
  return (
    <div>
      <h2 className="font-display text-4xl leading-none font-extrabold text-ink uppercase sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base text-ink/70">{intro}</p>
      ) : null}
      <div className="mt-8 overflow-hidden border border-ink/10">
        <table className="w-full text-left text-sm">
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-ink/10 first:border-t-0">
                <th className="w-[38%] bg-cream-card/70 px-4 py-3.5 align-top font-semibold text-ink sm:px-5">
                  {row.label}
                </th>
                <td className="bg-white px-4 py-3.5 text-ink/80 sm:px-5">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DataTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div>
      <h3 className="font-display text-3xl font-extrabold text-ink uppercase">
        {title}
      </h3>
      <div className="mt-6 overflow-x-auto border border-ink/10">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-ink text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-semibold tracking-wide uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")} className="border-t border-ink/10">
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-4 py-3.5 ${index === 0 ? "bg-cream-card/50 font-medium text-ink" : "bg-white text-ink/80"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
