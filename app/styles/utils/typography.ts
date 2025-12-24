// Typography utility classes for consistent text styling
export const typography = {
  // Headings
  heading: {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    subtitle: 'text-xl md:text-2xl',
  },
  
  // Body text
  body: {
    default: 'text-base',
    large: 'text-lg',
    small: 'text-sm',
  },
  
  // Text colors
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    light: 'text-white',
    accent: 'text-amber-500',
  },
  
  // Special text styles
  special: {
    quote: 'italic text-gray-600 border-l-4 border-amber-500 pl-4',
    caption: 'text-sm text-gray-500',
    highlight: 'bg-amber-100 text-amber-800 px-1 rounded',
  }
};
