import { useState } from 'react';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import EditorPick from '../sections/EditorPick';
import Hero from '../sections/Hero';
import RecipeSection from '../sections/RecipeSection';
import LoginModal from '../auth/LoginModal';
import {
  editorPicks,
  summerRecipes,
  videoRecipes,
} from '../data/recipes';

function LandingPage({ onLoginSuccess }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />

      <main>
        <Hero />

        <RecipeSection
          id="summer-recipes"
          title="This Summer Recipes"
          subtitle="We have all your seasonal sweets and fresh cooking inspiration covered."
          recipes={summerRecipes}
        />

        <RecipeSection
          id="video-recipes"
          title="Recipes With Videos"
          subtitle="Cooking up culinary creations with step-by-step videos."
          recipes={videoRecipes}
        />

        <EditorPick items={editorPicks} />
      </main>

      <Footer />

      <LoginModal
        open={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={onLoginSuccess}
      />
    </div>
  );
}

export { LandingPage };
export default LandingPage;
