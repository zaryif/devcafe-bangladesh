'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, MapPin, Briefcase, Code, MessageCircle, Filter, Users } from 'lucide-react';

const lookingForOptions = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'AI/ML', 'DevOps', 'UI/UX'];

const seekingCollaboration = [
    {
        id: 1,
        project: 'AI-Powered E-commerce',
        owner: { name: 'Fatima Khan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4' },
        description: 'Building a recommendation engine for local fashion brands.',
        seeking: ['Backend Developer', 'ML Engineer'],
        stage: 'MVP',
    },
    {
        id: 2,
        project: 'Green Energy Tracker',
        owner: { name: 'Arif Hasan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI' },
        description: 'IoT app to monitor and optimize home energy consumption.',
        seeking: ['Mobile Developer', 'Hardware Engineer'],
        stage: 'Idea',
    },
    {
        id: 3,
        project: 'Chokher Dekha',
        owner: { name: 'Rahim Ahmed', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ' },
        description: 'AI-based vision aid for the visually impaired.',
        seeking: ['iOS Developer', 'UI/UX Designer'],
        stage: 'Beta',
    },
];

const availableMembers = [
    {
        id: 1,
        name: 'Sarah Chen',
        handle: 'sarah_designs',
        role: 'UI/UX Designer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7bzfojQszyXRXr_8bSLZDupRiQJArtKb4qmBJI0juHGhJsB-W1E3h5At1vUlxJzErzLyrighko0smFKIiw9mk4hk47mqhnE4cnEnxf0D98-gq0rte0SMHrv_HUBfY9sTPsC6KxKdfJLFZjg5vlec_kzUuSpQa2YMt-r8QXg4xdS-ba7sJd-rPcDJJtLnIj3ez3KS0PsiQMGjb9-MxtqlRLZZMSBzI9hC9YpiVvm_c-vBjMr0PozT0aHx4O96yMSn1VjDh43IeZ4U',
        skills: ['Figma', 'React', 'CSS'],
        lookingFor: 'Tech co-founder for SaaS idea',
    },
    {
        id: 2,
        name: 'Nadia Islam',
        handle: 'nadia_ml',
        role: 'Data Scientist',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        skills: ['Python', 'TensorFlow', 'SQL'],
        lookingFor: 'AI/ML projects to contribute to',
    },
];

export default function FindCollaboratorsPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Find Collaborators
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Connect with talented developers looking for their next project or find the perfect team member.
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by project, skill, or name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-surface border border-gray-700 rounded-xl"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {lookingForOptions.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setActiveFilter(opt)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === opt
                                            ? 'bg-primary text-white'
                                            : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Projects Seeking Collaborators */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Code className="w-5 h-5 text-primary" />
                                Projects Seeking Collaborators
                            </h2>

                            {seekingCollaboration.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-surface rounded-2xl border border-gray-800 p-6 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                                <Image src={item.owner.avatar} alt={item.owner.name} width={48} height={48} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white">{item.project}</h3>
                                                <p className="text-sm text-gray-500">by {item.owner.name}</p>
                                            </div>
                                        </div>
                                        <span className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                                            {item.stage}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 mb-4">{item.description}</p>

                                    <div className="mb-4">
                                        <span className="text-sm text-gray-500 mb-2 block">Looking for:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {item.seeking.map((role) => (
                                                <span key={role} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg">
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Link
                                            href={`/projects/${item.id}`}
                                            className="flex-1 text-center py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-sm"
                                        >
                                            View Project
                                        </Link>
                                        <button className="flex-1 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-sm flex items-center justify-center gap-1">
                                            <MessageCircle className="w-4 h-4" />
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Available Members */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                Available Members
                            </h2>

                            {availableMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-surface rounded-2xl border border-gray-800 p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-500">
                                            <Image src={member.avatar} alt={member.name} width={56} height={56} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{member.name}</h3>
                                            <p className="text-sm text-gray-500">{member.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {member.skills.map((skill) => (
                                            <span key={skill} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4">{member.lookingFor}</p>

                                    <Link
                                        href={`/community/members/${member.handle}`}
                                        className="block w-full text-center py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-sm"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            ))}

                            <Link
                                href="/community/members"
                                className="block text-center text-primary hover:text-green-400 text-sm"
                            >
                                Browse All Members →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
