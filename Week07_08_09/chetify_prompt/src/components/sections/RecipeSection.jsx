import RecipeCard from '../cards/RecipeCard';
import SectionHeader from '../ui/SectionHeader';

function RecipeSection({ id, title, subtitle, recipes }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;