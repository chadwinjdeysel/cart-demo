import { Navbar } from "@/components/component/navbar";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 md:px-12 py-12">
        <p className="text-lg mb-4">
          This project is demo of a cart and checkout process for e-commerce.
        </p>

        <p className="text-lg mb-4">
          Its built using <a href="https://nextjs.org/" target="blank" className="underline text-blue-500">Next.js</a> and <a href="https://react.dev/" target="blank" className="underline text-blue-500">React</a>, with <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" className="underline text-blue-500" target="blank">Zustand</a> for client side state handeling. 
          In addition, it makes use of <a href="https://tailwindcss.com/" className="underline text-blue-500" target="blank">Tailwind</a> for styling with <a href="https://ui.shadcn.com/" className="underline text-blue-500" target="blank">Shadcn/UI</a> providing basic UI and Components. 
          Some components were generated using <a href="https://v0.dev" className="underline text-blue-500" target="blank">v0</a>, see the <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">components/component</span> directory for more information. 
        </p>

        <p className="text-lg mb-4">
          Checkout the <Link href='/products' className="underline text-blue-500">products page</Link>, to get started.
        </p>

      </div>
    </>
  );
}
