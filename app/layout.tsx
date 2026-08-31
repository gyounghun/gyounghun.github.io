import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gyounghun Ko · Mathematics & Kinetic Theory',
  description:
    'Gyounghun Ko is a mathematician studying nonlinear partial differential equations, kinetic theory, and the Boltzmann equation.',
  openGraph: {
    title: 'Gyounghun Ko · Mathematics & Kinetic Theory',
    description:
      'Research in nonlinear partial differential equations, kinetic theory, and the Boltzmann equation.',
    type: 'website',
    images: [{ url: `${basePath}/og.png`, width: 1792, height: 938, alt: 'Gyounghun Ko · Mathematics · Kinetic Theory · PDE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyounghun Ko · Mathematics & Kinetic Theory',
    description:
      'Research in nonlinear partial differential equations, kinetic theory, and the Boltzmann equation.',
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
