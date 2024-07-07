import { OrderConfirmation } from "@/components/component/order-confirmation"

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
            
            <OrderConfirmation />
          </div>
        </main>
      </div>
    )
}