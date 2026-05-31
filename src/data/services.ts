import type { ImageMetadata } from "astro";

export type GalleryLayout =
  | "triptych"
  | "feature"
  | "stack-wide"
  | "duo"
  | "mosaic"
  | "quad"
  | "grid2";

export interface ServicePhoto {
  src: ImageMetadata;
  alt: string;
}

export interface Service {
  slug: string;
  index: string;
  title: string;
  label: string;
  lead: string;
  body: string;
  layout: GalleryLayout;
  photos: ServicePhoto[];
}

/* Eagerly import every worksite photo so Astro can optimize each one. */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/work/**/*.jpg",
  { eager: true },
);

/** Returns the photos for one service folder, sorted by filename. */
function load(slug: string, alts: string[]): ServicePhoto[] {
  return Object.entries(files)
    .filter(([path]) => path.includes(`/work/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod], i) => ({
      src: mod.default,
      alt: alts[i] ?? alts[alts.length - 1],
    }));
}

export const services: Service[] = [
  {
    slug: "fundatii-case",
    index: "01",
    title: "Fundații case",
    label: "Săpături fundație",
    layout: "stack-wide",
    lead: "Săpăm fundația la cota și forma din proiect, cu pereți curați și fund drept, pregătită pentru cofraj și armătură.",
    body: "Trasare după plan, săpătură la adâncimea cerută, evacuarea pământului și finisarea taluzului. Lucrăm cu miniexcavator pe spații înguste, fără să stricăm restul terenului.",
    photos: load("fundatii-case", [
      "Miniexcavator săpând fundația unei case, cu cofraj de beton turnat și armătură pregătită pe un teren de toamnă.",
      "Săpătură de fundație finalizată, cu pereții tranșeei drepți și pământul evacuat lateral.",
      "Excavare pentru fundație în jurul unei construcții, cu cota săpăturii adusă la nivelul proiectului.",
      "Detaliu de fundație săpată, cu fundul tranșeei curat și pregătit pentru cofraj.",
    ]),
  },
  {
    slug: "bransamente-canalizare",
    index: "02",
    title: "Branșamente canalizare",
    label: "Canalizare",
    layout: "quad",
    lead: "Săpături și montaj pentru branșamente de canalizare, cu pantă corectă și tub poziționat ca să nu apară probleme la recepție.",
    body: "De la tranșee până la racordul în cămin: săpăm la adâncimea necesară, montăm tubul PVC cu panta cerută și refacem zona după umplere. Coordonăm lucrarea cu cerințele operatorului.",
    photos: load("bransamente-canalizare", [
      "Coloană verticală de canalizare PVC portocalie montată într-o tranșee, pregătită pentru racord.",
      "Racord de canalizare cu ramificație portocalie montat în tranșee, conectat la conducta principală.",
      "Tub de canalizare PVC cu coturi și ramificație, poziționat pe traseu în tranșee.",
      "Conductă de canalizare gri montată într-o tranșee săpată drept, cu cotul de racord pregătit.",
    ]),
  },
  {
    slug: "bransamente-apa",
    index: "03",
    title: "Branșamente apă",
    label: "Apă",
    layout: "triptych",
    lead: "Branșamente de apă executate de la priza din stradă până în interior, cu fitinguri etanșe și trasee verificate.",
    body: "Săpăm traseul, montăm conducta și fitingurile, verificăm etanșeitatea și refacem zona. Lucrăm și în spații tehnice înguste, în subsoluri și cămine existente.",
    photos: load("bransamente-apa", [
      "Conductă de apă cu fitinguri albastre montată într-un subsol tehnic, racordată la instalația existentă.",
      "Detaliu de branșament de apă, cu îmbinări etanșe pe conducta nouă.",
      "Traseu de apă pregătit și racordat, verificat înainte de punerea în funcțiune.",
    ]),
  },
  {
    slug: "bransamente-gaz",
    index: "04",
    title: "Branșamente gaz",
    label: "Gaz",
    layout: "quad",
    lead: "Săpături pentru branșamente de gaz, executate cu atenție la adâncime, semnalizare și protejarea conductei pe traseu.",
    body: "Pregătim tranșeea la cotele cerute, lucrăm controlat în jurul rețelelor existente și predăm zona refăcută. Respectăm cerințele de execuție pentru acest tip de branșament.",
    photos: load("bransamente-gaz", [
      "Conductă de gaz cu fitinguri coborâtă într-o tranșee îngustă, pregătită pentru racord.",
      "Tranșee îngustă pentru branșament de gaz, cu banda galbenă de avertizare pe traseu.",
      "Traseu de gaz în tranșee, cu banda galbenă de semnalizare și conducta verde dedesubt.",
      "Tranșee lungă pentru branșament de gaz pe marginea drumului, cu banda de avertizare pozată.",
    ]),
  },
  {
    slug: "sapaturi-electrice",
    index: "05",
    title: "Săpături electrice",
    label: "Electrice",
    layout: "mosaic",
    lead: "Tranșee pentru cabluri electrice săpate la adâncimea corectă, drepte și curate, gata pentru pozarea cablului și banda de avertizare.",
    body: "Săpăm traseul pentru alimentare sau racord, ocolim instalațiile existente și refacem zona după pozare. Lucrăm și pe trasee lungi, pe marginea drumului sau în curte.",
    photos: load("sapaturi-electrice", [
      "Excavator săpând o tranșee pentru cablu electric pe marginea unei străzi, cu traseul marcat.",
      "Tranșee electrică săpată drept, pregătită pentru pozarea cablului.",
      "Traseu pentru cablu electric deschis în curte, cu pământul evacuat lateral.",
      "Detaliu de tranșee pentru alimentare electrică, la adâncimea necesară.",
      "Săpătură electrică finalizată, înainte de pozarea cablului și refacerea zonei.",
    ]),
  },
  {
    slug: "nivelare-teren",
    index: "06",
    title: "Nivelare teren",
    label: "Nivelare",
    layout: "stack-wide",
    lead: "Nivelăm și aducem terenul la cotă pentru construcție, platformă sau curte, cu suprafață uniformă și pante controlate.",
    body: "Decopertare, mutarea pământului, aducerea la cotă și finisarea suprafeței. Pregătim terenul pentru fundație, pavaj sau amenajare, fără denivelări rămase în urmă.",
    photos: load("nivelare-teren", [
      "Excavator nivelând un teren lângă un gard de panouri, cu suprafața adusă la cotă.",
      "Teren în curs de nivelare, cu pământul mutat și suprafața aplatizată.",
      "Platformă de teren nivelată, pregătită pentru construcție sau amenajare.",
      "Lucrare de nivelare finalizată, cu suprafața uniformă pe toată zona.",
    ]),
  },
  {
    slug: "indepartare-moluz",
    index: "07",
    title: "Îndepărtare moluz",
    label: "Moluz",
    layout: "grid2",
    lead: "Spargem și evacuăm betonul, molozul și resturile de construcție, eliberând terenul pentru lucrarea următoare.",
    body: "Demolare controlată cu picon hidraulic, încărcare și evacuare a molozului. Eliberăm curtea, aleea sau platforma și o predăm curată, gata de lucru.",
    photos: load("indepartare-moluz", [
      "Miniexcavator cu picon hidraulic spărgând o platformă de beton între case, cu molozul adunat pentru evacuare.",
      "Resturi de beton sparte și pregătite pentru încărcare și evacuare de pe șantier.",
      "Miniexcavator SANY propriu, pregătit pentru o lucrare de demolare și curățare a terenului.",
      "Excavator CAT încărcând molozul într-un autocamion basculant, pe o curte îngustă.",
    ]),
  },
  {
    slug: "instalatii-sanitare",
    index: "08",
    title: "Instalații sanitare și încălzire",
    label: "Instalații",
    layout: "feature",
    lead: "Montaj de centrale termice, calorifere și obiecte sanitare: WC, chiuvete și instalațiile aferente, executate curat și verificate.",
    body: "Pe lângă săpături, ne ocupăm și de partea de instalații din interior: montăm centrale termice și calorifere, facem instalația de încălzire și sanitară, montăm obiecte (WC, chiuvete, baterii) și racordurile lor. Lucrăm îngrijit și predăm totul funcțional.",
    photos: load("instalatii-sanitare", [
      "Centrală termică montată pe perete, cu racordurile de cupru și robineții executate ordonat.",
      "Montajul unui calorifer pe perete, finisat curat într-o încăpere amenajată.",
      "Sistem de încălzire cu centrală și tubulatură, montat și conectat pe traseu.",
      "Montaj de vas WC, cu rezervorul așezat și pregătit pentru racord.",
      "Pregătirea blatului pentru montajul unei chiuvete, cu decupajul verificat.",
    ]),
  },
];
