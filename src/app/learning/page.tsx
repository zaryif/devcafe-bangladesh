'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Bell, Filter, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

const filters = ['All Events', 'Workshops', '⚡ Vibe Coding', 'Guest Talks'];

const sessions = [
    {
        id: 1,
        type: 'Workshop',
        title: 'Intro to Rust Systems Programming',
        description: 'A deep dive into memory safety and concurrency without garbage collection. Perfect for systems engineers.',
        date: 'Sat, Oct 12',
        time: '10:00 AM',
        price: '৳500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        id: 2,
        type: 'Vibe Coding',
        title: 'Midnight Hackathon: AI Agents',
        description: 'Late night coding session with lo-fi beats. Build autonomous agents before sunrise. Pizza included.',
        date: 'Tue, Oct 15',
        time: '11:00 PM',
        price: 'Free',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        featured: true,
    },
    {
        id: 3,
        type: 'Guest Talk',
        title: 'Scaling Startups in BD',
        description: 'Featuring the CTO of Pathao. Real talk about infrastructure challenges and scaling engineering teams locally.',
        date: 'Oct 20',
        time: '6:00 PM',
        price: '৳200',
        image: null,
    },
    {
        id: 4,
        type: 'Workshop',
        title: 'Advanced React Patterns',
        description: 'Master compound components, control props, and custom hooks to build reusable UI libraries.',
        date: 'Fri, Oct 25',
        time: '2:00 PM',
        price: '৳1000',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
    },
];

export default function LearningPage() {
    const [activeFilter, setActiveFilter] = useState('All Events');

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white italic mb-2">
                            Upcoming Sessions
                        </h1>
                        <p className="text-gray-400">
                            Explore our schedule of coding workshops, vibe coding sessions, and startup events in Dhaka.
                        </p>
                    </div>

                    {/* Filters & Calendar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                                            ? 'bg-primary text-white'
                                            : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <button className="p-2 hover:text-white transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                October 2023
                            </span>
                            <button className="p-2 hover:text-white transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Sessions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className={`rounded-2xl overflow-hidden ${session.featured
                                        ? 'bg-[#0f3d3d] border border-[#0f9f5d]/40'
                                        : 'bg-surface border border-gray-800'
                                    }`}
                            >
                                {session.image && (
                                    <div className="relative h-48">
                                        <Image src={session.image} alt={session.title} fill className="object-cover" />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${session.type === 'Vibe Coding'
                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                : session.type === 'Guest Talk'
                                                    ? 'bg-purple-500/20 text-purple-400'
                                                    : 'bg-primary/20 text-primary'
                                            }`}>
                                            {session.type === 'Vibe Coding' && '⚡ '}
                                            {session.type}
                                        </span>
                                        <button className="text-gray-500 hover:text-white transition-colors">
                                            <Bell className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                        <Calendar className="w-4 h-4" />
                                        {session.date} · {session.time}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{session.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-gray-500 text-xs">PRICE</span>
                                            <span className={`block text-lg font-bold ${session.price === 'Free' ? 'text-primary' : 'text-white'
                                                }`}>
                                                {session.price}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                                                <Bookmark className="w-5 h-5" />
                                            </button>
                                            <Link
                                                href={`/events/${session.id}`}
                                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${session.price === 'Free'
                                                        ? 'bg-primary hover:bg-green-600 text-white'
                                                        : 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
                                                    }`}
                                            >
                                                {session.price === 'Free' ? 'Join' : 'Details'}
                                            </Link>
                                        </div>
                                    </div>
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
