'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lang } from '@/app/i18n/config';

interface LanguageSwitcherProps {
  currentLang: Lang;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const pathname = usePathname();

  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    return newPath;
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={switchLanguage(lang.code)}
          className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all shadow-lg flex items-center gap-2 ${
            currentLang === lang.code
              ? 'bg-blue-600 text-white'
              : 'bg-foreground text-primary border border-grey hover:opacity-80'
          }`}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;