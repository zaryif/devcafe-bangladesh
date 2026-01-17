'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Calendar, Clock, MapPin, Search, Plus, X, Check } from 'lucide-react';

const bookings = [
    {
        id: 1,
        type: 'Hot Desk',
        date: '2024-10-24',
        time: '09:00 - 17:00',
        location: 'Open Area, Desk 12',
        status: 'upcoming',
        price: 500,
    },
    {
        id: 2,
        type: 'Meeting Room',
        date: '2024-10-26',
        time: '14:00 - 16:00',
        location: 'Conference Room A',
        status: 'upcoming',
        price: 1500,
    },
    {
        id: 3,
        type: 'Workshop',
        title: 'Advanced React Patterns',
        date: '2024-10-28',
        time: '15:00 - 18:00',
        location: 'Main Hall',
        status: 'registered',
        price: 0,
    },
    {
        id: 4,
        type: 'Hot Desk',
        date: '2024-10-20',
        time: '10:00 - 18:00',
        location: 'Quiet Zone, Desk 5',
        status: 'completed',
        price: 500,
    },
];

const statusColors: Record<string, string> = {
    upcoming: 'bg-yellow-500/20 text-yellow-400',
    registered: 'bg-blue-500/20 text-blue-400',
    completed: 'bg-green-500/20 text-green-400',
    cancelled: 'bg-red-500/20 text-red-400',
};

export default function BookingsPage() {
    const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBookings = bookings.filter(booking => {
        if (filter === 'upcoming') return ['upcoming', 'registered'].includes(booking.status);
        if (filter === 'completed') return booking.status === 'completed';
        return true;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-white">My Bookings</h1>
                    <p className="text-gray-500">Manage your workspace reservations and event registrations.</p>
                </div>
                <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Booking
                </Link>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search bookings..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-surface border border-gray-700 rounded-xl text-sm"
                    />
                </div>
                <div className="flex gap-2">
                    {['all', 'upcoming', 'completed'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as typeof filter)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${filter === f
                                    ? 'bg-primary text-white'
                                    : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
                {filteredBookings.map((booking) => (
                    <div
                        key={booking.id}
                        className="bg-surface rounded-2xl border border-gray-800 p-6 hover:border-primary/30 transition-colors"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-16 bg-gray-800 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                                    <span className="text-xs text-gray-500 uppercase">
                                        {new Date(booking.date).toLocaleDateString('en-US', { month: 'short' })}
                                    </span>
                                    <span className="text-xl font-bold text-white">
                                        {new Date(booking.date).getDate()}
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-white">
                                            {'title' in booking ? booking.title : booking.type}
                                        </h3>
                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${statusColors[booking.status]}`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">{booking.type}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {booking.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {booking.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                {booking.price > 0 && (
                                    <span className="text-lg font-bold text-primary">৳{booking.price}</span>
                                )}
                                <div className="flex gap-2 mt-2">
                                    {booking.status === 'upcoming' && (
                                        <>
                                            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition-colors">
                                                Reschedule
                                            </button>
                                            <button className="px-3 py-1.5 text-sm text-red-400 hover:text-red-300 border border-red-900/50 rounded-lg transition-colors">
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                    {booking.status === 'completed' && (
                                        <span className="flex items-center gap-1 text-green-400 text-sm">
                                            <Check className="w-4 h-4" />
                                            Completed
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredBookings.length === 0 && (
                <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500">No bookings found.</p>
                    <Link href="/booking" className="text-primary hover:text-green-400 mt-2 inline-block">
                        Make your first booking →
                    </Link>
                </div>
            )}
        </div>
    );
}
