import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diagnostic Plomb Caen | Expert certifié',
  description: 'Expert en diagnostic plomb à Caen et dans le Calvados.',
};

export default function PlombLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}