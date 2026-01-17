'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Coffee, ArrowLeft, Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-surface-dark flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-8">
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="font-display text-2xl font-bold">
                            <span className="text-white">Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </Link>

                    {!submitted ? (
                        <>
                            <h1 className="text-3xl font-display font-bold text-white mb-2">Forgot Password?</h1>
                            <p className="text-gray-400">
                                No worries! Enter your email and we&apos;ll send you reset instructions.
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h1 className="text-3xl font-display font-bold text-white mb-2">Check Your Email</h1>
                            <p className="text-gray-400">
                                We&apos;ve sent a password reset link to <span className="text-primary">{email}</span>
                            </p>
                        </>
                    )}
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Send Reset Link
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-6">
                        <p className="text-gray-400 text-center text-sm">
                            Didn&apos;t receive the email? Check your spam folder or{' '}
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-primary hover:text-green-400"
                            >
                                try another email
                            </button>
                        </p>
                    </div>
                )}

                <div className="text-center mt-6">
                    <Link
                        href="/login"
                        className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
