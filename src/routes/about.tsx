import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import casuarina from "@/assets/casuarina-tables.jpg";
import patrons from "@/assets/patrons-lounge.jpg";
import sunset from "@/assets/sunset-red.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre & Eventos — Pontal Carapitangui" },
      {
        name: "description",
        content:
          "Nossa história em Barra Grande, estrutura completa e espaço para casamentos pé na areia e eventos corporativos.",
      },
      { property: "og:title", content: "Sobre & Eventos — Pontal Carapitangui" },
      {
        property: "og:description",
        content: "Da vila de pescadores ao destino. Espaço para celebrações.",
      },
      { property: "og:image", content: "/og-about.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl">{t.brochure.title}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t.brochure.lead}</p>
      </motion.header>

      <section className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={casuarina}
          alt="Mesas sob as casuarinas do Pontal Carapitangui"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="font-display text-3xl">{t.brochure.historyTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.brochure.historyBody}</p>
        </motion.div>
      </section>

      <section className="mt-20 rounded-3xl bg-muted/40 p-8 sm:p-12">
        <h2 className="font-display text-3xl">{t.brochure.structureTitle}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.brochure.structureItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/90">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl">{t.brochure.eventsTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.brochure.eventsBody}</p>
          <a
            href="https://wa.me/5573999999999"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {t.brochure.eventsCta}
          </a>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src={patrons}
            alt=""
            className="aspect-[3/4] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <img
            src={sunset}
            alt=""
            className="aspect-[3/4] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
