import React from 'react';

interface PortfolioItemData {
  name: string;
  icon: string;
  href: string;
  colorClasses: string;
}

interface PortfolioCardProps {
  dict: {
    sections: {
      portfolio: {
        title: string;
      };
    };
  };
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ dict }) => {
  const portfolioItems: PortfolioItemData[] = [
    { name: 'Bento', icon: '🔵', href: '#', colorClasses: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Behance', icon: '🔷', href: '#', colorClasses: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Instagram', icon: '📷', href: '#', colorClasses: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'Youtube', icon: '▶️', href: '#', colorClasses: 'bg-red-600 hover:bg-red-700' },
    { name: 'Dribbble', icon: '🏀', href: '#', colorClasses: 'bg-pink-500 hover:bg-pink-600' },
  ];

  return (
    <div className="rounded-2xl bg-foreground p-6">
      <div className="flex flex-wrap items-center gap-5">
        <h3 className="text-primary text-lg font-bold pr-5 border-r border-grey whitespace-nowrap">
          {dict.sections.portfolio.title}
        </h3>
        <div className="flex flex-wrap gap-4">
          {portfolioItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.colorClasses} rounded-lg px-5 py-2.5 flex items-center gap-2.5 transition-all shadow-sm`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-white text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};