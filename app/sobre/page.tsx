import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package, Search, Tag, Shield } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sobre o Ofertas Prime</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Sua plataforma confiável para encontrar as melhores ofertas online
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <div className="bg-muted/50 border border-border rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Ofertas Prime nasceu com o objetivo de facilitar a vida de quem busca produtos de qualidade com os
                  melhores preços. Reunimos ofertas selecionadas das maiores plataformas de e-commerce do Brasil e do
                  mundo - Shopee, Mercado Livre e AliExpress - tudo em um único lugar.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pesquisa Inteligente</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Use nossa barra de pesquisa para encontrar exatamente o que você procura. Filtre por plataforma e
                    categoria para resultados precisos.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Tag className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Selecionadas</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cada produto é cuidadosamente selecionado para garantir que você tenha acesso às melhores ofertas e
                    descontos disponíveis.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Variedade de Produtos</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    De eletrônicos a moda, casa e jardim até acessórios - oferecemos uma ampla variedade de categorias
                    para todos os gostos.
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Compra Segura</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Todos os links direcionam para as plataformas oficiais. Você compra com total segurança e recebe
                    todas as garantias oferecidas pelas lojas.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Transparência e Confiança</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O Ofertas Prime é totalmente gratuito para você usar. Trabalhamos com links de afiliados, o que
                  significa que quando você realiza uma compra através dos nossos links, recebemos uma pequena comissão
                  das plataformas parceiras.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Isso não gera nenhum custo adicional para você - o preço é exatamente o mesmo que você pagaria
                  acessando a plataforma diretamente. Essa comissão nos permite manter o site funcionando e continuar
                  buscando as melhores ofertas para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
