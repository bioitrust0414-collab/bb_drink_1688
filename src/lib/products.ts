import z1 from "@/assets/z-plus-01.png";
import z2 from "@/assets/z-plus-02.png";
import z3 from "@/assets/z-plus-03.png";
import calcium from "@/assets/mal-growth-calcium.png";
import hangover from "@/assets/hangover-relief.jpg";
import night from "@/assets/night-enzyme.png";
import dhaBox from "@/assets/dha-box.png.asset.json";
import q10Box from "@/assets/q10-box.jpg.asset.json";
import prebioticBox from "@/assets/prebiotic-box.jpg.asset.json";
import calciumV3 from "@/assets/mal-calcium-v3.png.asset.json";
import nightV3 from "@/assets/mal-night-v3.png.asset.json";
import vitalityV3 from "@/assets/mal-vitality-v3.png.asset.json";

export type SideProduct = {
  id: string;
  code: string;
  slug: string;
  image: string;
  detailImages?: string[];
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
    image: z1,
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
    image: z2,
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
    image: z3,
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
  {
    id: "h1",
    code: "家1",
    slug: "growth-calcium",
    image: calcium,
    name: "好家庭 MAL 成長鈣咀嚼錠",
    subtitle: "香濃牛奶風味．每日 1 錠",
    tagline: "成長關鍵營養．每日輕鬆補給",
    price: 780,
    accent: "brand",
    highlights: [
      "補充成長關鍵鈣質，打好成長基礎",
      "維生素 D3 添加，幫助鈣質吸收",
      "強健骨骼，穩固牙齒發育",
      "香濃牛奶風味，孩子愛不釋口",
    ],
    suitableFor: [
      "成長發育中的兒童與青少年",
      "偏食、少喝奶的孩子",
      "重視骨骼與牙齒健康的全家人",
    ],
    specs: [
      { k: "品名", v: "MAL 成長鈣咀嚼錠．香濃牛奶風味" },
      { k: "內容量", v: "60 錠／盒（每錠 1.2 公克）" },
      { k: "建議用量", v: "每日 1 錠" },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免高溫及陽光直射" },
      { k: "原產地", v: "台灣" },
      { k: "投保", v: "本產品已投保產品責任險" },
    ],
    description:
      "為孩子成長黃金期打造的鈣質補給。結合鈣質與維生素 D3，幫助鈣質吸收、強健骨骼與牙齒。香濃牛奶風味咀嚼錠，好吃又好吸收，讓每日補鈣變得輕鬆。",
  },
  {
    id: "h2",
    code: "家2",
    slug: "hangover-relief",
    image: vitalityV3.url,
    detailImages: [hangover],
    name: "好家庭 解酒複方膠囊",
    subtitle: "酒前保護．酒後代謝．應酬守護",
    tagline: "全方位代謝守護配方",
    price: 1180,
    accent: "clay",
    highlights: [
      "酒前保護，做好日常防護安心應酬",
      "酒後代謝，促進新陳代謝增強體力",
      "嚴選天然植萃，溫和有感",
      "全家守護，照顧家人健康",
    ],
    suitableFor: [
      "經常應酬、聚餐飲酒的商務族",
      "希望酒後快速恢復狀態者",
      "重視日常代謝與體力補給的全家人",
    ],
    specs: [
      { k: "內容物", v: "薑黃、朝鮮薊萃取、多種天然植萃複方" },
      { k: "內容量", v: "60 粒膠囊／盒" },
      { k: "食用方式", v: "飲酒前 1 小時 2 粒，飲酒後 2 粒，以開水吞食" },
      { k: "保存期限", v: "3 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免高溫及陽光直射" },
      { k: "原產地", v: "台灣" },
    ],
    description:
      "為經常應酬、聚餐的族群設計的全方位代謝守護配方。酒前保護、酒後代謝、應酬守護三合一，天然植萃溫和有感，讓每一次舉杯都更安心。",
  },
  {
    id: "h3",
    code: "家3",
    slug: "night-enzyme",
    image: nightV3.url,
    detailImages: [night],
    name: "好家庭 夜酵素複方膠囊",
    subtitle: "睡得好．代謝好．輕鬆好",
    tagline: "夜間黃金修復期專用配方",
    price: 1380,
    accent: "medical",
    highlights: [
      "放鬆舒眠，助你安穩入夢",
      "夜間代謝，把握修復黃金期",
      "幫助消化，隔日輕盈有感",
      "抗氧化保護，健康由每一夜開始",
    ],
    suitableFor: [
      "夜間代謝、睡眠品質欠佳者",
      "外食族、常吃宵夜者",
      "追求日夜循環管理與體態維持者",
    ],
    specs: [
      { k: "內容物", v: "綜合蔬果酵素、乳酸菌、GABA、色胺酸等複方" },
      { k: "內容量", v: "60 粒膠囊／盒" },
      { k: "食用方式", v: "睡前 30 分鐘 2 粒，以開水吞食" },
      { k: "保存期限", v: "3 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免高溫及陽光直射" },
      { k: "原產地", v: "台灣" },
    ],
    description:
      "把握夜間黃金修復期，讓身體在睡眠中同步代謝與修護。結合蔬果酵素、益生菌與舒眠因子，睡得好、代謝好、隔日輕鬆好狀態，健康由每一夜開始。",
  },
];

export function getProductBySlug(slug: string) {
  return sideProducts.find((p) => p.slug === slug);
}
