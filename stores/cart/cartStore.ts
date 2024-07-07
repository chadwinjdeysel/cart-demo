import { Product } from '@/components/component/product';
import { create } from 'zustand';

export interface CartProduct extends Product {
    quantity: number
}

export interface CartState {
    count: number,
    products: CartProduct[],
    updateCart: (product: Product, quantity: number) => void,
    removeFromCart: (id: string) => void,
    clearCart: () => void
}

const initialState = {
    count: 0,
    products: [] as CartProduct[]
}

export const useCartStore = create<CartState>((set) => ({
    // todo: remove count, in favour of having the components using cart to dynamically render the amounts. 
    count: 0,
    products: [] as CartProduct[],
    updateCart: (product: Product, quantity: number) => set((state) => updateCart(state, product, quantity)),
    removeFromCart: (id: string) => set((state) => removeFromCart(state, id)),
    clearCart: () => set(initialState)
}));

const updateCart = (state: CartState, product: Product, quantity: number) =>  {
    const existingProductIndex = state.products.findIndex(p => p.id === product.id);

    let updatedProducts: CartProduct[] = [];
    let newCount = 0; 

    if (existingProductIndex !== -1) {
        // Update existing product
        updatedProducts = state.products.map((p, index) => index === existingProductIndex ? { ...p, quantity: p.quantity + quantity } : p);
    } else {
        // Add new product with initial quantity
        updatedProducts = [...state.products, {...product, quantity}];
    }
    
    // Calcuate new count
    for (let i = 0; i < updatedProducts.length; i++) {
        newCount = updatedProducts.reduce((acc, curr) => acc + curr.quantity, 0);
    }

    return { products: updatedProducts, count: newCount};
}

const removeFromCart = (state: CartState, id: string) => {
    const updatedProducts = state.products.filter(p => p.id !== id);
    const newCount = updatedProducts.reduce((acc, curr) => acc + curr.quantity, 0);

    return { ...state, products: updatedProducts, count: newCount };
};

