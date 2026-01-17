'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Search, Plus, Heart, ExternalLink, Github, Trash2, Edit } from 'lucide-react';

const userProjects = [
    {
        id: 1,
        title: 'Chokher Dekha',
        description: 'AI-based vision aid for the visually impaired.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        likes: 89,
        status: 'published',
        createdAt: '2024-09-15',
    },
    {
        id: 2,
        title: 'BanglaOCR',
        description: 'Optical character recognition for Bengali text.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        likes: 45,
        status: 'published',
        createdAt: '2024-08-10',
    },
    {
        id: 3,
        title: 'Smart Traffic System',
        description: 'IoT-based traffic light optimization using ML.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        likes: 0,
        status: 'draft',
        createdAt: '2024-10-01',
    },
];

const statusBadge: Record<string, string> = {
    published: 'bg-green-500/20 text-green-400',
    draft: 'bg-yellow-500/20 text-yellow-400',
};

export default function DashboardProjectsPage() {
    const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

    const filteredProjects = userProjects.filter(p => {
        if (filter === 'all') return true;
        return p.status === filter;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-white">My Projects</h1>
                    <p className="text-gray-500">Manage and showcase your work.</p>
                </div>
                <Link
                    href="/projects/new"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Project
                </Link>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                {['all', 'published', 'draft'].map((f) => (
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

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors group"
                    >
                        <div className="relative h-40">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-3 right-3">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusBadge[project.status]}`}>
                                    {project.status}
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Heart className="w-4 h-4" />
                                    {project.likes}
                                </span>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors"
                                        title="View"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                    <button
                                        className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors"
                                        title="Edit"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Card */}
                <Link
                    href="/projects/new"
                    className="bg-surface rounded-2xl border-2 border-dashed border-gray-700 hover:border-primary/50 transition-colors flex flex-col items-center justify-center p-8 text-center min-h-[280px]"
                >
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                        <Plus className="w-6 h-6 text-gray-500" />
                    </div>
                    <p className="text-gray-400">Add New Project</p>
                </Link>
            </div>
        </div>
    );
}
