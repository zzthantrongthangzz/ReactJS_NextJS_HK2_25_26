
import { footerGroups } from '../data/recipes';
import Button from '../ui/Button';
import Input from '../ui/Input';

function Footer() {
  return (
    <footer id="footer" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
              Welcome to our website, a thoughtful place to explore recipes,
              seasonal cooking inspiration, and editorial food stories for every
              table.
            </p>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="border-neutral-800 bg-white text-neutral-900"
              />
              <Button type="submit" className="sm:self-start">
                Send
              </Button>
            </form>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-rose-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-white">
              Chetify
            </span>
            <span className="text-sm text-neutral-500">© 2025 Chetify Company</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <a href="#" className="hover:text-rose-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-rose-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;