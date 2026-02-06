import { useNavigate } from "react-router-dom";
import { Heart, Zap } from "lucide-react";

const menuItems = [
  { icon: "🎭", label: "Abordar no bloco", path: "/bloco", delay: 0 },
  { icon: "🍻", label: "Abordar em festa / bar", path: "/festa", delay: 50 },
  { icon: "🚶‍♂️", label: "Abordar na rua", path: "/rua", delay: 100 },
  { icon: "💬", label: "Já estou conversando", path: "/conversando", delay: 150 },
  { icon: "🆘", label: "Travei, preciso de ajuda", path: "/socorro", delay: 200 },
  { icon: "🔍", label: "Leitor de sinais", path: "/sinais", delay: 250 },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col px-4 pt-12 pb-6 max-w-lg mx-auto w-full">
        {/* Logo */}
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-7 h-7 text-primary fill-primary" />
            <h1 className="text-3xl font-display font-bold text-gradient">Aborda.AI</h1>
          </div>
          <p className="text-muted-foreground text-sm">O jeito certo de chegar</p>
        </div>

        {/* Question */}
        <h2 className="text-xl font-display font-semibold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          O que você quer fazer agora?
        </h2>

        {/* Menu */}
        <div className="space-y-3 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 bg-card border border-border hover:border-primary/40 rounded-xl px-5 py-4 transition-all hover:bg-card/80 active:scale-[0.98] animate-fade-in"
              style={{ animationDelay: `${item.delay + 150}ms` }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-[15px] font-medium text-foreground">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Favorites */}
        <button
          onClick={() => navigate("/favoritos")}
          className="w-full flex items-center justify-center gap-2 mt-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: "450ms" }}
        >
          <Heart className="w-4 h-4" />
          Minhas frases salvas
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
          "Você não precisa de coragem.<br />Você só precisa saber o que dizer."
        </p>
      </div>
    </div>
  );
};

export default Index;
