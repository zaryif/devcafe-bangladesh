'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Heart, Users, ExternalLink } from 'lucide-react';

const categories = ['All', 'SaaS', 'Open Source', 'Mobile Apps', 'AI/ML', 'Hardware'];

const projects = [
    {
        id: 1,
        title: 'Chokher Dekha',
        description: 'AI-based vision aid assisting the visually impaired through real-time object detection and audio.',
        author: 'dev_guru',
        timeAgo: '2h ago',
        tags: ['Python', 'TensorFlow', 'OpenCV'],
        likes: 89,
        category: 'AI/ML',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        id: 2,
        title: 'Dhaka Commute',
        description: 'A community-driven bus route optimizer for Dhaka city, helping commuters find the fastest routes.',
        author: 'transit_hero',
        timeAgo: '1d ago',
        tags: ['Flutter', 'Google Maps API'],
        likes: 126,
        category: 'Mobile Apps',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    },
    {
        id: 3,
        title: 'Deshi Ledger',
        description: 'Simplifying bookkeeping for small businesses in Bangladesh with local language support and SMS.',
        author: 'aki_wizard',
        timeAgo: '5d ago',
        tags: ['React', 'Node.js', 'MongoDB'],
        likes: 85,
        category: 'SaaS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
    },
    {
        id: 4,
        title: 'ChainVote',
        description: 'A transparent, decentralized voting mechanism for university clubs built on Ethereum smart contracts.',
        author: 'crypto_bd',
        timeAgo: '1d ago',
        tags: ['Solidity', 'Web3.js'],
        likes: 54,
        category: 'Open Source',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    },
    {
        id: 5,
        title: 'GreenThumb IoT',
        description: 'Automated plant care system using ESP32 and soil moisture sensors. Never kill a houseplant again.',
        author: 'hardware_hacker',
        timeAgo: '1w ago',
        tags: ['C++', 'IoT', 'MQTT'],
        likes: 210,
        category: 'Hardware',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ThZCfti2ITRsr7ZMKon1MYEgc2uwD7GmMo-9at3PdQNUJOS1TpXEhaxnPkujy_aHKmgZbRKAGyYKGEetpKLRLfHwacrSeTgMQ3egGWeBhdq0_3LPAZvihczSgnzzgt4hAKz6FbqMcdIJb01D8EHc0LdThnmnkRr6YYXvX-fSNqZLC4IVoQu7ZG-0rB-4mYa1tZA1zFJ9mSRpEAz3jTtsNn7PQyVydwRY7EjkFRNA_xfmgQ4jCMkzt9HmTtRowEVMdOBGK4wcqQ4',
    },
    {
        id: 6,
        title: 'FocusFlow',
        description: 'A pomodoro timer mixed with a kanban board, designed for extreme productivity enthusiasts.',
        author: 'blur_ninja',
        timeAgo: '2w ago',
        tags: ['SwiftUI', 'CoreData'],
        likes: 56,
        category: 'Mobile Apps',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6UIDq0k6BKWPxl-7BfWKC1cCsgzEFNkoqY4HzwhTby8QXJfCLSlHWEtc4pzB4ujsIq00aHQ4bYjzwNPJ6S7MHa9gUZBYs6o1lyBcG72xNHd-BLfe2yYU9NAvbdvMhDx4t4TqjEbnXUNWTeyj_5WOHRu5Ouy7PUJGhomHok-m1Y5r44YjiWjUEAelh4cG0h7hrJCyZctG1IePsQDtijorURf4fGvZkaZPR_o9w8MILUs7WY9Fbdv-ejkpgbGz7pV-FFo6JbK2S0c',
    },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
                                Community Showcase
                            </h1>
                            <p className="text-gray-400 mt-2">
                                Discover brewed projects, apps, and startups by our talented community members.
                            </p>
                        </div>
                        <Link
                            href="/projects/new"
                            className="bg-primary hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium shadow-glow hover:shadow-glow-lg transition-all self-start"
                        >
                            Submit Project
                        </Link>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Find projects, stacks, or creators..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-surface border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                            ? 'bg-primary text-white'
                                            : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-surface rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm text-white">
                                        <Heart className="w-4 h-4 text-red-400" />
                                        {project.likes}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <span>@{project.author}</span>
                                        <span>•</span>
                                        <span>{project.timeAgo}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="flex-1 text-center py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                                        >
                                            View Details
                                        </Link>
                                        <button className="flex-1 py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-sm font-medium flex items-center justify-center gap-1">
                                            <Users className="w-4 h-4" />
                                            Collaborate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
                            Load more brews
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
