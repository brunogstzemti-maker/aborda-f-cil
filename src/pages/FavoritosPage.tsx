import { ArrowLeft, Heart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "@/context/FavoritesContext";
import PhraseCard from "@/components/PhraseCard";

export default function FavoritosPage() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
      </header>

      <div className="px-4 pt-6 max-w-lg mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <h1 className="text-2xl font-display font-bold text-foreground">Frases salvas</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
            <p className="text-muted-foreground text-sm">Nenhuma frase salva ainda.</p>
            <p className="text-muted-foreground text-xs mt-1">Explore as categorias e salve suas favoritas!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((phrase) => (
              <PhraseCard key={phrase.id} phrase={phrase} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
