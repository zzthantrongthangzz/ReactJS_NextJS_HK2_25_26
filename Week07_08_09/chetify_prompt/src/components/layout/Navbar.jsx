import { Bookmark, ChefHat, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Input from '../ui/Input';

const navLinks = [
  { label: 'What to cook', href: '#' },
  { label: 'Recipes', href: '#' },
  { label: 'Ingredients', href: '#' },
  { label: 'Occasions', href: '#' },
  { label: 'About Us', href: '#' },
];

const user = {
  name: 'Chetify User',
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
};

function Navbar({ query, onQueryChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const displayQuery = query ?? 'cakescascsa';

  const handleQueryChange = (event) => {
    onQueryChange?.(event.target.value);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center gap-4">
          <a href="#" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white">
              <ChefHat className="h-6 w-6" />
            </div>
            <span className="text-3xl font-black tracking-tight text-rose-500">
              Chetify
            </span>
          </a>

          <div className="relative hidden w-full max-w-sm lg:block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              aria-label="Search recipes"
              value={displayQuery}
              onChange={handleQueryChange}
              className="h-12 rounded-xl border-transparent bg-neutral-100 pl-11"
            />
          </div>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-500 hover:text-rose-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="secondary"
              className="rounded-xl border-0 bg-rose-50 px-5 text-rose-500 ring-0 hover:bg-rose-100"
            >
              <Bookmark className="h-4 w-4" />
              Your Recipe Box
            </Button>

            <Avatar src={user.avatar} alt={user.name} className="h-12 w-12" />
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all duration-300 hover:bg-neutral-100 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-neutral-200 py-4 lg:hidden">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                aria-label="Search recipes"
                value={displayQuery}
                onChange={handleQueryChange}
                className="h-12 rounded-xl border-transparent bg-neutral-100 pl-11"
              />
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-100 hover:text-rose-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3">
              <Button
                variant="secondary"
                className="flex-1 rounded-xl border-0 bg-rose-50 text-rose-500 ring-0 hover:bg-rose-100"
              >
                <Bookmark className="h-4 w-4" />
                Your Recipe Box
              </Button>
              <Avatar src={user.avatar} alt={user.name} />
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

export default Navbar;
