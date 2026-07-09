import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShoppingCart, Sparkles, ArrowRight, Search, Menu, X, Star } from "lucide-react";
import { sideProducts, type SideProduct } from "@/lib/products";
import bbBanner from "@/assets/bb-banner-hero.png";
import bbImage from "@/assets/bb-product-box.png";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bioid × 好家庭｜日常活力保健嚴選商店" },
      {
        name: "description",
        content:
          "bioid BB神采速纖飲、DHA魚油、晶亮納豆Q10、果寡糖順暢粉；好家庭成長鈣、活力代謝、夜酵素複方——一站式選購，日常活力全家守護。",
      },
      { property: "og:title", content: "bioid × 好家庭｜日常活力保健嚴選商店" },
      {
        property: "og:description",
        content: "多品牌保健嚴選，主打 BB 神采速纖飲，一站式滿足全家日常健康需求。",
      },
      { property: "og:image", content: bbBanner },
      { name: "twitter:image", content: bbBanner },
    ],
    links: [{ rel: "preload", as: "image", href: bbBanner, fetchpriority: "high" } as never],
  }),
  component: ShopHome,
});

type Brand = "all" | "bioid" | "hjt";

type BbCard = {
  id: "bb";
  brand: "bioid";
  code: "主打";
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: null;
  href: string;
  tagline: string;
};

const bbCard: BbCard = {
  id: "bb",
  brand: "bioid",
  code: "主打",
  name: "BB 神采速纖飲",
  subtitle: "膠原 × 牛磺酸 × BCAA × B群",
  price: 1980,
  originalPrice: 2380,
  image: bbImage,
  slug: null,
  href: "/bb",
  tagline: "國家健康食品認證．抗疲勞功能",
};

const brandOf = (p: SideProduct): "bioid" | "hjt" =>
  p.code.startsWith("健") ? "bioid" : "hjt";

const categories: { key: Brand; label: string; sub: string }[] = [
  { key: "all", label: "全部商品", sub: "All" },
  { key: "bioid", label: "bioid 健系列", sub: "Medical Science" },
  { key: "hjt", label: "好家庭 家系列", sub: "Family Care" },
];

function ShopHome() {
  const [brand, setBrand] = useState<Brand>("all");
  const [q, setQ] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const { add, count, setOpen } = useCart();

  const list = useMemo(() => {
    const filtered = sideProducts.filter((p) => {
      const bOk = brand === "all" || brandOf(p) === brand;
      const qOk =
        !q.trim() ||
        p.name.includes(q) ||
        p.subtitle.includes(q) ||
        p.tagline.includes(q);
      return bOk && qOk;
    });
    return filtered;
  }, [brand, q]);

  const showBb = brand !== "hjt" && (!q.trim() || bbCard.name.includes(q));

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-brand-dark via-brand to-clay py-2 text-center text-xs font-medium text-brand-foreground">
        全館滿 NT$2,000 免運．LINE 客服 @bioid 專人服務
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-black text-brand-foreground">
              b·
            </span>
            <div className="leading-tight">
              <p className="text-sm font-black tracking-tight text-foreground">bioid × 好家庭</p>
              <p className="text-[10px] text-muted-foreground">Daily Vitality Store</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
            <button onClick={() => setBrand("all")} className="transition-colors hover:text-foreground">
              全部
            </button>
            <button onClick={() => setBrand("bioid")} className="transition-colors hover:text-foreground">
              bioid 健系列
            </button>
            <button onClick={() => setBrand("hjt")} className="transition-colors hover:text-foreground">
              好家庭 家系列
            </button>
            <Link to="/bb" className="transition-colors hover:text-foreground">
              BB 神采速纖飲
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
              aria-label="購物車"
            >
              <ShoppingCart className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setNavOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
              aria-label="選單"
            >
              {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm font-semibold">
              {["all", "bioid", "hjt"].map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    setBrand(k as Brand);
                    setNavOpen(false);
                  }}
                  className="py-2 text-left text-foreground"
                >
                  {categories.find((c) => c.key === k)?.label}
                </button>
              ))}
              <Link to="/bb" onClick={() => setNavOpen(false)} className="py-2 text-foreground">
                BB 神采速纖飲主打頁
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero: BB drink featured */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-soft via-background to-clay/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold text-brand">
              <Sparkles className="h-3 w-3" />
              本月主打．國家健康食品認證
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">
              BB 神采速纖飲
              <br />
              <span className="bg-gradient-to-r from-brand to-clay bg-clip-text text-transparent">
                由內而外，養出神采自信
              </span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              膠原蛋白 × 牛磺酸 × BCAA × 維生素B群，衛部健食字第 A00439 號抗疲勞認證，
              每日一包補足關鍵活力因子。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/bb"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:scale-[1.02]"
              >
                看完整介紹 <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => {
                  add({
                    id: bbCard.id,
                    name: bbCard.name,
                    variant: bbCard.subtitle,
                    price: bbCard.price,
                    originalPrice: bbCard.originalPrice,
                    image: bbCard.image,
                  });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
              >
                <ShoppingCart className="h-4 w-4" />
                快速加入購物車
              </button>
            </div>
            <div className="mt-5 flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-0.5 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-clay text-clay" />
                ))}
              </span>
              <span>4.9／5．超過 3,000+ 位會員好評回購</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/20 to-clay/10 blur-2xl" />
            <img
              src={bbBanner}
              alt="BB 神采速纖飲"
              className="relative mx-auto w-full max-w-md rounded-3xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Brand tabs + search */}
      <section id="shop" className="mx-auto max-w-6xl px-4 pt-10">
        <div className="flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand">
              Shop All Products
            </p>
            <h2 className="mt-1 text-2xl font-black text-foreground md:text-3xl">
              嚴選商品．多品牌一站購足
            </h2>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜尋商品名稱、功效"
              className="h-11 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm outline-none transition-colors focus:border-brand"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setBrand(c.key)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                brand === c.key
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
              <span className="ml-1.5 text-[10px] opacity-70">{c.sub}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showBb && <BbFeatureCard onAdd={() => add({
            id: bbCard.id,
            name: bbCard.name,
            variant: bbCard.subtitle,
            price: bbCard.price,
            originalPrice: bbCard.originalPrice,
            image: bbCard.image,
          })} />}
          {list.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onAdd={() =>
                add({
                  id: p.id,
                  name: p.name,
                  variant: p.subtitle,
                  price: p.price,
                  originalPrice: p.originalPrice,
                  image: p.image,
                })
              }
            />
          ))}
        </div>
        {list.length === 0 && !showBb && (
          <p className="py-16 text-center text-sm text-muted-foreground">
            找不到符合條件的商品，試試其他關鍵字。
          </p>
        )}
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-center text-xs text-muted-foreground sm:grid-cols-4">
          {[
            ["國家認證", "健康食品字號"],
            ["台灣製造", "GMP 品質把關"],
            ["滿額免運", "NT$2,000 以上"],
            ["LINE 客服", "@bioid 專人回覆"],
          ].map(([t, s]) => (
            <div key={t}>
              <p className="text-sm font-bold text-foreground">{t}</p>
              <p className="mt-1">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10 text-background">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs opacity-80">
          © {new Date().getFullYear()} bioid × 好家庭．保健嚴選．本網站商品皆屬食品，不具醫療效能。
        </div>
      </footer>
    </div>
  );
}

function BbFeatureCard({ onAdd }: { onAdd: () => void }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-brand bg-gradient-to-br from-brand-soft to-background shadow-lg shadow-brand/10 sm:col-span-2 lg:col-span-2">
      <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-2.5 py-1 text-[10px] font-black text-brand-foreground">
        ★ 本月主打
      </span>
      <div className="grid gap-4 p-5 md:grid-cols-[1fr_1.2fr] md:items-center md:p-6">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
          <img
            src={bbCard.image}
            alt={bbCard.name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">bioid</p>
          <h3 className="mt-1 text-xl font-black leading-tight text-foreground">{bbCard.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{bbCard.subtitle}</p>
          <p className="mt-2 text-[11px] text-clay">{bbCard.tagline}</p>
          <div className="mt-3 flex items-baseline gap-2">
            {bbCard.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                NT${bbCard.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-black text-clay">
              NT${bbCard.price.toLocaleString()}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/bb"
              className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background hover:opacity-90"
            >
              查看主打頁 <ArrowRight className="h-3 w-3" />
            </Link>
            <button
              onClick={onAdd}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 py-2 text-xs font-bold text-brand-foreground hover:opacity-95"
            >
              <ShoppingCart className="h-3 w-3" /> 加入購物車
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductCard({ p, onAdd }: { p: SideProduct; onAdd: () => void }) {
  const brand = brandOf(p);
  const brandLabel = brand === "bioid" ? "bioid" : "好家庭";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <span className="absolute left-3 top-3 z-10 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-bold text-foreground backdrop-blur">
        {brandLabel}．{p.code}
      </span>
      <Link
        to="/product/$slug"
        params={{ slug: p.slug }}
        className="relative block aspect-square overflow-hidden bg-white"
      >
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{p.subtitle}</p>
        <h3 className="mt-1 line-clamp-2 text-sm font-black leading-snug text-foreground">
          {p.name}
        </h3>
        <p className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">{p.tagline}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          {p.originalPrice && (
            <span className="text-[11px] text-muted-foreground line-through">
              NT${p.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-lg font-black text-clay">NT${p.price.toLocaleString()}</span>
        </div>
        <div className="mt-3 flex gap-2">
          <Link
            to="/product/$slug"
            params={{ slug: p.slug }}
            className="flex-1 rounded-full border border-border py-2 text-center text-[11px] font-bold text-foreground transition-colors hover:bg-accent"
          >
            商品詳情
          </Link>
          <button
            onClick={onAdd}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-brand-foreground shadow-sm shadow-brand/20 hover:opacity-95"
            aria-label="加入購物車"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
