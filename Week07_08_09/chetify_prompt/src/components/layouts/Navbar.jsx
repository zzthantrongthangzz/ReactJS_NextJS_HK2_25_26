import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { navLinks } from '../data/recipes';


function Navbar({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex min-h-20 items-center gap-4">
          <a href="#" className="shrink-0">
            <span className="text-2xl font-black tracking-tight text-rose-500">
              Chetify
            </span>
          </a>

          <div className="relative hidden max-w-xs flex-1 lg:block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              aria-label="Search recipes"
              placeholder="What would you like to cook?"
              className="pl-11"
            />
          </div>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-rose-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="secondary" size="sm" onClick={onOpenLogin}>
              Login
            </Button>
            <Button size="sm">Subscribe</Button>
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
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <Input
                aria-label="Search recipes"
                placeholder="What would you like to cook?"
                className="pl-11"
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

            <div className="mt-4 flex gap-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  setIsOpen(false);
                  onOpenLogin?.();
                }}
              >
                Login
              </Button>
              <Button className="flex-1">Subscribe</Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;