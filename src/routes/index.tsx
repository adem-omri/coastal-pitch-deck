import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const MAPS_URL = "https://maps.app.goo.gl/dyWdbPjwKS3xFX9dA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Restaurant El Mansourah — Poissons & fruits de mer à Kélibia",
      },
      {
        name: "description",
        content:
          "Depuis 1962, El Mansourah vous accueille sur les rochers de Kélibia : poissons frais, fruits de mer, accès direct à la mer et vue sur la Méditerranée. Découvrez la carte.",
      },
      { property: "og:title", content: "Restaurant El Mansourah — Kélibia, depuis 1962" },
      {
        property: "og:description",
        content:
          "Poissons frais, fruits de mer et vue sur la Méditerranée, sur les rochers de Kélibia. Carte, spécialités et accès.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "La maison", href: "#maison" },
  { label: "L'expérience", href: "#experience" },
  { label: "La carte", href: "#carte" },
  { label: "Les vins", href: "#vins" },
  { label: "Avis", href: "#avis" },
  { label: "Nous trouver", href: "#visite" },
];

type Dish = { name: string; price: string };
type Section = { title: string; note?: string; items: Dish[] };

const foodSections: Section[] = [
  {
    title: "Pour commencer",
    items: [
      { name: "Langoustines crues", price: "123 000" },
      { name: "Salade de poulpe El Mansourah", price: "57 000" },
      { name: "Carpaccio de crevettes au citron vert", price: "56 000" },
      { name: "Carpaccio : poulpe ou thon rouge & boutargue", price: "52 000" },
      { name: "Duo de fromages & charcuterie", price: "50 000" },
      {
        name: "Burrata à la crème de truffe au pesto et tomates séchées",
        price: "49 000",
      },
      { name: "Tataki de thon, kikkoman, miel et sésame", price: "48 000" },
      { name: "Assiette de boutargue", price: "43 000" },
      { name: "Salade gourmande (poulet miel de soja)", price: "39 000" },
      { name: "Salade méchouia au thon et à l'huile d'olive", price: "28 000" },
      { name: "Plateau d'huîtres (3 pièces)", price: "36 000" },
      { name: "Plateau d'huîtres (6 pièces)", price: "52 000" },
    ],
  },
  {
    title: "Mise en bouche chaude",
    items: [
      { name: "Langoustines grillées", price: "123 000" },
      { name: "Fritto misto (crevettes, seiches et petits rougets)", price: "78 000" },
      { name: "Œufs de seiches à la plancha", price: "60 000" },
      { name: "Crevettes royales grillées (3 pièces)", price: "60 000" },
      { name: "Poulpe grillé au pesto", price: "57 000" },
      { name: "Petites seiches grillées", price: "53 000" },
      { name: "Coquillage à la marinière", price: "50 000" },
      { name: "Friture de petits rougets", price: "38 000" },
      { name: "Sardines grillées", price: "28 900" },
    ],
  },
  {
    title: "Les pâtes",
    items: [
      {
        name: "Penne terre & mer (champignons et crevettes, sauce blanche au pesto)",
        price: "95 000",
      },
      { name: "Pâtes fell à la lotte", price: "86 000" },
      { name: "Spaghetti aux fruits de mer", price: "86 000" },
    ],
  },
  {
    title: "Les spécialités",
    items: [
      { name: "Pâtes au crustacé (500 g/pax) — langouste, homard ou cigale", price: "220 000" },
      { name: "Filet de bœuf aux champignons frais, fini au four et sa crème à la truffe", price: "98 000" },
      { name: "St Pierre poêlé et ses petites crevettes (sauce beurre blanc et boutargue)", price: "96 000" },
      { name: "Souris d'agneau au romarin cuit dans sa sauce forestière", price: "96 000" },
      { name: "Limande-sole poêlée, beurre frais et filet de citron", price: "86 000" },
      { name: "Plat végétarien aux légumes frais de saison et à la crème de truffe", price: "81 000" },
    ],
  },
  {
    title: "Sur le gril",
    items: [
      { name: "Crevettes royales grillées", price: "91 000" },
      { name: "Filet de loup, fine ratatouille de légumes du soleil", price: "86 000" },
      { name: "Thon rouge snacké au sésame", price: "86 000" },
      { name: "Veau grillé garni : filet ou brochettes de filet au fromage fondu", price: "86 000" },
      { name: "Langouste, homard ou cigale (selon arrivage) — les 100 g", price: "44 000" },
      { name: "Poisson grillé de la criée (les 100 g)", price: "20 000" },
    ],
  },
  {
    title: "Les douceurs",
    items: [
      { name: "Fondant au chocolat & sa boule de glace à la vanille", price: "29 000" },
      { name: "Farandole de fruits de saison", price: "29 000" },
      { name: "Gâteau aux dattes et aux noix", price: "28 000" },
      { name: "Gâteau au chocolat et aux noix", price: "28 000" },
      { name: "Colonel : sorbet citron arrosé de vodka", price: "28 000" },
      { name: "Panna cotta", price: "27 000" },
      { name: "Glaces ou sorbets faits maison", price: "23 000" },
      { name: "Affogato al caffé : glace noyée dans le café", price: "23 000" },
      { name: "Assiette de fromages", price: "50 000" },
    ],
  },
];

const drinkSections: Section[] = [
  {
    title: "Cocktails",
    items: [
      { name: "Green velvet (gin, pomme, concombre et ananas)", price: "32 000" },
      { name: "Coco mango (rhum, ananas, mangue, noix de coco et curaçao bleu)", price: "32 000" },
      { name: "Iced mojito (rhum, menthe, citron et parfum mojito)", price: "32 000" },
      { name: "Piña colada (rhum, ananas et lait de coco)", price: "32 000" },
      { name: "Red berries (vodka, fruits rouges et raisin)", price: "32 000" },
    ],
  },
  {
    title: "Apéritifs",
    items: [
      { name: "Kir à la kélibienne (selon arôme)", price: "23 000" },
      { name: "Ricard ou Campari (4 cl)", price: "20 000" },
      { name: "Pastis 51 ou Anisette (4 cl)", price: "20 000" },
      { name: "Martini rouge ou blanc (5 cl)", price: "20 000" },
      { name: "Cinzano rouge ou blanc (5 cl)", price: "20 000" },
    ],
  },
  {
    title: "Alcools",
    items: [
      { name: "Whisky Double Black (4 cl)", price: "33 000" },
      { name: "Vodka Grey Goose ou Belvedere (4 cl)", price: "30 000" },
      { name: "Chivas Regal 12 ans d'âge", price: "30 000" },
      { name: "Whisky Johnnie Walker Black Label (4 cl)", price: "29 000" },
      { name: "Jack Daniel's N°7 (4 cl)", price: "28 000" },
      { name: "Bacardi (selon arôme) ou Smirnoff Ice", price: "27 000" },
      { name: "Whisky Johnnie Walker Red Label ou J&B (4 cl)", price: "26 000" },
      { name: "Dry Gin Gordon's (4 cl)", price: "25 000" },
      { name: "Vodka au choix (4 cl)", price: "25 000" },
      { name: "Tequila au choix (2,5 cl)", price: "22 000" },
      { name: "Eau de vie tunisienne : Boukha (4 cl)", price: "20 000" },
    ],
  },
  {
    title: "Digestifs",
    items: [
      { name: "Grand Marnier rouge ou jaune (2,5 cl)", price: "26 000" },
      { name: "Brandy ou Cognac (2,5 cl)", price: "24 000" },
      { name: "Baileys (4 cl)", price: "23 000" },
      { name: "Limoncello (5 cl)", price: "23 000" },
      { name: "Thibarine (4 cl)", price: "22 000" },
      { name: "Get 27 ou Peppermint (2,5 cl)", price: "22 000" },
    ],
  },
  {
    title: "La brasserie",
    items: [
      { name: "Bières blondes aromatisées (50 cl)", price: "17 000" },
      { name: "Bières blondes aromatisées (33 cl)", price: "12 000" },
      { name: "Heineken pression (50 cl)", price: "16 000" },
      { name: "Bières blondes pression (50 cl) Celtia", price: "15 000" },
      { name: "Heineken bouteille ou pression (33 cl)", price: "13 500" },
      { name: "Bières blondes bouteille (33 cl) Beck's", price: "12 000" },
      { name: "Bières blondes bouteille ou pression (33 cl) Celtia ou Amstel", price: "10 000" },
      { name: "Bières sans alcool (33 cl)", price: "10 000" },
    ],
  },
  {
    title: "Cocktails sans alcool",
    items: [
      { name: "Green velvet (pomme, concombre et ananas)", price: "26 000" },
      { name: "Coco mango (ananas, mangue, noix de coco et curaçao bleu)", price: "26 000" },
      { name: "Iced mojito (menthe, citron et parfum mojito)", price: "26 000" },
      { name: "Piña colada (ananas et lait de coco)", price: "26 000" },
      { name: "Red berries (fruits rouges et raisin)", price: "26 000" },
      { name: "Fresh time (fraise, mangue et basilic)", price: "26 000" },
      { name: "Energisant (orange, carotte et gingembre)", price: "26 000" },
      { name: "Lovely red (betterave, fruits rouges et orange)", price: "26 000" },
      { name: "Frizzy trip (pomme, menthe et citron)", price: "26 000" },
      { name: "Red strip (fraise, goyave et orange)", price: "26 000" },
      { name: "Apple dock (fraise, banane et pomme)", price: "26 000" },
    ],
  },
  {
    title: "Boissons fraîches",
    items: [
      { name: "Boissons énergétiques", price: "23 000" },
      { name: "Jus frais : orange ou citronnade", price: "12 000" },
      { name: "Boissons gazeuses ou sodas", price: "10 000" },
      { name: "Eaux minérales : plate ou gazeuse", price: "10 000" },
    ],
  },
  {
    title: "Boissons chaudes",
    items: [
      { name: "Thé vert à la menthe aux pignons ou amandes grillées", price: "15 000" },
      { name: "Double express", price: "13 000" },
      { name: "Café crème", price: "10 000" },
      { name: "Café noisette (capucin)", price: "9 800" },
      { name: "Nespresso ou déca Arabica", price: "9 000" },
      { name: "Thé vert à la menthe ou thé infusion", price: "9 000" },
    ],
  },
];

const wineSections: Section[] = [
  {
    title: "Vins rouges (75 cl)",
    items: [
      { name: "Vieux Magnifique ou Kaprice", price: "128 000" },
      { name: "Selian Réserve, Bougène, Kurubis ou Lansarine", price: "98 000" },
      { name: "Magnifique, Didona, Gioia ou Shadrapa", price: "88 000" },
      { name: "Magon V.A.O.C., Soltane ou Jour et Nuit", price: "88 000" },
      { name: "Selian ou Magon Signature", price: "81 000" },
      { name: "Phénicia ou Magon", price: "78 000" },
    ],
  },
  {
    title: "Vins rosés (75 cl)",
    items: [
      { name: "Crazy ou Kiss (pétillant)", price: "118 000" },
      { name: "Chopin (pétillant), Didona, Gioia ou Magnifique", price: "88 000" },
      { name: "Soltane, Jour et Nuit ou Selian", price: "83 000" },
      { name: "Pétale de Rose, Magon Signature ou Désir", price: "81 000" },
      { name: "Bougène, Phénicia ou Magon", price: "78 000" },
    ],
  },
  {
    title: "Vins blancs (75 cl)",
    items: [
      { name: "Verdejo", price: "108 000" },
      { name: "Kurubis, Kerkouane ou Bougène", price: "98 000" },
      { name: "Magnifique, Chopin (pétillant), Didona, Gioia, Shadrapa ou Selian Réserve", price: "88 000" },
      { name: "Soltane, Jour et Nuit ou Selian", price: "83 000" },
      { name: "Domaine Clipea, Phénicia, Muscat Sec de Kélibia ou Magon", price: "78 000" },
    ],
  },
  {
    title: "Vins (50 cl) — rouge / rosé / blanc",
    items: [
      { name: "Kurubis (R et B)", price: "78 000" },
      { name: "Domaine Clipea (B) ou Désir Rosé", price: "58 000" },
    ],
  },
  {
    title: "Vins (37,5 cl) — rouge / rosé / blanc",
    items: [
      { name: "Soltane (R, R et B) ou Selian (R et B)", price: "47 000" },
      { name: "Jour et Nuit (R, R et B)", price: "44 000" },
      { name: "Magon (R, R et B) ou Muscat Sec de Kélibia (Cépage du Terroir)", price: "42 000" },
    ],
  },
  {
    title: "Vins au verre (16 cl)",
    items: [
      { name: "Selian (rouge)", price: "34 000" },
      { name: "Magon (R ou R), Muscat Sec de Kélibia, Chardonnay Clipea ou Selian (B)", price: "31 000" },
    ],
  },
  {
    title: "Vins mousseux (75 cl)",
    items: [
      { name: "K de Kurubis (rosé)", price: "273 000" },
      { name: "K de Kurubis (Cuvée Palme d'Or) ou la lettre M (Cépage du terroir)", price: "253 000" },
    ],
  },
  {
    title: "Mousseux au verre (12 cl)",
    items: [{ name: "La lettre M (Cépage du terroir)", price: "58 000" }],
  },
  {
    title: "Vins rouges internationaux",
    items: [
      { name: "Saint-Émilion Les Parcelles par Stéphane Derenoncourt 2012", price: "160 000" },
      { name: "Bourgogne Côte Mâconnaise Pierreclos — Domaine Lapalus 2017", price: "130 000" },
      { name: "Chianti DOCG Stefano Farina la Ginestra 2016", price: "120 000" },
    ],
  },
  {
    title: "Vins rosés internationaux (bouteille et magnum)",
    items: [
      { name: "Côtes de Provence, La Commanderie de Peyrassol, Magnum 2018", price: "450 000" },
      { name: "Côtes de Provence, Miraval 2018", price: "230 000" },
      { name: "Côtes de Provence, M de Minuty 2019", price: "230 000" },
      { name: "Côtes de Provence, Fleurs de Prairie 2018", price: "170 000" },
    ],
  },
  {
    title: "Vins blancs internationaux",
    items: [
      { name: "Mâcon-Milly-Lamartine — Domaine Lafon 2016", price: "210 000" },
      { name: "Chablis 1er Cru Vaillons — Domaine Louis Michel 2015", price: "200 000" },
      { name: "Bourgogne Blanc — Domaine Thomas Bouley 2015", price: "190 000" },
      { name: "Chili-Valle Central — Domaine Los Vascos Sauvignon 2017", price: "145 000" },
      { name: "Muscadet Sèvre-et-Maine — Les Templiers 2017", price: "130 000" },
    ],
  },
  {
    title: "Champagnes (bouteille et magnum)",
    items: [
      { name: "Dom Pérignon Brut Vintage 2009 — 75 cl", price: "1 700 000" },
      { name: "Moët & Chandon Brut Magnum", price: "1 100 000" },
      { name: "Moët & Chandon Ice Impérial — 75 cl", price: "700 000" },
      { name: "Mumm Cordon Rouge rosé — 75 cl", price: "700 000" },
      { name: "Moët & Chandon Brut — 75 cl", price: "600 000" },
    ],
  },
];

const reviews = [
  {
    quote:
      "Un endroit magnifique, le restaurant est posé sur l'eau. Cuisine délicieuse, bon vin et une ambiance rare — on y resterait toute la journée.",
    author: "MelB Travel",
    detail: "Local Guide · 596 avis",
  },
  {
    quote:
      "Vue exceptionnelle, plats délicieux et personnel accueillant — l'une de mes adresses préférées en Tunisie.",
    author: "Rihane Jaziri",
    detail: "Local Guide · 98 avis",
  },
  {
    quote:
      "Le meilleur restaurant de notre séjour en Tunisie. Un cadre superbe au bord de l'eau et de très beaux produits de la mer.",
    author: "Erin Jeavons-Fellows",
    detail: "Local Guide · 24 avis",
  },
  {
    quote:
      "Le restaurant est construit sur les rochers, avec une belle vue sur la côte. On se baigne, on déjeune, puis on se baigne à nouveau.",
    author: "Amal",
    detail: "Local Guide · 488 avis",
  },
  {
    quote:
      "Un service impeccable, une cuisine vraiment savoureuse et un lieu tout simplement splendide.",
    author: "Pasjonatka",
    detail: "Local Guide · 26 avis",
  },
  {
    quote:
      "Nous avons passé un excellent moment, le personnel est charmant et la cuisine est excellente — la quatrième fois que nous venons.",
    author: "Cath Robertson",
    detail: "Visiteuse fidèle",
  },
];

/* ---------------------------------- Nav ---------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-[0_1px_0_var(--color-border)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className={`font-display text-2xl italic tracking-wide transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          El Mansourah
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+21672295169"
          className={`hidden px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all lg:inline-block ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-clay"
              : "border border-white/40 text-white hover:bg-white hover:text-sea-deep"
          }`}
        >
          Réserver
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Ouvrir le menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+21672295169"
                className="text-sm font-medium uppercase tracking-[0.12em] text-sea"
              >
                (+216) 72 29 51 69
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ Wave divider ------------------------------ */

function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M0,84L120,78C240,72,480,60,720,64C960,68,1200,88,1320,94L1440,96L1440,120L0,120Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-sea-deep"
    >
      {/* Ocean gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--clay) 0%, var(--sea-deep) 60%, oklch(0.22 0.05 243) 100%)",
        }}
      />
      {/* Grain */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      {/* Giant ghost letter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[38rem] italic leading-none text-white/[0.04] lg:block"
      >
        M
      </div>
      {/* Vertical coordinates */}
      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-4 md:flex">
        <span className="h-px w-12 bg-white/30" />
        <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
          36.8474° N — 11.0938° E
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center">
        <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.5em] text-gold">
          Kélibia — Tunisie — Depuis 1962
        </p>
        <h1
          className="animate-fade-up mt-8 font-display text-6xl italic leading-[0.95] text-white sm:text-8xl md:text-9xl"
          style={{ animationDelay: "0.15s" }}
        >
          El Mansourah
        </h1>
        <div
          className="animate-fade-up mx-auto mt-10 h-px w-24 bg-white/30"
          style={{ animationDelay: "0.3s" }}
        />
        <p
          className="animate-fade-up mx-auto mt-10 max-w-xl font-display text-xl italic text-white/85 sm:text-2xl"
          style={{ animationDelay: "0.4s" }}
        >
          Une table suspendue entre le ciel et la mer Méditerranée.
        </p>
        <p
          className="animate-fade-up mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/60"
          style={{ animationDelay: "0.5s" }}
        >
          Poissons de la criée, fruits de mer et accès direct à la mer — à quelques minutes du
          port de Kélibia.
        </p>
        <div
          className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.62s" }}
        >
          <a
            href="#carte"
            className="bg-white px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sea-deep transition-colors hover:bg-gold"
          >
            Découvrir la carte
          </a>
          <a
            href="tel:+21672295169"
            className="border border-white/40 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
          >
            (+216) 72 29 51 69
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="animate-float-slow h-16 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      <Waves className="absolute inset-x-0 bottom-0 h-16 w-full text-background md:h-24" />
    </section>
  );
}

/* -------------------------------- La maison ------------------------------- */

function Maison() {
  return (
    <section id="maison" className="relative overflow-hidden bg-background py-28 sm:py-36">
      {/* Ghost letter backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 select-none font-display text-[20rem] italic leading-none text-sea/[0.05]"
      >
        62
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sea">
              La maison
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-6xl">
              Sur les rochers,
              <br />
              <span className="italic text-sea">au-dessus de la mer</span>
            </h2>
            <div className="mt-9 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                Ouvert en 1962, El Mansourah est une institution de la côte de Kélibia. La
                terrasse s'avance au-dessus de l'eau : de la table, on entend les vagues sur la
                roche et l'on voit le Cap Bon se dessiner jusqu'à l'horizon.
              </p>
              <p>
                La cuisine suit la mer. Le poisson vient de la criée chaque matin, les crustacés
                arrivent selon la pêche, et les recettes restent simples : le grill, l'huile
                d'olive, le citron, les herbes du jardin.
              </p>
            </div>
          </div>

          {/* Framed "esprit du lieu" panel — broken grid offset */}
          <div className="relative md:translate-y-10">
            <div className="absolute -left-4 -top-4 h-full w-full border border-sea/30" />
            <div className="relative flex aspect-[4/5] items-center justify-center bg-sand/60">
              <div className="absolute inset-4 border border-sea/20" />
              <div className="p-12 text-center">
                <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.3em] text-sea">
                  L'esprit du lieu
                </span>
                <p className="font-display text-3xl italic leading-snug text-foreground">
                  La roche,
                  <br />
                  le sel, le vent.
                </p>
                <div className="gold-rule mx-auto mt-8 w-16" />
                <p className="mt-8 text-xs font-light leading-relaxed text-muted-foreground">
                  Un escalier de pierre descend directement dans une petite crique. On se baigne,
                  on remonte, on déjeune longuement — c'est la manière Mansourah.
                </p>
              </div>
            </div>
            {/* Stat card overlapping the frame */}
            <div className="absolute -bottom-8 -left-6 bg-primary px-8 py-6 text-primary-foreground shadow-xl md:-left-12">
              <p className="font-display text-4xl italic">1962</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] opacity-80">
                Année d'ouverture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ L'expérience ------------------------------ */

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-sea-deep py-28 sm:py-36">
      {/* Ghost heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-0 w-full select-none overflow-hidden whitespace-nowrap text-center font-display text-[10rem] italic leading-none text-white/[0.03]"
      >
        Baignade — Dégustation — Contemplation
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
          L'expérience
        </p>
        <h2 className="mt-5 font-display text-4xl italic text-white sm:text-5xl">
          Se baigner. Déjeuner. Prendre son temps.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/65">
          Peu de restaurants permettent d'entrer dans la mer entre deux plats. Ici, quelques
          marches de pierre séparent la terrasse de l'eau claire.
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Baignade",
              text: "Un accès direct aux eaux cristallines pour une immersion totale avant le repas.",
            },
            {
              num: "02",
              title: "Dégustation",
              text: "Le poisson du jour, sélectionné à l'aube sur les quais du port de Kélibia.",
            },
            {
              num: "03",
              title: "Contemplation",
              text: "Le spectacle permanent du large, du lever du soleil aux reflets lunaires.",
            },
          ].map((step, i) => (
            <div key={step.num} className={i === 1 ? "md:translate-y-10" : ""}>
              <p className="font-display text-6xl italic text-gold/70">{step.num}</p>
              <div className="mx-auto mt-4 h-px w-10 bg-gold/40" />
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/60">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- La carte -------------------------------- */

function MenuList({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-16 grid gap-x-20 gap-y-16 md:grid-cols-2">
      {sections.map((sec, i) => (
        <div key={sec.title} className={i % 2 === 1 ? "md:translate-y-8" : ""}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-3xl italic text-foreground">{sec.title}</h3>
            <span className="h-px flex-1 bg-sea/25" />
          </div>
          <ul className="mt-7 space-y-5">
            {sec.items.map((item) => (
              <li key={item.name} className="group">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg leading-snug text-foreground transition-colors group-hover:text-sea">
                    {item.name}
                  </span>
                  <span className="shrink-0 text-sm font-light tabular-nums text-muted-foreground">
                    {item.price}
                  </span>
                </div>
                <div className="mt-2 h-px w-full bg-border transition-colors group-hover:bg-sea/30" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Carte() {
  const [tab, setTab] = useState<"plats" | "boissons">("plats");

  return (
    <section id="carte" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sea">La carte</p>
          <h2 className="mt-5 font-display text-5xl text-foreground sm:text-6xl">
            Notre <span className="italic text-sea">carte</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            Prix en millimes tunisiens. La carte évolue avec la pêche et les saisons.
          </p>

          <div className="mt-10 flex justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em]">
            {(
              [
                ["plats", "Les plats"],
                ["boissons", "Les boissons"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`pb-2 transition-all ${
                  tab === key
                    ? "border-b-2 border-sea text-sea"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <MenuList sections={tab === "plats" ? foodSections : drinkSections} />

        <div className="relative mt-20 border border-border bg-sand/40 p-8 text-center sm:p-10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-sea">
            Bon à savoir
          </div>
          <p className="text-sm font-light leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Les p'tits dans l'eau — NB :</span> toute
            commande d'entrées, de boissons ou de desserts doit être accompagnée d'une commande
            d'un plat de résistance. Merci pour votre compréhension.
          </p>
          <p className="mt-4 text-sm font-light italic leading-relaxed text-muted-foreground">
            Veuillez accepter nos excuses si le plat de votre choix n'est pas disponible. Une
            allergie ? Informez-vous auprès du personnel.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Les vins ------------------------------- */

function Vins() {
  return (
    <section id="vins" className="relative overflow-hidden bg-sand/50 py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-0 select-none font-display text-[16rem] italic leading-none text-sea/[0.05]"
      >
        Cave
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sea">La cave</p>
          <h2 className="mt-5 font-display text-5xl text-foreground sm:text-6xl">
            Vins <span className="italic text-sea">&amp; champagnes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            Une sélection de crus tunisiens du Cap Bon et de grandes maisons internationales.
          </p>
        </div>
        <MenuList sections={wineSections} />
      </div>
    </section>
  );
}

/* ----------------------------------- Avis ---------------------------------- */

function Avis() {
  const featured = reviews[0];
  const rest = reviews.slice(1);

  return (
    <section id="avis" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Featured editorial quote */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sea">
            Ils sont venus
          </p>
          <div className="mt-8 flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-sea" />
            ))}
          </div>
          <blockquote className="mt-8 font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
            «&nbsp;{featured.quote}&nbsp;»
          </blockquote>
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            — {featured.author} · {featured.detail}
          </p>
        </div>

        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {rest.map((r, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between bg-background p-7 transition-colors hover:bg-sand/40"
            >
              <blockquote className="text-sm font-light leading-relaxed text-muted-foreground">
                «&nbsp;{r.quote}&nbsp;»
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-base italic text-foreground">{r.author}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sea underline-offset-4 hover:underline"
          >
            Lire les 1 187 avis sur Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Nous trouver ----------------------------- */

function Visite() {
  return (
    <section id="visite" className="bg-sand/50 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-sea">
              Nous trouver
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
              Sur la route côtière
              <br />
              <span className="italic text-sea">de Kélibia</span>
            </h2>
            <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              El Mansourah se trouve sur la côte de Kélibia, dans la presqu'île du Cap Bon, au
              nord-est de la Tunisie. Cherchez la terrasse au-dessus de l'eau — on entend la mer
              avant de voir l'enseigne.
            </p>

            <dl className="mt-12 space-y-7">
              {[
                {
                  k: "Adresse",
                  v: "Route de la corniche, Mansourah, Kélibia, Cap Bon, Tunisie",
                },
                { k: "Téléphone", v: "(+216) 72 29 51 69", href: "tel:+21672295169" },
                {
                  k: "E-mail",
                  v: "restaurantelmansourah@gmail.com",
                  href: "mailto:restaurantelmansourah@gmail.com",
                },
                {
                  k: "Réseaux",
                  v: "Facebook : Restaurant El Mansourah Kelibia — Instagram : @restaurant_el_mansourah",
                },
                { k: "Cuisine", v: "Poissons, fruits de mer et spécialités méditerranéennes" },
              ].map((row) => (
                <div key={row.k} className="flex gap-6">
                  <dt className="w-24 shrink-0 pt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sea">
                    {row.k}
                  </dt>
                  <dd className="text-sm font-light leading-relaxed text-foreground">
                    {row.href ? (
                      <a href={row.href} className="hover:text-sea">
                        {row.v}
                      </a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-primary px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-clay"
              >
                Itinéraire Google Maps
              </a>
              <a
                href="tel:+21672295169"
                className="border border-foreground/20 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-sea hover:text-sea"
              >
                Appeler
              </a>
            </div>
          </div>

          {/* Map panel */}
          <div className="relative md:-translate-y-6">
            <div className="absolute -right-4 -top-4 h-full w-full border border-sea/30" />
            <div className="relative h-full min-h-[420px] overflow-hidden border border-border bg-card">
              <iframe
                title="Carte — Restaurant El Mansourah, Kélibia"
                src="https://www.google.com/maps?q=Restaurant+El+Mansourah+K%C3%A9libia+Tunisie&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sea-deep py-20 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[12rem] italic leading-none text-white/[0.04]"
      >
        El Mansourah
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl italic">El Mansourah</p>
            <p className="mt-2 text-[11px] font-light uppercase tracking-[0.3em] text-white/50">
              Kélibia · Cap Bon · Depuis 1962
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[11px] font-light uppercase tracking-[0.15em] text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Restaurant El Mansourah — Tous droits réservés</p>
          <a href="tel:+21672295169" className="hover:text-gold">
            (+216) 72 29 51 69
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ----------------------------------- */

function Index() {
  return (
    <main className="bg-background font-body text-foreground">
      <Nav />
      <Hero />
      <Maison />
      <Experience />
      <Carte />
      <Vins />
      <Avis />
      <Visite />
      <Footer />
    </main>
  );
}
