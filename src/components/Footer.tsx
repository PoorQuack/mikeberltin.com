export default function Footer() {
  return (
    <footer className="relative bg-charcoal-light border-t border-panel-border py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <span className="text-2xl font-black tracking-[0.2em] uppercase text-gold">
                MIKEBERLTIN
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/50" />
            </div>
            <p className="text-muted text-sm mt-4">
              Construction Logistics &bull; Workforce Supply &bull; Security
            </p>
          </div>

          <div className="text-muted text-sm text-center md:text-right space-y-1">
            <p className="font-medium text-dark">info@mikeberltin.com</p>
            <p>London, United Kingdom</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-panel-border text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} Mikeberltin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
