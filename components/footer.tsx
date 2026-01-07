"use client"

import { Package } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { HowItWorksModal } from "@/components/how-it-works-modal"

export function Footer() {
  const [howItWorksOpen, setHowItWorksOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Package className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl">Ofertas Prime</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Seu destino para as melhores ofertas online. Encontre produtos incríveis com descontos exclusivos das
                maiores plataformas de e-commerce.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Plataformas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Shopee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mercado Livre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AliExpress
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Informações</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/sobre" className="hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <button onClick={() => setHowItWorksOpen(true)} className="hover:text-foreground transition-colors">
                    Como Funciona
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Ofertas Prime. Todos os direitos reservados.</p>
            <p className="mt-2">Como associado das plataformas, recebemos comissões por compras qualificadas.</p>
          </div>
        </div>
      </footer>

      <HowItWorksModal open={howItWorksOpen} onOpenChange={setHowItWorksOpen} />
    </>
  )
}
