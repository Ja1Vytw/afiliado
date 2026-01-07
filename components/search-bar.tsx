"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useSearch } from "@/contexts/search-context"

const platforms = ["Amazon", "Shopee", "Mercado Livre"]

export function SearchBar() {
  const { searchTerm, setSearchTerm, selectedPlatforms, setSelectedPlatforms } = useSearch()

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter((p) => p !== platform)
        : [...selectedPlatforms, platform]
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar produtos, categorias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="lg" className="gap-2 px-4 bg-transparent">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="hidden sm:inline">Filtros</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Plataformas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {platforms.map((platform) => (
              <DropdownMenuCheckboxItem
                key={platform}
                checked={selectedPlatforms.includes(platform)}
                onCheckedChange={() => handlePlatformToggle(platform)}
              >
                {platform}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {selectedPlatforms.length < platforms.length && (
        <div className="mt-3 flex gap-2 flex-wrap">
          {selectedPlatforms.map((platform) => (
            <span key={platform} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {platform}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
