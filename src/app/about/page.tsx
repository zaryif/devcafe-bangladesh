import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Users, Lightbulb, Coffee, Wifi, Clock, Headphones } from 'lucide-react';

const values = [
    {
        icon: Users,
        title: 'Community First',
        description: 'We believe in the power of community. Every decision we make puts our members first.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation Hub',
        description: 'We provide the space and resources for ideas to flourish and turn into reality.',
    },
    {
        icon: Coffee,
        title: 'Quality Experience',
        description: 'From our coffee to our chairs, we obsess over every detail of your experience.',
    },
];

const amenities = [
    { icon: Wifi, label: '1Gbps Fiber Internet', description: 'Dual ISP backup for uninterrupted work' },
    { icon: Coffee, label: 'Premium Coffee', description: 'Locally roasted beans, unlimited refills' },
    { icon: Clock, label: '24/7 Access', description: 'Work anytime that suits your schedule' },
    { icon: Headphones, label: 'Quiet Zones', description: 'Soundproof pods for deep focus' },
];

const team = [
    { name: 'Rahim Ahmed', role: 'Founder & CEO', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ' },
    { name: 'Fatima Khan', role: 'Community Manager', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4' },
    { name: 'Arif Hasan', role: 'Head Barista', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzIn1VAZ2GlxZWvjVTYdvb8ATYgJMCYehVcYcgr-82gWJEb6Tm8Jzt-hSamXbLiO_3eohhtwvABkX9Zp84x4w_6GH6Oe6lqsU43sN5z2T3UmQLaYh87o1x7QCppDnS8RDSFpKBxnH9tL97kdjWr-ZIYOAYEvDOn5OjoJeh46c4CHn12BgybdmYMBFmsNPNk6QPghM8fF7W8FapPz8dx8kZzwCzKvUK6NZG9rtXoYE1DCmBI_wnmR7E2-0Z5ZCtxQjCaqvXOrvLwk"
                        alt="DevCafe Team"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/90 to-bg-dark" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Story</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
                            Where Code Meets<br />
                            <span className="text-primary">Coffee & Community</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            DevCafe Bangladesh started as a small meetup spot in 2019 and has grown into the country&apos;s
                            first dedicated workspace for tech professionals. We understand the unique needs of developers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To create Bangladesh&apos;s most vibrant ecosystem for tech professionals by providing
                                world-class workspace, community, and resources that empower developers to build the future.
                            </p>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To become South Asia&apos;s leading tech community hub, known for launching successful startups,
                                fostering innovation, and creating meaningful connections between developers worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-20 bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What We Offer</h2>
                        <p className="text-gray-400 mt-4">Everything you need to focus, create, and grow.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {amenities.map((amenity) => (
                            <div
                                key={amenity.label}
                                className="bg-surface rounded-2xl border border-gray-800 p-6 text-center hover:border-primary/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <amenity.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{amenity.label}</h3>
                                <p className="text-sm text-gray-500">{amenity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Meet the Team</h2>
                        <p className="text-gray-400 mt-4">The people behind DevCafe Bangladesh.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {team.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/30">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/10 border-t border-primary/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Ready to Join the Community?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Whether you&apos;re a solo developer, a startup team, or just need a great place to work,
                        we&apos;d love to have you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/community"
                            className="bg-primary hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium shadow-glow hover:shadow-glow-lg transition-all"
                        >
                            Explore Membership
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 hover:bg-white/20 border border-gray-600 text-white px-8 py-4 rounded-full font-medium transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
