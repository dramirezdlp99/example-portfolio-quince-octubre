import React from 'react';

interface DetailItemProps {
  value: string;
  icon: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ value, icon }) => (
  <div className="bg-inner-bg rounded-lg px-4 py-2.5 flex items-center gap-2.5 text-primary text-sm font-medium">
    <span className="text-lg">{icon}</span>
    <span>{value}</span>
  </div>
);

interface DetailsCardProps {
  dict: any;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({ dict }) => {
  const details = dict.sections.details;

  const detailItems = [
    { value: details.age, icon: '🎂' },
    { value: details.email, icon: '✉️' },
    { value: details.phone, icon: '📞' },
    { value: details.location, icon: '🇮🇳' },
  ];

  return (
    <div className="rounded-2xl bg-foreground p-6">
      <div className="flex flex-wrap items-center gap-5">
        <h3 className="text-primary text-lg font-bold pr-5 border-r border-grey whitespace-nowrap">
          {dict.sections.details.title}
        </h3>
        {detailItems.map((item) => (
          <DetailItem key={item.value} value={item.value} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};