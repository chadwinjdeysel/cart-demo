import { Cart } from "@/components/component/cart"
import Link from "next/link"

export default function Page() {
    return (
        <main className="h-screen w-full px-4 py-4 md:px-16 lg:px-64">
            <Link href="/products" className="my-2 text-gray-600 hover:underline">
                ← Continue Shopping
            </Link>

            <Cart />
        </main>
    )
}