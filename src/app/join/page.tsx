'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, ArrowRight, Check, Users, Calendar, Rocket, Mail, Github, Chrome } from 'lucide-react';

const benefits = [
    'Access to all community events',
    'Project showcase gallery',
    'Member-only Discord channels',
    'Priority workshop registration',
    'Networking opportunities',
    'Mentorship connections',
];

export default function JoinPage() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Redirect to signup with prefilled email
        window.location.href = `/signup?email=${encodeURIComponent(email)}&name=${encodeURIComponent(fullName)}`;
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="font-display text-xl font-bold">
                            <span className="text-white">Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </Link>
                    <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                        Already a member? Sign in
                    </Link>
                </div>
            </header>

            <main className="pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Users className="w-4 h-4" />
                                2,500+ Members & Growing
                            </span>

                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Join the DevCafe<br />
                                <span className="text-primary">Community</span>
                            </h1>

                            <p className="text-gray-400 text-lg mb-8">
                                Connect with Bangladesh&apos;s most passionate developers, showcase your projects, and accelerate your career.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            {/* Stats */}
                            <div className="flex gap-8">
                                <div>
                                    <span className="block text-2xl font-bold text-white">500+</span>
                                    <span className="text-gray-500 text-sm">Projects Shared</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-white">100+</span>
                                    <span className="text-gray-500 text-sm">Events Held</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-white">50+</span>
                                    <span className="text-gray-500 text-sm">Startups Launched</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Sign Up Form */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                            <h2 className="text-2xl font-bold text-white text-center mb-2">Get Started Free</h2>
                            <p className="text-gray-500 text-center mb-8">No credit card required</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Join the Community
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-800" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-surface text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </button>
                                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
                                    <Chrome className="w-5 h-5" />
                                    Google
                                </button>
                            </div>

                            <p className="text-center text-gray-500 text-xs mt-6">
                                By joining, you agree to our{' '}
                                <Link href="/terms" className="text-primary hover:text-green-400">Terms</Link>
                                {' '}and{' '}
                                <Link href="/privacy" className="text-primary hover:text-green-400">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
