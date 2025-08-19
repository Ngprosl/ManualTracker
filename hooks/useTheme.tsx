import { useState, useEffect, useContext, createContext } from 'react';
import { useColorScheme } from 'react-native';

interface Theme {
  colors: {
    background: string;
    card: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
}

const lightTheme: Theme = {
  colors: {
    background: '#f8fafc',
    card: '#ffffff',
    text: '#1f2937',
    textSecondary: '#6b7280',
    primary: '#1e40af',
    primaryLight: '#dbeafe',
    secondary: '#16a34a',
    accent: '#ea580c',
    border: '#e5e7eb',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
};

const darkTheme: Theme = {
  colors: {
    background: '#0f172a',
    card: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    primary: '#3b82f6',
    primaryLight: '#1e3a8a',
    secondary: '#22c55e',
    accent: '#f97316',
    border: '#334155',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
};

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Global theme state
let globalIsDark = false;
let globalSetIsDark: ((value: boolean) => void) | null = null;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(() => {
    // Try to get saved preference, fallback to system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-preference');
      if (saved) {
        return saved === 'dark';
      }
    }
    return systemColorScheme === 'dark';
  });

  // Set global state
  globalIsDark = isDark;
  globalSetIsDark = setIsDark;

  useEffect(() => {
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    theme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context) {
    return context;
  }

  // Fallback for components outside provider
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(() => {
    if (globalSetIsDark && globalIsDark !== undefined) {
      return globalIsDark;
    }
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-preference');
      if (saved) {
        return saved === 'dark';
      }
    }
    return systemColorScheme === 'dark';
  });

  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    if (globalSetIsDark) {
      globalSetIsDark(newValue);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-preference', newValue ? 'dark' : 'light');
    }
  };

  return {
    theme,
    isDark,
    toggleTheme,
  };
}