import { Copy, Heart } from "lucide-react";
import { useState } from "react";
import { Phrase } from "@/data/phrases";
import { useFavorites } from "@/context/FavoritesContext";
import { toast } from "sonner";

interface PhraseCardProps {
  phrase: Phrase;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);
  const fav = isFavorite(phrase.id);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(phrase.text);
    setCopied(true);
    toast.success("Frase copiada!");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 animate-fade-in">
      <p className="text-foreground text-[15px] leading-relaxed mb-3">"{phrase.text}"</p>
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          <Copy className="w-3.5 h-3.5" />
          {copied ? "Copiado!" : "Copiar"}
        </button>
        <button
          onClick={() => toggleFavorite(phrase)}
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
            fav
              ? "bg-primary/20 text-primary"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${fav ? "fill-primary" : ""}`} />
          {fav ? "Salvo" : "Salvar"}
        </button>
      </div>
    </div>
  );
}
