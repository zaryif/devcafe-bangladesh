'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/context';
import { Coffee, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { signIn, signInWithGoogle, signInWithGithub } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signIn(email, password);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            await signInWithGoogle();
            router.push('/dashboard');
        } catch (error) {
            console.error('Google login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGithubLogin = async () => {
        setIsLoading(true);
        try {
            await signInWithGithub();
            router.push('/dashboard');
        } catch (error) {
            console.error('GitHub login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-bg-darker">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0"
                    alt="Developer workspace"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/80 to-bg-darker/95" />

                <div className="relative z-10 flex flex-col justify-end p-12">
                    {/* Logo */}
                    <Link href="/" className="absolute top-12 left-12 flex items-center gap-2">
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="font-display text-2xl font-bold">
                            <span className="text-white">Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </Link>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                            &quot;Brewing code & community in a space designed for{' '}
                            <span className="text-primary">focus</span>.&quot;
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Join 10,000+ developers building the future.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface-dark">
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="font-display text-2xl font-bold">
                            <span className="text-white">Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-display font-bold text-white">Welcome back</h1>
                        <p className="text-gray-400 mt-2">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email or Username
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-4 pr-10"
                                    required
                                />
                                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-4 pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary focus:ring-offset-0"
                                />
                                <span className="text-sm text-gray-400">Remember me</span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-primary hover:text-green-400 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign in
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-surface-dark text-gray-500 uppercase tracking-wider">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-xl transition-colors disabled:opacity-50"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Google
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            disabled={isLoading}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl border border-gray-600 transition-colors disabled:opacity-50"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            GitHub
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400">
                        New to DevCafe?{' '}
                        <Link
                            href="/signup"
                            className="text-primary hover:text-green-400 font-medium transition-colors"
                        >
                            Create an account
                        </Link>
                    </p>

                    {/* Footer */}
                    <p className="text-center text-xs text-gray-600 pt-4">
                        © {new Date().getFullYear()} DevCafe Community. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
