import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { menu, pick } from "@/data/menu";
import dish from "@/assets/dish-fish.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Cardápio — Pontal Carapitangui" },
      {
        name: "description",
        content:
          "Pescados frescos, drinks autorais, cardápio infantil e clássicos baianos servidos pé na areia.",
      },
      { property: "og:title", content: "Cardápio — Pontal Carapitangui" },
      {
        property: "og:description",
        content: "Sabores da Bahia, do mar e da casa.",
      },
      { property: "og:image", content: "/og-menu.jpg" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, lang } = useLang();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--bronze)]">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{t.menu.title}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{t.menu.lead}</p>
        </div>
        <img
          src={dish}
          alt=""
          className="hidden h-32 w-32 rounded-2xl object-cover sm:block"
          loading="lazy"
        />
      </motion.header>

      <div className="mt-12 space-y-12">
        {menu.map((cat, ci) => (
          <motion.section
            key={cat.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: ci * 0.05 }}
          >
            <h2 className="font-display text-2xl text-foreground">
              {t.menu.categories[cat.key]}
            </h2>
            <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
              {cat.items.map((item) => (
                <article
                  key={pick(item.name, "pt")}
                  className="grid gap-1 p-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4"
                >
                  <div>
                    <h3 className="font-medium text-foreground">{pick(item.name, lang)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pick(item.description, lang)}
                    </p>
                  </div>
                  <p className="font-display text-lg text-[var(--bronze)]">{item.price}</p>
                </article>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground">{t.menu.note}</p>
    </div>
  );
}
