import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Shirt,
  Footprints,
  Home,
  Sparkles,
  Dumbbell,
  Baby,
  Wrench,
  Gamepad2,
} from "lucide-react"
import { getAllCategoryCounts } from "@/lib/products"

// Mapeamento de categorias com ícones e descrições
const categoryConfig = [
  {
    name: "Eletrônicos",
    icon: Smartphone,
    description: "Smartphones, tablets e acessórios",
  },
  {
    name: "Informática",
    icon: Laptop,
    description: "Notebooks, PCs e periféricos",
  },
  {
    name: "Relógios",
    icon: Watch,
    description: "Smartwatches e relógios",
  },
  {
    name: "Áudio",
    icon: Headphones,
    description: "Fones, caixas de som e mais",
  },
  {
    name: "Moda",
    icon: Shirt,
    description: "Roupas e acessórios",
  },
  {
    name: "Calçados",
    icon: Footprints,
    description: "Tênis, sapatos e sandálias",
  },
  {
    name: "Casa e Decoração",
    icon: Home,
    description: "Móveis e itens para casa",
  },
  {
    name: "Beleza",
    icon: Sparkles,
    description: "Cosméticos e cuidados pessoais",
  },
  {
    name: "Esportes",
    icon: Dumbbell,
    description: "Equipamentos e roupas fitness",
  },
  {
    name: "Bebês e Crianças",
    icon: Baby,
    description: "Produtos infantis",
  },
  {
    name: "Ferramentas",
    icon: Wrench,
    description: "Ferramentas e construção",
  },
  {
    name: "Games",
    icon: Gamepad2,
    description: "Jogos e consoles",
  },
]

export default function CategoriasPage() {
  const categoryCounts = getAllCategoryCounts()
  
  // Criar lista de categorias com contagens reais
  const categories = categoryConfig.map((config) => ({
    ...config,
    count: categoryCounts[config.name] || 0,
  })).filter((category) => category.count > 0) // Mostrar apenas categorias com produtos
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Categorias</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Navegue por categoria e encontre exatamente o que você procura
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.name}
                    href={`/?categoria=${encodeURIComponent(category.name)}`}
                    className="group bg-background border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {category.count} {category.count === 1 ? "produto" : "produtos"}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
