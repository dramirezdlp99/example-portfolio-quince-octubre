import Image from "next/image";
import { getDictionary } from "@/app/i18n/dictionaries"; 
import { Lang, languages } from "@/app/i18n/config"; 

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { ExperienceItem } from "@/components/Cards/ExperienceItem";
import { EducationCard } from "@/components/Cards/EducationCard";
import { ToolsCard } from "@/components/Cards/ToolsCard";
import { LanguagesCard } from "@/components/Cards/LanguagesCard";
import { PortfolioCard } from "@/components/Cards/PortfolioCard";
import { DetailsCard } from "@/components/Cards/DetailsCard";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

// Sección de introducción (Avatar, Bio, Intereses)
const IntroSection = ({ dict }: { dict: any }) => (
  <>
    {/* Avatar */}
    <div className="col-span-12 lg:col-span-3 lg:row-span-2 bg-foreground rounded-2xl overflow-hidden flex items-center justify-center p-8">
      <Image
        src="/avatar.jpg"
        alt="avatar"
        width={300}
        height={300}
        className="w-full h-auto object-cover rounded-2xl"
        priority
      />
    </div>

    {/* Bio */}
    <div className="col-span-12 lg:col-span-9 rounded-2xl bg-foreground p-8 flex items-center">
      <p className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
        {dict.intro}
      </p>
    </div>

    {/* Intereses */}
    <div className="col-span-12 lg:col-span-9 rounded-2xl bg-foreground p-6">
      <ul className="flex flex-wrap items-center gap-4">
        <li className="text-primary text-lg font-bold pr-4 border-r border-grey whitespace-nowrap">
          {dict.sections.interests.title}
        </li>
        {dict.sections.interests.items.map((item: string) => (
          <li
            key={item}
            className="flex items-center bg-inner-bg rounded-lg text-primary text-sm font-medium px-4 py-2.5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Datos de herramientas
  const designToolsData = [
    { label: 'Ai', bgColor: 'bg-[#330000]', textColor: 'text-[#FF9A00]' },
    { label: 'Ps', bgColor: 'bg-[#001E36]', textColor: 'text-[#31A8FF]' },
    { label: 'Id', bgColor: 'bg-[#49021F]', textColor: 'text-[#FF3366]' },
    { label: 'Xd', bgColor: 'bg-[#470137]', textColor: 'text-[#FF61F6]' },
  ];
  const editingToolsData = [
    { label: 'Ae', bgColor: 'bg-[#00005B]', textColor: 'text-[#9999FF]' },
    { label: 'Pr', bgColor: 'bg-[#00005B]', textColor: 'text-[#9999FF]' },
    { label: '🎨', bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500', textColor: 'text-white' },
  ];
  const { freelance, meetzed } = dict.sections.experience;

  return (
    <div className="font-sans flex justify-center min-h-screen bg-background text-primary transition-colors duration-300">
      {/* Switches flotantes */}
      <LanguageSwitcher currentLang={lang} />
      <ThemeToggle />

      {/* GRID PRINCIPAL */}
      <main className="grid grid-cols-12 auto-rows-auto container max-w-7xl mt-10 mb-10 gap-5 p-4 sm:p-6 lg:p-0">
        <IntroSection dict={dict} />

        {/* Experiencia - 2 columnas */}
        <div className="col-span-12 lg:col-span-6">
          <ExperienceItem {...freelance} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ExperienceItem {...meetzed} />
        </div>

        {/* COLUMNA IZQUIERDA: Herramientas (3 filas) */}
        <div className="col-span-12 lg:col-span-6">
          <ToolsCard title={dict.sections.designTools} tools={designToolsData} />
        </div>

        {/* COLUMNA DERECHA: Educación (ocupa 3 filas completas) */}
        <div className="col-span-12 lg:col-span-6 lg:row-span-3">
          <EducationCard dict={dict} />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <ToolsCard title={dict.sections.editingTools} tools={editingToolsData} />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <LanguagesCard dict={dict} />
        </div>

        {/* Portfolio - Barra horizontal completa */}
        <div className="col-span-12">
          <PortfolioCard dict={dict} />
        </div>

        {/* Details - Barra horizontal completa */}
        <div className="col-span-12">
          <DetailsCard dict={dict} />
        </div>
      </main>
    </div>
  );
}