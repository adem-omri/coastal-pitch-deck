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
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className={`font-display text-2xl font-medium tracking-wide transition-colors ${
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
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold ${
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
          className={`hidden rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all lg:inline-block ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-sea-deep"
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
                className="text-sm font-medium uppercase tracking-[0.12em] text-gold"
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

function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 60c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v60H0z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M0 80c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v40H0z"
        fill="currentColor"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-sea-deep"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, var(--sea) 0%, var(--sea-deep) 55%, var(--sea-deep) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 28px, rgba(255,255,255,0.6) 28px 29px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center">
        <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Kélibia · Tunisie · Depuis 1962
        </p>
        <h1
          className="animate-fade-up mt-6 font-display text-5xl font-light leading-[1.05] text-white sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          El Mansourah
        </h1>
        <div className="gold-rule animate-fade-up mx-auto mt-8 max-w-[220px]" style={{ animationDelay: "0.25s" }} />
        <p
          className="animate-fade-up mt-8 font-display text-xl font-light italic text-white/85 sm:text-2xl"
          style={{ animationDelay: "0.35s" }}
        >
          La table posée sur les rochers, face à la Méditerranée
        </p>
        <p
          className="animate-fade-up mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/65 sm:text-base"
          style={{ animationDelay: "0.45s" }}
        >
          Poissons de la criée, fruits de mer, spécialités méditerranéennes et accès direct à la
          mer — à quelques minutes du port de Kélibia.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#carte"
            className="rounded-full bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-sea-deep transition-colors hover:bg-gold"
          >
            Découvrir la carte
          </a>
          <a
            href="tel:+21672295169"
            className="rounded-full border border-white/50 px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
          >
            (+216) 72 29 51 69
          </a>
        </div>
      </div>

      <Waves className="absolute inset-x-0 bottom-0 h-20 w-full text-background" />
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-light text-foreground sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function Maison() {
  return (
    <section id="maison" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">La maison</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Sur les rochers,
              <br />
              au-dessus de la mer
            </h2>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                Ouvert en 1962, El Mansourah est une institution de la côte de Kélibia. La
                terrasse s'avance au-dessus de l'eau : de la table, on entend les vagues sur la
                roche et l'on voit la côte du Cap Bon se dessiner jusqu'à l'horizon.
              </p>
              <p>
                La cuisine suit la mer. Le poisson vient de la criée chaque matin, les crustacés
                arrivent selon la pêche, et les recettes restent simples : le grill, l'huile
                d'olive, le citron, les herbes du jardin.
              </p>
              <p>
                Un escalier de pierre descend directement dans une petite crique. On se baigne, on
                remonte, on déjeune longuement — c'est la manière Mansourah.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "1962", v: "Année d'ouverture" },
              { k: "1 187", v: "Avis Google" },
              { k: "100 %", v: "Poisson de la criée" },
              { k: "Accès", v: "Direct à la mer" },
            ].map((s) => (
              <div
                key={s.k}
                className="border border-border bg-card p-8 text-center transition-colors hover:border-gold/60"
              >
                <p className="font-display text-3xl font-light text-sea">{s.k}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-sea-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">L'expérience</p>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
            Se baigner. Déjeuner. Prendre son temps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-white/70">
            Peu de restaurants permettent d'entrer dans la mer entre deux plats. Ici, quelques
            marches de pierre séparent la terrasse de l'eau claire.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Arriver face au large",
              text: "On se gare au-dessus des rochers puis l'on descend vers une terrasse suspendue au-dessus de l'eau. La vue arrive avant la carte.",
            },
            {
              num: "02",
              title: "Se baigner",
              text: "La crique en contrebas reste calme et peu fréquentée, même en pleine saison. On nage, puis l'on revient à table.",
            },
            {
              num: "03",
              title: "Rester jusqu'au soir",
              text: "Poisson frais, vin servi à la bonne température, café à la menthe : l'après-midi glisse doucement vers le coucher du soleil.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              <p className="font-display text-5xl font-light text-gold/80">{step.num}</p>
              <h3 className="mt-4 font-display text-2xl font-medium text-white">{step.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuList({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
      {sections.map((sec) => (
        <div key={sec.title} className="break-inside-avoid">
          <h3 className="font-display text-2xl font-medium text-sea">{sec.title}</h3>
          <div className="gold-rule mt-3" />
          <ul className="mt-5 space-y-4">
            {sec.items.map((item) => (
              <li key={item.name} className="flex items-baseline gap-3">
                <span className="text-sm font-light leading-snug text-foreground">{item.name}</span>
                <span className="mt-2 h-px flex-1 border-b border-dotted border-border" />
                <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                  {item.price}
                </span>
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
    <section id="carte" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="La carte"
          title="Notre carte"
          subtitle="Prix en millimes tunisiens. La carte évolue avec la pêche et les saisons."
        />

        <div className="mt-10 flex justify-center gap-2">
          {(
            [
              ["plats", "Les plats"],
              ["boissons", "Les boissons"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                tab === key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <MenuList sections={tab === "plats" ? foodSections : drinkSections} />

        <div className="mt-16 border border-border bg-card p-8 text-center">
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

function Vins() {
  return (
    <section id="vins" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="La cave"
          title="Vins & champagnes"
          subtitle="Une sélection de crus tunisiens du Cap Bon et de grandes maisons internationales."
        />
        <MenuList sections={wineSections} />
      </div>
    </section>
  );
}

function Avis() {
  return (
    <section id="avis" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Ils sont venus"
          title="Ce que disent nos hôtes"
          subtitle="Une sélection parmi plus de mille avis publiés sur Google Maps."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between border border-border bg-card p-8 transition-colors hover:border-gold/50"
            >
              <blockquote className="font-display text-lg font-light italic leading-relaxed text-foreground">
                «&nbsp;{r.quote}&nbsp;»
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium text-sea">{r.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium uppercase tracking-[0.15em] text-sea underline-offset-4 hover:text-gold hover:underline"
          >
            Lire tous les avis sur Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function Visite() {
  return (
    <section id="visite" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Nous trouver</p>
            <h2 className="mt-4 font-display text-4xl font-light text-foreground sm:text-5xl">
              Sur la route côtière de Kélibia
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              El Mansourah se trouve sur la côte de Kélibia, dans la presqu'île du Cap Bon, au
              nord-est de la Tunisie. Cherchez la terrasse au-dessus de l'eau — on entend la mer
              avant de voir l'enseigne.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Adresse
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Route de la corniche, Mansourah, Kélibia, Cap Bon, Tunisie
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Téléphone
                </dt>
                <dd className="text-sm font-light text-foreground">
                  <a href="tel:+21672295169" className="hover:text-sea">
                    (+216) 72 29 51 69
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  E-mail
                </dt>
                <dd className="text-sm font-light text-foreground">
                  <a href="mailto:restaurantelmansourah@gmail.com" className="hover:text-sea">
                    restaurantelmansourah@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Réseaux
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Facebook : Restaurant El Mansourah Kelibia
                  <br />
                  Instagram : @restaurant_el_mansourah
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Cuisine
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Poissons, fruits de mer et spécialités méditerranéennes
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-sea-deep"
              >
                Itinéraire Google Maps
              </a>
              <a
                href="tel:+21672295169"
                className="rounded-full border border-border px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:border-gold"
              >
                Réserver par téléphone
              </a>
            </div>
          </div>

          <div className="min-h-[420px] overflow-hidden border border-border bg-muted">
            <iframe
              title="Carte — Restaurant El Mansourah, Kélibia"
              src="https://www.google.com/maps?q=Restaurant%20El%20Mansourah%20Kelibia&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-sea-deep pt-16 pb-10 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl font-light text-white">El Mansourah</p>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
              Depuis 1962 · Kélibia · Tunisie
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.12em]">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs font-light text-white/45">
          <p>
            (+216) 72 29 51 69 · restaurantelmansourah@gmail.com ·{" "}
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
              Google Maps
            </a>
          </p>
          <p>© {new Date().getFullYear()} Restaurant El Mansourah. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background">
      <Nav />
      <Hero />
      <Maison />
      <Experience />
      <Carte />
      <Vins />
      <Avis />
      <Visite />
      <Footer />
    </div>
  );
}
