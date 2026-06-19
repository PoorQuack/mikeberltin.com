export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-panel-border py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <img src="/logo.svg" alt="MCL Mikeberltin" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-gold text-sm mt-4">
              Construction Logistics &bull; Workforce Supply &bull; Security
            </p>
          </div>

          <div className="text-gold text-sm text-center md:text-right space-y-1">
            <p className="font-medium text-dark">info@mikeberltin.com</p>
            <a href="tel:+447411187131" className="block hover:text-dark transition-colors">+44 7411 187131</a>
            <p>39 Kingsland Avenue, Kingsthorpe</p>
            <p>Northampton, NN2 7PP</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-panel-border text-center text-gold text-xs">
          &copy; {new Date().getFullYear()} Mikeberltin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
