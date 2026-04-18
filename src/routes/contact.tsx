import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato & Como chegar — Pontal Carapitangui" },
      {
        name: "description",
        content:
          "Endereço, horário e WhatsApp do Pontal Carapitangui em Barra Grande, Península de Maraú, Bahia.",
      },
      { property: "og:title", content: "Contato — Pontal Carapitangui" },
      {
        property: "og:description",
        content: "Estamos esperando por você na ponta do Carapitangui.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl">{t.contact.title}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.contact.lead}</p>
      </motion.header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <InfoCard icon={MapPin} title="Endereço / Address" body={t.contact.address} />
          <InfoCard icon={Clock} title={t.contact.hours} body="Segunda a domingo / Mon–Sun" />
          <InfoCard icon={Phone} title={t.contact.phone} body="+55 (73) 99999-9999" />
          <InfoCard
            icon={MessageCircle}
            title={t.contact.reservations}
            body={t.contact.reservationsBody}
          />
          <a
            href="https://wa.me/5573999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            {t.contact.whatsapp}
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
          <iframe
            title="Mapa Barra Grande"
            src="https://www.google.com/maps?q=Barra+Grande,+Marau,+BA&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <section className="mt-16 rounded-3xl bg-muted/40 p-8 sm:p-12">
        <h2 className="font-display text-2xl">{t.contact.directionsTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.contact.directionsBody}</p>
      </section>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

function InfoCard({ icon: Icon, title, body }: InfoCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[var(--sage)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
