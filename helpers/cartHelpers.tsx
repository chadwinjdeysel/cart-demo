import { Product } from "@/components/component/product";
import { CartProduct } from "@/stores/cart/cartStore";

export const calculateTotal = (products: CartProduct[]) => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
}