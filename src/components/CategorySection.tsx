import { CategoryData } from "@/data/phrases";
import PhraseCard from "./PhraseCard";

interface CategorySectionProps {
  category: CategoryData;
  index: number;
}

export default function CategorySection({ category, index }: CategorySectionProps) {
  return (
    <div className="mb-8" style={{ animationDelay: `${index * 100}ms` }}>
      <h2 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
        <span>{category.icon}</span>
        {category.name}
      </h2>
      <div className="space-y-3">
        {category.phrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>
    </div>
  );
}
