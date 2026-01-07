"use client"

import Link from "next/link"
import { Package } from "lucide-react"
import { useState } from "react"
import { HowItWorksModal } from "@/components/how-it-works-modal"

export function Header() {
  const [howItWorksOpen, setHowItWorksOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Package className="h-5 w-5" />
            </div>
            <span className="text-foreground">Ofertas Prime</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="/categorias"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categorias
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
            <button
              onClick={() => setHowItWorksOpen(true)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Funciona
            </button>
          </nav>
        </div>
      </header>

      <HowItWorksModal open={howItWorksOpen} onOpenChange={setHowItWorksOpen} />
    </>
  )
}
