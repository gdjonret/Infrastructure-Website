// Layout utility classes for consistent spacing and container styles
export const layout = {
  // Container styles
  container: {
    default: 'container mx-auto px-8',
    narrow: 'container mx-auto px-8 max-w-4xl',
    wide: 'container mx-auto px-8 max-w-7xl',
  },
  
  // Section spacing
  section: {
    default: 'py-16',
    compact: 'py-8',
    spacious: 'py-24',
  },
  
  // Flex layouts
  flex: {
    row: 'flex flex-row',
    col: 'flex flex-col',
    rowResponsive: 'flex flex-col md:flex-row',
    colResponsive: 'flex flex-row md:flex-col',
    colToRow: 'flex flex-col md:flex-row',
    center: 'items-center justify-center',
    between: 'justify-between',
  }
};
