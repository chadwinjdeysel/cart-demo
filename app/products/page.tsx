
import { Product } from "@/components/component/product"
import { products } from "@/lib/seedData"

export default function Page() {
    return (
        <div className="h-screen w-full px-4 py-4 md:px-16 lg:px-64">
            <h1 className="text-4xl">Products</h1>
            
            <div className="flex flex-column md:grid md:grid-cols-3">
                {products.map((product ) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}