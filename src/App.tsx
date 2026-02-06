import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlocoPage from "./pages/BlocoPage";
import FestaPage from "./pages/FestaPage";
import RuaPage from "./pages/RuaPage";
import ConversandoPage from "./pages/ConversandoPage";
import SocorroPage from "./pages/SocorroPage";
import SinaisPage from "./pages/SinaisPage";
import FavoritosPage from "./pages/FavoritosPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bloco" element={<BlocoPage />} />
            <Route path="/festa" element={<FestaPage />} />
            <Route path="/rua" element={<RuaPage />} />
            <Route path="/conversando" element={<ConversandoPage />} />
            <Route path="/socorro" element={<SocorroPage />} />
            <Route path="/sinais" element={<SinaisPage />} />
            <Route path="/favoritos" element={<FavoritosPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
