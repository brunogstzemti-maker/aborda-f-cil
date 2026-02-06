import PageLayout from "@/components/PageLayout";
import CategorySection from "@/components/CategorySection";
import { ruaData } from "@/data/phrases";

export default function RuaPage() {
  return (
    <PageLayout
      title="Abordagens para a rua"
      subtitle="Foco em respeito e naturalidade"
      warning="Se ela não demonstrar interesse, saia com classe."
    >
      {ruaData.map((cat, i) => (
        <CategorySection key={cat.name} category={cat} index={i} />
      ))}
    </PageLayout>
  );
}
