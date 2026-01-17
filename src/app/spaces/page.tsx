import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Wifi, Coffee, Monitor, Lock, Zap, ArrowRight } from 'lucide-react';

const spaces = [
    {
        id: 'hot-desk',
        name: 'Hot Desk',
        description: 'Flexible seating in our vibrant open workspace. Perfect for daily visits.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        price: '৳500',
        unit: 'day',
        capacity: '1 person',
        amenities: ['1Gbps WiFi', 'Power outlets', 'Free coffee', 'Locker'],
    },
    {
        id: 'dedicated-desk',
        name: 'Dedicated Desk',
        description: 'Your own permanent desk with storage. Ideal for regular members.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        price: '৳8,000',
        unit: 'month',
        capacity: '1 person',
        amenities: ['24/7 access', 'Personal locker', 'Mail handling', 'Free printing'],
    },
    {
        id: 'meeting-room',
        name: 'Meeting Room',
        description: 'Private rooms for client meetings, interviews, and team discussions.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        price: '৳1,500',
        unit: '2 hours',
        capacity: '4-8 people',
        amenities: ['TV/Monitor', 'Whiteboard', 'Video conferencing', 'Refreshments'],
    },
    {
        id: 'podcast-studio',
        name: 'Podcast Studio',
        description: 'Soundproof studio with professional recording equipment.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        price: '৳2,000',
        unit: '2 hours',
        capacity: '2-4 people',
        amenities: ['XLR mics', 'Mixer', 'Acoustic panels', 'Editing station'],
    },
    {
        id: 'event-space',
        name: 'Event Space',
        description: 'Versatile venue for workshops, meetups, and product launches.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        price: '৳15,000',
        unit: 'half day',
        capacity: 'Up to 50 people',
        amenities: ['Projector', 'Sound system', 'Stage', 'Catering options'],
    },
];

const amenitiesIcons: Record<string, React.ReactNode> = {
    '1Gbps WiFi': <Wifi className="w-4 h-4" />,
    'Free coffee': <Coffee className="w-4 h-4" />,
    'TV/Monitor': <Monitor className="w-4 h-4" />,
    '24/7 access': <Lock className="w-4 h-4" />,
    'Projector': <Monitor className="w-4 h-4" />,
};

export default function SpacesPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Our Spaces
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            From hot desks to event venues, find the perfect space for your needs.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                            <Wifi className="w-6 h-6 text-primary mx-auto mb-2" />
                            <span className="block text-white font-bold">1Gbps</span>
                            <span className="text-xs text-gray-500">Internet Speed</span>
                        </div>
                        <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <span className="block text-white font-bold">50+</span>
                            <span className="text-xs text-gray-500">Workstations</span>
                        </div>
                        <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                            <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
                            <span className="block text-white font-bold">24/7</span>
                            <span className="text-xs text-gray-500">Access Available</span>
                        </div>
                        <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <span className="block text-white font-bold">100%</span>
                            <span className="text-xs text-gray-500">Power Backup</span>
                        </div>
                    </div>

                    {/* Spaces Grid */}
                    <div className="space-y-8">
                        {spaces.map((space, index) => (
                            <div
                                key={space.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <Image src={space.image} alt={space.name} fill className="object-cover" />
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <h2 className="text-2xl font-display font-bold text-white mb-2">{space.name}</h2>
                                    <p className="text-gray-400 mb-4">{space.description}</p>

                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-3xl font-bold text-primary">{space.price}</span>
                                        <span className="text-gray-500">/{space.unit}</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {space.capacity}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {space.amenities.map((amenity) => (
                                            <span
                                                key={amenity}
                                                className="inline-flex items-center gap-1 bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg"
                                            >
                                                {amenitiesIcons[amenity] || null}
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                                    >
                                        Book Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
