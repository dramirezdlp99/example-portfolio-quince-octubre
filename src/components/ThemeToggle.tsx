'use client';
import React, { useState, useEffect } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    const applyTheme = () => {
      if (theme === 'system') {
        localStorage.removeItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', prefersDark);
      } else {
        localStorage.setItem('theme', theme);
        root.classList.toggle('dark', theme === 'dark');
      }
    };

    applyTheme();

    // Listener para cambios en las preferencias del sistema
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  const getIcon = () => {
    if (theme === 'system') return '🌓';
    if (theme === 'light') return '☀️';
    return '🌙';
  };

  const getLabel = () => {
    if (theme === 'system') return 'Sistema';
    if (theme === 'light') return 'Claro';
    return 'Oscuro';
  };

  // Evitar flash de contenido durante hidratación
  if (!mounted) {
    return (
      <button className="fixed top-4 right-4 z-50 px-4 py-2 text-sm rounded-lg bg-foreground dark:bg-gray-800 text-white border border-grey dark:border-gray-600 opacity-50">
        <span className="flex items-center gap-2">
          <span>🌓</span>
          <span className="hidden sm:inline">Sistema</span>
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2.5 text-sm font-medium rounded-lg bg-foreground dark:bg-gray-800 text-primary dark:text-white border border-grey dark:border-gray-600 hover:opacity-80 transition-all shadow-lg"
      aria-label="Cambiar tema"
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{getIcon()}</span>
        <span className="hidden sm:inline">{getLabel()}</span>
      </span>
    </button>
  );
};