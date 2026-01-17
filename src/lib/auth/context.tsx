'use client';

/**
 * =============================================================================
 * AUTHENTICATION CONTEXT - DevCafe Bangladesh
 * =============================================================================
 * 
 * This file provides authentication state management for the entire application.
 * 
 * CURRENT STATUS: Mock Implementation
 * This is a development-only mock that simulates authentication.
 * 
 * TODO: SUPABASE INTEGRATION
 * To integrate with Supabase, replace the mock functions with actual Supabase
 * auth methods. See README.md for detailed instructions.
 * 
 * SECURITY NOTES:
 * - Never store sensitive tokens in localStorage (use httpOnly cookies)
 * - Always validate sessions on the server side
 * - Implement proper rate limiting on auth endpoints
 * =============================================================================
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * User type matching Supabase auth user structure.
 * When integrating Supabase, this should match the auth.users table.
 */
export interface User {
    id: string;
    email: string;
    user_metadata: {
        full_name?: string;
        avatar_url?: string;
        role?: 'member' | 'pro' | 'startup' | 'admin';
    };
}

/**
 * Extended member profile with DevCafe-specific fields.
 * This corresponds to a 'profiles' table in Supabase.
 */
export interface MemberProfile {
    id: string;
    user_id: string;
    full_name: string;
    avatar_url: string;
    bio: string;
    role: string;
    skills: string[];
    member_since: string;
    membership_tier: 'free' | 'pro' | 'startup';
    membership_expires?: string;
}

/**
 * Auth context type defining all available auth methods.
 */
interface AuthContextType {
    user: User | null;
    profile: MemberProfile | null;
    isLoading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signInWithGithub: () => Promise<void>;
    signUp: (email: string, password: string, fullName: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================================================
// MOCK DATA (Development Only)
// ============================================================================
// TODO: SUPABASE - Remove these mocks when integrating real authentication

const MOCK_USER: User = {
    id: 'mock-user-1',
    email: 'alex@devcafe.bd',
    user_metadata: {
        full_name: 'Alex Chen',
        avatar_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        role: 'pro',
    },
};

const MOCK_PROFILE: MemberProfile = {
    id: 'profile-1',
    user_id: 'mock-user-1',
    full_name: 'Alex Chen',
    avatar_url: MOCK_USER.user_metadata.avatar_url!,
    bio: 'Full-stack developer passionate about building scalable applications.',
    role: 'Senior Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    member_since: '2021-11-01',
    membership_tier: 'pro',
    membership_expires: '2024-12-20',
};

// ============================================================================
// AUTH PROVIDER COMPONENT
// ============================================================================

/**
 * AuthProvider - Wraps the application to provide authentication context.
 * 
 * Usage:
 * ```tsx
 * // In layout.tsx
 * <AuthProvider>
 *   {children}
 * </AuthProvider>
 * ```
 * 
 * TODO: SUPABASE - Replace mock implementations with:
 * - supabase.auth.signInWithPassword()
 * - supabase.auth.signInWithOAuth()
 * - supabase.auth.signUp()
 * - supabase.auth.signOut()
 * - supabase.auth.onAuthStateChange()
 */
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<MemberProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        // TODO: SUPABASE - Replace with supabase.auth.getSession()
        const storedAuth = localStorage.getItem('devcafe_auth');
        if (storedAuth) {
            setUser(MOCK_USER);
            setProfile(MOCK_PROFILE);
        }
        setIsLoading(false);
    }, []);

    /**
     * Sign in with email and password.
     * TODO: SUPABASE - Replace with supabase.auth.signInWithPassword({ email, password })
     */
    const signIn = async (email: string, password: string) => {
        setIsLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock successful login
        setUser(MOCK_USER);
        setProfile(MOCK_PROFILE);
        localStorage.setItem('devcafe_auth', 'true');
        setIsLoading(false);
    };

    /**
     * Sign in with Google OAuth.
     * TODO: SUPABASE - Replace with supabase.auth.signInWithOAuth({ provider: 'google' })
     */
    const signInWithGoogle = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser(MOCK_USER);
        setProfile(MOCK_PROFILE);
        localStorage.setItem('devcafe_auth', 'true');
        setIsLoading(false);
    };

    /**
     * Sign in with GitHub OAuth.
     * TODO: SUPABASE - Replace with supabase.auth.signInWithOAuth({ provider: 'github' })
     */
    const signInWithGithub = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser(MOCK_USER);
        setProfile(MOCK_PROFILE);
        localStorage.setItem('devcafe_auth', 'true');
        setIsLoading(false);
    };

    /**
     * Create a new account.
     * TODO: SUPABASE - Replace with supabase.auth.signUp({ email, password, options: { data: { full_name } } })
     */
    const signUp = async (email: string, password: string, fullName: string) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser({
            ...MOCK_USER,
            email,
            user_metadata: { ...MOCK_USER.user_metadata, full_name: fullName },
        });
        setProfile({ ...MOCK_PROFILE, full_name: fullName });
        localStorage.setItem('devcafe_auth', 'true');
        setIsLoading(false);
    };

    /**
     * Sign out the current user.
     * TODO: SUPABASE - Replace with supabase.auth.signOut()
     */
    const signOut = async () => {
        setUser(null);
        setProfile(null);
        localStorage.removeItem('devcafe_auth');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                profile,
                isLoading,
                signIn,
                signInWithGoogle,
                signInWithGithub,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// ============================================================================
// HOOK
// ============================================================================

/**
 * useAuth - Hook to access authentication context.
 * 
 * Usage:
 * ```tsx
 * const { user, signIn, signOut } = useAuth();
 * ```
 * 
 * @throws Error if used outside of AuthProvider
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
