import PageLayout from "@/components/PageLayout";
import CategorySection from "@/components/CategorySection";
import { festaData } from "@/data/phrases";

export default function FestaPage() {
  return (
    <PageLayout
      title="Abordagens para festa / bar"
      subtitle="Escolha o estilo que combina com você"
      tip="Postura aberta, sorriso leve e contato visual."
    >
      {festaData.map((cat, i) => (
        <CategorySection key={cat.name} category={cat} index={i} />
      ))}
    </PageLayout>
  );
}
