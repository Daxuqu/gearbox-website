import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: {
    default: 'WGG — Industrial Gearbox Manufacturer & Exporter',
    template: '%s | WGG',
  },
  description: 'Premium industrial gearboxes, speed reducers, and power transmission solutions. Discover our RV, R, K, F, and S series gear units for global applications.',
  keywords: ['industrial gearbox', 'speed reducer', 'worm gear', 'helical gear', 'power transmission', 'gear motor', 'WGG'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'WGG',
    title: 'WGG — Industrial Gearbox Manufacturer & Exporter',
    description: 'Premium industrial gearboxes, speed reducers, and power transmission solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <Analytics />
        <GoogleAnalytics gaId="G-HK6TCD66JG" />
      </body>
    </html>
  );
}
