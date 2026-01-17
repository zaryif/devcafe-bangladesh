import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Terms of Service</h1>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-400 text-lg mb-8">
                            Last updated: October 2024
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p className="text-gray-400">
                                    By accessing or using DevCafe Bangladesh services, you agree to be bound by these Terms
                                    of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Membership</h2>
                                <p className="text-gray-400 mb-4">
                                    Membership plans are subject to availability and may be modified at any time. Members
                                    are responsible for maintaining the confidentiality of their account credentials.
                                </p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Memberships are non-transferable</li>
                                    <li>Monthly plans renew automatically unless cancelled</li>
                                    <li>Cancellations must be made 7 days before renewal</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Code of Conduct</h2>
                                <p className="text-gray-400 mb-4">All members and visitors must:</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Treat others with respect and courtesy</li>
                                    <li>Maintain a professional environment</li>
                                    <li>Keep noise levels appropriate for shared spaces</li>
                                    <li>Not engage in any illegal activities</li>
                                    <li>Respect the property and belongings of others</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Booking Policy</h2>
                                <p className="text-gray-400">
                                    Bookings for meeting rooms and event spaces are subject to availability. Cancellations
                                    made less than 24 hours before the scheduled time may incur a fee. No-shows may result
                                    in restrictions on future bookings.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                                <p className="text-gray-400">
                                    All content on this platform, including text, graphics, logos, and software, is the
                                    property of DevCafe Bangladesh or its content suppliers and is protected by
                                    intellectual property laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                                <p className="text-gray-400">
                                    DevCafe Bangladesh shall not be liable for any loss of belongings, data, or business
                                    opportunities. We provide workspace facilities &quot;as is&quot; and make no warranties of
                                    any kind.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
                                <p className="text-gray-400">
                                    We reserve the right to modify these terms at any time. Continued use of our services
                                    after changes constitutes acceptance of the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                                <p className="text-gray-400">
                                    For questions about these Terms, contact us at{' '}
                                    <a href="mailto:legal@devcafe.bd" className="text-primary hover:text-green-400">
                                        legal@devcafe.bd
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
