import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Users, Filter, ArrowRight } from 'lucide-react';

const workshops = [
    {
        id: 1,
        title: 'Intro to Rust Programming',
        description: 'A beginner-friendly session on memory safety and concurrency.',
        date: { day: '15', month: 'OCT' },
        time: '2:00 PM - 5:00 PM',
        location: 'DevCafe Main Hall',
        instructor: 'Rahim Ahmed',
        attendees: 12,
        maxAttendees: 30,
        price: 0,
        level: 'Beginner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        id: 2,
        title: 'Advanced React Patterns',
        description: 'Deep dive into compound components, render props, and hooks.',
        date: { day: '18', month: 'OCT' },
        time: '3:00 PM - 6:00 PM',
        location: 'DevCafe Main Hall',
        instructor: 'Fatima Khan',
        attendees: 20,
        maxAttendees: 25,
        price: 500,
        level: 'Advanced',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    },
    {
        id: 3,
        title: 'Building RESTful APIs with Go',
        description: 'Learn to build fast, scalable APIs using Go and Gin framework.',
        date: { day: '22', month: 'OCT' },
        time: '10:00 AM - 1:00 PM',
        location: 'DevCafe Meeting Room A',
        instructor: 'Arif Hasan',
        attendees: 8,
        maxAttendees: 15,
        price: 1000,
        level: 'Intermediate',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
    },
    {
        id: 4,
        title: 'UI/UX Design Fundamentals',
        description: 'From wireframes to high-fidelity mockups using Figma.',
        date: { day: '25', month: 'OCT' },
        time: '2:00 PM - 5:00 PM',
        location: 'DevCafe Main Hall',
        instructor: 'Sarah Chen',
        attendees: 15,
        maxAttendees: 30,
        price: 0,
        level: 'Beginner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    },
];

const levelColors: Record<string, string> = {
    Beginner: 'bg-green-500/20 text-green-400',
    Intermediate: 'bg-yellow-500/20 text-yellow-400',
    Advanced: 'bg-red-500/20 text-red-400',
};

export default function WorkshopsPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Workshops & Training
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Level up your skills with hands-on workshops led by industry experts.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            All Workshops
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-gray-400 hover:text-white border border-gray-700 transition-colors">
                            Free Only
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-gray-400 hover:text-white border border-gray-700 transition-colors">
                            This Week
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-gray-400 hover:text-white border border-gray-700 transition-colors">
                            Beginner
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-gray-400 hover:text-white border border-gray-700 transition-colors">
                            Advanced
                        </button>
                    </div>

                    {/* Workshops Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {workshops.map((workshop) => (
                            <div
                                key={workshop.id}
                                className="bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors group"
                            >
                                <div className="relative h-48">
                                    <Image src={workshop.image} alt={workshop.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColors[workshop.level]}`}>
                                            {workshop.level}
                                        </span>
                                        {workshop.price === 0 && (
                                            <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                Free
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-gray-800 rounded-lg p-2 text-center min-w-[50px]">
                                            <span className="block text-primary text-xs font-medium">{workshop.date.month}</span>
                                            <span className="block text-white text-xl font-bold">{workshop.date.day}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{workshop.title}</h3>
                                            <p className="text-gray-400 text-sm">{workshop.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {workshop.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {workshop.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {workshop.attendees}/{workshop.maxAttendees}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-gray-500 text-sm">Instructor: </span>
                                            <span className="text-white text-sm">{workshop.instructor}</span>
                                        </div>
                                        {workshop.price > 0 && (
                                            <span className="text-primary font-bold">৳{workshop.price}</span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/events/${workshop.id}`}
                                        className="mt-4 w-full bg-primary hover:bg-green-600 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                                    >
                                        Register Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Host Workshop CTA */}
                    <div className="mt-12 text-center bg-primary/10 rounded-2xl border border-primary/30 p-8">
                        <h2 className="text-xl font-bold text-white mb-2">Want to Lead a Workshop?</h2>
                        <p className="text-gray-400 mb-4 max-w-xl mx-auto">
                            Share your expertise with the DevCafe community. We provide the venue, promotion, and support.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            Apply to Host
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
