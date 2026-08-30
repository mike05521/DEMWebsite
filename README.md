# David Engineering & Manufacturing

Production marketing site for [David Engineering & Manufacturing, Inc.](https://davidengineering.com) — precision metal manufacturing in Corona, CA since 1972.

Next.js App Router, TypeScript, Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Big Shoulders Display + IBM Plex Sans

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
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
| `/quote` | RFQ with drawing upload |
| `POST /api/quote` | Quote + file intake |

## Quote uploads

`POST /api/quote` accepts `multipart/form-data` with STEP, IGES, DXF, DWG, or PDF (max 5 files, 20 MB each). Files and a `request.json` are stored under `data/quotes/` (gitignored).

Set `QUOTE_NOTIFY_WEBHOOK` later if you want inbound requests forwarded. The form never asks the visitor to email the drawing after submit.

## Facts this site will not invent

ISO 9001:2015 only. No AS9100. No waterjet. No plasma. Published machines only: 2× Bystronic fiber lasers (60×120, 24/7), Bystronic FL170 6-axis 3 kW tube laser, Bystronic Xpert brakes, coil-fed stamp 60–220 ton, CNC mill/turn with bar-feed, robotic MIG 4×10 plus MIG/TIG/spot/laser weld.

## NAP

David Engineering & Manufacturing, Inc.  
1230 Quarry St, Corona, CA 92879  
951-735-5200 · Fax 951-737-4982 · sales@davidengineering.com
