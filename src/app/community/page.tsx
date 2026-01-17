import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Star, Smartphone, Users, Briefcase } from 'lucide-react';

const membershipTiers = [
    {
        name: 'Community Member',
        price: 'Free',
        priceNote: 'Forever',
        description: 'Perfect for casual coders who want to connect.',
        features: [
            'Access to Online Community',
            'Public Event Access',
            'Free Wi-Fi (2 Hours/Day)',
            'Participate in Hackathons',
            'Meeting Rooms Access',
        ],
        cta: 'Join for Free',
        ctaLink: '/signup',
        popular: false,
    },
    {
        name: 'Pro Developer',
        price: '৳2,500',
        priceNote: '/month',
        description: 'For serious developers who need a dedicated space.',
        features: [
            'Unlimited High-Speed Wi-Fi',
            '10% Off All Coffee & Food',
            'Priority Event Access',
            'Mail Handling Services',
            '5hr Meeting Room Credits',
        ],
        cta: 'Go Premium',
        ctaLink: '/checkout?plan=pro',
        popular: true,
    },
    {
        name: 'Startup Team',
        price: '৳10,000',
        priceNote: '/month',
        description: 'Perfect for teams of up to 5 members.',
        features: [
            'Everything in Pro',
            'Dedicated Desk Area',
            'Mail Handling Services',
            'Unlimited Meeting Rooms',
        ],
        cta: 'Contact Sales',
        ctaLink: '/contact',
        popular: false,
    },
];

const testimonials = [
    {
        quote: "DevCafe isn't just a coffee shop; it's where I found my CTO. I connected with my community's app project called Spond. Two months later, we secured our first seed funding.",
        author: 'Rahim Ahmed',
        role: 'Founder, SparkBD',
    },
];

const upcomingEvent = {
    title: 'Upcoming Hackathon',
    description: 'Join 150+ developers next weekend for the "Code for Climate" challenge.',
    cta: 'Register Now',
};

export default function CommunityPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-bg-dark to-bg-dark" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                                <span className="text-sm font-medium text-primary">DevCafe Community App v2.0</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                Connect. Code.<br />
                                <span className="text-primary">Collaborate.</span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-lg">
                                Join Bangladesh&apos;s most vibrant tech hub. Find your next co-founder, showcase your
                                portfolio, and access exclusive developer perks from our app.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/signup"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-glow hover:shadow-glow-lg transition-all"
                                >
                                    Download App
                                    <Smartphone className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all"
                                >
                                    View Plans
                                </Link>
                            </div>
                            {/* Stats */}
                            <div className="flex items-center gap-8 pt-6">
                                <div>
                                    <span className="block text-3xl font-bold text-white">2.5k+</span>
                                    <span className="text-sm text-gray-500">Members</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-bold text-white">150+</span>
                                    <span className="text-sm text-gray-500">Startups Launched</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-bold text-white">500+</span>
                                    <span className="text-sm text-gray-500">Projects Shipped</span>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="block text-xl font-display font-bold text-primary italic">Infinite</span>
                                    <span className="text-sm text-gray-500">Coffee Refills</span>
                                </div>
                            </div>
                        </div>
                        {/* App Preview */}
                        <div className="relative">
                            <div className="bg-surface rounded-3xl border border-gray-700 p-6 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Find a Co-Founder</h3>
                                            <p className="text-xs text-gray-500">Connect with compatible builders</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Project Listings</h3>
                                            <p className="text-xs text-gray-500">Showcase and discover projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                            Choose Your Tribe
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Whether you&apos;re a casual coder dropping in for a brew or a startup founder needing a
                            dedicated hub, we have a plan for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {membershipTiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`relative bg-surface rounded-2xl border ${tier.popular ? 'border-primary shadow-[0_0_30px_-5px_rgba(15,159,93,0.3)]' : 'border-gray-800'
                                    } p-8 flex flex-col`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    <span className="text-gray-500">{tier.priceNote}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                                <ul className="space-y-3 flex-1 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={tier.ctaLink}
                                    className={`w-full py-3 rounded-xl font-medium text-center transition-colors ${tier.popular
                                            ? 'bg-primary hover:bg-green-600 text-white'
                                            : 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
                                        }`}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial & Event */}
            <section className="py-20 bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Testimonial */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                            <div className="flex items-start gap-3 mb-4">
                                <Star className="w-6 h-6 text-primary flex-shrink-0" />
                                <p className="text-lg text-gray-300 italic leading-relaxed">
                                    &quot;{testimonials[0].quote}&quot;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                                    RA
                                </div>
                                <div>
                                    <p className="font-bold text-white">{testimonials[0].author}</p>
                                    <p className="text-sm text-gray-500">{testimonials[0].role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Event */}
                        <div className="bg-primary/10 rounded-2xl border border-primary/30 p-8 flex flex-col justify-between">
                            <div>
                                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                                    {upcomingEvent.title}
                                </span>
                                <p className="text-xl text-white mt-2 mb-4">{upcomingEvent.description}</p>
                            </div>
                            <Link
                                href="/events"
                                className="inline-flex items-center gap-2 text-primary font-medium hover:text-green-400 transition-colors"
                            >
                                {upcomingEvent.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
