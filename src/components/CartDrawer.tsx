import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, count, clear } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    setCheckedOut(true);
    clear();
    setTimeout(() => {
      setCheckedOut(false);
      setOpen(false);
    }, 2200);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-base">
            <ShoppingBag className="h-4 w-4 text-brand" />
            購物車 ({count})
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 flex-1 overflow-y-auto px-6 py-4">
          {checkedOut ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-2xl text-brand">
                ✓
              </div>
              <p className="text-base font-bold text-foreground">訂單已送出</p>
              <p className="mt-1 text-xs text-muted-foreground">
                感謝您的訂購，我們將盡快透過 LINE 與您聯繫。
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingBag className="mb-3 h-10 w-10 opacity-40" />
              <p className="text-sm">購物車目前是空的</p>
              <p className="mt-1 text-xs">快將 BB 神采速纖飲加入購物車吧！</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="flex gap-3 rounded-xl border border-border bg-card p-3 shadow-sm"
                >
                  {it.image && (
                    <img
                      src={it.image}
                      alt={it.name}
                      className="h-20 w-20 shrink-0 rounded-lg border border-border object-contain"
                    />
                  )}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold leading-tight text-foreground">{it.name}</p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">{it.variant}</p>
                      </div>
                      <button
                        onClick={() => remove(it.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label="移除"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground"
                          aria-label="減少"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold tabular-nums">
                          {it.qty}
                        </span>
                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground"
                          aria-label="增加"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        {it.originalPrice && it.originalPrice > it.price && (
                          <span className="mr-1 text-[10px] text-muted-foreground line-through">
                            NT${(it.originalPrice * it.qty).toLocaleString()}
                          </span>
                        )}
                        <span className="text-sm font-extrabold text-clay">
                          NT${(it.price * it.qty).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!checkedOut && items.length > 0 && (
          <SheetFooter className="border-t border-border pt-4">
            <div className="w-full space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">小計</span>
                <span className="text-2xl font-black text-foreground">
                  NT${total.toLocaleString()}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="h-12 w-full rounded-full bg-gradient-to-r from-brand to-brand-dark text-base font-bold text-brand-foreground hover:opacity-95"
              >
                前往結帳
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                ＊ 結帳功能為示範用途，實際金流請於 LINE 客服確認。
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
