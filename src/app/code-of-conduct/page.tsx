import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, FileText } from 'lucide-react';

export default function CodeOfConductPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Shield className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold text-white">Code of Conduct</h1>
                            <p className="text-gray-500">Our community guidelines and standards</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-400 mb-8">
                            DevCafe is dedicated to providing a harassment-free community experience for everyone, regardless of gender, gender identity, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices.
                        </p>

                        <section className="bg-surface rounded-2xl border border-gray-800 p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Our Standards</h2>
                            <p className="text-gray-400 mb-4">Examples of behavior that contributes to a positive environment:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    Using welcoming and inclusive language
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    Being respectful of differing viewpoints and experiences
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    Gracefully accepting constructive criticism
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    Focusing on what is best for the community
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    Showing empathy towards other community members
                                </li>
                            </ul>
                        </section>

                        <section className="bg-surface rounded-2xl border border-gray-800 p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Unacceptable Behavior</h2>
                            <p className="text-gray-400 mb-4">Examples of unacceptable behavior include:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    Harassment, intimidation, or discrimination in any form
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    Trolling, insulting/derogatory comments, and personal attacks
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    Public or private harassment
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    Publishing others&apos; private information without consent
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">✗</span>
                                    Other conduct which could reasonably be considered inappropriate
                                </li>
                            </ul>
                        </section>

                        <section className="bg-surface rounded-2xl border border-gray-800 p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Enforcement</h2>
                            <p className="text-gray-400">
                                Community leaders are responsible for clarifying and enforcing our standards and will take appropriate and fair corrective action in response to any behavior deemed inappropriate, threatening, offensive, or harmful.
                            </p>
                            <p className="text-gray-400 mt-4">
                                Violations may result in a warning, temporary ban, or permanent expulsion from the community spaces.
                            </p>
                        </section>

                        <section className="bg-surface rounded-2xl border border-gray-800 p-6 mb-8">
                            <h2 className="text-xl font-bold text-white mb-4">Reporting</h2>
                            <p className="text-gray-400">
                                If you experience or witness unacceptable behavior, please report it by contacting our team at{' '}
                                <a href="mailto:safety@devcafe.bd" className="text-primary hover:text-green-400">safety@devcafe.bd</a>.
                            </p>
                            <p className="text-gray-400 mt-4">
                                All complaints will be reviewed and investigated promptly and fairly. We are committed to respecting the privacy and security of the reporter of any incident.
                            </p>
                        </section>

                        <p className="text-gray-500 text-sm">
                            This Code of Conduct is adapted from the Contributor Covenant, version 2.1.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link href="/privacy" className="text-primary hover:text-green-400 flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-primary hover:text-green-400 flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
