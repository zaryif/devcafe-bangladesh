'use client';

/**
 * =============================================================================
 * NAVBAR COMPONENT - DevCafe Bangladesh
 * =============================================================================
 * 
 * Main navigation component with responsive design and theme toggle.
 * 
 * FEATURES:
 * - Responsive mobile menu
 * - Theme toggle (dark/light mode)
 * - Dynamic styling based on current theme
 * - Auth-aware navigation (shows Dashboard/Login based on user state)
 * 
 * STYLING:
 * Uses conditional classes based on theme context.
 * When adding new nav items, follow the existing pattern for theme support.
 * =============================================================================
 */

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/auth/context';
import { useTheme } from '@/lib/theme/context';
import { Menu, X, Coffee, Sun, Moon } from 'lucide-react';

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Main navigation links.
 * Add new pages here to include them in the navbar.
 */
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/community', label: 'Community' },
    { href: '/events', label: 'Events' },
    { href: '/projects', label: 'Projects' },
];

// ============================================================================
// NAVBAR COMPONENT
// ============================================================================

export default function Navbar() {
    // Mobile menu state
    const [isOpen, setIsOpen] = useState(false);

    // Theme and auth contexts
    const { theme, toggleTheme } = useTheme();
    const { user } = useAuth();

    // Convenience variable for theme checking
    const isDark = theme === 'dark';

    return (
        <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${isDark
            ? 'bg-bg-dark/90 border-gray-800'
            : 'bg-white/95 border-gray-200 shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* ========== LOGO ========== */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <Coffee className={`w-8 h-8 group-hover:-translate-y-1 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-800'
                                }`} />
                        </div>
                        <span className="font-display text-2xl font-bold tracking-wide">
                            <span className={isDark ? 'text-white' : 'text-gray-800'}>Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </Link>

                    {/* ========== DESKTOP NAVIGATION ========== */}
                    <div className="hidden md:flex items-baseline space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isDark
                                    ? 'text-gray-400 hover:text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* ========== RIGHT SIDE ACTIONS ========== */}
                    <div className="hidden md:flex items-center gap-5">

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`relative w-16 h-8 rounded-full shadow-inner transition-colors focus:ring-2 focus:ring-primary/50 ${isDark
                                ? 'bg-gray-800 border-2 border-gray-700'
                                : 'bg-gray-200 border-2 border-gray-300'
                                }`}
                            aria-label="Toggle Theme"
                        >
                            <div
                                className={`absolute top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isDark
                                    ? 'translate-x-8 bg-primary'
                                    : 'translate-x-1 bg-yellow-400'
                                    }`}
                            >
                                {isDark ? (
                                    <Moon className="w-3.5 h-3.5 text-white" />
                                ) : (
                                    <Sun className="w-3.5 h-3.5 text-yellow-700" />
                                )}
                            </div>
                        </button>

                        {/* Auth-aware CTA Button */}
                        {user ? (
                            <Link
                                href="/dashboard"
                                className="bg-primary hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-primary hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                Reserve a Table
                            </Link>
                        )}
                    </div>

                    {/* ========== MOBILE MENU BUTTON ========== */}
                    <button
                        className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isDark
                            ? 'bg-surface text-gray-400 hover:text-white hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                            }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* ========== MOBILE MENU ========== */}
            {isOpen && (
                <div className={`md:hidden border-t ${isDark ? 'bg-surface border-gray-800' : 'bg-white border-gray-200'
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Navigation Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isDark
                                    ? 'text-gray-400 hover:text-primary hover:bg-gray-800'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${isDark
                                ? 'text-gray-400 hover:bg-gray-800'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <span>Theme</span>
                            <div className="flex items-center gap-2">
                                {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-500" />}
                                <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
                            </div>
                        </button>

                        {/* Mobile CTA */}
                        <div className="pt-4 pb-2 px-3">
                            {user ? (
                                <Link
                                    href="/dashboard"
                                    className="block w-full text-center bg-primary hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="block w-full text-center bg-primary hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Reserve a Table
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
