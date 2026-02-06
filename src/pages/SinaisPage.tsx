import { useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sinaisData } from "@/data/phrases";

export default function SinaisPage() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const positiveChecked = sinaisData.filter((s) => s.positive && checked[s.id]).length;
  const negativeChecked = sinaisData.filter((s) => !s.positive && checked[s.id]).length;
  const totalChecked = positiveChecked + negativeChecked;

  let result: { text: string; color: string } | null = null;
  if (totalChecked >= 2) {
    if (positiveChecked > negativeChecked) {
      result = { text: "✅ Pode continuar! Ela parece interessada.", color: "text-success" };
    } else {
      result = { text: "🚪 Melhor sair com elegância.", color: "text-danger" };
    }
  }

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
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">Ela está interessada?</h1>
        <p className="text-muted-foreground text-sm mb-6">Marque os sinais que você está percebendo</p>

        <div className="space-y-2 mb-6">
          {sinaisData.map((signal) => (
            <button
              key={signal.id}
              onClick={() => toggle(signal.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-all active:scale-[0.98] ${
                checked[signal.id]
                  ? signal.positive
                    ? "bg-primary/10 border-primary/30"
                    : "bg-danger/10 border-danger/30"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs ${
                  checked[signal.id]
                    ? signal.positive
                      ? "bg-primary text-primary-foreground"
                      : "bg-danger text-foreground"
                    : "bg-secondary"
                }`}
              >
                {checked[signal.id] && (signal.positive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />)}
              </div>
              <span className="text-[15px] text-foreground">{signal.text}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {signal.positive ? "positivo" : "negativo"}
              </span>
            </button>
          ))}
        </div>

        {result && (
          <div className="bg-card border border-border rounded-xl p-5 text-center animate-scale-in">
            <p className={`text-lg font-display font-bold ${result.color}`}>{result.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
