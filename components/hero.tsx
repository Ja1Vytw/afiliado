"use client"

import { SearchBar } from "./search-bar"

export function Hero() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
          As Melhores Ofertas em Um Só Lugar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Descubra produtos incríveis com descontos exclusivos da Shopee, Mercado Livre e AliExpress
        </p>
        <SearchBar />
      </div>
    </section>
  )
}
