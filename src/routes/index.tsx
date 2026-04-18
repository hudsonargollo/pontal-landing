import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import heroImg from "@/assets/hero-sign.jpg";
import sunsetRed from "@/assets/sunset-red.jpg";
import parasolSandbar from "@/assets/parasol-sandbar.jpg";
import parasolLowTide from "@/assets/parasol-low-tide.jpg";
import casuarina from "@/assets/casuarina-tables.jpg";
import patrons from "@/assets/patrons-lounge.jpg";
import dish from "@/assets/dish-fish.jpg";
import cocktail from "@/assets/cocktail-branded.jpg";
import { Users, Dog, Sunset, Waves } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pontal Carapitangui — Praia Bar em Barra Grande, Bahia" },
      {
        name: "description",
        content:
          "Pé na areia, gastronomia fresca e pôr do sol no encontro do Rio Carapitangui com o mar.",
      },
      { property: "og:title", content: "Pontal Carapitangui" },
      {
        property: "og:description",
        content:
          "Beach bar, restaurante e pousada em Barra Grande, Bahia. Onde o rio encontra o mar.",
      },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Placa de madeira do Pontal Carapitangui Praia Bar entre coqueiros"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-background/95" />
        </div>
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-background/85"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-background sm:text-6xl lg:text-7xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-background/85 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:bg-primary/90"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-background/40 bg-background/10 px-6 py-3 text-sm font-medium text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            {t.sections.experienceTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.sections.experienceLead}</p>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, ...t.features.family },
            { icon: Dog, ...t.features.pet },
            { icon: Sunset, ...t.features.sunset },
            { icon: Waves, ...t.features.sports },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-accent/40"
            >
              <f.icon className="h-6 w-6 text-[var(--bronze)]" aria-hidden />
              <h3 className="mt-4 font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gastronomy split */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--bronze)]">
              {t.sections.gastronomyTitle}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              {t.sections.gastronomyLead}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <img
                src={dish}
                alt="Prato grelhado de peixe servido em chapa de ferro"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <img
                src={cocktail}
                alt="Drink azul autoral em taça com logo do Pontal Carapitangui"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <Link
              to="/menu"
              className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
            >
              {t.sections.viewMenu}
            </Link>
          </motion.div>
          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <img
              src={patrons}
              alt="Clientes relaxando sob guarda-sóis Pontal à beira-mar"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Tide / sandbar */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.img
            {...fadeUp}
            src={parasolLowTide}
            alt="Banco de areia exposto durante a maré baixa em frente ao Pontal"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl">
              {t.sections.tideTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.sections.tideBody}</p>
          </motion.div>
        </div>
      </section>

      {/* Sunset banner */}
      <section className="relative isolate overflow-hidden">
        <img
          src={sunsetRed}
          alt="Pôr do sol vermelho sobre a foz do Rio Carapitangui"
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-foreground/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <p className="font-display text-3xl text-background sm:text-5xl">
            {t.features.sunset.title}
          </p>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              {t.sections.galleryTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">{t.sections.gallerySubtitle}</p>
          </div>
          <Link
            to="/gallery"
            className="hidden shrink-0 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent sm:inline-flex"
          >
            {t.sections.viewGallery}
          </Link>
        </motion.div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[parasolSandbar, casuarina, patrons, sunsetRed].map((src, i) => (
            <motion.img
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              src={src}
              alt=""
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            to="/gallery"
            className="inline-flex rounded-full border border-border px-4 py-2 text-sm"
          >
            {t.sections.viewGallery}
          </Link>
        </div>
      </section>
    </>
  );
}
