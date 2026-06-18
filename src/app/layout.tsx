import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mikeberltin — Construction Logistics, Workforce & Security',
  description:
    'Mikeberltin delivers skilled labour, construction logistics, and professional security services across high-demand projects in the UK. Reliable workforce supply, site logistics, and SIA-licensed security personnel.',
  keywords: [
    'construction logistics',
    'workforce supply',
    'security services',
    'construction labour',
    'site security',
    'UK construction',
    'Mikeberltin',
  ],
  openGraph: {
    title: 'Mikeberltin — Construction Logistics, Workforce & Security',
    description:
      'Skilled labour, construction logistics, and trusted security services across high-demand projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
