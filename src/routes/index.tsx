import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingCart, Check, Crown, Plus, Sparkles, ArrowRight } from "lucide-react";
import { sideProducts } from "@/lib/products";
import bbBannerAsset from "@/assets/bb-banner-hero.png.asset.json";
import bbProduct from "@/assets/bb-product-box.png.asset.json";
import bbStep1 from "@/assets/bb-step1.jpg";
import bbStep2 from "@/assets/bb-step2.jpg";
import bbStep3 from "@/assets/bb-step3.jpg";
import bbCollagen from "@/assets/bb-collagen.jpg";
import bbTaurine from "@/assets/bb-taurine.jpg";
import bbBcaa from "@/assets/bb-bcaa.jpg";
import bbBcomplex from "@/assets/bb-bcomplex.jpg";
import bbPro from "@/assets/bb-scenario-pro.jpg";
import bbWellness from "@/assets/bb-scenario-wellness.jpg";
import { useCart } from "@/lib/cart";

const bbBanner = bbBannerAsset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BB神采速纖飲｜B COMPLEX & COLLAGEN｜國家健康食品認證 抗疲勞" },
      {
        name: "description",
        content:
          "bioid BB神采速纖飲，國家健康食品認證 衛部健食字第A00439號「抗疲勞功能」。膠原蛋白 × 牛磺酸 × BCAA × 維生素B群，由內而外養出神采自信。",
      },
      { property: "og:title", content: "BB神采速纖飲｜由內而外 養出神采自信" },
      {
        property: "og:description",
        content: "專業配方 × 科學營養 × 美麗加倍，每日一包補充關鍵營養。",
      },
      { property: "og:image", content: bbBanner },
      { name: "twitter:image", content: bbBanner },
    ],
    links: [{ rel: "preload", as: "image", href: bbBanner, fetchpriority: "high" } as never],
  }),
  component: IndexPage,
});

const navLinks = [
  { href: "#problem", label: "疲勞訊號" },
  { href: "#science", label: "調補運行" },
  { href: "#formula", label: "四大成分" },
  { href: "#spec", label: "商品規格" },
  { href: "#order", label: "立即訂購" },
];

const problems = [
  { t: "晨起沈重，睡飽依然無神", d: "經過一整晚休整，醒來仍與睏意糾纏，感覺精神與氣力好似無法暢通至全身，缺乏朝氣。" },
  { t: "午後斷電，注意力渙散卡關", d: "日正當中一過，能量明顯不濟。思維遲緩、忘東忘西，身體已進入透支硬撐狀態。" },
  { t: "蓄電能力下降，日常恢復遲緩", d: "以往小憩片刻即可重獲活力，如今即便假日長時間補眠，仍感覺元氣與面色未能「歸位」。" },
  { t: "面色黯淡，外在強撐內裡動搖", d: "忙碌壓力稍微增加，面部彈力流失、暗沉無光，身體與肌膚防禦力正隱隱向您發出警告。" },
];

const steps = [
  {
    tag: "第一步｜調 調和平衡",
    title: "膠原蛋白，美妍Q彈",
    desc: "舒緩日常緊繃節奏，調理因過度消耗而混亂的身體平衡，先「清解」蓄積負擔。",
    img: bbStep1,
  },
  {
    tag: "第二步｜補 深層培元",
    title: "活力牛磺酸，速效提神",
    desc: "導入精純B群與牛磺酸，如細雨般滋養體內能量發電機，由內而外「補給精力與神采」。",
    img: bbStep2,
  },
  {
    tag: "第三步｜護/暢 固本運行",
    title: "穩固長效防護",
    desc: "結合膠原蛋白修復與BCAA續航支持，建立長效美妍防護層，支持氣力於體內通暢運作。",
    img: bbStep3,
  },
];

const formulas = [
  {
    tag: "膠原蛋白 Collagen",
    title: "彈潤水嫩 守護底蘊",
    desc: "在配方中負責「築基防護」，保護因頻繁透支而脆弱的膠原網絡，撐起飽滿無瑕的自信輪廓。",
    bullets: ["鎖住基底彈力，水潤飽滿", "提升肌膚對外防禦屏障"],
    img: bbCollagen,
  },
  {
    tag: "牛磺酸 Taurine",
    title: "精力充沛 迅速回充",
    desc: "經典且高效的精神補給因子，能深入支持身體細胞的正常代謝，幫您迅速甩開沈重拖沓感。",
    bullets: ["每包 720.18 ~ 1080.27 毫克牛磺酸", "輔助能量平穩，不卡關"],
    img: bbTaurine,
  },
  {
    tag: "BCAA 支鏈胺基酸",
    title: "促進代謝 續航防線",
    desc: "充當「機體備用能源」，緩解高壓節奏下的能量掏空感，強健體魄、加速修復，提升日常行動耐力。",
    bullets: ["商務出差或高活動量之核心防護", "穩固底盤，維持形體充沛感"],
    img: bbBcaa,
  },
  {
    tag: "B 群營養",
    title: "增強體力 神采飛揚",
    desc: "體內不可或缺的流暢推進器，優化深層能量循環通道，輔助將營養物質轉換為每日所需神采動力。",
    bullets: ["B1/B2/B6/B12、菸鹼醯胺、葉酸、生物素", "輔助調節體質，保持神采不老"],
    img: bbBcomplex,
  },
];

const scenarios = [
  {
    title: "高壓工作者｜日間精力透支",
    tag: "活力與精力消耗群體",
    tagColor: "clay",
    desc: "面對繁重的商業決策與漫長會議，常在午後感覺專注力極限，甚至出現輕微虛空感、思維停滯，面色逐漸失去彈力。",
    bullets: ["每天加班、會議連環，需要即時回充", "希望甩開咖啡因依賴，溫和提振狀態"],
    img: bbPro,
  },
  {
    title: "注重美妍者｜關注美麗與代謝",
    tag: "纖體自信與防禦群體",
    tagColor: "brand",
    desc: "注重精緻與生活品質，不希望只靠強效咖啡因透支體力。傾向透過溫補、調理，在飽滿肌膚彈力的同時，維持輕盈、流暢的窈窕體態。",
    bullets: ["希望膠原蛋白彈潤水嫩，由內養顏", "在意代謝循環與輕盈體態管理"],
    img: bbWellness,
  },
];

const productSpecs = [
  { k: "品牌名稱", v: "bioid" },
  { k: "品名", v: "bioid 國家健康食品認證 BB神采速纖飲" },
  { k: "健康食品許可證字號", v: "衛部健食字第 A00439 號「抗疲勞功能」" },
  { k: "保健功效敘述", v: "經動物實驗結果，有助於延緩運動後疲勞發生" },
  { k: "保健功效成分", v: "牛磺酸 720.18 ~ 1080.27 毫克／包" },
  { k: "容量／規格", v: "10 包／盒" },
  { k: "劑型", v: "液體" },
  { k: "保存期限", v: "24 個月" },
  { k: "產地", v: "台灣" },
  { k: "貨源", v: "公司貨" },
  { k: "國內負責廠商", v: "宏曄生物科技有限公司｜02-25953515" },
  { k: "食品業者登錄字號", v: "A-127972230-00000-0" },
];

const ingredients =
  "水、砂糖、蘋果濃縮汁、綜合莓果汁、牛磺酸、果寡醣、膠原蛋白、支鏈胺基酸、白葡萄濃縮汁、維生素C、綜合維生素B群（B2、B6、菸鹼醯胺、B1、B12、本多酸鈣、葉酸、生物素）、檸檬酸、香料、咖啡因、β-環狀糊精、甜菊醣苷（甜味劑）、醋磺內酯鉀（甜味劑）。";

const planOptions = [
  { id: "single", name: "BB 神采速纖飲", variant: "1 盒（10 包）", boxes: 1, badge: null as string | null },
  { id: "trio", name: "BB 神采速纖飲", variant: "3 盒組（30 包）", boxes: 3, badge: "熱銷組合" },
  { id: "six", name: "BB 神采速纖飲", variant: "6 盒尊享（60 包）", boxes: 6, badge: "最超值" },
];

// 其他保健品（健1／健2／健3）— 資料來源：@/lib/products


// 組合包（BB + 加購）— 以 BB 主力 + 健1/健2 搭配，享組合折扣
type Bundle = {
  id: string;
  title: string;
  items: string[];
  originalPrice: number;
  bundlePrice: number;
  highlight: string;
};

const bundles: Bundle[] = [
  {
    id: "bundle-bb-j1",
    title: "BB 神采組合 ＋ DHA 魚油",
    items: ["BB 神采速纖飲 ×1 盒", "菁萃高純度 DHA 魚油 ×1 盒"],
    originalPrice: 980 + 980,
    bundlePrice: 1780,
    highlight: "省 NT$180",
  },
  {
    id: "bundle-bb-j2",
    title: "BB 神采組合 ＋ 晶亮 Q10",
    items: ["BB 神采速纖飲 ×1 盒", "晶亮納豆 Q10 ×1 盒"],
    originalPrice: 980 + 1280,
    bundlePrice: 1980,
    highlight: "省 NT$280",
  },
  {
    id: "bundle-bb-all",
    title: "BB 全方位尊享組（DHA ＋ Q10 ＋ 順暢粉）",
    items: [
      "BB 神采速纖飲 ×1 盒",
      "菁萃高純度 DHA 魚油 ×1 盒",
      "晶亮納豆 Q10 ×1 盒",
      "果寡糖順暢粉 ×1 盒",
    ],
    originalPrice: 980 + 980 + 1280 + 680,
    bundlePrice: 3280,
    highlight: "省 NT$640　最超值",
  },
];



const faqs = [
  {
    q: "Q1｜BB 神采速纖飲跟一般的提神飲品有何不同？",
    a: "一般的提神飲多依賴高劑量咖啡因強行逼出體力。本產品已取得「衛部健食字第A00439號」抗疲勞功能健康食品認證，並搭配膠原蛋白、牛磺酸、BCAA 與 B 群，由內而外溫和調補。",
  },
  {
    q: "Q2｜什麼時候飲用效果最好？",
    a: "建議每日 1 包，於早晨隨餐或午後工作前飲用；若有運動習慣者，亦可於運動前後飲用，藉由 BCAA 加速修復。",
  },
  {
    q: "Q3｜小綠人「健康食品認證」代表什麼？",
    a: "代表本產品經衛生福利部審查評估，其功效性與安全性皆通過科學論證，並通過批次重金屬／農藥檢驗，保障消費者長期食用安心。",
  },
  {
    q: "Q4｜素食者、孕期或特殊體質可以食用嗎？",
    a: "本品含有動物性膠原蛋白與少量咖啡因，純素食者及咖啡因敏感者請斟酌；孕期、哺乳期或特殊體質者，建議使用前諮詢醫師或專業醫事人員。",
  },
  {
    q: "Q5｜原價與會員價的差別？",
    a: "單盒原價 NT$1,280；加入 LINE 會員即享會員價 NT$980/盒。會員價於購物車自動套用，無需額外輸入優惠碼。",
  },
];

const REGULAR_PRICE = 1280;
const MEMBER_PRICE = 980;

function LineIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 10.3c0-4.8-4.8-8.8-10.7-8.8-6 0-10.7 4-10.7 8.8 0 4.3 3.8 7.9 9 8.6.4.1.8.3.9.7l.3 1.9c.1.4-.2.7-.5.6-2.1-.9-5-3.3-5-3.3C3 17.2 0 14 0 10.3 0 4.6 5.4 0 12 0s12 4.6 12 10.3c0 4.3-3.1 8-7.7 9.3-.4.1-.6-.2-.6-.5l.4-2.4c.1-.4.3-.7.6-.9 4.3-1.4 7.3-4.5 7.3-7.5z" />
    </svg>
  );
}

function LineButton({
  className = "",
  size = "md",
  label,
  onClick,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}) {
  const sizeMap = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-5 py-2.5 text-sm rounded-full",
    lg: "w-full py-4 text-base rounded-xl",
  } as const;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 bg-line text-white font-bold shadow-lg shadow-line/20 transition-all hover:-translate-y-0.5 hover:opacity-95 ${sizeMap[size]} ${className}`}
    >
      <LineIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </button>
  );
}

function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
      aria-label="購物車"
    >
      <ShoppingCart className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-[10px] font-extrabold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

function IndexPage() {
  return <Index />;
}


function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [memberPrice, setMemberPrice] = useState(true);
  const { add, setOpen } = useCart();

  const unitPrice = memberPrice ? MEMBER_PRICE : REGULAR_PRICE;

  const handleAdd = (planId: string, boxes: number, variant: string) => {
    add({
      id: `bb-${planId}-${memberPrice ? "m" : "r"}`,
      name: "BB 神采速纖飲",
      variant: `${variant}・${memberPrice ? "會員價" : "原價"}`,
      price: unitPrice * boxes,
      originalPrice: REGULAR_PRICE * boxes,
      image: bbProduct.url,
    });
  };

  return (
    <div className="text-foreground pb-20 md:pb-0">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-medical text-xl font-black text-white shadow-md shadow-brand/10">
              B
            </div>
            <div>
              <div className="text-lg font-black leading-tight tracking-tight text-foreground">
                bioid <span className="font-serif text-clay">LIFEFUL</span>
              </div>
              <div className="mt-0.5 inline-block rounded bg-clay-soft px-2 py-0.5 text-[11px] font-bold tracking-wider text-clay">
                BB神采速纖飲
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <CartButton />
            <LineButton size="sm" label="LINE 會員" className="hidden sm:inline-flex" />
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="mx-auto max-w-[1180px] px-4 pt-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <img
            src={bbBanner}
            alt="BB神采速纖飲 由內而外 養出神采自信"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="block w-full object-cover"
          />
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-[1180px] px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-bold text-brand">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              國家健康食品認證 衛部健食字第A00439號「抗疲勞功能」
            </div>
            <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              由內而外
              <br />
              <span className="text-gradient">養出神采自信</span>
            </h1>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              專業配方 × 科學營養 × 美麗加倍。
              <strong className="text-foreground">BB 神采速纖飲</strong>
              融合膠原蛋白、牛磺酸、BCAA 與 B 群，每日一包補充關鍵營養，協助延緩運動後疲勞發生，喚回煥然神采。
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <a
                href="#order"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3.5 text-center font-bold text-brand-foreground shadow-lg shadow-brand/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <ShoppingCart className="h-4 w-4" />
                立即購買
              </a>
              <a
                href="#science"
                className="rounded-full border border-border bg-muted px-6 py-3.5 text-center font-bold text-foreground transition-all hover:bg-secondary"
              >
                了解配方科學
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["國家小綠人健食認證", "膠原蛋白 彈潤水嫩", "B 群營養 增強體力", "支鏈胺基酸 促進代謝"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl">
              <div className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand to-clay" />
              <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-clay">
                B COMPLEX &amp; COLLAGEN
              </div>
              <div className="mb-4 flex w-full justify-center rounded-2xl border border-dashed border-brand/15 bg-brand-soft/40 p-2.5">
                <img
                  src={bbProduct.url}
                  alt="BB神采速纖飲 包裝盒"
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-auto max-h-[500px] rounded-xl border border-border object-contain shadow-lg"
                />
              </div>
              <div className="grid w-full grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-secondary/60 p-3 text-center">
                  <span className="block text-xl font-extrabold text-brand">10 包</span>
                  <span className="text-[11px] font-medium text-muted-foreground">每盒裝量</span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/60 p-3 text-center">
                  <span className="block text-xl font-extrabold text-brand">A00439</span>
                  <span className="text-[11px] font-medium text-muted-foreground">健食字號</span>
                </div>
                <div className="col-span-2 rounded-xl border border-clay/20 bg-clay-soft/40 p-3 text-center">
                  <span className="block text-[11px] font-bold tracking-wider text-clay">
                    會員價 限時優惠
                  </span>
                  <div className="mt-1 flex items-baseline justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">NT${REGULAR_PRICE}</span>
                    <span className="text-2xl font-black text-clay">NT${MEMBER_PRICE}</span>
                    <span className="text-xs text-muted-foreground">／盒</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section id="problem" className="border-y border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              您以為只是累，身體卻在發出「氣力耗損、失衡」的訊號
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              當本固不厚、元氣無法及時回充，身體便會透過以下徵兆向您提出警告。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {problems.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-clay/30 bg-clay-soft text-xs font-black text-clay">
                    !
                  </span>
                  {p.t}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science / Steps */}
      <section id="science" className="py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              健康認證，科學驗證：「調補護暢」循序漸進
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              結合草本調和的整體觀與現代生物學細胞能量論點，為身體與美妍打造全方位的保護罩。
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {steps.map((s, i) => (
              <div key={s.title} className="contents">
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <span className="mb-3 inline-block rounded border border-clay/20 bg-clay-soft px-2.5 py-0.5 text-[11px] font-black tracking-wider text-clay">
                      {s.tag}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-brand/10 bg-brand-soft/30">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={800}
                      height={512}
                      loading="lazy"
                      className="block aspect-[16/10] w-full object-cover"
                    />
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="my-2 flex rotate-90 items-center justify-center text-2xl font-black text-brand lg:my-0 lg:rotate-0 lg:text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formula */}
      <section id="formula" className="border-t border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              BB 神采速纖飲 四大核心活性因子
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              將機能美妍精粹與細胞動力理論融為一爐，提供精神充沛與形體自信的雙重滋養。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formulas.map((f) => (
              <article
                key={f.tag}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <span className="mb-3 inline-block rounded border border-brand/15 bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">
                    {f.tag}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                  <ul className="mb-4 list-disc space-y-1.5 pl-4 text-xs text-foreground/80">
                    {f.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto overflow-hidden rounded-xl border border-brand/10 bg-brand-soft/30">
                  <img
                    src={f.img}
                    alt={f.tag}
                    width={704}
                    height={512}
                    loading="lazy"
                    className="block aspect-[4/3] w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios — 適合怎樣的你/妳 */}
      <section className="py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              適合怎樣的你／妳
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              如果你也有以下狀態，BB 神采速纖飲就是為你而生的日常營養夥伴。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                  <div className="flex flex-col justify-between sm:col-span-8">
                    <div>
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                        <span
                          className={`rounded border px-2 py-0.5 text-[10px] font-bold ${
                            s.tagColor === "clay"
                              ? "border-clay/30 bg-clay-soft text-clay"
                              : "border-brand/20 bg-brand-soft text-brand"
                          }`}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                    <ul className="space-y-1 text-xs text-foreground/80">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 font-semibold">
                          <Check className="h-3.5 w-3.5 text-brand" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center sm:col-span-4">
                    <div className="overflow-hidden rounded-xl border border-brand/10 bg-brand-soft/30">
                      <img
                        src={s.img}
                        alt={s.title}
                        width={800}
                        height={800}
                        loading="lazy"
                        className="block aspect-square w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="border-t border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-soft px-3 py-1 text-xs font-extrabold text-clay">
                <Crown className="h-3.5 w-3.5" /> 立即訂購
              </div>
              <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">
                選擇你的 BB 神采組合
              </h2>
              <p className="text-sm text-muted-foreground">
                原價 NT${REGULAR_PRICE}/盒，加入 LINE 會員立即享會員價
                <b className="text-clay"> NT${MEMBER_PRICE}/盒</b>。
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setMemberPrice(false)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${!memberPrice ? "bg-foreground text-background" : "text-muted-foreground"}`}
              >
                原價
              </button>
              <button
                onClick={() => setMemberPrice(true)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${memberPrice ? "bg-clay text-white" : "text-muted-foreground"}`}
              >
                會員價 ★
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {planOptions.map((p) => {
              const total = unitPrice * p.boxes;
              const orig = REGULAR_PRICE * p.boxes;
              const featured = p.id === "trio";
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                    featured ? "border-clay/40 ring-2 ring-clay/20" : "border-border"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-clay px-3 py-1 text-[11px] font-extrabold tracking-wider text-white shadow-md">
                      {p.badge}
                    </span>
                  )}
                  <div className="mb-4 flex justify-center rounded-2xl border border-dashed border-brand/15 bg-brand-soft/30 p-3">
                    <img
                      src={bbProduct.url}
                      alt={p.variant}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                  <div className="mb-1 text-xs font-bold tracking-wider text-brand">
                    {p.name}
                  </div>
                  <div className="mb-4 text-lg font-extrabold text-foreground">{p.variant}</div>

                  <div className="mb-4 rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-baseline gap-2">
                      {memberPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          NT${orig.toLocaleString()}
                        </span>
                      )}
                      <span className={`text-3xl font-black ${memberPrice ? "text-clay" : "text-foreground"}`}>
                        NT${total.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      平均每盒 NT${unitPrice.toLocaleString()}　/　共 {p.boxes * 10} 包
                    </div>
                  </div>

                  <ul className="mb-5 space-y-1.5 text-xs text-foreground/80">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand" />
                      國家健康食品認證 A00439
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand" />
                      牛磺酸 720.18~1080.27 mg/包
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand" />
                      免運費（單筆訂單滿 NT$1,200）
                    </li>
                  </ul>

                  <button
                    onClick={() => handleAdd(p.id, p.boxes, p.variant)}
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                      featured
                        ? "bg-gradient-to-r from-clay to-clay/80 text-white shadow-lg shadow-clay/20"
                        : "bg-gradient-to-r from-brand to-brand-dark text-brand-foreground"
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    加入購物車
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
            {[
              { t: "貨到付款", d: "支援 7-11、全家門市取貨付款" },
              { t: "多元支付", d: "Apple Pay、LINE Pay、信用卡" },
              { t: "宅配到府", d: "新竹物流常溫配送，全台到府" },
            ].map((it) => (
              <div key={it.t} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 text-brand" />
                <div>
                  <div className="text-sm font-bold text-foreground">{it.t}</div>
                  <div className="text-[11px] text-muted-foreground">{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 常一起購買 — BB 商品頁加購區 */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-6 flex items-center gap-3">
            <Plus className="h-5 w-5 text-clay" />
            <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
              常一起購買・加購更划算
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sideProducts.map((s) => (
              <div
                key={`addon-${s.id}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 transition-all hover:bg-secondary/70"
              >
                <Link to="/product/$slug" params={{ slug: s.slug }} className="shrink-0">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-20 w-20 rounded-xl border border-border object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to="/product/$slug"
                    params={{ slug: s.slug }}
                    className="line-clamp-2 text-sm font-bold text-foreground hover:text-brand"
                  >
                    {s.name}
                  </Link>
                  <div className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">
                    {s.tagline}
                  </div>
                  <div className="mt-1.5 text-base font-extrabold text-clay">
                    NT${s.price.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() =>
                    add({
                      id: `side-${s.id}`,
                      name: s.name,
                      variant: s.subtitle,
                      price: s.price,
                      image: s.image,
                    })
                  }
                  className="shrink-0 rounded-full border border-brand/30 bg-brand-soft px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                >
                  ＋ 加購
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* 精選組合包 */}
      <section id="bundles" className="border-t border-border bg-gradient-to-b from-brand-soft/30 to-background py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-10 max-w-3xl">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-card px-3 py-1 text-xs font-extrabold text-brand">
              <Sparkles className="h-3.5 w-3.5" /> 主力 ＋ 加購　組合行銷
            </div>
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              精選組合包・一次補齊日常營養
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              以 BB 神采速纖飲為主力，搭配其他保健品，覆蓋日間活力、深層修護與長效防護。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {bundles.map((b) => {
              const featured = b.id === "bundle-bb-all";
              // 找出組合包中包含的 side product 圖片
              const bundleSideImgs = sideProducts.filter((sp) =>
                b.items.some((it) => it.includes(sp.name.slice(0, 4)) || it.includes(sp.code))
              );
              return (
                <div
                  key={b.id}
                  className={`relative flex flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                    featured ? "border-clay/40 ring-2 ring-clay/20" : "border-border"
                  }`}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-clay px-3 py-1 text-[11px] font-extrabold tracking-wider text-white shadow-md">
                    {b.highlight}
                  </span>

                  {/* 視覺：BB 主力 ＋ 加購品實際圖片 */}
                  <div className="mb-4 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-dashed border-brand/15 bg-brand-soft/30 p-4">
                    <img
                      src={bbProduct.url}
                      alt="BB 神采速纖飲"
                      className="h-24 w-auto object-contain"
                    />
                    {bundleSideImgs.map((sp) => (
                      <img
                        key={sp.id}
                        src={sp.image}
                        alt={sp.name}
                        className="h-20 w-20 rounded-xl border border-border object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>


                  <div className="mb-1 text-xs font-bold tracking-wider text-brand">組合包</div>
                  <h3 className="mb-3 text-base font-extrabold text-foreground">{b.title}</h3>

                  <ul className="mb-4 space-y-1 text-xs text-foreground/80">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-5 rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        NT${b.originalPrice.toLocaleString()}
                      </span>
                      <span className={`text-2xl font-black ${featured ? "text-clay" : "text-foreground"}`}>
                        NT${b.bundlePrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      add({
                        id: b.id,
                        name: b.title,
                        variant: `組合包・${b.items.length} 項`,
                        price: b.bundlePrice,
                        originalPrice: b.originalPrice,
                        image: bbProduct.url,
                      })
                    }
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                      featured
                        ? "bg-gradient-to-r from-clay to-clay/80 text-white shadow-lg shadow-clay/20"
                        : "bg-gradient-to-r from-brand to-brand-dark text-brand-foreground"
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    一鍵加入組合
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 其他保健品 — 獨立購買區 */}
      <section id="other" className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              其他保健品
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              點擊商品卡進入詳細介紹頁，了解成分、規格與適用族群。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideProducts.map((s) => (
              <div
                key={`solo-${s.id}`}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <Link
                  to="/product/$slug"
                  params={{ slug: s.slug }}
                  className="group mb-5 block overflow-hidden rounded-2xl border border-border bg-white"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <Link
                  to="/product/$slug"
                  params={{ slug: s.slug }}
                  className="mb-1 text-xs font-bold tracking-wider text-brand"
                >
                  {s.code}｜{s.subtitle}
                </Link>
                <Link
                  to="/product/$slug"
                  params={{ slug: s.slug }}
                  className="mb-2 text-base font-extrabold text-foreground hover:text-brand"
                >
                  {s.name}
                </Link>
                <div className="mb-4 text-xs text-muted-foreground line-clamp-2">
                  {s.tagline}
                </div>
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-clay">
                    NT${s.price.toLocaleString()}
                  </span>
                  <Link
                    to="/product/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                  >
                    產品說明 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <button
                  onClick={() =>
                    add({
                      id: `side-${s.id}`,
                      name: s.name,
                      variant: s.subtitle,
                      price: s.price,
                      image: s.image,
                    })
                  }
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark py-3 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-4 w-4" />
                  加入購物車
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Product Spec */}
      <section id="spec" className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">商品規格</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              依《健康食品管理法》與食品安全衛生相關法規揭露之完整資訊。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {productSpecs.map((s, idx) => (
                    <tr
                      key={s.k}
                      className={idx % 2 === 0 ? "bg-secondary/40" : "bg-card"}
                    >
                      <th className="w-1/3 px-4 py-3 text-left align-top text-xs font-bold text-muted-foreground">
                        {s.k}
                      </th>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">{s.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                <h3 className="mb-2 text-sm font-extrabold text-foreground">成分</h3>
                <p className="text-xs leading-relaxed text-foreground/80">{ingredients}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <h3 className="mb-1 text-sm font-extrabold text-foreground">食用方法</h3>
                  <p className="text-xs text-muted-foreground">每日 1 包，搖勻後直接飲用。</p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <h3 className="mb-1 text-sm font-extrabold text-foreground">保存方式</h3>
                  <p className="text-xs text-muted-foreground">
                    置於室溫（25℃）乾燥陰涼處，避免高溫潮濕或陽光直射。
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-clay/30 bg-clay-soft/50 p-5 text-xs leading-relaxed text-clay">
                <b>注意事項：</b>本產品非藥品，供保健用，罹病者仍需就醫。
                <br />
                <b>警語：</b>本品含有少量咖啡因，對咖啡因敏感者請斟酌使用。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">常見問題 FAQ</h2>
          </div>
          <div className="space-y-2 rounded-3xl border border-border bg-card p-6">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-border/60 pb-4 last:border-none">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left"
                    aria-expanded={open}
                  >
                    <h3 className="text-base font-bold text-foreground sm:text-lg">{f.q}</h3>
                    <span className="text-xl font-bold text-brand">{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <p className="mt-2 pr-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-medical text-base font-extrabold text-white">
                  B
                </div>
                <div>
                  <div className="text-base font-extrabold leading-none tracking-tight text-foreground">
                    bioid LIFEFUL
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    B Complex &amp; Collagen
                  </div>
                </div>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
                bioid 致力於提供結合醫學科技與本草調和的日常活力管理方案，伴你由內而外養出神采自信。
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground">聯絡我們</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>客服電話 / 02-25953515</li>
                <li>客服時間 / 週一 ~ 週五 09:00 ~ 18:00</li>
                <li>地址 / 臺北市大同區哈密街 23 巷 1-10 號 1 樓</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground">服務資訊</h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>退換貨政策</li>
                <li>運送說明</li>
                <li>隱私權政策</li>
                <li>反詐騙聲明</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center text-[11px] text-muted-foreground">
            宏曄生物科技有限公司 ｜ © {new Date().getFullYear()} bioid
          </div>
        </div>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-2 border-t border-border bg-background/95 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
        <div className="flex flex-col pl-1">
          <span className="text-[10px] font-bold tracking-wider text-clay">會員價 NT${MEMBER_PRICE}</span>
          <span className="text-xs font-black text-foreground">BB 神采速纖飲</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            aria-label="購物車"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleAdd("single", 1, "1 盒（10 包）")}
            className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 py-2.5 text-xs font-bold text-brand-foreground"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
