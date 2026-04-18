import type { Lang } from "@/i18n/translations";

export interface MenuItem {
  name: { pt: string; en: string };
  description: { pt: string; en: string };
  price: string;
}

export interface MenuCategory {
  key: "starters" | "mains" | "kids" | "drinks" | "beers";
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    key: "starters",
    items: [
      {
        name: { pt: "Bolinho de aipim com carne seca", en: "Cassava fritters with carne seca" },
        description: { pt: "Crocantes por fora, cremosos por dentro. Acompanha geleia de pimenta.", en: "Crispy outside, creamy inside. Served with chili jam." },
        price: "R$ 58",
      },
      {
        name: { pt: "Casquinha de siri", en: "Crab gratin shells" },
        description: { pt: "Receita tradicional baiana, gratinada com queijo.", en: "Traditional Bahian recipe, gratinated with cheese." },
        price: "R$ 62",
      },
      {
        name: { pt: "Ceviche do dia", en: "Catch of the day ceviche" },
        description: { pt: "Peixe branco, leite de tigre, manga e coentro.", en: "White fish, tiger's milk, mango and cilantro." },
        price: "R$ 78",
      },
    ],
  },
  {
    key: "mains",
    items: [
      {
        name: { pt: "Salmão grelhado na chapa", en: "Grilled salmon" },
        description: { pt: "Filé com molho de maracujá, arroz, banana-da-terra e legumes da estação.", en: "Fillet with passion fruit sauce, rice, plantain and seasonal vegetables." },
        price: "R$ 128",
      },
      {
        name: { pt: "Moqueca de peixe", en: "Fish moqueca" },
        description: { pt: "Para 2 pessoas. Acompanha arroz, pirão e farofa.", en: "Serves 2. With rice, pirão and farofa." },
        price: "R$ 198",
      },
      {
        name: { pt: "Camarão à milanesa", en: "Breaded shrimp" },
        description: { pt: "Camarões empanados, batata rústica e maionese de ervas.", en: "Breaded shrimp, rustic potatoes and herb mayo." },
        price: "R$ 142",
      },
      {
        name: { pt: "Lagosta grelhada", en: "Grilled lobster" },
        description: { pt: "Manteiga de ervas, arroz de coco e legumes assados.", en: "Herb butter, coconut rice and roasted vegetables." },
        price: "R$ 245",
      },
    ],
  },
  {
    key: "kids",
    items: [
      {
        name: { pt: "Smoothie Pontal Kids", en: "Pontal Kids Smoothie" },
        description: { pt: "Vitamina de frutas servida no copo personalizado (você leva pra casa).", en: "Fruit smoothie in our custom branded cup (you take it home)." },
        price: "R$ 32",
      },
      {
        name: { pt: "Mini hambúrguer artesanal", en: "Mini house burger" },
        description: { pt: "Pão brioche, blend bovino e batata palito.", en: "Brioche bun, beef blend and french fries." },
        price: "R$ 48",
      },
      {
        name: { pt: "Filé de frango grelhado", en: "Grilled chicken fillet" },
        description: { pt: "Com arroz, batata frita e cenoura.", en: "With rice, fries and carrots." },
        price: "R$ 42",
      },
    ],
  },
  {
    key: "drinks",
    items: [
      {
        name: { pt: "Caipirinha Pontal", en: "Pontal caipirinha" },
        description: { pt: "Cachaça artesanal, limão tahiti e açúcar mascavo.", en: "Artisanal cachaça, lime and brown sugar." },
        price: "R$ 36",
      },
      {
        name: { pt: "Carapitangui (autoral)", en: "Carapitangui (signature)" },
        description: { pt: "Gin, blue curaçao, limão siciliano e tônica artesanal.", en: "Gin, blue curaçao, lemon and craft tonic." },
        price: "R$ 48",
      },
      {
        name: { pt: "Água de coco gelada", en: "Chilled coconut water" },
        description: { pt: "Direto do coco verde.", en: "Straight from the green coconut." },
        price: "R$ 14",
      },
    ],
  },
  {
    key: "beers",
    items: [
      {
        name: { pt: "Heineken long neck", en: "Heineken long neck" },
        description: { pt: "330ml, sempre gelada.", en: "330ml, always cold." },
        price: "R$ 18",
      },
      {
        name: { pt: "Original 600ml", en: "Original 600ml" },
        description: { pt: "Para compartilhar na mesa.", en: "To share at the table." },
        price: "R$ 28",
      },
    ],
  },
];

export function pick<T extends { pt: string; en: string }>(field: T, lang: Lang) {
  return field[lang];
}
