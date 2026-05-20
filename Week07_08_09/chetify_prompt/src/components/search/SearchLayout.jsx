import Container from '../ui/Container';
import EmptyResults from './EmptyResults';
import FilterSidebar from './FilterSidebar';

function SearchLayout({ query, onSelectSuggestion }) {
  return (
    <Container className="py-10 sm:py-12 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start xl:gap-12">
        <FilterSidebar />
        <EmptyResults query={query} onSelectSuggestion={onSelectSuggestion} />
      </div>
    </Container>
  );
}

export default SearchLayout;
