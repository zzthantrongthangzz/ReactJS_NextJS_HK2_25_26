import Button from '../ui/Button';
import Container from '../ui/Container';
import Input from '../ui/Input';

const footerGroups = [
  {
    title: 'Learn More',
    links: ['Our Cooks', 'See Our Features', 'FAQ'],
  },
  {
    title: 'Shop',
    links: ['Gift Subscription', 'Send Us Feedback'],
  },
  {
    title: 'Recipes',
    links: [
      'What to Cook This Week',
      'Pasta',
      'Dinner',
      'Healthy',
      'Vegetarian',
      'Vegan',
      'Christmas',
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-300">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-lg border-neutral-800 bg-white text-neutral-900"
              />
              <Button type="submit" className="rounded-lg px-5 sm:self-start">
                Send
              </Button>
            </form>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-300 hover:text-rose-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black tracking-tight text-white">
              Chetify
            </span>
            <span className="text-sm text-neutral-400">2023 Chetify Company</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-rose-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-rose-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
