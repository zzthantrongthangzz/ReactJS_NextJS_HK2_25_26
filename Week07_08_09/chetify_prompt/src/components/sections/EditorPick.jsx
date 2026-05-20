import EditorCard from '../cards/EditorCard';
import SectionHeader from '../ui/SectionHeader';

function EditorPick({ items }) {
  return (
    <section id="editors-pick" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Editor's Pick"
          subtitle="Curated culinary delights: handpicked favorites by our expert editors."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {items.map((item) => (
            <EditorCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorPick;