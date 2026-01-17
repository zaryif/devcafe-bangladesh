'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Upload, X, Plus, Save, Trash2 } from 'lucide-react';

const categories = ['SaaS', 'Open Source', 'Mobile Apps', 'AI/ML', 'Hardware', 'Other'];

const mockProject = {
    title: 'Chokher Dekha',
    description: 'AI-based vision aid for the visually impaired using real-time object detection and audio feedback.',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'OpenCV'],
    githubUrl: 'https://github.com/rahim/chokher-dekha',
    liveUrl: 'https://chokher-dekha.vercel.app',
    lookingFor: ['iOS Developer', 'UI/UX Designer'],
    images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88'
    ],
};

export default function EditProjectPage() {
    const params = useParams();
    const router = useRouter();

    const [title, setTitle] = useState(mockProject.title);
    const [description, setDescription] = useState(mockProject.description);
    const [category, setCategory] = useState(mockProject.category);
    const [techStack, setTechStack] = useState<string[]>(mockProject.techStack);
    const [newTech, setNewTech] = useState('');
    const [githubUrl, setGithubUrl] = useState(mockProject.githubUrl);
    const [liveUrl, setLiveUrl] = useState(mockProject.liveUrl);
    const [lookingFor, setLookingFor] = useState<string[]>(mockProject.lookingFor);
    const [newRole, setNewRole] = useState('');
    const [images, setImages] = useState<string[]>(mockProject.images);

    const addTech = () => {
        if (newTech && !techStack.includes(newTech)) {
            setTechStack([...techStack, newTech]);
            setNewTech('');
        }
    };

    const removeTech = (tech: string) => {
        setTechStack(techStack.filter(t => t !== tech));
    };

    const addRole = () => {
        if (newRole && !lookingFor.includes(newRole)) {
            setLookingFor([...lookingFor, newRole]);
            setNewRole('');
        }
    };

    const removeRole = (role: string) => {
        setLookingFor(lookingFor.filter(r => r !== role));
    };

    const handleSave = () => {
        // TODO: Save to Supabase
        alert('Project saved! (Demo mode)');
        router.push(`/projects/${params.id}`);
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this project?')) {
            // TODO: Delete from Supabase
            router.push('/dashboard/projects');
        }
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            <header className="border-b border-gray-800 bg-surface">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href={`/projects/${params.id}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Project
                    </Link>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDelete}
                            className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-display font-bold text-white mb-2">Edit Project</h1>
                <p className="text-gray-500 mb-8">Update your project details and settings.</p>

                <div className="space-y-8">
                    {/* Basic Info */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-6">Basic Information</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    className="w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-6">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1.5 rounded-lg text-sm"
                                >
                                    {tech}
                                    <button onClick={() => removeTech(tech)} className="hover:text-white">
                                        <X className="w-4 h-4" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTech}
                                onChange={(e) => setNewTech(e.target.value)}
                                placeholder="Add technology..."
                                className="flex-1"
                                onKeyDown={(e) => e.key === 'Enter' && addTech()}
                            />
                            <button onClick={addTech} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-6">Links</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Repository</label>
                                <input
                                    type="url"
                                    value={githubUrl}
                                    onChange={(e) => setGithubUrl(e.target.value)}
                                    placeholder="https://github.com/..."
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Live Demo URL</label>
                                <input
                                    type="url"
                                    value={liveUrl}
                                    onChange={(e) => setLiveUrl(e.target.value)}
                                    placeholder="https://..."
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Looking For */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-6">Looking for Collaborators</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {lookingFor.map((role) => (
                                <span
                                    key={role}
                                    className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-3 py-1.5 rounded-lg text-sm"
                                >
                                    {role}
                                    <button onClick={() => removeRole(role)} className="hover:text-white">
                                        <X className="w-4 h-4" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newRole}
                                onChange={(e) => setNewRole(e.target.value)}
                                placeholder="Add role (e.g., Backend Developer)..."
                                className="flex-1"
                                onKeyDown={(e) => e.key === 'Enter' && addRole()}
                            />
                            <button onClick={addRole} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="text-lg font-bold text-white mb-6">Project Images</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {images.map((img, i) => (
                                <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image src={img} alt={`Screenshot ${i + 1}`} fill className="object-cover" />
                                    <button
                                        onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            <button className="aspect-video rounded-lg border-2 border-dashed border-gray-700 hover:border-primary/50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                                <Upload className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4">
                        <Link
                            href={`/projects/${params.id}`}
                            className="px-6 py-3 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors"
                        >
                            Cancel
                        </Link>
                        <button
                            onClick={handleSave}
                            className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                        >
                            <Save className="w-5 h-5" />
                            Save Changes
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
