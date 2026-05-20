import { Apple } from 'lucide-react';
import Button from '../ui/Button';

function SocialLoginButton({ provider, label }) {
  const iconMap = {
    google: (
      <span
        className="text-lg font-semibold leading-none text-[#EA4335]"
        aria-hidden="true"
      >
        G
      </span>
    ),
    facebook: (
      <span
        className="text-lg font-bold leading-none text-[#1877F2]"
        aria-hidden="true"
      >
        f
      </span>
    ),
    apple: <Apple className="h-5 w-5 text-neutral-900" aria-hidden="true" />,
  };

  return (
    <Button
      variant="social"
      size="lg"
      className="relative w-full justify-center rounded-xl border border-transparent"
      aria-label={label}
    >
      <span className="absolute left-4 flex h-5 w-5 items-center justify-center">
        {iconMap[provider]}
      </span>
      <span>{label}</span>
    </Button>
  );
}

export default SocialLoginButton;