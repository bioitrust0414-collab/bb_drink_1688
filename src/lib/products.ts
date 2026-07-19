import z1 from "@/assets/z-plus-01.png";
import z2 from "@/assets/z-plus-02.png";
import z3 from "@/assets/z-plus-03.png";
import calcium from "@/assets/mal-growth-calcium.png";
import hangover from "@/assets/hangover-relief.jpg";
import night from "@/assets/night-enzyme.png";
import dhaBox from "@/assets/dha-box.png.asset.json";
import q10Box from "@/assets/q10-box.jpg.asset.json";
import prebioticBox from "@/assets/prebiotic-box.jpg.asset.json";
import calciumV4 from "@/assets/mal-calcium-v4.png";
import nightV4 from "@/assets/mal-night-v4.png";
import vitalityV4 from "@/assets/mal-vitality-v4.png";
import cranberryV1 from "@/assets/mal-cranberry-v1.png";

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
    image: dhaBox.url,
    detailImages: [z1],
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
    image: q10Box.url,
    detailImages: [z2],
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
    image: prebioticBox.url,
    detailImages: [z3],
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
    image: calciumV4,
    detailImages: [calciumV4, calcium],
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
    image: vitalityV4,
    detailImages: [vitalityV4, hangover],
    name: "好家庭 活力代謝複方膠囊",
    subtitle: "應酬與繁忙生活的極致營養對策",
    tagline: "全方位體質調理．優質能量補給",
    price: 1180,
    accent: "clay",
    highlights: [
      "全方位體質調理，穩定營養後盾",
      "天然酵母維生素 B 群，提振精神展現戰力",
      "專利黑胡椒萃取，提升營養吸收率",
      "薑黃、芝麻素、米糠萃取，植萃抗氧化防護",
    ],
    suitableFor: [
      "繁忙的商務應酬人士，需要維持最佳體態與社交靈活度",
      "長期熬夜、工作高壓，需調整生理機能的職場工作者",
      "重視日常養生、關注肝臟保健的自我保健者",
    ],
    specs: [
      { k: "內容物", v: "薑黃、芝麻素、米糠萃取、天然酵母維生素 B 群、專利黑胡椒萃取等複方" },
      { k: "內容量", v: "60 粒膠囊／盒" },
      { k: "食用方式", v: "建議每日於應酬前或日常保養時適量食用，以開水吞食" },
      { k: "保存期限", v: "3 年" },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免高溫及陽光直射" },
      { k: "原產地", v: "台灣" },
    ],
    description:
      "專為高壓生活與頻繁商務社交的現代人設計,透過嚴選國際專利植萃與天然發酵原料,協助調整體質、增強體力,並在關鍵時刻維持清晰思緒與生理健康。持續調理生理機能,讓您不僅應對有方,更能在事後保持活力滿分。※本產品為營養補充品,非藥品,不具醫療效能。請配合均衡飲食與良好作息,飲酒請勿過量。",
  },
  {
    id: "h3",
    code: "家3",
    slug: "night-enzyme",
    image: nightV4,
    detailImages: [nightV4, night],
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
  {
    id: "h4",
    code: "家4",
    slug: "cranberry-probiotics",
    image: cranberryV1,
    detailImages: [cranberryV1],
    name: "好家庭 蔓越莓益生菌膠囊",
    subtitle: "150 億活菌．女性私密防護配方",
    tagline: "私密保養．腸道調整．美妍維持",
    price: 1280,
    accent: "brand",
    highlights: [
      "Cran-Max® 蔓越莓濃縮粉，維持私密及泌尿道健康",
      "150 億活菌，4 株專利益生菌調整菌叢平衡",
      "日本 Oryza 櫻花乳酸菌，女性專屬菌株呵護健康",
      "法國 ellirose™ 洛神花萃取，花青素抗氧化美妍",
      "異麥芽寡糖益生元加乘，幫助好菌生長",
    ],
    suitableFor: [
      "重視私密保養需求的女性",
      "久坐上班族與外食飲食不均者",
      "熟齡女性與腸道調整需求者",
    ],
    specs: [
      { k: "內容量", v: "60 粒膠囊／盒" },
      { k: "食用方式", v: "每日 1-2 次，每次 1 顆，建議睡前或飯後食用" },
      {
        k: "主要成分",
        v: "Cran-Max® 蔓越莓濃縮粉、BIFICISTL® 綜合乳桿菌（ST10／LP01／LPC09）、BIFICISTL® 動物雙歧桿菌 BS01、日本 Oryza 櫻花乳酸菌、法國 ellirose™ 洛神花萃取、西印度櫻桃萃取物、異麥芽寡糖",
      },
      { k: "保存方式", v: "請置於陰涼乾燥處，避免高溫及陽光直射" },
      { k: "其他", v: "全素可食" },
    ],
    description:
      "結合高濃度 Cran-Max® 蔓越莓與多株專利益生菌，搭配益生元與洛神花、西印度櫻桃美妍植萃，打造女性專屬防護網，維持私密及腸道菌叢平衡，由內而外調整體質。※本產品非藥品，不能取代藥物治療。",
  },
];

export function getProductBySlug(slug: string) {
  return sideProducts.find((p) => p.slug === slug);
}
