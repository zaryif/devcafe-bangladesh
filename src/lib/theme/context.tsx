'use client';

/**
 * =============================================================================
 * THEME CONTEXT - DevCafe Bangladesh
 * =============================================================================
 * 
 * Manages application-wide theme state (light/dark mode).
 * 
 * FEATURES:
 * - Persists user preference to localStorage
 * - Applies theme class to document for CSS variable switching
 * - Prevents flash of wrong theme on page load
 * 
 * USAGE:
 * ```tsx
 * import { useTheme } from '@/lib/theme/context';
 * 
 * function Component() {
 *     const { theme, toggleTheme } = useTheme();
 *     const isDark = theme === 'dark';
 *     return <button onClick={toggleTheme}>Switch to {isDark ? 'light' : 'dark'}</button>;
 * }
 * ```
 * =============================================================================
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Available theme options */
type Theme = 'light' | 'dark';

/** Theme context value interface */
interface ThemeContextType {
    /** Current active theme */
    theme: Theme;
    /** Toggle between light and dark */
    toggleTheme: () => void;
    /** Set a specific theme */
    setTheme: (theme: Theme) => void;
}

/** LocalStorage key for persisting theme preference */
const STORAGE_KEY = 'devcafe-theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ============================================================================
// THEME PROVIDER COMPONENT
// ============================================================================

/**
 * ThemeProvider - Wraps the application to provide theme context.
 * 
 * Place this in layout.tsx, inside AuthProvider:
 * ```tsx
 * <AuthProvider>
 *   <ThemeProvider>
 *     {children}
 *   </ThemeProvider>
 * </AuthProvider>
 * ```
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    // Default to dark theme
    const [theme, setThemeState] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage on mount
    useEffect(() => {
        setMounted(true);

        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;

        if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
            setThemeState(savedTheme);
            document.documentElement.classList.add(savedTheme);
            document.documentElement.classList.remove(savedTheme === 'dark' ? 'light' : 'dark');
        } else {
            // Default to dark theme
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Apply theme changes to document and localStorage
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        // Update document class for CSS variable switching
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        // Persist to localStorage
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme, mounted]);

    /** Toggle between dark and light themes */
    const toggleTheme = () => {
        setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
    };

    /** Set a specific theme directly */
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// ============================================================================
// HOOK
// ============================================================================

/**
 * useTheme - Hook to access theme context.
 * 
 * Returns default values if used outside provider (for SSR safety).
 * 
 * @returns Theme context with current theme and toggle/set methods
 */
export function useTheme() {
    const context = useContext(ThemeContext);

    // Return defaults for SSR or if outside provider
    if (context === undefined) {
        return {
            theme: 'dark' as Theme,
            toggleTheme: () => { },
            setTheme: () => { },
        };
    }

    return context;
}
