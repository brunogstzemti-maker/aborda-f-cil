import PageLayout from "@/components/PageLayout";
import CategorySection from "@/components/CategorySection";
import { blocoData } from "@/data/phrases";

export default function BlocoPage() {
  return (
    <PageLayout title="Abordagens para bloco de Carnaval" subtitle="Escolha o estilo que combina com você">
      {blocoData.map((cat, i) => (
        <CategorySection key={cat.name} category={cat} index={i} />
      ))}
    </PageLayout>
  );
}
