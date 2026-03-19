import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getDictionary } from '@/dictionaries';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  return {
    title: {
      default: isZh ? 'WGG — 工业减速机制造商与出口商' : 'WGG — Industrial Gearbox Manufacturer & Exporter',
      template: isZh ? '%s | WGG' : '%s | WGG',
    },
    description: isZh ? '提供高品质的工业减速机和动力传动解决方案。' : 'Premium industrial gearboxes, speed reducers, and power transmission solutions.',
    keywords: ['industrial gearbox', 'speed reducer', 'worm gear', 'helical gear', 'power transmission', 'WGG'],
    openGraph: {
      type: 'website',
      locale: isZh ? 'zh_CN' : 'en_US',
      siteName: 'WGG',
      title: isZh ? 'WGG — 工业减速机制造商' : 'WGG — Industrial Gearbox Manufacturer & Exporter',
      description: isZh ? '高品质工业减速机全系解决方案。' : 'Premium industrial gearboxes, speed reducers, and power transmission solutions.',
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body>
        <Header dict={dict.nav} lang={lang} switchText={dict.langSwitcher} />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer dict={dict.footer} lang={lang} />
        <FloatingCTA />
        <Analytics />
        <GoogleAnalytics gaId="G-HK6TCD66JG" />
      </body>
    </html>
  );
}
