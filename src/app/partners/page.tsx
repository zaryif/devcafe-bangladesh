import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Award, Users, Coffee } from 'lucide-react';

const partners = [
    {
        name: 'Bangladesh ICT Division',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        type: 'Government',
        description: 'Official technology partner supporting digital innovation in Bangladesh.',
    },
    {
        name: 'BASIS',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        type: 'Association',
        description: 'Bangladesh Association of Software & Information Services.',
    },
    {
        name: 'AWS Activate',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        type: 'Technology',
        description: 'Cloud credits and resources for DevCafe startups.',
    },
    {
        name: 'Google for Startups',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        type: 'Technology',
        description: 'Access to Google Cloud, mentorship, and global network.',
    },
];

const sponsorshipTiers = [
    {
        name: 'Platinum',
        price: '৳500,000+',
        period: '/year',
        color: 'from-gray-300 to-gray-500',
        perks: [
            'Logo on homepage & all event materials',
            '10 premium memberships',
            'Dedicated meeting room naming rights',
            'VIP access to all events',
            'Keynote speaking opportunities',
        ],
    },
    {
        name: 'Gold',
        price: '৳250,000',
        period: '/year',
        color: 'from-yellow-400 to-yellow-600',
        perks: [
            'Logo on event materials',
            '5 premium memberships',
            'Priority event registration',
            'Booth at major events',
        ],
    },
    {
        name: 'Silver',
        price: '৳100,000',
        period: '/year',
        color: 'from-gray-400 to-gray-600',
        perks: [
            'Logo on website',
            '2 premium memberships',
            'Quarterly newsletter feature',
        ],
    },
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Partners & Sponsors
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We&apos;re proud to work with leading organizations that support Bangladesh&apos;s tech ecosystem.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">15+</span>
                            <span className="text-gray-500">Active Partners</span>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">2500+</span>
                            <span className="text-gray-500">Community Reach</span>
                        </div>
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                            <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
                            <span className="block text-3xl font-bold text-white">50+</span>
                            <span className="text-gray-500">Events Sponsored</span>
                        </div>
                    </div>

                    {/* Current Partners */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">Current Partners</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="bg-surface rounded-2xl border border-gray-800 p-6 text-center hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                                        <Image src={partner.logo} alt={partner.name} width={80} height={80} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                                    <span className="text-primary text-xs font-medium">{partner.type}</span>
                                    <p className="text-gray-500 text-sm mt-2">{partner.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sponsorship Tiers */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Become a Sponsor</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Support the next generation of tech talent in Bangladesh and gain visibility among 2,500+ developers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {sponsorshipTiers.map((tier) => (
                                <div
                                    key={tier.name}
                                    className="bg-surface rounded-2xl border border-gray-800 p-6 relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`} />
                                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-white">{tier.price}</span>
                                        <span className="text-gray-500">{tier.period}</span>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {tier.perks.map((perk) => (
                                            <li key={perk} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <span className="text-primary mt-1">✓</span>
                                                {perk}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="block w-full text-center py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
