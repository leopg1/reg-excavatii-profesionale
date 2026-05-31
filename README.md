# REG Excavații Profesionale — site one-page

Site de prezentare (Astro + Tailwind v4) pentru SC REG Excavații Profesionale SRL.
Conversie: telefon și WhatsApp. Conținutul principal = fotografii reale de pe șantiere.

## Comenzi

```bash
npm install      # instalează dependențele
npm run dev      # server local de dezvoltare (http://localhost:4321)
npm run build    # generează site-ul static în ./dist
npm run preview  # previzualizează build-ul de producție
```

Deploy: încarcă folderul `dist/` pe orice hosting static (Netlify, Vercel, cPanel etc.).

## Unde modifici lucrurile

| Vrei să schimbi | Fișier |
| --- | --- |
| Telefon, WhatsApp, nume firmă, slogan, zonă | [src/data/site.ts](src/data/site.ts) |
| Texte servicii, titluri, descrieri, text alternativ (alt) poze | [src/data/services.ts](src/data/services.ts) |
| Pozele unui serviciu | adaugi/înlocuiești în `src/assets/work/<serviciu>/` |
| Poza din hero (banner sus) | `src/assets/hero-santier.png` |
| Culori, fonturi | [src/styles/global.css](src/styles/global.css) |

### Cum adaugi poze la un serviciu
Pune fișierele `.jpg` în folderul serviciului din `src/assets/work/` (ex.
`src/assets/work/fundatii-case/`). Sunt preluate automat, în ordinea numelui
(`1.jpg`, `2.jpg`, ...). Adaugă apoi un text alt potrivit în lista `photos` din
`src/data/services.ts`, ca să rămână corecte descrierile și SEO-ul.

Pozele sunt optimizate automat la build (redimensionare + WebP), deci poți pune
fișiere mari direct de pe telefon.

## Note

- Numărul de telefon și WhatsApp (`0758 193 160`) sunt în `src/data/site.ts`,
  într-un singur loc.
- Folderele cu poze din rădăcina proiectului (`bransamente-apa/` etc.) și
  `Gemini_Generated_Image_...png` sunt sursele originale; site-ul folosește
  copiile din `src/assets/`. Le poți șterge din rădăcină dacă vrei să faci curat.
