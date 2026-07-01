import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShoppingCart, Check, ArrowLeft, ShieldCheck, Award, Users } from "lucide-react";
import { getProductBySlug, sideProducts } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: p ? `${p.name}｜bioid LIFEFULL 保健系列` : "產品說明" },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p?.name ?? "" },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:image", content: p?.image ?? "" },
        { name: "twitter:image", content: p?.image ?? "" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = (openDrawer: boolean) => {
    add(
      {
        id: `side-${product.id}`,
        name: product.name,
        variant: product.subtitle,
        price: product.price,
        image: product.image,
      },
      qty
    );
    if (openDrawer) setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> 回首頁
          </Link>
          <div className="text-xs font-bold tracking-widest text-muted-foreground">
            bioid · LIFEFULL
          </div>
        </div>
      </header>

      {/* Product hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-border bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand-soft px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-brand">
                <Award className="h-3 w-3" /> 健康食品認證
              </span>
              <span className="text-[11px] font-bold tracking-wider text-muted-foreground">
                {product.code}
              </span>
            </div>
            <h1 className="mb-2 text-3xl font-black text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mb-6 text-base font-semibold text-brand">{product.subtitle}</p>
            <p className="mb-8 text-sm leading-7 text-muted-foreground sm:text-base">
              {product.description}
            </p>

            {/* Highlights */}
            <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm font-semibold text-foreground">{h}</span>
                </li>
              ))}
            </ul>

            {/* Price + qty + CTA */}
            <div className="mt-auto rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-clay">
                  NT${product.price.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground">／盒</span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold text-muted-foreground">數量</span>
                <div className="flex items-center rounded-full border border-border bg-secondary/40">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid h-9 w-9 place-items-center text-lg font-bold text-foreground hover:text-brand"
                    aria-label="減少"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-extrabold">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="grid h-9 w-9 place-items-center text-lg font-bold text-foreground hover:text-brand"
                    aria-label="增加"
                  >
                    ＋
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleAdd(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-card py-3 text-sm font-bold text-brand transition-all hover:bg-brand-soft"
                >
                  <ShoppingCart className="h-4 w-4" />
                  加入購物車
                </button>
                <button
                  onClick={() => handleAdd(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark py-3 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5"
                >
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 適合族群 */}
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-brand" />
            <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">適合族群</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.suitableFor.map((s) => (
              <div
                key={s}
                className="rounded-2xl border border-border bg-card p-5 text-sm leading-6 text-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 商品規格 */}
      <section className="border-b border-border bg-background py-14">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-brand" />
            <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">商品規格</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((row, i) => (
                  <tr
                    key={row.k}
                    className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                  >
                    <th className="w-40 border-r border-border px-4 py-3 text-left text-xs font-bold text-muted-foreground sm:w-56 sm:text-sm">
                      {row.k}
                    </th>
                    <td className="px-4 py-3 text-foreground">{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] leading-6 text-muted-foreground">
            ※ 本產品已投保產品責任險。健康食品標示相關規定請依外包裝所示為準。
            孕婦、哺乳婦、慢性疾病患者及對成分過敏者，食用前請諮詢專業醫師建議。
          </p>
        </div>
      </section>

      {/* 其他保健品推薦 */}
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[1180px] px-4">
          <h2 className="mb-6 text-xl font-extrabold text-foreground sm:text-2xl">
            也可以看看
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sideProducts
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.id}
                  to="/product/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-20 w-20 rounded-xl border border-border object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold tracking-wider text-brand">
                      {p.code}
                    </div>
                    <div className="line-clamp-2 text-sm font-extrabold text-foreground">
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm font-black text-clay">
                      NT${p.price.toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
