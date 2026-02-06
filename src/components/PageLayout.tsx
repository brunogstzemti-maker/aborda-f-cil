import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  tip?: string;
  warning?: string;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, tip, warning, children }: PageLayoutProps) {
  const navigate = useNavigate();

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
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">{title}</h1>
        {subtitle && <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>}

        {tip && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-primary font-medium">💡 {tip}</p>
          </div>
        )}

        {warning && (
          <div className="bg-secondary border border-border rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-muted-foreground">⚠️ {warning}</p>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
