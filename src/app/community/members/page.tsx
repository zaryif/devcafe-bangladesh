'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, MapPin, Briefcase, Code, MessageCircle, Filter } from 'lucide-react';

const skills = ['All', 'React', 'Node.js', 'Python', 'Flutter', 'AI/ML', 'DevOps', 'UI/UX'];

const members = [
    {
        id: 1,
        name: 'Rahim Ahmed',
        handle: 'dev_guru',
        role: 'ML Engineer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        location: 'Dhaka',
        skills: ['Python', 'TensorFlow', 'AI/ML'],
        projects: 5,
        connections: 142,
        available: true,
    },
    {
        id: 2,
        name: 'Fatima Khan',
        handle: 'transit_hero',
        role: 'Full Stack Developer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4',
        location: 'Dhaka',
        skills: ['Flutter', 'Firebase', 'Node.js'],
        projects: 3,
        connections: 89,
        available: true,
    },
    {
        id: 3,
        name: 'Arif Hasan',
        handle: 'arif_codes',
        role: 'Backend Developer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI',
        location: 'Chittagong',
        skills: ['Go', 'PostgreSQL', 'DevOps'],
        projects: 8,
        connections: 234,
        available: false,
    },
    {
        id: 4,
        name: 'Sarah Chen',
        handle: 'sarah_designs',
        role: 'UI/UX Designer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7bzfojQszyXRXr_8bSLZDupRiQJArtKb4qmBJI0juHGhJsB-W1E3h5At1vUlxJzErzLyrighko0smFKIiw9mk4hk47mqhnE4cnEnxf0D98-gq0rte0SMHrv_HUBfY9sTPsC6KxKdfJLFZjg5vlec_kzUuSpQa2YMt-r8QXg4xdS-ba7sJd-rPcDJJtLnIj3ez3KS0PsiQMGjb9-MxtqlRLZZMSBzI9hC9YpiVvm_c-vBjMr0PozT0aHx4O96yMSn1VjDh43IeZ4U',
        location: 'Dhaka',
        skills: ['Figma', 'UI/UX', 'React'],
        projects: 12,
        connections: 178,
        available: true,
    },
    {
        id: 5,
        name: 'Kamal Ud-Din',
        handle: 'kamal_dev',
        role: 'Mobile Developer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSQ6z1YpHheyB5W7T6S8CxqKJ2D0B8jhY8mOX_KGfrIH3o7gGxZ_FYvxQqY-u1ksE_2I8jfKUZZGc0cxYqbcqT57hZrw_0G8OGdxXq4m4N4C53JpM9jMx8O7NpL7opfN123456789',
        location: 'Sylhet',
        skills: ['React Native', 'Swift', 'Kotlin'],
        projects: 6,
        connections: 95,
        available: true,
    },
    {
        id: 6,
        name: 'Nadia Islam',
        handle: 'nadia_ml',
        role: 'Data Scientist',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        location: 'Dhaka',
        skills: ['Python', 'AI/ML', 'PyTorch'],
        projects: 4,
        connections: 67,
        available: false,
    },
];

export default function MembersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSkill, setActiveSkill] = useState('All');
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredMembers = members.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSkill = activeSkill === 'All' || member.skills.includes(activeSkill);
        const matchesAvailable = !showAvailableOnly || member.available;
        return matchesSearch && matchesSkill && matchesAvailable;
    });

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Discover Members
                        </h1>
                        <p className="text-gray-400">
                            Connect with talented developers, designers, and entrepreneurs in the DevCafe community.
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by name, handle, or role..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-surface border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <button
                                    key={skill}
                                    onClick={() => setActiveSkill(skill)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSkill === skill
                                            ? 'bg-primary text-white'
                                            : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                        }`}
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Available Filter */}
                    <div className="flex items-center gap-2 mb-8">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showAvailableOnly}
                                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                            />
                            <span className="text-gray-400 text-sm">Show only available for collaboration</span>
                        </label>
                    </div>

                    {/* Members Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMembers.map(member => (
                            <div
                                key={member.id}
                                className="bg-surface rounded-2xl border border-gray-800 p-6 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-primary transition-colors">
                                            <Image
                                                src={member.avatar}
                                                alt={member.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {member.available && (
                                            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-surface rounded-full" title="Available for collaboration" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-white truncate">{member.name}</h3>
                                        <p className="text-primary text-sm">@{member.handle}</p>
                                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                            <Briefcase className="w-3 h-3" />
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {member.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Code className="w-4 h-4" />
                                        {member.projects} projects
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        href={`/community/members/${member.handle}`}
                                        className="flex-1 text-center py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-sm"
                                    >
                                        View Profile
                                    </Link>
                                    <button className="flex-1 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-sm flex items-center justify-center gap-1">
                                        <MessageCircle className="w-4 h-4" />
                                        Connect
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredMembers.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No members found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
