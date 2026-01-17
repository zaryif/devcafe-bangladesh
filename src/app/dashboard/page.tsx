'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { getGreeting, formatDate } from '@/lib/utils';
import {
    Users,
    FolderOpen,
    Calendar,
    ArrowRight,
    QrCode,
    CreditCard,
} from 'lucide-react';

const upcomingBookings = [
    {
        id: 1,
        date: 'OCT 24',
        day: '24',
        month: 'oct',
        title: 'Advanced React Patterns Workshop',
        time: '14:00 - 17:00',
        location: 'Conference Room B',
    },
    {
        id: 2,
        date: 'OCT 28',
        day: '28',
        month: 'oct',
        title: 'Focus Time Session',
        time: '09:00 - 12:00',
        location: 'Quiet Zone, Desk 4',
    },
];

export default function DashboardPage() {
    const { user, profile } = useAuth();

    return (
        <div className="space-y-6">
            {/* Welcome Header - Mobile */}
            <div className="lg:hidden">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Welcome back</p>
                <h1 className="text-2xl font-display font-bold text-white">
                    {getGreeting()}, {profile?.full_name?.split(' ')[0] || 'Member'}.
                </h1>
            </div>

            {/* Welcome Header - Desktop */}
            <div className="hidden lg:flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Welcome back</p>
                    <h1 className="text-3xl font-display font-bold text-white">
                        {getGreeting()}, {profile?.full_name?.split(' ')[0] || 'Member'}.
                    </h1>
                </div>
                <Link
                    href="/dashboard/bookings/new"
                    className="flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium shadow-glow hover:shadow-glow-lg transition-all"
                >
                    + New Booking
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Card */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                                <Image
                                    src={profile?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ'}
                                    alt={profile?.full_name || 'User'}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="text-xl font-bold text-white">{profile?.full_name || 'Alex Chen'}</h2>
                                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full uppercase">
                                        Senior Developer
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mb-3">
                                    Member since {profile?.member_since ? formatDate(profile.member_since) : 'November 2021'}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(profile?.skills || ['React', 'Node.js']).slice(0, 3).map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Membership Status */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-bold text-white">Membership Status</h3>
                            </div>
                            <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                ACTIVE
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Manage your plan and billing details.</p>

                        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-white">Premium Tier</h4>
                                    <p className="text-xs text-gray-500">
                                        Renews automatically on Dec 20, 2024
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-white">৳45</span>
                                    <span className="text-gray-500">/mo</span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/dashboard/settings/billing"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Renew or Upgrade
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Upcoming Bookings */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-bold text-white">Upcoming Bookings</h3>
                            </div>
                            <Link
                                href="/dashboard/bookings"
                                className="text-primary text-sm font-medium hover:text-green-400 transition-colors"
                            >
                                View Calendar
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {upcomingBookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-14 h-16 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
                                        <span className="text-xs text-gray-500 uppercase">{booking.month}</span>
                                        <span className="text-xl font-bold text-white">{booking.day}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-white truncate">{booking.title}</h4>
                                        <p className="text-sm text-gray-500">
                                            <span className="text-gray-400">{booking.time}</span>
                                            <span className="mx-2">•</span>
                                            {booking.location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                                            Reschedule
                                        </button>
                                        <button className="text-red-400 hover:text-red-300 text-sm px-3 py-1.5 rounded-lg border border-red-900/50 hover:border-red-800 transition-colors">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Digital Access Key */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                            Digital Access Key
                        </h3>
                        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center justify-center">
                            <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center">
                                <QrCode className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-3">
                            Scan at front desk or meeting rooms
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">People Connected</p>
                                <p className="text-3xl font-bold text-white">142</p>
                            </div>
                            <Users className="w-8 h-8 text-primary opacity-50" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Projects Shared</p>
                                <p className="text-3xl font-bold text-white">12</p>
                            </div>
                            <FolderOpen className="w-8 h-8 text-primary opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
