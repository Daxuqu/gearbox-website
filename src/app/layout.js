import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata = {
  title: {
    default: 'GearPro Transmission — Industrial Gearbox Manufacturer & Exporter',
    template: '%s | GearPro Transmission',
  },
  description: 'Leading manufacturer and exporter of industrial gearboxes, worm reducers, helical gear reducers, bevel gearboxes. ISO certified, competitive pricing, global shipping.',
  keywords: ['gearbox manufacturer', 'speed reducer', 'worm gearbox supplier', 'helical gear reducer', 'industrial gearbox exporter', 'China gearbox factory'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'GearPro Transmission',
    title: 'GearPro Transmission — Industrial Gearbox Manufacturer & Exporter',
    description: 'Leading manufacturer and exporter of industrial gearboxes and speed reducers. ISO certified quality, competitive prices, worldwide delivery.',
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
      </body>
    </html>
  );
}
