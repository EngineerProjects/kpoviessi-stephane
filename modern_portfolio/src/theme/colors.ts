// Base color palettes
export const colors = {
  // Orange theme (current)
  orange: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  // Blue theme
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Secondary colors - Light themes
  light: {
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
    gray: {
      100: '#ffffff',
      200: '#fafafa',
      300: '#f5f5f5',
      400: '#f0f0f0',
      500: '#e6e6e6',
      600: '#d9d9d9',
      700: '#cccccc',
      800: '#b3b3b3',
      900: '#999999',
    },
    dark: {
      100: '#e6e6e6',
      200: '#cccccc',
      300: '#b3b3b3',
      400: '#999999',
      500: '#808080',
      600: '#666666',
      700: '#4d4d4d',
      800: '#333333',
      900: '#1a1a1a',
      950: '#0d0d0d',
    },
  },
  // Dark theme colors
  dark: {
    secondary: {
      50: '#083344',
      100: '#0e4a63',
      200: '#186181',
      300: '#2179a0',
      400: '#3295c3',
      500: '#47a9d4',
      600: '#6bbbe0',
      700: '#8fd0eb',
      800: '#b3e4f5',
      900: '#d6f1fa',
    },
    accent: {
      50: '#312e81',
      100: '#3730a3',
      200: '#4338ca',
      300: '#4f46e5',
      400: '#6366f1',
      500: '#818cf8',
      600: '#a5b4fc',
      700: '#c7d2fe',
      800: '#e0e7ff',
      900: '#eef2ff',
    },
    gray: {
      900: '#111111',
      800: '#1a1a1a',
      700: '#242424',
      600: '#2e2e2e',
      500: '#3d3d3d',
      400: '#505050',
      300: '#696969',
      200: '#888888',
      100: '#adadad',
      50: '#d4d4d4',
    },
    light: {
      950: '#f8fafc',
      900: '#f1f5f9',
      800: '#e2e8f0',
      700: '#cbd5e1',
      600: '#94a3b8',
      500: '#64748b',
      400: '#475569',
      300: '#334155',
      200: '#1e293b',
      100: '#0f172a',
    },
  },
};

// Theme-specific color assignments
export const themeColors = {
  'light-orange': {
    // General
    background: colors.light.gray[200],
    foreground: colors.light.dark[900],
    
    // Component colors
    primary: {
      50: colors.orange[50],
      100: colors.orange[100],
      200: colors.orange[200],
      300: colors.orange[300],
      400: colors.orange[400],
      500: colors.orange[500],
      600: colors.orange[600],
      700: colors.orange[700],
      800: colors.orange[800],
      900: colors.orange[900],
    },
    secondary: colors.light.secondary,
    accent: colors.light.accent,
    gray: colors.light.gray,
    success: '#ff9800',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#fb923c',
  },
  
  'light-blue': {
    // General
    background: colors.light.gray[200],
    foreground: colors.light.dark[900],
    
    // Component colors
    primary: {
      50: colors.blue[50],
      100: colors.blue[100],
      200: colors.blue[200],
      300: colors.blue[300],
      400: colors.blue[400],
      500: colors.blue[500],
      600: colors.blue[600],
      700: colors.blue[700],
      800: colors.blue[800],
      900: colors.blue[900],
    },
    secondary: {
      // Use blue tones for secondary colors
      50: '#e0f2fe',
      100: '#bae6fd',
      200: '#7dd3fc',
      300: '#38bdf8',
      400: '#0ea5e9',
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#082f49',
      950: '#082f49',
    },
    accent: {
      // Cyan accent for blue theme
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#164e63',
    },
    gray: colors.light.gray,
    success: '#0ea5e9',
    error: '#ef4444',
    warning: '#eab308',
    info: '#06b6d4',
  },
  
  'dark': {
    // General
    background: colors.dark.gray[800],
    foreground: colors.dark.gray[50],
    
    // Component colors
    primary: {
      50: colors.orange[950],
      100: colors.orange[900],
      200: colors.orange[800],
      300: colors.orange[700],
      400: colors.orange[600],
      500: colors.orange[500], // Keep this color to maintain recognition
      600: colors.orange[400],
      700: colors.orange[300],
      800: colors.orange[200],
      900: colors.orange[100],
    },
    secondary: colors.dark.secondary,
    accent: colors.dark.accent,
    gray: colors.dark.gray,
    success: '#f59e0b',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',
  },
};

// Helper function to get current theme colors
export const getThemeColors = (theme: string = 'light-orange') => {
  return themeColors[theme as keyof typeof themeColors] || themeColors['light-orange'];
};