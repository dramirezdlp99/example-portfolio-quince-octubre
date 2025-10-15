import React from 'react';

interface ExperienceItemProps {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, period, bullets }) => (
  <div className="rounded-2xl bg-foreground p-6 h-full flex flex-col">
    <div className="flex items-start justify-between border-b border-grey pb-5 mb-5">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-2xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-grey text-sm">
          {role}
        </p>
      </div>
      <div className="bg-inner-bg rounded-lg text-sm font-medium px-4 py-2 text-primary whitespace-nowrap flex-shrink-0 ml-4">
        {period}
      </div>
    </div>
    <ul className="list-disc list-inside text-primary text-sm space-y-2.5 flex-1">
      {bullets.map((b) => (
        <li key={b} className="leading-relaxed text-grey">{b}</li>
      ))}
    </ul>
  </div>
);