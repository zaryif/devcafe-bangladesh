'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, MessageCircle, UserPlus } from 'lucide-react';

const communityStats = {
    totalMembers: 2547,
    onlineNow: 142,
    projectsShared: 567,
};

const featuredMembers = [
    {
        id: 1,
        name: 'Rahim Ahmed',
        handle: 'dev_guru',
        role: 'ML Engineer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        online: true,
    },
    {
        id: 2,
        name: 'Fatima Khan',
        handle: 'transit_hero',
        role: 'Full Stack Dev',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4',
        online: true,
    },
    {
        id: 3,
        name: 'Arif Hasan',
        handle: 'arif_codes',
        role: 'Backend Dev',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI',
        online: false,
    },
];

const recentActivity = [
    { id: 1, user: 'Rahim Ahmed', action: 'shared a new project', target: 'Chokher Dekha', time: '2h ago' },
    { id: 2, user: 'Fatima Khan', action: 'commented on', target: 'Dhaka Commute', time: '3h ago' },
    { id: 3, user: 'Sarah Chen', action: 'joined the community', target: '', time: '5h ago' },
    { id: 4, user: 'Arif Hasan', action: 'registered for', target: 'AI Hackathon', time: '1d ago' },
];

export default function DashboardCommunityPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-display font-bold text-white">Community</h1>
                <p className="text-gray-500">Connect with fellow developers and discover opportunities.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                    <span className="block text-3xl font-bold text-white">{communityStats.totalMembers.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">Members</span>
                </div>
                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                    <span className="block text-3xl font-bold text-green-400">{communityStats.onlineNow}</span>
                    <span className="text-sm text-gray-500">Online Now</span>
                </div>
                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                    <span className="block text-3xl font-bold text-white">{communityStats.projectsShared}</span>
                    <span className="text-sm text-gray-500">Projects Shared</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search members by name, skill, or role..."
                            className="w-full pl-12 pr-4 py-3 bg-surface border border-gray-700 rounded-xl"
                        />
                    </div>

                    {/* Featured Members */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-white">Featured Members</h2>
                            <Link href="/community/members" className="text-primary text-sm hover:text-green-400">
                                View All →
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {featuredMembers.map(member => (
                                <div key={member.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                                <Image src={member.avatar} alt={member.name} width={48} height={48} className="w-full h-full object-cover" />
                                            </div>
                                            {member.online && (
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">{member.name}</h3>
                                            <p className="text-sm text-gray-500">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors">
                                            <UserPlus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Find Collaborators CTA */}
                    <div className="bg-primary/10 rounded-2xl border border-primary/30 p-6">
                        <h3 className="text-lg font-bold text-white mb-2">Looking for a Co-Founder?</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Browse our community of 2,500+ developers, designers, and founders to find your perfect match.
                        </p>
                        <Link
                            href="/community/members"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Discover Members
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Recent Activity */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {recentActivity.map(activity => (
                                <div key={activity.id} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-300">
                                            <span className="font-medium text-white">{activity.user}</span>{' '}
                                            {activity.action}{' '}
                                            {activity.target && <span className="text-primary">{activity.target}</span>}
                                        </p>
                                        <span className="text-xs text-gray-500">{activity.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
                        <div className="space-y-2">
                            <Link href="/projects" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                                Browse Projects
                            </Link>
                            <Link href="/events" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                                Upcoming Events
                            </Link>
                            <Link href="/community" className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                                Upgrade Membership
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
