/**
 * =============================================================================
 * ENVIRONMENT VALIDATION - DevCafe Bangladesh
 * =============================================================================
 * 
 * Validates and exports environment variables with type safety.
 * Use this instead of directly accessing process.env.
 * 
 * USAGE:
 * ```tsx
 * import { env, isSupabaseConfigured } from '@/lib/env';
 * 
 * if (isSupabaseConfigured()) {
 *     console.log('Supabase URL:', env.SUPABASE_URL);
 * }
 * ```
 * 
 * SECURITY:
 * - Client-safe variables are prefixed with NEXT_PUBLIC_
 * - Server-only variables should never be exported to client components
 * =============================================================================
 */

// ============================================================================
// PUBLIC ENVIRONMENT VARIABLES (Safe for client-side)
// ============================================================================

/**
 * Public environment configuration.
 * These are exposed to the browser and should not contain secrets.
 */
export const env = {
    /** Supabase project URL */
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',

    /** Supabase anonymous key (safe with RLS) */
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',

    /** Whether to use mock authentication */
    USE_MOCK_AUTH: process.env.NEXT_PUBLIC_USE_MOCK_AUTH === 'true',

    /** Google Analytics ID */
    GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',

    /** Current environment */
    NODE_ENV: process.env.NODE_ENV || 'development',

    /** Is production environment */
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
} as const;

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Check if Supabase is properly configured.
 * Returns false if using placeholder values or empty strings.
 */
export function isSupabaseConfigured(): boolean {
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = env;

    // Check for empty or placeholder values
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return false;
    }

    // Check for common placeholder patterns
    const placeholders = ['your_supabase_url', 'your_supabase_anon_key', 'placeholder'];
    if (placeholders.some(p => SUPABASE_URL.includes(p) || SUPABASE_ANON_KEY.includes(p))) {
        return false;
    }

    return true;
}

/**
 * Validate required environment variables.
 * Call this in development to catch missing config early.
 * 
 * @param required - Array of required variable names
 * @throws Error if any required variables are missing
 */
export function validateEnv(required: (keyof typeof env)[]): void {
    const missing = required.filter(key => !env[key]);

    if (missing.length > 0) {
        throw new Error(
            `Missing required environment variables:\n${missing.map(k => `  - ${k}`).join('\n')}\n\n` +
            `Copy .env.local.example to .env.local and fill in the values.`
        );
    }
}

/**
 * Get environment info for debugging.
 * Safe to log - only includes public information.
 */
export function getEnvInfo() {
    return {
        nodeEnv: env.NODE_ENV,
        isProduction: env.IS_PRODUCTION,
        useMockAuth: env.USE_MOCK_AUTH,
        supabaseConfigured: isSupabaseConfigured(),
        hasAnalytics: Boolean(env.GA_ID),
    };
}

// ============================================================================
// SERVER-ONLY EXPORTS (Import only in server components/actions)
// ============================================================================

/**
 * Get server-only environment variables.
 * 
 * ⚠️ IMPORTANT: Only import this in:
 * - API routes
 * - Server actions  
 * - Server components
 * 
 * Never import in client components!
 */
export function getServerEnv() {
    // This check prevents accidental client-side usage
    if (typeof window !== 'undefined') {
        throw new Error('getServerEnv() can only be called on the server');
    }

    return {
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
    };
}
