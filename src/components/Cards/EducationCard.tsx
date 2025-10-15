import React from 'react';

interface EducationItemProps {
  title: string;
  field: string;
  location: string;
  period: string;
  isLast: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, field, location, period, isLast }) => (
  <div className={`flex items-start justify-between w-full ${!isLast ? 'border-b border-grey pb-6 mb-6' : ''}`}>
    <div className="flex flex-col gap-1.5">
      <h2 className="text-2xl font-bold text-primary">
        {title}
      </h2>
      <p className="text-grey text-sm">
        {field}
      </p>
      <p className="text-grey text-xs">
        {location}
      </p>
    </div>
    <div className="bg-inner-bg rounded-lg text-primary text-sm font-medium px-4 py-2 whitespace-nowrap flex-shrink-0 ml-4">
      {period}
    </div>
  </div>
);

interface EducationCardProps {
  dict: any;
}

export const EducationCard: React.FC<EducationCardProps> = ({ dict }) => {
  const { highSchool, diploma, graduation } = dict.sections.education;

  const educationItems = [
    { ...highSchool, isLast: false },
    { ...diploma, isLast: false },
    { ...graduation, isLast: true },
  ];

  return (
    <div className="flex flex-col rounded-2xl bg-foreground p-6 h-full">
      {educationItems.map((item) => (
        <EducationItem
          key={item.title}
          title={item.title}
          field={item.field}
          location={item.location}
          period={item.period}
          isLast={item.isLast}
        />
      ))}
    </div>
  );
};