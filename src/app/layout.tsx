import './globals.css';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className="dark" suppressHydrationWarning>
      <body className="bg-background text-primary">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
