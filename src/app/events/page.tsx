import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';

const events = [
    {
        id: 1,
        date: { day: '15', month: 'OCT' },
        type: 'Workshop',
        title: 'Intro to Rust Programming',
        description: 'A beginner-friendly session on memory safety and concurrency. Bring your laptop!',
        time: '2:00 PM - 5:00 PM',
        location: 'Main Hall',
        attendees: 12,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        id: 2,
        date: { day: '22', month: 'OCT' },
        type: 'Networking',
        title: 'Startups & Coffee Mixer',
        description: 'Meet local founders, investors, and developers in a casual setting. Coffee on the house!',
        time: '6:00 PM - 9:00 PM',
        location: 'Rooftop Lounge',
        attendees: 45,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    },
    {
        id: 3,
        date: { day: '28', month: 'OCT' },
        type: 'Hackathon',
        title: '24h AI Hackathon',
        description: 'Build the next big AI tool. Prizes worth $5000 up for grabs. Teams of 4.',
        time: 'Sat 10AM - Sun 10AM',
        location: 'Full Venue',
        attendees: 80,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
    },
    {
        id: 4,
        date: { day: '05', month: 'NOV' },
        type: 'Workshop',
        title: 'Building with Next.js 14',
        description: 'Learn the latest features of Next.js including App Router, Server Actions, and more.',
        time: '3:00 PM - 6:00 PM',
        location: 'Conference Room A',
        attendees: 25,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    },
];

const eventTypes = ['All', 'Workshop', 'Networking', 'Hackathon', 'Meetup'];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Events & Workshops
                        </h1>
                        <p className="text-gray-400 max-w-2xl">
                            Join our community events, workshops, and hackathons. Learn new skills, meet fellow developers,
                            and grow your network.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Filter className="w-4 h-4" />
                            <span className="text-sm">Filter:</span>
                        </div>
                        {eventTypes.map((type) => (
                            <button
                                key={type}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${type === 'All'
                                        ? 'bg-primary text-white'
                                        : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Events List */}
                    <div className="space-y-6">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-surface rounded-2xl border border-gray-800 hover:border-primary/50 transition-all overflow-hidden group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Date Badge */}
                                    <div className="md:w-32 flex-shrink-0 bg-gray-800/50 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-700">
                                        <span className="text-xs text-primary uppercase font-bold">{event.date.month}</span>
                                        <span className="text-4xl font-bold text-white">{event.date.day}</span>
                                    </div>

                                    {/* Event Image */}
                                    <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                                {event.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{event.description}</p>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {event.attendees}+ attending
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="p-6 flex items-center border-t md:border-t-0 md:border-l border-gray-700">
                                        <Link
                                            href={`/events/${event.id}`}
                                            className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
                                        >
                                            Register Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Calendar CTA */}
                    <div className="mt-12 bg-surface rounded-2xl border border-gray-800 p-8 text-center">
                        <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Calendar</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Never miss an event! Add our calendar to your Google Calendar or Apple Calendar.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-primary hover:bg-green-600 text-white rounded-xl font-medium transition-colors">
                                Add to Google Calendar
                            </button>
                            <button className="px-6 py-3 border border-gray-700 text-gray-300 hover:text-white rounded-xl font-medium transition-colors">
                                Download .ics
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
