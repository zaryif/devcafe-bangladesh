/**
 * =============================================================================
 * ROOT LAYOUT - DevCafe Bangladesh
 * =============================================================================
 * 
 * This is the root layout for the entire Next.js application.
 * All pages are wrapped with this layout.
 * 
 * PROVIDERS (in order):
 * 1. ThemeProvider - Manages dark/light theme state
 * 2. AuthProvider  - Manages user authentication state
 * 
 * FONTS:
 * - Inter: Primary sans-serif for body text
 * - Oswald: Display font for headings
 * 
 * NOTE: suppressHydrationWarning is needed on <html> because theme
 * classes are applied client-side after hydration.
 * =============================================================================
 */

import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/context";
import { ThemeProvider } from "@/lib/theme/context";

// ============================================================================
// FONT CONFIGURATION
// ============================================================================

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
});

// ============================================================================
// METADATA (SEO)
// ============================================================================

export const metadata: Metadata = {
    title: "DevCafe Bangladesh | Where Code Meets Coffee & Ideas",
    description:
        "Dhaka's premier tech hub for developers, creators, and innovators. Coffee, code, and community under one roof.",
    keywords: ["coworking", "developers", "dhaka", "bangladesh", "tech hub", "coffee", "community"],
};

// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${oswald.variable} font-sans antialiased`}
            >
                {/* 
                    Provider hierarchy:
                    - ThemeProvider wraps everything for theme access
                    - AuthProvider provides authentication state
                */}
                <ThemeProvider>
                    <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
