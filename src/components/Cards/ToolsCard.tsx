import React from 'react';

interface ToolItem {
  label: string;
  bgColor: string;
  textColor: string;
}

interface ToolsCardProps {
  title: string;
  tools: ToolItem[];
}

export const ToolsCard: React.FC<ToolsCardProps> = ({ title, tools }) => (
  <div className="rounded-2xl bg-foreground p-6">
    <ul className="flex flex-wrap items-center gap-5">
      <li className="text-primary text-lg font-bold pr-5 border-r border-grey whitespace-nowrap">
        {title}
      </li>
      {tools.map((tool) => (
        <li
          key={tool.label}
          className={`flex items-center justify-center rounded-xl font-bold text-2xl w-14 h-14 ${tool.bgColor} ${tool.textColor} shadow-md`}
        >
          {tool.label}
        </li>
      ))}
    </ul>
  </div>
);