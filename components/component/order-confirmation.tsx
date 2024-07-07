/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RI8M84C03wa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useShallow } from "zustand/react/shallow";
import { CartProduct, useCartStore } from "@/stores/cart/cartStore";
import { calculateTotal } from "@/helpers/cartHelpers";
import { useEffect, useState } from "react";

export function OrderConfirmation() {
  const { products, clearCart } = useCartStore(
    useShallow((state) => ({
      products: state.products,
      clearCart: state.clearCart
    }))
  );

  const [productsToDisplay, setProductsToDisplay] = useState<CartProduct[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const shipping = 5;
  const total = subTotal + shipping;

  useEffect(() => {
    if(products.length > 0) {
      setProductsToDisplay(products);
      setSubTotal(calculateTotal(products));
      clearCart();
    }
  }, [products, clearCart, shipping])

  
  if (productsToDisplay.length === 0) {
    return (
      <div>
        nothing to see here...
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>

        <div className="grid gap-4">
          {productsToDisplay.map((product) => (
            <div className="grid grid-cols-[1fr_auto] items-center gap-4" key={product.id}>
              <div>
                <h3 className="font-medium">{product.name}</h3>
              </div>
              <div className="text-right">
                <p>$ {Number(product.price).toFixed(2)}</p>
                <p className="text-muted-foreground">Qty: {product.quantity}</p>
              </div>
            </div>
          ))}
          
          <Separator />
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <p className="text-muted-foreground">Subtotal</p>
            <p>$ {Number(subTotal).toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <p className="text-muted-foreground">Shipping</p>
            <p>$ {Number(shipping).toFixed(2)}</p>
          </div>
          <Separator />
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <p className="font-medium">Total</p>
            <p className="font-medium">$ {Number(total).toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
