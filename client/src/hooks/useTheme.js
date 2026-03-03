import { useEffect, useState } from 'react';

/**
 * Enhanced Theme Hook for Tailwind CSS v4 / v3
 * Features:
 * - Syncs with manual toggles and system preferences
 * - Handles 'color-scheme' for professional UI (scrollbars, system components)
 * - Listens for system preference changes in real-time
 * - Multi-tab synchronization
 * - Hydration-safe initialization
 */
export const useTheme = () => {
    // Initial State Determination
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';

        // 1. Check for manual user choice
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') return saved;

        // 2. Check if the index.html blocking script already applied a theme
        if (document.documentElement.classList.contains('dark')) return 'dark';

        // 3. Fallback to System Preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Update DOM classes for Tailwind "dark:" variants and custom CSS
        if (theme === 'dark') {
            root.classList.add('dark');
            root.style.colorScheme = 'dark'; // Notifies browser of theme for scrollbars/forms
            root.setAttribute('data-theme', 'dark');
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
            root.setAttribute('data-theme', 'light');
        }

        // Persist choice to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Handle System Preference Changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemChange = (e) => {
            // Only follow system change if user hasn't made a manual choice
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleSystemChange);
        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, []);

    // Sync across browser tabs
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
                setTheme(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    /**
     * Toggles between dark and light themes
     */
    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return { theme, themeMode: theme, toggleTheme };
};
