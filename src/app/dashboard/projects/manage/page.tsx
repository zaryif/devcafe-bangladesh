'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Plus, Search, Edit, Trash2, Eye, MoreVertical, ExternalLink, Heart, MessageCircle, Archive } from 'lucide-react';

const userProjects = [
    {
        id: 1,
        title: 'Chokher Dekha',
        description: 'AI-based vision aid for the visually impaired using real-time object detection.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        status: 'published',
        likes: 89,
        comments: 12,
        views: 450,
        lastUpdated: '2 days ago',
    },
    {
        id: 2,
        title: 'BanglaOCR',
        description: 'Optical character recognition optimized for Bengali text and handwriting.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        status: 'published',
        likes: 45,
        comments: 6,
        views: 220,
        lastUpdated: '1 week ago',
    },
    {
        id: 3,
        title: 'Smart Traffic System',
        description: 'IoT-based traffic light optimization using machine learning to reduce congestion.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        status: 'draft',
        likes: 0,
        comments: 0,
        views: 12,
        lastUpdated: '3 days ago',
    },
];

const statusColors: Record<string, { bg: string; text: string }> = {
    published: { bg: 'bg-green-500/20', text: 'text-green-400' },
    draft: { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
    archived: { bg: 'bg-gray-500/20', text: 'text-gray-400' },
};

export default function ManageProjectsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
    const [showMenu, setShowMenu] = useState<number | null>(null);

    const filteredProjects = userProjects.filter(p => {
        const matchesFilter = filter === 'all' || p.status === filter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-white">Manage Projects</h1>
                    <p className="text-gray-500">Edit, publish, or archive your project submissions.</p>
                </div>
                <Link
                    href="/projects/new"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Project
                </Link>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search your projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-surface border border-gray-700 rounded-xl text-sm"
                    />
                </div>
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
            </div>

            {/* Projects Table/Cards */}
            <div className="bg-surface rounded-2xl border border-gray-800 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-800">
                            <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4">Project</th>
                            <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 hidden md:table-cell">Status</th>
                            <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 hidden lg:table-cell">Engagement</th>
                            <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 hidden md:table-cell">Last Updated</th>
                            <th className="text-right text-xs text-gray-500 uppercase tracking-wider px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProjects.map((project) => (
                            <tr key={project.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image src={project.image} alt={project.title} width={64} height={48} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">{project.title}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-1 max-w-xs">{project.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[project.status].bg} ${statusColors[project.status].text}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 hidden lg:table-cell">
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                            {project.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageCircle className="w-4 h-4" />
                                            {project.comments}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {project.views}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">
                                    {project.lastUpdated}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2 relative">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                            title="View"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={`/projects/${project.id}/edit`}
                                            className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={() => setShowMenu(showMenu === project.id ? null : project.id)}
                                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                        >
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                        {showMenu === project.id && (
                                            <div className="absolute right-0 top-full mt-1 bg-surface border border-gray-700 rounded-lg shadow-lg z-10 py-1 min-w-[140px]">
                                                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 flex items-center gap-2">
                                                    <Archive className="w-4 h-4" />
                                                    Archive
                                                </button>
                                                <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-800 flex items-center gap-2">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No projects found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
