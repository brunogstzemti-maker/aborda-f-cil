import PageLayout from "@/components/PageLayout";
import PhraseCard from "@/components/PhraseCard";
import { conversandoData } from "@/data/phrases";

const sections = [
  { title: "💬 Como continuar a conversa", phrases: conversandoData.continuar },
  { title: "❓ Perguntas leves", phrases: conversandoData.perguntas },
  { title: "🎯 Puxar assunto pelo contexto", phrases: conversandoData.contexto },
];

export default function ConversandoPage() {
  return (
    <PageLayout title="Já estou conversando" subtitle="Mantenha o papo fluindo com naturalidade">
      {sections.map((section, i) => (
        <div key={section.title} className="mb-8" style={{ animationDelay: `${i * 100}ms` }}>
          <h2 className="text-lg font-display font-semibold text-foreground mb-3">{section.title}</h2>
          <div className="space-y-3">
            {section.phrases.map((phrase) => (
              <PhraseCard key={phrase.id} phrase={phrase} />
            ))}
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
