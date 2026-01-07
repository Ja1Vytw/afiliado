import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { GoogleAd } from "@/components/google-ad"

interface HomeProps {
  searchParams: Promise<{ categoria?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const { categoria } = await searchParams

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <div className="container mx-auto px-4 py-4">
          <GoogleAd slot="1234567890" format="horizontal" className="max-w-5xl mx-auto" />
        </div>

        <ProductGrid category={categoria} />

        <div className="container mx-auto px-4 py-8">
          <GoogleAd slot="0987654321" format="auto" className="max-w-5xl mx-auto" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
