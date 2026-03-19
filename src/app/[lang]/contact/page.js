import { Suspense } from 'react';
import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us — Get a Free Quote',
  description: 'Contact WGG for gearbox inquiries and quotes. We respond within 24 hours. Email, phone, WhatsApp, or fill out our contact form.',
};

export default async function ContactPage({ params }) {
  const { lang } = await params;
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <ContactContent lang={lang} />
    </Suspense>
  );
}
