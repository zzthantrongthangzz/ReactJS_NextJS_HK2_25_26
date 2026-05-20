import { useState } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import SearchLayout from '../components/search/SearchLayout';

function SearchEmptyStatePage() {
  const [query, setQuery] = useState('cakescascsa');

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar query={query} onQueryChange={setQuery} />
      <main>
        <SearchLayout query={query} onSelectSuggestion={setQuery} />
      </main>
      <Footer />
    </div>
  );
}

export default SearchEmptyStatePage;
