import { createFileRoute } from "@tanstack/react-router";
import heroBottle from "@/assets/hero-bottle.jpg";
import productFocus from "@/assets/product-focus.jpg";
import productSleep from "@/assets/product-sleep.jpg";
import productDefense from "@/assets/product-defense.jpg";
import scienceLab from "@/assets/science-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "源素萃取 YUAN — 科學保健食品" },
      {
        name: "description",
        content: "高吸收率、透明科學實證的保健食品。源素萃取 YUAN 為繁忙生活打造的精準營養方案。",
      },
      { property: "og:title", content: "源素萃取 YUAN — 科學保健食品" },
      {
        property: "og:description",
        content: "融合現代生物科學與草本精華，為您建立穩定而長久的健康基礎。",
      },
      { property: "og:image", content: heroBottle },
      { name: "twitter:image", content: heroBottle },
    ],
    links: [{ rel: "preload", as: "image", href: heroBottle, fetchpriority: "high" } as never],
  }),
  component: Index,
});

const benefits = [
  {
    no: "01",
    title: "純淨來源保證",
    body: "嚴選全球頂級原料供應商，確保每一粒膠囊都符合國際安全標準與純度要求。",
  },
  {
    no: "02",
    title: "高生物利用度",
    body: "獨家臨床配方技術，提升營養成分在人體內的吸收率，確保效果不浪費。",
  },
  {
    no: "03",
    title: "透明科學實證",
    body: "所有配方均基於同儕評閱的科學研究，拒絕無效添加與誇大陳述。",
  },
];

const products = [
  {
    img: productFocus,
    tag: "Focus Essential",
    name: "深度專注複方膠囊",
    desc: "提升認知功能與思緒清晰度",
    price: "NT$ 1,280",
  },
  {
    img: productSleep,
    tag: "Rest & Recovery",
    name: "舒眠鎂元素精華",
    desc: "調節生理時鐘，幫助深度放鬆",
    price: "NT$ 980",
  },
  {
    img: productDefense,
    tag: "Daily Defense",
    name: "全效防護益生菌",
    desc: "打造強健屏障，優化腸道環境",
    price: "NT$ 1,550",
  },
];

const trustBadges = ["GMP Certified", "Lab Tested", "Vegan Friendly", "Non-GMO"];

function Index() {
  return (
    <div className="bg-surface text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="font-serif text-xl tracking-tight">源素萃取 YUAN</span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              產品系列
            </a>
            <a href="#science" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              科學研發
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              品牌理念
            </a>
          </div>
          <button className="h-[34px] rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-foreground/5">
            立即選購
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="px-6 pt-12 pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-6">
            <div className="col-span-12 mb-12 lg:col-span-5 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                全新產品上市
              </div>
              <h1 className="mb-8 font-serif text-4xl leading-tight font-semibold text-balance lg:text-6xl">
                從細胞開始
                <br />
                重新定義您的健康基礎
              </h1>
              <p className="mb-10 max-w-[48ch] text-muted-foreground text-pretty">
                融合現代生物科學與草本精華，我們提供高吸收率的營養補充方案，協助您在繁忙的生活中維持最佳狀態。
              </p>
              <button className="flex h-[38px] items-center gap-2 rounded-full bg-brand py-2 pr-3 pl-5 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-transform duration-200 hover:bg-brand/90">
                探索產品系列
                <span className="grid size-4 shrink-0 place-items-center">
                  <span className="block h-1.5 w-1.5 rotate-45 border-t-2 border-r-2 border-brand-foreground" />
                </span>
              </button>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img
                src={heroBottle}
                alt="源素萃取 YUAN 旗艦保健食品瓶身置於石材底座上"
                width={1280}
                height={1056}
                fetchPriority="high"
                className="aspect-[6/5] w-full rounded-3xl object-cover outline outline-black/5 -outline-offset-1"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border bg-secondary px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.no} className="flex flex-col gap-4">
                  <div className="grid size-8 place-items-center rounded-lg bg-brand-soft text-brand">
                    <span className="text-xs font-semibold">{b.no}</span>
                  </div>
                  <h3 className="text-lg font-medium">{b.title}</h3>
                  <p className="max-w-[56ch] text-sm leading-relaxed text-muted-foreground text-pretty">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="px-6 py-24">
          <div className="mx-auto mb-16 max-w-7xl">
            <h2 className="mb-4 font-serif text-3xl font-medium">精選營養方案</h2>
            <p className="text-muted-foreground">為您的日常健康需求提供精準支持</p>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="group flex flex-col">
                <div className="relative mb-6 overflow-hidden rounded-[20px] bg-card ring-1 ring-black/5">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-medium">{p.name}</h3>
                  <span className="text-sm text-muted-foreground">{p.price}</span>
                </div>
                <p className="mb-6 text-xs text-muted-foreground">{p.desc}</p>
                <button className="h-[34px] w-full rounded-full border border-border text-sm font-medium transition-colors hover:bg-foreground/5">
                  加入購物車
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Science */}
        <section id="science" className="bg-brand px-6 py-24 text-brand-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src={scienceLab}
                alt="實驗室中的營養成分萃取細節"
                width={1000}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover outline outline-white/10 -outline-offset-1"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-8 font-serif text-3xl leading-tight font-medium text-balance lg:text-5xl">
                嚴謹的科學，
                <br />
                是我們唯一的信仰。
              </h2>
              <div className="space-y-8">
                {[
                  {
                    t: "第三方實驗室測試",
                    d: "每一批次產品均送往 ISO 認證實驗室，確保重金屬與微生物含量遠低於法規標準。",
                  },
                  {
                    t: "GMP 認證生產",
                    d: "所有製程均在符合優良製造規範的環境中進行，保證成分的穩定性與活性。",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex gap-6">
                    <div className="size-5 shrink-0 text-brand-foreground/50">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">{item.t}</h4>
                      <p className="max-w-[40ch] text-sm leading-relaxed text-brand-foreground/70">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <button className="h-[38px] rounded-full border border-brand-foreground/30 px-6 text-sm font-medium transition-colors hover:bg-brand-foreground/10">
                    閱讀研究報告
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-b border-border py-12">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-6 opacity-50 grayscale md:gap-24">
            {trustBadges.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-muted" />
                <span className="text-[10px] font-medium tracking-widest uppercase">{b}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-card px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-2xl">訂閱健康資訊</h2>
              <p className="mb-8 max-w-[40ch] text-sm text-muted-foreground">
                加入我們的社群，優先獲取最新的健康研究資訊與會員專屬優惠。
              </p>
              <form className="flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="您的電子郵件"
                  className="h-[38px] flex-1 rounded-full bg-secondary px-4 text-sm ring-1 ring-border outline-none focus:ring-brand"
                />
                <button
                  type="submit"
                  className="h-[38px] rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  訂閱
                </button>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  探索
                </span>
                <a href="#products" className="text-sm text-muted-foreground hover:text-foreground">所有產品</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">禮盒方案</a>
                <a href="#science" className="text-sm text-muted-foreground hover:text-foreground">科學背景</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  支援
                </span>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">配送資訊</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">退換貨政策</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">常見問題</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-12 md:flex-row md:items-center">
            <span className="font-serif text-lg tracking-tight">源素萃取 YUAN</span>
            <span className="text-xs text-muted-foreground">© 2026 源素萃取 YUAN. 版權所有。</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
