'use client';

import { useParams } from 'next/navigation';

// Generate static params for all events
export function generateStaticParams() {
    return [
        { id: '1' },
    ];
}
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, CheckCircle, Ticket } from 'lucide-react';

const eventsData: Record<string, {
    id: number;
    title: string;
    type: string;
    description: string;
    fullDescription: string;
    date: { day: string; month: string; year: string };
    time: string;
    location: string;
    image: string;
    attendees: number;
    maxAttendees: number;
    price: number;
    host: { name: string; role: string; avatar: string };
    schedule: { time: string; title: string }[];
    requirements: string[];
}> = {
    '1': {
        id: 1,
        title: 'Intro to Rust Programming',
        type: 'Workshop',
        description: 'A beginner-friendly session on memory safety and concurrency.',
        fullDescription: `Join us for an introduction to Rust programming language! This hands-on workshop is designed for developers who want to learn about memory safety, concurrency, and systems programming.

What you'll learn:
- Rust basics and syntax
- Ownership and borrowing concepts
- Error handling patterns
- Building your first Rust project

Bring your laptop with Rust installed. We'll provide coffee and snacks!`,
        date: { day: '15', month: 'OCT', year: '2024' },
        time: '2:00 PM - 5:00 PM',
        location: 'DevCafe Main Hall',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        attendees: 12,
        maxAttendees: 30,
        price: 0,
        host: {
            name: 'Rahim Ahmed',
            role: 'Senior Rust Developer',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        },
        schedule: [
            { time: '2:00 PM', title: 'Introduction & Setup' },
            { time: '2:30 PM', title: 'Rust Basics & Syntax' },
            { time: '3:30 PM', title: 'Coffee Break ☕' },
            { time: '3:45 PM', title: 'Ownership & Borrowing' },
            { time: '4:30 PM', title: 'Hands-on Project' },
        ],
        requirements: [
            'Laptop with Rust installed',
            'Basic programming experience',
            'Text editor (VS Code recommended)',
        ],
    },
};

export default function EventDetailsPage() {
    const params = useParams();
    const eventId = params.id as string;
    const event = eventsData[eventId];

    if (!event) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Event Not Found</h1>
                        <p className="text-gray-400 mb-8">This event doesn&apos;t exist or has been removed.</p>
                        <Link href="/events" className="btn-primary">Browse Events</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const spotsLeft = event.maxAttendees - event.attendees;

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/events" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Events
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hero Image */}
                            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                                <Image src={event.image} alt={event.title} fill className="object-cover" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                                        {event.type}
                                    </span>
                                </div>
                            </div>

                            {/* Title & Info */}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    {event.title}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        {event.date.month} {event.date.day}, {event.date.year}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        {event.time}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        {event.location}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        {event.attendees} / {event.maxAttendees} attending
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">About This Event</h2>
                                <div className="prose prose-invert max-w-none">
                                    {event.fullDescription.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-gray-400 mb-4">{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Schedule</h2>
                                <div className="space-y-4">
                                    {event.schedule.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <span className="text-primary font-medium w-24">{item.time}</span>
                                            <span className="text-gray-300">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">What to Bring</h2>
                                <ul className="space-y-2">
                                    {event.requirements.map((req, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-400">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Register Card */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6 sticky top-24">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-white">
                                        {event.price === 0 ? 'Free' : `৳${event.price}`}
                                    </span>
                                    {event.price > 0 && <span className="text-gray-500">/person</span>}
                                </div>

                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-500">Spots remaining</span>
                                        <span className="text-primary font-medium">{spotsLeft} left</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 mb-4">
                                    <Ticket className="w-5 h-5" />
                                    Register Now
                                </button>

                                <button className="w-full py-3 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share Event
                                </button>
                            </div>

                            {/* Host */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Hosted by</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                        <Image src={event.host.avatar} alt={event.host.name} width={56} height={56} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{event.host.name}</h4>
                                        <p className="text-sm text-gray-500">{event.host.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
