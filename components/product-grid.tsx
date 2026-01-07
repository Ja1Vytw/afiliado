"use client"

import React from "react"
import { ProductCard } from "./product-card"
import { GoogleAd } from "./google-ad"
import { getProducts, getProductsByCategory } from "@/lib/products"

interface ProductGridProps {
  category?: string
}

export function ProductGrid({ category }: ProductGridProps) {
  const products = category ? getProductsByCategory(category) : getProducts()
  
  // Criar array de elementos para renderizar (produtos + ads)
  const items: React.ReactElement[] = []
  
  products.forEach((product, index) => {
    items.push(
      <ProductCard key={product.id} product={product} />
    )
    
    // Adicionar ad a cada 4 produtos
    if ((index + 1) % 4 === 0 && index !== products.length - 1) {
      items.push(
        <div key={`ad-${index}`} className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <GoogleAd slot="1122334455" format="fluid" className="my-4" />
        </div>
      )
    }
  })
  
  return (
    <section id="produtos" className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {category ? `Produtos em ${category}` : "Ofertas em Destaque"}
            </h2>
            <p className="text-muted-foreground">
              {category 
                ? `${products.length} ${products.length === 1 ? "produto encontrado" : "produtos encontrados"}` 
                : "Produtos selecionados com os melhores descontos"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items}
        </div>
      </div>
    </section>
  )
}
