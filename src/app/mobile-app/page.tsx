import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Wifi, Users, Calendar, Check, ArrowRight, QrCode } from 'lucide-react';

const features = [
    { icon: Smartphone, title: 'Digital Member ID', description: 'Access your membership profile and ID card anytime.' },
    { icon: Users, title: 'Networking on the go', description: 'Discover and connect with community members.' },
    { icon: Calendar, title: 'Instant Booking', description: 'Reserve spots for workshops with a single tap.' },
];

export default function MobileAppPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Phone Mockups */}
                        <div className="relative h-[500px] order-2 lg:order-1">
                            <div className="absolute left-0 top-10 w-48 h-96 bg-gray-800 rounded-3xl border-4 border-gray-700 overflow-hidden shadow-2xl transform -rotate-6">
                                <div className="p-4">
                                    <div className="w-full h-8 bg-gray-700 rounded mb-4" />
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="flex gap-2">
                                                <div className="w-10 h-10 bg-gray-700 rounded-lg" />
                                                <div className="flex-1 space-y-1">
                                                    <div className="w-3/4 h-3 bg-gray-700 rounded" />
                                                    <div className="w-1/2 h-2 bg-gray-600 rounded" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/4 top-0 w-56 h-[450px] bg-surface rounded-3xl border-4 border-primary/50 overflow-hidden shadow-2xl z-10">
                                <div className="p-4 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mt-8 mb-4">
                                        <Users className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="w-32 h-4 bg-primary/30 rounded mx-auto mb-2" />
                                        <div className="w-24 h-3 bg-gray-700 rounded mx-auto" />
                                    </div>
                                    <div className="w-32 h-32 bg-gray-800 rounded-xl flex items-center justify-center">
                                        <QrCode className="w-16 h-16 text-primary/50" />
                                    </div>
                                    <div className="mt-4 text-xs text-gray-500">DEVELOPER MEMBER</div>
                                </div>
                            </div>
                            <div className="absolute right-0 top-20 w-48 h-96 bg-gray-800 rounded-3xl border-4 border-gray-700 overflow-hidden shadow-2xl transform rotate-6">
                                <div className="p-4">
                                    <div className="w-full h-40 bg-gray-700 rounded-xl mb-4" />
                                    <div className="space-y-2">
                                        <div className="w-full h-3 bg-gray-700 rounded" />
                                        <div className="w-3/4 h-3 bg-gray-600 rounded" />
                                        <div className="w-1/2 h-3 bg-gray-600 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                NOW AVAILABLE V2.0
                            </span>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                The DevCafe Experience in{' '}
                                <span className="text-primary">Your Pocket</span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-8">
                                Connect with the best developers in Bangladesh, access your Digital ID instantly, and manage your workshops on the go.
                            </p>

                            <div className="space-y-4 mb-8">
                                {features.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Check className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{feature.title}</h3>
                                            <p className="text-gray-500 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="text-sm font-bold">App Store</div>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19 0 .49-.24.91-.58 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.28 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">GET IT ON</div>
                                        <div className="text-sm font-bold">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* SMS Link Section */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <QrCode className="w-12 h-12 text-primary" />
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                    SCAN TO INSTALL
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Get the link on your phone</h2>
                                <p className="text-gray-400 mb-4">
                                    Prefer a direct link? Enter your number and we&apos;ll text you the download URL immediately.
                                </p>
                                <div className="flex gap-3">
                                    <input
                                        type="tel"
                                        placeholder="+880 1XXX-XXXXXX"
                                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                                    />
                                    <button className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                                        Send Link
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Standard SMS rates may apply. We respect your privacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
