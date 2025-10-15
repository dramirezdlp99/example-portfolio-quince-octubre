import './globals.css';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: 'Portfolio - Sunil Kumar',
  description: 'Self-taught logo/brand designer with 4+ years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-background text-primary">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}