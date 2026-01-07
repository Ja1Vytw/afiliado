"use client"

import type React from "react"

import { useEffect, useRef, useId } from "react"

interface GoogleAdProps {
  slot: string
  format?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal"
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

export function GoogleAd({ slot, format = "auto", responsive = true, className = "", style = {} }: GoogleAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  const adId = useId()

  useEffect(() => {
    if (initialized.current) return
    
    const adElement = adRef.current?.querySelector(".adsbygoogle") as HTMLElement
    if (!adElement) return

    // Verificar se o elemento já foi inicializado pelo Google AdSense
    if (adElement.getAttribute("data-adsbygoogle-status") === "done") {
      initialized.current = true
      return
    }

    // Aguardar um pouco para garantir que o elemento está no DOM
    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        if (window.adsbygoogle) {
          // Verificar novamente antes de inicializar
          if (!adElement.getAttribute("data-adsbygoogle-status")) {
            // @ts-ignore
            window.adsbygoogle.push({})
            initialized.current = true
          }
        }
      } catch (err) {
        console.error("AdSense error:", err)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [slot, adId])

  return (
    <div ref={adRef} className={`my-4 ${className}`}>
      <ins
        id={adId}
        className="adsbygoogle"
        style={{
          display: "block",
          ...style,
        }}
        data-ad-client="ca-pub-5931382207027722"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
