"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedPlatforms: string[]
  setSelectedPlatforms: (platforms: string[]) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Amazon", "Shopee", "Mercado Livre"])

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, selectedPlatforms, setSelectedPlatforms }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}

