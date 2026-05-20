import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Divider from '../ui/Divider';
import SocialLoginButton from './SocialLoginButton';

const promoImage =
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80';

function LoginModal({ open, onClose, onLoginSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSuccess?.();
  };

  return (
    <Modal open={open} onClose={onClose} titleId="login-modal-title">
      <div className="grid lg:grid-cols-[0.95fr_1.2fr]">
        <section className="relative min-h-[300px] overflow-hidden lg:min-h-[680px]">
          <img
            src={promoImage}
            alt="Plated food on a soft blue background"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-sky-800/10 to-sky-950/15" />

          <div className="absolute inset-x-6 top-8 sm:inset-x-10 sm:top-10">
            <p className="mx-auto max-w-sm text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              "Embrace the art of cooking, where flavors come alive!"
            </p>
          </div>
        </section>

        <section className="bg-neutral-50 p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <h2
              id="login-modal-title"
              className="text-4xl font-bold tracking-tight text-neutral-900"
            >
              Login
            </h2>

            <Button
              variant="ghost"
              className="h-11 w-11 rounded-full border border-neutral-300 p-0 text-2xl leading-none text-neutral-900 hover:bg-neutral-200"
              aria-label="Close login modal"
              onClick={onClose}
            >
              X
            </Button>
          </div>

          <p className="mt-8 text-xl text-neutral-700">
            Enter your email to log in.
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <label htmlFor="login-email" className="sr-only">
              Email address
            </label>
            <Input
              id="login-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="h-12 rounded-xl border-transparent bg-neutral-100"
            />

            <Button type="submit" size="lg" className="w-full rounded-xl">
              Continue
            </Button>
          </form>

          <div className="mt-10">
            <Divider label="OR" />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-7 text-neutral-500">
            By continuing, you agree to the updated{' '}
            <a
              href="#"
              className="font-medium text-neutral-600 hover:text-rose-500"
            >
              Terms of Sale
            </a>
            ,{' '}
            <a
              href="#"
              className="font-medium text-neutral-600 hover:text-rose-500"
            >
              Terms of Service
            </a>
            , and{' '}
            <a
              href="#"
              className="font-medium text-neutral-600 hover:text-rose-500"
            >
              Privacy Policy
            </a>
            .
          </p>

          <div className="mt-8 space-y-4">
            <SocialLoginButton
              provider="google"
              label="Continue with Google"
            />
            <SocialLoginButton
              provider="facebook"
              label="Continue with Facebook"
            />
            <SocialLoginButton provider="apple" label="Continue with Apple" />
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default LoginModal;
