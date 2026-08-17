import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-seaside.jpg";
import spaghettiImg from "@/assets/dish-spaghetti.jpg";
import fishImg from "@/assets/dish-fish.jpg";
import seaAccessImg from "@/assets/sea-access.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Mansourah Restaurant — Seaside Dining in Kelibia, Tunisia",
      },
      {
        name: "description",
        content:
          "Mansourah Restaurant sits on the rocks above the Mediterranean in Kelibia. Fresh seafood, sea views toward Pantelleria, and direct access to the water — dine, swim, and stay all day.",
      },
      { property: "og:title", content: "Mansourah Restaurant — Seaside Dining in Kelibia" },
      {
        property: "og:description",
        content:
          "Fresh seafood and sea views on the rocks of Kelibia. Dine, swim, and stay all day at Mansourah Restaurant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "The Setting", href: "#setting" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const reviews = [
  {
    quote:
      "What a gorgeous place, restaurant right on the water. Lovely food, good wine & great atmosphere. I could have sat there all day.",
    author: "MelB Travel",
    detail: "Local Guide · 596 reviews",
  },
  {
    quote:
      "Amazing view, delicious food and friendly staff — one of my favourite spots in Tunisia.",
    author: "Rihane Jaziri",
    detail: "Local Guide · 98 reviews",
  },
  {
    quote:
      "Best restaurant we went to in Tunisia. Great setting right on the water. Waiters gave a lot of attention. Beautiful seafood.",
    author: "Erin Jeavons-Fellows",
    detail: "Local Guide · 24 reviews",
  },
  {
    quote:
      "The best service we have ever had! The food was absolutely delicious, and the place itself is stunning.",
    author: "Pasjonatka",
    detail: "Local Guide · 26 reviews",
  },
  {
    quote:
      "Super delicious seafood, 5 stars service, kind and friendly staff, and the view is outstanding.",
    author: "Sami Cherbaji",
    detail: "Local Guide · 38 reviews",
  },
  {
    quote:
      "The restaurant is built on the rocks and offers beautiful views of the coast. You can swim, then eat, then swim again.",
    author: "Amal",
    detail: "Local Guide · 488 reviews",
  },
];

const menuItems = [
  {
    name: "Seafood Spaghetti",
    desc: "Fresh clams, prawns and mussels tossed with al dente spaghetti, cherry tomatoes and a whisper of garlic.",
    img: spaghettiImg,
    tag: "Signature",
  },
  {
    name: "Grilled Catch of the Day",
    desc: "Whole wild fish, grilled over open flame, finished with olive oil, lemon and garden herbs. Selected each morning from the port.",
    img: fishImg,
    tag: "Fresh Daily",
  },
  {
    name: "Swim & Dine",
    desc: "Descend the stone steps into the turquoise sea, then return to your table for a long Mediterranean lunch.",
    img: seaAccessImg,
    tag: "The Experience",
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
          ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_var(--color-border)]"
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
          Mansourah
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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
          href="#visit"
          className={`hidden rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all md:inline-block ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-sea-deep"
              : "border border-white/40 text-white hover:bg-white hover:text-sea-deep"
          }`}
        >
          Reserve
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
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
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
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
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Mansourah Restaurant terrace overlooking the Mediterranean at golden hour"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-deep/40 via-sea-deep/20 to-sea-deep/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="animate-fade-up text-xs font-medium uppercase tracking-[0.4em] text-gold"
          style={{ animationDelay: "0.2s" }}
        >
          Kelibia · Tunisia
        </p>
        <h1
          className="animate-fade-up mt-6 font-display text-5xl font-light leading-tight text-white sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.35s" }}
        >
          Mansourah
        </h1>
        <p
          className="animate-fade-up mt-4 font-display text-xl font-light italic text-white/85 sm:text-2xl"
          style={{ animationDelay: "0.5s" }}
        >
          Where the table meets the sea
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#setting"
            className="rounded-full bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-sea-deep transition-colors hover:bg-gold hover:text-sea-deep"
          >
            Discover the Setting
          </a>
          <a
            href="#menu"
            className="rounded-full border border-white/50 px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
          >
            View the Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="text-white/70">
          <path d="M10 4v22M4 20l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-light text-foreground sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function Setting() {
  return (
    <section id="setting" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">The Setting</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Built on the rocks,
              <br />
              suspended over the sea
            </h2>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                Perched on the coastline of Kelibia, Mansourah Restaurant is carved into the rocks
                where the land falls away into the Mediterranean. On a clear day you can see the
                island of Pantelleria on the horizon — Italy, glittering across the water.
              </p>
              <p>
                The terrace opens onto the open sea. The sound of waves against stone is the only
                soundtrack. This is a place to arrive early, settle in, and let the hours drift by
                with the tide.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-display text-4xl font-light text-sea">2.8°</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Avg — we know
                </p>
              </div>
              <div className="border-l border-border pl-12">
                <p className="font-display text-4xl font-light text-sea">1,187</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Guest reviews
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={seaAccessImg}
              alt="Stone steps leading from the terrace into the turquoise Mediterranean"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-gold px-6 py-5 sm:block">
              <p className="font-display text-2xl font-medium text-sea-deep">Est. Kelibia</p>
              <p className="text-xs uppercase tracking-[0.15em] text-sea-deep/70">Cap Bon Coast</p>
            </div>
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
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">The Experience</p>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl">
            Swim. Dine. Linger.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-white/70">
            Few restaurants in the world let you slip into the sea between courses. At Mansourah,
            stone steps lead from the terrace straight into clear turquoise water.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Arrive by the sea",
              text: "Park above the cliffs and descend to a terrace suspended over the water. The view arrives before the menu.",
            },
            {
              num: "02",
              title: "Take a dip",
              text: "Swim in the calm, isolated cove beneath the restaurant — uncrowded even in high season, then return to your table.",
            },
            {
              num: "03",
              title: "Stay all day",
              text: "Order fresh seafood, a glass of wine served at the right temperature, and let the afternoon stretch into a golden sunset.",
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

function Menu() {
  return (
    <section id="menu" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="From the Sea"
          title="A menu written by the tide"
          subtitle="Every plate begins at the port. The catch changes with the season — what lands in the morning is on the table by noon."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-sm bg-card shadow-[0_8px_40px_-20px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-sea-deep backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-medium text-foreground">{item.name}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-light italic text-muted-foreground">
          A full à la carte menu is available at the restaurant — fresh oysters, bottarga, calamari,
          pasta, grilled fish and seasonal fruit plates.
        </p>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Guest Voices"
          title="What visitors say"
          subtitle="A selection from over a thousand reviews — the setting and the seafood are what guests remember most."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between border border-border bg-card p-8 transition-colors hover:border-gold/50"
            >
              <blockquote className="font-display text-lg font-light italic leading-relaxed text-foreground">
                “{r.quote}”
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

        <div className="mt-16 text-center">
          <div className="gold-rule mx-auto max-w-xs" />
          <p className="mt-8 max-w-2xl mx-auto text-base font-light leading-relaxed text-muted-foreground">
            Mansourah holds a special place in the hearts of those who've visited — but its story
            lives only on review platforms. A home of its own would let that story shine.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pitch() {
  const benefits = [
    {
      title: "Show, don't just tell",
      text: "Your view is your greatest asset. A website lets you show it in full — the sea, the terrace, the swim — before a guest ever arrives.",
    },
    {
      title: "Own your reputation",
      text: "Right now your story lives entirely on Google and TripAdvisor. A website puts the narrative back in your hands, beside the reviews.",
    },
    {
      title: "Be found, be booked",
      text: "Travelers searching 'seafood restaurant Kelibia' or 'where to eat by the sea' should land on your page — not someone else's guide.",
    },
    {
      title: "A menu that travels",
      text: "Show the catch of the day, the swimming access, opening hours and directions. Answer the questions guests ask before they arrive.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-clay py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">A Proposal</p>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
          A place this beautiful
          <br />
          deserves a home online
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/75">
          This is a concept website, built as a pitch. It shows what Mansourah could look like with
          a digital presence worthy of its setting — elegant, simple, and focused on the sea.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="border border-white/15 bg-white/[0.05] p-8 text-left backdrop-blur-sm"
          >
            <h3 className="font-display text-xl font-medium text-white">{b.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/70">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-md px-6 text-center">
        <a
          href="#visit"
          className="inline-block rounded-full bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-clay transition-colors hover:bg-gold"
        >
          Let's talk about your website
        </a>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Visit</p>
            <h2 className="mt-4 font-display text-4xl font-light text-foreground sm:text-5xl">
              Find us on the rocks
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              Mansourah Restaurant sits on the coastal road of Kelibia, on the Cap Bon peninsula of
              northeast Tunisia. Look for the terrace above the water — you'll hear the sea before
              you see the sign.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Location
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Coastal Road, Kelibia, Cap Bon, Tunisia
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Sea
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Direct access — stone steps into the Mediterranean
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  Cuisine
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Mediterranean · Fresh seafood · Grilled fish · Pasta
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                  On the horizon
                </dt>
                <dd className="text-sm font-light text-foreground">
                  Views toward Pantelleria, Italy
                </dd>
              </div>
            </dl>

            <a
              href="https://www.google.com/maps/search/Mansourah+Restaurant+Kelibia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-sea-deep"
            >
              Open in Google Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Map of Mansourah Restaurant, Kelibia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=11.06%2C36.82%2C11.15%2C36.88&marker=36.85%2C11.105"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sea-deep py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-3xl font-light text-white">Mansourah</p>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
              Seaside Dining · Kelibia · Tunisia
            </p>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.12em]">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs font-light text-white/40">
            Concept website · A design pitch for Mansourah Restaurant. All photography is
            illustrative. Guest quotes are drawn from public Google Maps reviews.
          </p>
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
      <Setting />
      <Experience />
      <Menu />
      <Reviews />
      <Pitch />
      <Visit />
      <Footer />
    </div>
  );
}
