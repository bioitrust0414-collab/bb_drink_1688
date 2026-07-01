import z1 from "@/assets/z-plus-01.png.asset.json";
import z2 from "@/assets/z-plus-02.png.asset.json";
import z3 from "@/assets/z-plus-03.png.asset.json";

export type SideProduct = {
  id: string;
  code: string;
  slug: string;
  image: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  accent: "brand" | "clay" | "medical";
  highlights: string[];
  suitableFor: string[];
  specs: { k: string; v: string }[];
  description: string;
};

export const sideProducts: SideProduct[] = [
  {
    id: "j1",
    code: "健1",
    slug: "dha",
    image: z1.url,
    name: "菁萃高純度 DHA 魚油軟膠囊",
    subtitle: "DHA + EPA 雙效配方",
    tagline: "健康維持，不只一種選擇",
    price: 980,
    accent: "medical",
    highlights: [
      "高純度 DHA 魚油",
      "DHA + EPA 複方補給",
      "健康食品認證",
      "日常保養新選擇",
    ],
    suitableFor: [
      "想維持健康、又不想只有紅麴作為選擇的健康維護族群",
      "重視每日 Omega-3 補給者",
      "外食族與少吃深海魚族群",
    ],
    specs: [
      { k: "內容物", v: "魚油（含 DHA 及 EPA、抗氧化劑）" },
      { k: "內容量", v: "60 顆／盒" },
      { k: "食用方式", v: "每日 2 粒，餐後以開水吞食" },
      { k: "保存期限", v: "3 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處（25℃以下），避免高溫及陽光直射" },
      { k: "健康食品認證", v: "獲得健康食品認證的 DHA 魚油" },
    ],
    description:
      "選用嚴選深海小型魚萃取，通過分子蒸餾工序，兼具高純度與黃金比例 DHA + EPA，並取得健康食品認證。每日補給，輕鬆守護健康。",
  },
  {
    id: "j2",
    code: "健2",
    slug: "q10",
    image: z2.url,
    name: "晶亮納豆 Q10 軟膠囊",
    subtitle: "葉黃素 × 納豆 × Q10 複方",
    tagline: "晶亮守護 × 活力補給",
    price: 1280,
    accent: "clay",
    highlights: [
      "葉黃素配方",
      "納豆萃取物添加",
      "輔酶 Q10 添加",
      "軟膠囊好吞食",
      "30 份／60 顆．日常補充方便",
    ],
    suitableFor: [
      "忙碌上班族與 3C 科技人",
      "長時間用眼、需要日常護眼保養者",
      "希望同步補給循環活力者",
    ],
    specs: [
      { k: "內容物", v: "DHA、葉黃素、納豆萃取物、輔酶 Q10 等" },
      { k: "內容量", v: "60 顆／盒（每份 2 顆，共 30 份）" },
      { k: "食用方式", v: "每日 2 粒，餐後以開水吞食" },
      { k: "保存期限", v: "3 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處（25℃以下）" },
      { k: "健康食品認證", v: "健康食品認證" },
    ],
    description:
      "專為長時間用眼、需要日常護眼保養的忙碌上班族與 3C 科技人設計。葉黃素 × 納豆 × Q10 複方，晶亮守護搭配活力補給，長時間用眼也要好好保養。",
  },
  {
    id: "j3",
    code: "健3",
    slug: "prebiotic",
    image: z3.url,
    name: "果寡糖順暢粉（體內環保）",
    subtitle: "方便補充蔬果纖維",
    tagline: "促進腸道蠕動．排便順暢好心情",
    price: 680,
    accent: "brand",
    highlights: [
      "果寡糖成分",
      "有助於增加腸道益生菌",
      "幫助腸道蠕動",
      "有助排便順暢",
      "健康食品認證｜衛部健食字第 A00332 號",
    ],
    suitableFor: [
      "想保持腸道健康者",
      "蔬果攝取不足的外食族",
      "追求每日輕鬆補給、順暢好狀態者",
    ],
    specs: [
      { k: "內容物", v: "果寡糖、菊苣纖維等（詳見包裝營養標示）" },
      { k: "內容量", v: "4.5 公克 × 30 包／盒" },
      { k: "食用方式", v: "每日 1 包，直接食用或加入冷／溫開水攪拌飲用" },
      { k: "保存期限", v: "2 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免陽光直射" },
      { k: "健康食品認證", v: "衛部健食字第 A00332 號" },
    ],
    description:
      "經動物實驗證實有助於增加腸內益生菌。方便補充蔬果纖維，促進腸道蠕動、維持消化道機能，每日輕鬆補給、順暢好狀態。",
  },
];

export function getProductBySlug(slug: string) {
  return sideProducts.find((p) => p.slug === slug);
}
