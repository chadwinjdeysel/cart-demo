/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2n8suSvDRDc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// my own shit
import { useCartStore } from "@/stores/cart/cartStore"

export function Navbar() {
  const count = useCartStore((state) => state.count)

  return (
    <header className="bg-background border-b">
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between h-16">
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-primary font-semibold" prefetch={false}>
            Acme Store
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              Products
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              About
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative" prefetch={false}>
            <ShoppingCartIcon className="w-6 h-6 text-muted-foreground" />
            <Badge className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
              {count}
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  )
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}