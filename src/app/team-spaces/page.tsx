import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Lock, Wifi, Monitor, Coffee, ArrowRight, Check } from 'lucide-react';

const spaces = [
    {
        name: 'Startup Pod',
        description: 'Dedicated space for 3-5 person teams with privacy screens and storage.',
        price: '৳15,000',
        unit: '/month',
        capacity: '3-5 people',
        features: ['Dedicated desks', 'Lockable storage', 'Meeting room credits', '24/7 access'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    },
    {
        name: 'Team Suite',
        description: 'Private enclosed office for growing teams that need their own space.',
        price: '৳35,000',
        unit: '/month',
        capacity: '6-12 people',
        features: ['Private office', 'Glass partitions', 'Whiteboard wall', 'Dedicated WiFi'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        name: 'Enterprise Floor',
        description: 'Full floor access for established startups with custom build-out options.',
        price: 'Custom',
        unit: '',
        capacity: '15+ people',
        features: ['Customizable layout', 'Brand signage', 'VIP support', 'Server room access'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    },
];

const benefits = [
    { icon: Lock, title: 'Privacy & Security', description: 'Secure access and private spaces for sensitive discussions.' },
    { icon: Wifi, title: 'Enterprise WiFi', description: 'Dedicated bandwidth and VPN-ready infrastructure.' },
    { icon: Monitor, title: 'Tech Setup', description: 'Monitor arms, USB-C docks, and standing desks included.' },
    { icon: Coffee, title: 'Unlimited Coffee', description: 'Premium coffee and snacks for your entire team.' },
];

const currentTeams = [
    { name: 'ShopLocal BD', members: 5, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88' },
    { name: 'PayBangla', members: 8, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0' },
    { name: 'AgriTech BD', members: 4, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY' },
];

export default function TeamSpacesPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Users className="w-4 h-4" />
                            For Teams
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Private Team Spaces
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Scale your startup in a dedicated space designed for collaboration, focus, and growth.
                        </p>
                    </div>

                    {/* Spaces */}
                    <section className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {spaces.map((space) => (
                                <div
                                    key={space.name}
                                    className="bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors"
                                >
                                    <div className="relative h-48">
                                        <Image src={space.image} alt={space.name} fill className="object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{space.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{space.description}</p>

                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-2xl font-bold text-primary">{space.price}</span>
                                            <span className="text-gray-500">{space.unit}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                            <Users className="w-4 h-4" />
                                            {space.capacity}
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {space.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Check className="w-4 h-4 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/contact"
                                            className="block w-full text-center py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                                        >
                                            Inquire Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
                            What&apos;s Included
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-500 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Current Teams */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
                            Teams Already Here
                        </h2>
                        <div className="flex justify-center gap-8 flex-wrap">
                            {currentTeams.map((team) => (
                                <div key={team.name} className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800">
                                        <Image src={team.logo} alt={team.name} width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">{team.name}</h4>
                                        <p className="text-xs text-gray-500">{team.members} members</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-primary/10 rounded-2xl border border-primary/30 p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to Move In?</h2>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            Schedule a tour and see why growing teams choose DevCafe for their office needs.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                            >
                                Schedule a Tour
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/booking"
                                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-6 py-3 rounded-xl font-medium transition-colors"
                            >
                                Book a Day Pass
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
