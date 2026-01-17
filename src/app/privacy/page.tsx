import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Privacy Policy</h1>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-400 text-lg mb-8">
                            Last updated: October 2024
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                                <p className="text-gray-400">
                                    We collect information you provide directly to us, such as when you create an account,
                                    make a booking, register for events, or contact us. This includes your name, email address,
                                    phone number, and payment information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                                <p className="text-gray-400 mb-4">We use the information we collect to:</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Send you technical notices and support messages</li>
                                    <li>Communicate about events, offers, and news</li>
                                    <li>Monitor and analyze trends, usage, and activities</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                                <p className="text-gray-400">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties
                                    without your consent. We may share information with service providers who assist us in
                                    operating our platform, processing payments, or conducting our business.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                                <p className="text-gray-400">
                                    We implement appropriate security measures to protect your personal information against
                                    unauthorized access, alteration, disclosure, or destruction. However, no method of
                                    transmission over the Internet is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                                <p className="text-gray-400">
                                    We use cookies and similar tracking technologies to track activity on our platform and
                                    store certain information. You can instruct your browser to refuse all cookies or indicate
                                    when a cookie is being sent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                                <p className="text-gray-400 mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Rectify inaccurate personal data</li>
                                    <li>Request deletion of your personal data</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                                <p className="text-gray-400">
                                    If you have questions about this Privacy Policy, please contact us at{' '}
                                    <a href="mailto:privacy@devcafe.bd" className="text-primary hover:text-green-400">
                                        privacy@devcafe.bd
                                    </a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
