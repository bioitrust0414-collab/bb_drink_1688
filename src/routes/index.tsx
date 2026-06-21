import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bbBanner from "@/assets/bb-banner.jpg";
import bbProduct from "@/assets/bb-product.jpg";
import bbStep1 from "@/assets/bb-step1.jpg";
import bbStep2 from "@/assets/bb-step2.jpg";
import bbStep3 from "@/assets/bb-step3.jpg";
import bbCollagen from "@/assets/bb-collagen.jpg";
import bbTaurine from "@/assets/bb-taurine.jpg";
import bbBcaa from "@/assets/bb-bcaa.jpg";
import bbBcomplex from "@/assets/bb-bcomplex.jpg";
import bbPro from "@/assets/bb-scenario-pro.jpg";
import bbWellness from "@/assets/bb-scenario-wellness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bioid full your life BB神采速纖飲｜結合現代生物科技與本草調和的日常活力管理" },
      {
        name: "description",
        content:
          "以醫學科技與本草調和為核心打造的 BB 神采速纖飲，聚焦疲勞管理、日常狀態調護與關鍵健康元素，國家健康食品認證 A00439。",
      },
      { property: "og:title", content: "BB神采速纖飲｜煥發神采活力，重塑纖體自信" },
      {
        property: "og:description",
        content: "融合四大關鍵活力美妍因子，從底層啟動能量修復與代謝機制。",
      },
      { property: "og:image", content: bbBanner },
      { name: "twitter:image", content: bbBanner },
    ],
    links: [{ rel: "preload", as: "image", href: bbBanner, fetchpriority: "high" } as never],
  }),
  component: Index,
});

const navLinks = [
  { href: "#problem", label: "疲勞訊號" },
  { href: "#science", label: "調補運行" },
  { href: "#formula", label: "四大活性成分" },
  { href: "#offer", label: "客製諮詢" },
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
    title: "舒緩緊繃與透支",
    desc: "舒緩日常緊繃節奏，調理因過度消耗而混亂的身體平衡，先「清解」蓄積負擔。",
    img: bbStep1,
  },
  {
    tag: "第二步｜補 深層培元",
    title: "充盈身體底蘊",
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
    tag: "膠原蛋白 (Collagen)",
    title: "彈力飽滿，守護底蘊",
    desc: "在配方中負責「築基防護」，保護因頻繁透支而脆弱的膠原網絡，撐起飽滿無瑕的自信輪廓。",
    bullets: ["鎖住基底彈力，水潤飽滿", "提升肌膚對外防禦屏障"],
    img: bbCollagen,
  },
  {
    tag: "牛磺酸 (Taurine)",
    title: "精力充沛，迅速回充",
    desc: "經典且高效的精神補給因子，能深入支持身體細胞的正常代謝，幫您迅速甩開沈重拖沓感。",
    bullets: ["提供高強度日間專注與元氣", "輔助能量平穩，不卡關"],
    img: bbTaurine,
  },
  {
    tag: "BCAA 支鏈胺基酸",
    title: "修復關鍵，續航防線",
    desc: "充當「機體備用能源」，緩解高壓節奏下的能量掏空感，強健體魄、加速修復，提升日常行動耐力。",
    bullets: ["商務出差或高活動量之核心防護", "穩固底盤，維持形體充沛感"],
    img: bbBcaa,
  },
  {
    tag: "精純複合 B 群",
    title: "能量轉換，神采飛揚",
    desc: "體內不可或缺的流暢推進器，優化深層能量循環通道，輔助將營運物質轉換為每日所需神采動力。",
    bullets: ["改善體力運作效率，狀態不卡關", "輔助調節體質，保持神采不老"],
    img: bbBcomplex,
  },
];

const trust = [
  { n: "01", t: "痛點深度共情", d: "精準點出「累卻無處安頓、面色失去飽滿、恢復慢」等體感，用生動的「身體電力失衡」比喻，瞬間獲得受眾認同。" },
  { n: "02", t: "「調補護暢」合理說服", d: "將科學數據與大眾耳熟能詳的調護養生相印證，解構四大精準因子，搭配「國家級小綠人健康食品標章」建立無敵信任。" },
  { n: "03", t: "安全合規，消除抗拒", d: "主動下修醫療誇大詞彙，著重於日常調理、活力與健康自主管理，降低退單與法規風險，奠定長效品牌的誠信基石。" },
];

const scenarios = [
  {
    title: "高壓工作者｜日間精力透支",
    tag: "活力與精力消耗群體",
    tagColor: "clay",
    desc: "面對繁重的商業決策與漫長會議，常在午後感覺專注力極限，甚至出現輕微虛空感、思維停滯，面色逐漸失去彈力。急需精力充沛與基底修復。",
    bullets: ["極易引發高壓商務、上班族人士的共鳴", "可作為廣告落地頁的高頻點擊素材切角"],
    img: bbPro,
  },
  {
    title: "注重調理者｜關注美妍與代謝",
    tag: "纖體自信與防禦群體",
    tagColor: "brand",
    desc: "注重精緻與生活品質，不希望只靠強效咖啡因透支體力。傾向透過溫補、調理，在飽滿肌膚彈力的同時，維持輕盈、流暢的窈窕體態。",
    bullets: ["完美對接「膠原蛋白、纖體、神采」的高價值詞彙", "傳達品牌安心感，適合忠誠度極高的客戶經營"],
    img: bbWellness,
  },
];

const faqs = [
  {
    q: "Q1｜BB 神采速纖飲跟一般的提神飲品有何不同？",
    a: "一般的提神飲多依賴高劑量咖啡因強行逼出體力。本方案以調、補為基礎，透過國家級「健康食品認證」安全性背書，搭配膠原蛋白、牛磺酸、BCAA與B群，是由內而外、溫和穩健的「深層培元」，兼顧形體神采。",
  },
  {
    q: "Q2｜什麼時候飲用效果最好？",
    a: "建議在早晨隨餐或午後工作前飲用一包，能有效應對高強度工作挑戰；若有運動習慣者，亦可於運動前後飲用，藉由 BCAA 加速修復關鍵。",
  },
  {
    q: "Q3｜小綠人「健康食品認證」代表什麼？",
    a: "代表本產品經衛生福利部審查評估，其功效性與生物安全性皆通過嚴謹的科學論證，且全批次重金屬／農藥零殘留，保障消費者長期食用的安心感。",
  },
  {
    q: "Q4｜素食者、經期中或特殊體質可以食用嗎？",
    a: "本方案所採成分皆為溫和的生物活性因子。唯因含有高純度動物性膠原蛋白（修復飽滿關鍵），純素食者請斟酌；懷孕、特殊體質生理波動較大，建議使用前諮詢您的醫師或專業醫事人員。",
  },
];

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
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  label: string;
}) {
  const sizeMap = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-5 py-2.5 text-sm rounded-full",
    lg: "w-full py-4 text-base rounded-xl",
  } as const;
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-1.5 bg-line text-white font-bold shadow-lg shadow-line/20 transition-all hover:-translate-y-0.5 hover:opacity-95 ${sizeMap[size]} ${className}`}
    >
      <LineIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </button>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="text-foreground pb-20 md:pb-0">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-medical text-xl font-black text-white shadow-md shadow-brand/10">
              B
            </div>
            <div>
              <div className="text-lg font-black leading-tight tracking-tight text-foreground">
                bioid full your life
              </div>
              <div className="mt-0.5 inline-block rounded bg-clay-soft px-2 py-0.5 text-[11px] font-bold tracking-wider text-clay">
                BB神采速纖飲
              </div>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            ))}
          </div>
          <LineButton size="sm" label="LINE 綁定會員" />
        </div>
      </nav>

      {/* Banner */}
      <div className="mx-auto max-w-[1180px] px-4 pt-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <img
            src={bbBanner}
            alt="BB神采速纖飲 Banner"
            width={1600}
            height={640}
            fetchPriority="high"
            className="block aspect-[5/2] w-full object-cover"
          />
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-[1180px] px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-bold text-brand">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              國家健康食品認證 (衛部健食字第A00439號)
            </div>
            <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              告別透支的今日
              <br />
              <span className="text-gradient">煥發神采活力，重塑纖體自信</span>
            </h1>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              當忙碌作息與高壓節奏掏空了身體的蓄電量，疲勞不只是感覺，更是生理平衡失調的警報。
              <strong className="text-foreground">BB 神采速纖飲</strong>
              融合四大關鍵活力美妍因子，從底層啟動能量修復與代謝機制，幫助您重現彈力飽滿，擁有勻稱、神采奕奕的輕盈體態。
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <a
                href="#offer"
                className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3.5 text-center font-bold text-brand-foreground shadow-lg shadow-brand/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                立即綁定 LINE 領取方案
              </a>
              <a
                href="#science"
                className="rounded-full border border-border bg-muted px-6 py-3.5 text-center font-bold text-foreground transition-all hover:bg-secondary"
              >
                瞭解「調補護暢」機制
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["國家小綠人健食認證", "機能美妍：膠原蛋白 + 牛磺酸", "動力續航：B群 + 活性BCAA"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl">
              <div className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand to-clay" />
              <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-clay">
                Product Showcase
              </div>
              <div className="mb-4 flex w-full justify-center rounded-2xl border border-dashed border-brand/15 bg-brand-soft/40 p-2.5">
                <img
                  src={bbProduct}
                  alt="BB神采速纖飲 明星展示"
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-auto max-h-[500px] rounded-xl border border-border object-contain shadow-lg"
                />
              </div>
              <p className="mb-4 text-center text-xs leading-relaxed text-muted-foreground">
                認明小綠人認證，高科技醫學配方，由內而外養出神采自信。我們倡導「深層培元與內外和諧」，透過精準營養與機能成分導入，助您神采飛揚、活力回充。
              </p>
              <div className="grid w-full grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-secondary/60 p-3 text-center">
                  <span className="block text-xl font-extrabold text-brand">4 大</span>
                  <span className="text-[11px] font-medium text-muted-foreground">活性黃金配方</span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/60 p-3 text-center">
                  <span className="block text-xl font-extrabold text-brand">10 包/盒</span>
                  <span className="text-[11px] font-medium text-muted-foreground">精巧高機能包裝</span>
                </div>
                <div className="col-span-2 rounded-xl border border-border bg-secondary/60 p-3 text-center">
                  <span className="block text-sm font-extrabold text-foreground">調補護暢 · 運行邏輯</span>
                  <span className="text-[11px] font-medium text-muted-foreground">順應氣力運行的中式調和思維</span>
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
              現代科技本草作用：「調補護暢」循序漸進
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
          <div className="mt-4 rounded-xl border border-clay/20 bg-clay-soft/50 p-4 text-xs leading-relaxed text-clay">
            ※本頁所述之「調、補、護、暢」機制與「保護罩、防護層」為生物能量與日常保健比喻，旨在輔助消費者理解生理機能調節，非醫療宣稱。
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

      {/* Trust framework */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              此架構如何賦予網站高效的「信任與轉換」
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              跳脫純品牌文案的空洞，本結構符合現代健康品消費心智：從「共情」到「循證」，進而促成「行動」。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trust.map((t) => (
              <div key={t.n} className="rounded-2xl border border-border bg-secondary/50 p-6 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span className="text-lg font-extrabold text-brand">{t.n}</span>
                  {t.t}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">典型調理情境</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              本配方設計契合兩大現代都市亞健康群體的體質所需，提供溫和而高效的狀態支持。
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
                          <span className="text-brand">✓</span> {b}
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

      {/* Offer */}
      <section id="offer" className="border-t border-border bg-secondary/50 py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8 lg:col-span-7">
              <div className="mb-6">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-line/30 bg-line/10 px-3 py-1 text-xs font-bold text-line">
                  <span className="h-2 w-2 animate-ping rounded-full bg-line" />
                  LINE 官方認證會員系統已串聯
                </div>
                <h2 className="mb-2 text-2xl font-black text-foreground">尋回身體失去的平穩與自信</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  現在不需手動填寫繁瑣個資！點擊下方綠色按鈕加入 bioid 官方 LINE 好友，即可
                  <b className="text-foreground">一鍵完成 VIP 會員綁定</b>
                  。除了可免費獲得由醫學專家設計的「客製化體質評估」，再享首購專屬獨家優惠！
                </p>
              </div>

              <div className="mb-6 rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-5">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="text-brand">✦</span> 綁定好友專屬 3 大 VIP 權益：
                </h4>
                <ul className="space-y-2.5 pl-1 text-xs text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-line">✓</span>
                    <span>
                      <b>智慧體質追蹤</b>：隨時線上檢測「調、補、護、暢」生理電力狀態。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-line">✓</span>
                    <span>
                      <b>一鍵安全溯源</b>：綁定會員，隨時查詢小綠人認證批次檢驗報告。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-line">✓</span>
                    <span>
                      <b>1對1 專業諮詢</b>：營養師與專業客服即時聊天在線答疑。
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <LineButton size="lg" label="綁定 LINE 領取客製調理方案" />
                <p className="text-center text-[11px] text-muted-foreground">
                  我們重視隱私，未經授權絕不向第三方透露您的個人與 LINE 資訊。
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-brand/15 bg-gradient-to-b from-brand-soft/60 to-clay-soft/30 p-6 shadow-md sm:p-8 lg:col-span-5">
              <div className="flex flex-grow flex-col justify-start">
                <div className="mb-4 inline-flex self-start rounded-full border border-clay/30 bg-clay-soft px-3 py-1 text-xs font-extrabold text-clay">
                  專屬調理方案
                </div>
                <h3 className="mb-4 text-xl font-extrabold text-foreground">未來可模組化升級：</h3>
                <div className="mb-4 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-brand/20 bg-card p-4 shadow-sm">
                  <img
                    src={bbProduct}
                    alt="BB神采速纖飲 實物包裝盒"
                    width={800}
                    height={1024}
                    loading="lazy"
                    className="mb-2 max-h-[220px] w-auto rounded-lg object-contain shadow-md"
                  />
                  <div className="text-xs font-bold text-foreground">【BB神采速纖飲 實物包裝盒展示】</div>
                </div>
                <ul className="space-y-2.5 text-xs text-foreground">
                  {[
                    "自適應體質測量、諮詢推薦邏輯",
                    "國家認證健康食品安全溯源追蹤",
                    "檢驗報告輪播與真實使用者滿意回饋",
                    "一鍵直達 LINE 諮詢的浮動按鈕",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 font-semibold">
                      <span className="font-extrabold text-brand">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-dashed border-border pt-4">
                <div className="text-xs leading-relaxed text-muted-foreground">
                  定位：<b className="text-foreground">兼具溫潤底蘊與醫學循證的精準銷售頁</b>
                  <br />
                  適合首波上線測試市場接受度、受眾對漢洋折衷配方的敏感度。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 text-2xl font-extrabold text-foreground sm:text-3xl">常見問題 FAQ</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              為客戶解答決策前的猶豫，建立誠信、踏實的第一印象。
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-border p-6">
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
          <div className="mt-6 rounded-xl border border-clay/20 bg-clay-soft/50 p-4 text-xs leading-relaxed text-clay">
            <b>法規遵循告知：</b>
            本網頁已為您下修「清除毒素、修復端粒、逆轉生命時鐘、延長壽命」等高風險醫療性語彙。現有敘事將「科學因子」與「本草調養、固本」合理銜接，既保留了極強的轉換力，亦大幅規避了法規開罰與消保糾紛的風險。
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/60 py-12">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-medical text-base font-extrabold text-white">
                  B
                </div>
                <div>
                  <div className="text-base font-extrabold leading-none tracking-tight text-foreground">
                    bioid full your life
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Sales Landing Page Prototype
                  </div>
                </div>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
                本頁面為融合醫學分子科技與傳統本草調和哲學的銷售網站原型。您可在此視覺基礎上，依品牌定位延伸為正式形象官網或直客導購落地頁。
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-foreground sm:text-base">接下來，您可以這樣做：</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  "配置 LINE、Messenger 或 WhatsApp 直連對話按鈕",
                  "整合中醫體質測量問卷與配方推薦系統",
                  "加入經第三方審查的合格成分檢驗與多重重金屬零殘留檢驗標籤",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 font-medium">
                    ✓ {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-border bg-background/95 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
        <div className="flex flex-col pl-1">
          <span className="text-[10px] font-bold tracking-wider text-clay">bioid VIP 會員募集</span>
          <span className="text-xs font-black text-foreground">一鍵綁定領首購優惠</span>
        </div>
        <LineButton size="sm" label="LINE 快速綁定" className="rounded-xl" />
      </div>
    </div>
  );
}
