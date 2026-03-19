import { Suspense } from 'react';
import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us — Get a Free Quote',
  description: 'Contact WGG for gearbox inquiries and quotes. We respond within 24 hours. Email, phone, WhatsApp, or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <ContactContent />
    </Suspense>
  );
}
