import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Phrase } from "@/data/phrases";

interface FavoritesContextType {
  favorites: Phrase[];
  toggleFavorite: (phrase: Phrase) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Phrase[]>(() => {
    try {
      const saved = localStorage.getItem("abordaai-favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("abordaai-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (phrase: Phrase) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === phrase.id)
        ? prev.filter((f) => f.id !== phrase.id)
        : [...prev, phrase]
    );
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
