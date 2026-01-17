import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Users, Zap, Award, ArrowRight, CheckCircle } from 'lucide-react';

const startups = [
    {
        name: 'ShopLocal BD',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        tagline: 'Hyperlocal e-commerce platform',
        founded: '2023',
        raised: '৳5M',
    },
    {
        name: 'PayBangla',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        tagline: 'B2B payment infrastructure',
        founded: '2022',
        raised: '৳12M',
    },
    {
        name: 'AgriTech BD',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        tagline: 'Smart farming solutions',
        founded: '2024',
        raised: 'Seed',
    },
];

const benefits = [
    'Dedicated team desks',
    'Priority event access',
    '24/7 workspace access',
    'Meeting room credits',
    'Investor introductions',
    'Mentor matching',
    'AWS/GCP credits',
    'Legal support',
];

export default function StartupsPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Rocket className="w-4 h-4" />
                            For Startups
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Launch Your Startup at DevCafe
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Join our startup program and get access to workspace, mentorship, investor network, and a community of founders.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">25+</span>
                            <span className="text-gray-500">Startups Launched</span>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">৳50M+</span>
                            <span className="text-gray-500">Funding Raised</span>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">15</span>
                            <span className="text-gray-500">Active Mentors</span>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">5</span>
                            <span className="text-gray-500">Investor Partners</span>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">
                                What You Get
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors mt-8"
                            >
                                Apply for Startup Program
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0"
                                alt="Startup workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Featured Startups */}
                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
                            Born at DevCafe
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {startups.map((startup) => (
                                <div
                                    key={startup.name}
                                    className="bg-surface rounded-2xl border border-gray-800 p-6 text-center hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-800">
                                        <Image src={startup.logo} alt={startup.name} width={64} height={64} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-bold text-white mb-1">{startup.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{startup.tagline}</p>
                                    <div className="flex justify-center gap-4 text-sm">
                                        <span className="text-gray-400">Founded: <span className="text-white">{startup.founded}</span></span>
                                        <span className="text-gray-400">Raised: <span className="text-primary">{startup.raised}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pricing */}
                    <section className="mt-16">
                        <div className="bg-primary/10 rounded-2xl border border-primary/30 p-8 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Startup Team Plan</h2>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">৳8,000</span>
                                <span className="text-gray-500">/month for up to 5 members</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                                Perfect for early-stage startups. Includes dedicated desks, meeting room hours, and all Pro benefits.
                            </p>
                            <Link
                                href="/checkout"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
