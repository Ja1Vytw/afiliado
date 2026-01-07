"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface HowItWorksModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HowItWorksModal({ open, onOpenChange }: HowItWorksModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Como Funciona?</DialogTitle>
          <DialogDescription className="text-base">
            Entenda como nosso site funciona e como você pode aproveitar as melhores ofertas
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Navegue pelos Produtos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use nossa barra de pesquisa ou navegue pelas categorias para encontrar os produtos que você procura.
                  Filtre por plataforma (Shopee, Mercado Livre ou AliExpress).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Clique em "Ver Oferta"</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quando encontrar um produto interessante, clique no botão "Ver Oferta". Você será redirecionado para a
                  plataforma original com o desconto já aplicado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Finalize sua Compra</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete sua compra na plataforma oficial com total segurança. O desconto será aplicado
                  automaticamente e você receberá o produto normalmente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Este site é gratuito e funciona com links de
              afiliados. Quando você realiza uma compra através dos nossos links, recebemos uma pequena comissão sem
              nenhum custo adicional para você.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
