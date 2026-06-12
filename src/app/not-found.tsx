import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
