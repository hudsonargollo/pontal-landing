import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { X } from "lucide-react";
import sunsetRed from "@/assets/sunset-red.jpg";
import parasolSandbar from "@/assets/parasol-sandbar.jpg";
import parasolLowTide from "@/assets/parasol-low-tide.jpg";
import casuarina from "@/assets/casuarina-tables.jpg";
import patrons from "@/assets/patrons-lounge.jpg";
import dish from "@/assets/dish-fish.jpg";
import cocktail from "@/assets/cocktail-branded.jpg";
import sign from "@/assets/hero-sign.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeria — Pontal Carapitangui" },
      {
        name: "description",
        content: "Fotos reais do Pontal Carapitangui em Barra Grande, Bahia.",
      },
      { property: "og:title", content: "Galeria — Pontal Carapitangui" },
      {
        property: "og:description",
        content: "Imagens do nosso pedaço de paraíso.",
      },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: sign, alt: "Placa Pontal Carapitangui Praia Bar" },
  { src: sunsetRed, alt: "Pôr do sol vermelho sobre o rio" },
  { src: parasolSandbar, alt: "Guarda-sol Pontal e banco de areia" },
  { src: parasolLowTide, alt: "Cadeiras na areia em maré baixa" },
  { src: casuarina, alt: "Mesas sob casuarinas" },
  { src: patrons, alt: "Clientes na praia" },
  { src: dish, alt: "Prato de peixe grelhado" },
  { src: cocktail, alt: "Coquetel azul Pontal" },
];

function GalleryPage() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <h1 className="font-display text-4xl sm:text-5xl">{t.gallery.title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.gallery.lead}</p>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
            whileHover={{ y: -2 }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={img.alt}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-background"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
