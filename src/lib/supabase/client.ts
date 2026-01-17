/**
 * =============================================================================
 * SUPABASE CLIENT - DevCafe Bangladesh
 * =============================================================================
 * 
 * Configures and exports Supabase client for browser-side usage.
 * Uses the SSR package for proper Next.js App Router support.
 * 
 * SETUP:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Copy credentials to .env.local:
 *    - NEXT_PUBLIC_SUPABASE_URL
 *    - NEXT_PUBLIC_SUPABASE_ANON_KEY
 * 
 * SECURITY NOTES:
 * - The anon key is safe for client-side use when RLS is enabled
 * - Never use the service_role key in client code
 * - Always enable Row Level Security on your tables
 * =============================================================================
 */

import { createBrowserClient } from '@supabase/ssr';

// ============================================================================
// CLIENT CREATION
// ============================================================================

/**
 * Create a Supabase client for browser-side usage.
 * 
 * Use this in client components:
 * ```tsx
 * const supabase = createClient();
 * const { data, error } = await supabase.from('table').select('*');
 * ```
 * 
 * @returns Supabase browser client instance
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}

// ============================================================================
// SAFE CLIENT GETTER
// ============================================================================

/**
 * Get Supabase client only if properly configured.
 * 
 * Returns null if environment variables are not set,
 * allowing the app to run with mock data in development.
 * 
 * Usage:
 * ```tsx
 * const supabase = getSupabaseClient();
 * if (supabase) {
 *     // Use real Supabase
 *     const { data } = await supabase.from('profiles').select('*');
 * } else {
 *     // Fall back to mock data
 *     return MOCK_DATA;
 * }
 * ```
 * 
 * @returns Supabase client or null if not configured
 */
export function getSupabaseClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Check if credentials are set and not placeholder values
    if (!url || !key || url === 'your_supabase_url') {
        return null;
    }

    return createClient();
}
