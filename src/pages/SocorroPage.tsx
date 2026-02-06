import { ArrowLeft, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SocorroPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-md mx-auto">
        <Wind className="w-12 h-12 text-primary mb-6 animate-pulse-glow rounded-full p-2" />

        <h1 className="text-2xl font-display font-bold text-foreground mb-2">
          Respira. Você não travou.
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Todo mundo trava às vezes. Isso é normal.
        </p>

        <div className="w-full space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Postura</p>
            <p className="text-foreground text-[15px]">Ombros pra trás, respira fundo, sorriso leve.</p>
          </div>

          <div className="bg-card border border-primary/30 rounded-xl p-5 animate-pulse-glow">
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Frase segura</p>
            <p className="text-foreground text-lg font-display font-medium leading-relaxed">
              "Oi, posso roubar 30 segundos?"
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Ação simples</p>
            <p className="text-foreground text-[15px]">Sorria, olhe nos olhos e fale devagar.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-10">
          Chega com calma. A confiança vem da ação.
        </p>
      </div>
    </div>
  );
}
