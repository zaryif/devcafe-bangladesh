'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Users, Rocket, ArrowRight, Calendar, Check } from 'lucide-react';

const consultingServices = [
    {
        title: 'Code Review & Fix',
        description: 'Need a second pair of eyes?Get an expert developer to review or troubleshoot your codebase.',
        price: '৳49',
        unit: '/hour',
        features: ['Immediate availability', 'Code walkthrough', 'Language-agnostic support'],
        cta: 'Book a Slot',
        featured: false,
    },
    {
        title: 'Architecture Consult',
        description: 'Planning a new feature or scaling up? Let\'s discuss system design together.',
        price: '৳120',
        unit: '/session',
        features: ['2-hour intensive session', 'Diagram output', 'Scalability roadmap', 'Tech stack selection'],
        cta: 'Schedule Consult',
        featured: true,
    },
    {
        title: 'MVP Development',
        description: 'Need to launch fast?Let us help you build and iterate on your MVP for your startup.',
        price: 'Custom',
        unit: '',
        features: ['End-to-end development', 'Weekly sprints', 'Launch support'],
        cta: 'Get a Quote',
        featured: false,
    },
];

const coachingPrograms = [
    {
        title: 'Vibe Coding',
        description: 'Learn to write code that fast, high-quality - LoFi style. Fundamentals in JavaScript, modern workflows.',
        date: 'Oct 18, 2025',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        level: 'Beginner Friendly',
    },
    {
        title: 'System Design',
        description: 'Interactive workshops on how to design distributed systems, APIs, caching and more.',
        date: 'Nov 05, 2025',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        level: 'Intermediate',
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#f5f0e8]">
            {/* Custom light navbar for this page */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-display text-xl font-bold text-gray-900">DevCafe</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <Link href="/menu" className="hover:text-gray-900">Menu</Link>
                        <Link href="/services" className="text-[#0f9f5d] font-medium">Services</Link>
                        <Link href="/community" className="hover:text-gray-900">Community</Link>
                    </nav>
                    <Link href="/booking" className="bg-[#0f9f5d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                        Book a Table
                    </Link>
                </div>
            </header>

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <span className="text-[#0f9f5d] text-sm font-medium uppercase tracking-wider">Where Code & Coffee Collide</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-4">
                            Expert Support for<br />
                            <span className="text-[#C4A35A]">Developers & Startups</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you&apos;re stuck on a bug, scaling your architecture, or looking to level up your skills, DevCafe is more than just coffee — it&apos;s your growth partner.
                        </p>
                        <div className="flex justify-center gap-4 mt-8">
                            <Link href="#consulting" className="bg-[#0f9f5d] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center gap-2">
                                Get Help
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="#coaching" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors">
                                Start Learning
                            </Link>
                        </div>
                    </div>

                    {/* Developer Consulting */}
                    <section id="consulting" className="mb-20">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-display font-bold text-gray-900">Developer Help & Consultancy</h2>
                            <p className="text-gray-600">On-demand technical expertise when you need it most.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {consultingServices.map((service) => (
                                <div
                                    key={service.title}
                                    className={`rounded-2xl p-6 ${service.featured
                                            ? 'bg-[#C4A35A] text-white'
                                            : 'bg-white border border-gray-200'
                                        }`}
                                >
                                    <h3 className={`text-lg font-bold mb-2 ${service.featured ? 'text-white' : 'text-gray-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm mb-4 ${service.featured ? 'text-white/80' : 'text-gray-600'}`}>
                                        {service.description}
                                    </p>
                                    <div className="mb-4">
                                        <span className={`text-3xl font-bold ${service.featured ? 'text-white' : 'text-[#0f9f5d]'}`}>
                                            {service.price}
                                        </span>
                                        <span className={service.featured ? 'text-white/70' : 'text-gray-500'}>
                                            {service.unit}
                                        </span>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm">
                                                <Check className={`w-4 h-4 ${service.featured ? 'text-white' : 'text-[#0f9f5d]'}`} />
                                                <span className={service.featured ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full py-3 rounded-lg font-medium transition-colors ${service.featured
                                                ? 'bg-white text-[#C4A35A] hover:bg-gray-100'
                                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        {service.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Coaching & Learning */}
                    <section id="coaching" className="mb-20">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-display font-bold text-gray-900">Coaching & Learning</h2>
                                <p className="text-gray-600">Join our specialized tracks designed to fast-track your career.</p>
                            </div>
                            <Link href="/workshops" className="text-[#0f9f5d] font-medium hover:text-green-600 flex items-center gap-1">
                                View full curriculum
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coachingPrograms.map((program) => (
                                <div key={program.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                    <div className="relative h-48">
                                        <Image src={program.image} alt={program.title} fill className="object-cover" />
                                        <span className="absolute top-4 left-4 bg-[#C4A35A] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {program.level}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {program.date}
                                            </span>
                                            <button className="text-[#0f9f5d] font-medium hover:text-green-600">
                                                Register Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-gray-200">
                        <div className="text-center">
                            <span className="text-3xl font-bold text-gray-900">500+</span>
                            <span className="block text-gray-600 text-sm">Developers Helped</span>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl font-bold text-gray-900">50+</span>
                            <span className="block text-gray-600 text-sm">Workshops Held</span>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl font-bold text-gray-900">24/7</span>
                            <span className="block text-gray-600 text-sm">Community Access</span>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl font-bold text-gray-900">100%</span>
                            <span className="block text-gray-600 text-sm">Caffeine Powered</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
