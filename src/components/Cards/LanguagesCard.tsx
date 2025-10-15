import React from 'react';

interface LanguagesCardProps {
  dict: {
    sections: {
      languages: string;
    };
  };
}

export const LanguagesCard: React.FC<LanguagesCardProps> = ({ dict }) => {
  const flags = ['🇮🇳', '🇬🇧', '🇺🇸']; 

  return (
    <div className="rounded-2xl bg-foreground p-6">
      <ul className="flex flex-wrap items-center gap-5">
        <li className="text-primary text-lg font-bold pr-5 border-r border-grey whitespace-nowrap">
          {dict.sections.languages}
        </li>
        {flags.map((flag) => (
          <li key={flag} className="text-5xl leading-none">
            {flag}
          </li>
        ))}
      </ul>
    </div>
  );
};