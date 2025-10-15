/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Configuración del Modo Oscuro: Usar la estrategia de clase
  //    Esto hace que las clases 'dark:' se activen cuando haya la clase 'dark' en el HTML.
  darkMode: 'class', 
  
  // 2. Rutas de contenido: Asegúrate que Tailwind escanee todos tus archivos de componentes.
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    // 3. Extender el tema para añadir tus colores personalizados
    extend: {
      colors: {
        // Mapeo de las variables definidas en globals.css
        // Esto permite usar clases como 'bg-background', 'text-grey', 'bg-foreground'
        'background': 'var(--color-background)',
        'foreground': 'var(--color-foreground)',
        'white': 'var(--color-text-primary)', // Reemplaza el 'white' por defecto de Tailwind con tu variable de texto principal
        'grey': 'var(--color-text-secondary)', // Reemplaza el 'grey' por defecto de Tailwind con tu variable de texto secundario
        'inner-bg': 'var(--color-card-inner-bg)', // Color para botones pequeños (ej. periodos, herramientas)
      },
      // Si estás usando Geist Sans/Mono, también iría aquí:
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
      //   mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      // },
    },
  },
  plugins: [],
}