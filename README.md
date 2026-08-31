# David Engineering & Manufacturing

Production marketing site for David Engineering & Manufacturing, Inc. — precision metal manufacturing in Corona, CA since 1972.

Next.js App Router, TypeScript, Tailwind CSS. Built as a **static export** for GitHub Pages.

**Public preview:** https://mike05521.github.io/DEMWebsite/

## Stack

- Next.js 16 (App Router, `output: "export"`)
- TypeScript
- Tailwind CSS 4
- Big Shoulders + IBM Plex Sans
- `basePath` `/DEMWebsite` so assets and links work on the project Pages site

## Scripts

```bash
npm install
npm run dev      # open http://localhost:3000/DEMWebsite/
npm run build    # writes static HTML to out/
npx serve out    # local preview of the Pages export
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/sheet-laser-cutting` | Sheet fiber laser |
| `/tube-laser-cutting` | Bystronic FL170 tube laser |
| `/cnc-machining` | CNC mill + turn |
| `/forming` | Bystronic Xpert press brake |
| `/metal-stamping` | Coil-fed 60–220 ton |
| `/welding` | Robotic MIG, TIG, spot, laser weld |
| `/finishing-services` | Hardware, powder, plate, mark |
| `/additional-services` | Assembly and secondary ops |
| `/quality` | ISO 9001:2015 |
| `/quote` | RFQ UI (static preview — no server upload) |

GitHub Pages cannot run a Node server. The quote form stays on the site as a usable UI; it cannot store files. Call 951-735-5200 to send a job. A future Node host (for example Vercel) can add `POST /api/quote` again.

## Deploy

Push to `main` (or `cursor/dem-nextjs-site-e285`) runs `.github/workflows/pages.yml` and deploys the `out/` folder to GitHub Pages.

Repo → Settings → Pages → Source: **GitHub Actions**.

The repository must be **public** (or the owner needs GitHub Pro) for the Pages URL to be visible to everyone.

## Facts this site will not invent

ISO 9001:2015 only. No AS9100. No waterjet. No plasma. Published machines only: 2× Bystronic fiber lasers (60×120, 24/7), Bystronic FL170 6-axis 3 kW tube laser, Bystronic Xpert brakes, coil-fed stamp 60–220 ton, CNC mill/turn with bar-feed, robotic MIG 4×10 plus MIG/TIG/spot/laser weld.

## NAP

David Engineering & Manufacturing, Inc.  
1230 Quarry St, Corona, CA 92879  
951-735-5200 · Fax 951-737-4982 · sales@davidengineering.com
