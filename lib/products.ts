import productsData from "@/data/products.json"

export interface Product {
  id: string
  title: string
  price: string
  originalPrice: string
  discountPercent: number
  category: string
  platform: "Amazon" | "Shopee" | "Mercado Livre"
  rating: number
  reviews: number
  image: string
  affiliateLink: string
}

export function getProducts(): Product[] {
  return productsData as Product[]
}

export function getProductsByCategory(category: string): Product[] {
  return getProducts().filter((product) => product.category === category)
}

export function getProductsByPlatform(platform: string): Product[] {
  return getProducts().filter((product) => product.platform === platform)
}

export function getCategories(): string[] {
  const categories = getProducts().map((product) => product.category)
  return Array.from(new Set(categories)).sort()
}

export function getCategoryCount(category: string): number {
  return getProductsByCategory(category).length
}

export function getAllCategoryCounts(): Record<string, number> {
  const categories = getCategories()
  const counts: Record<string, number> = {}
  
  categories.forEach((category) => {
    counts[category] = getCategoryCount(category)
  })
  
  return counts
}

export function searchProducts(searchTerm: string, platforms?: string[], category?: string): Product[] {
  let products = getProducts()
  
  // Filtrar por categoria
  if (category) {
    products = products.filter((product) => product.category === category)
  }
  
  // Filtrar por plataformas
  if (platforms && platforms.length > 0) {
    products = products.filter((product) => platforms.includes(product.platform))
  }
  
  // Buscar por termo (título ou categoria)
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase().trim()
    products = products.filter((product) => 
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    )
  }
  
  return products
}

