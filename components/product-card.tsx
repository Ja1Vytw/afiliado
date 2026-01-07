"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

const platformColors = {
  Amazon: "bg-orange-600 text-white",
  Shopee: "bg-orange-500 text-white",
  "Mercado Livre": "bg-yellow-400 text-yellow-950",
  AliExpress: "bg-red-500 text-white",
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={platformColors[product.platform as keyof typeof platformColors]}>{product.platform}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="destructive" className="font-bold">
            -{product.discountPercent}%
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-2 min-h-[3rem]">{product.title}</h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{product.price}</span>
          </div>
          <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2"
          size="lg"
          onClick={() => window.open(product.affiliateLink, "_blank", "noopener,noreferrer")}
        >
          Ver Oferta
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
