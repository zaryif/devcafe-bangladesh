'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Upload, Plus, X, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const categories = ['SaaS', 'Open Source', 'Mobile Apps', 'AI/ML', 'Hardware', 'Web App', 'Other'];
const techOptions = ['React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Python', 'Django', 'Flask', 'FastAPI', 'Go', 'Rust', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'Docker', 'Kubernetes'];

export default function NewProjectPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [category, setCategory] = useState('');
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [githubUrl, setGithubUrl] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [lookingFor, setLookingFor] = useState<string[]>([]);
    const [newRole, setNewRole] = useState('');

    const toggleTech = (tech: string) => {
        setSelectedTech(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    const addRole = () => {
        if (newRole.trim() && !lookingFor.includes(newRole.trim())) {
            setLookingFor([...lookingFor, newRole.trim()]);
            setNewRole('');
        }
    };

    const removeRole = (role: string) => {
        setLookingFor(lookingFor.filter(r => r !== role));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Submit to Supabase
        alert('Project submitted! (Demo mode)');
    };

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                    <h1 className="text-3xl font-display font-bold text-white mb-2">Submit Your Project</h1>
                    <p className="text-gray-400 mb-8">Share your creation with the DevCafe community.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Cover Image */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <label className="block text-sm font-medium text-gray-300 mb-4">
                                Cover Image
                            </label>
                            <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ImageIcon className="w-8 h-8 text-gray-500" />
                                </div>
                                <p className="text-gray-400 mb-2">Click to upload or drag and drop</p>
                                <p className="text-gray-600 text-sm">PNG, JPG up to 5MB (16:9 recommended)</p>
                                <input type="file" className="hidden" accept="image/*" />
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-6">
                            <h2 className="text-lg font-bold text-white">Basic Information</h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Project Title *</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., Chokher Dekha - AI Vision Aid"
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Short Description *</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="A one-liner about your project"
                                    className="w-full"
                                    maxLength={150}
                                    required
                                />
                                <p className="text-gray-600 text-xs mt-1">{description.length}/150 characters</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Description *</label>
                                <textarea
                                    value={fullDescription}
                                    onChange={(e) => setFullDescription(e.target.value)}
                                    placeholder="Tell the community about your project in detail..."
                                    rows={6}
                                    className="w-full resize-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-lg font-bold text-white mb-4">Tech Stack</h2>
                            <p className="text-gray-500 text-sm mb-4">Select the technologies used in your project</p>
                            <div className="flex flex-wrap gap-2">
                                {techOptions.map(tech => (
                                    <button
                                        key={tech}
                                        type="button"
                                        onClick={() => toggleTech(tech)}
                                        className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${selectedTech.includes(tech)
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-800 text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-4">
                            <h2 className="text-lg font-bold text-white">Links</h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub URL</label>
                                <input
                                    type="url"
                                    value={githubUrl}
                                    onChange={(e) => setGithubUrl(e.target.value)}
                                    placeholder="https://github.com/username/repo"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Live Demo URL</label>
                                <input
                                    type="url"
                                    value={liveUrl}
                                    onChange={(e) => setLiveUrl(e.target.value)}
                                    placeholder="https://your-project.com"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Looking for Collaborators */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-lg font-bold text-white mb-4">Looking for Collaborators?</h2>
                            <p className="text-gray-500 text-sm mb-4">Add roles you&apos;re looking for help with</p>

                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={newRole}
                                    onChange={(e) => setNewRole(e.target.value)}
                                    placeholder="e.g., Backend Developer"
                                    className="flex-1"
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addRole())}
                                />
                                <button
                                    type="button"
                                    onClick={addRole}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>

                            {lookingFor.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {lookingFor.map(role => (
                                        <span
                                            key={role}
                                            className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm"
                                        >
                                            {role}
                                            <button type="button" onClick={() => removeRole(role)} className="hover:text-white">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Upload className="w-5 h-5" />
                                Submit Project
                            </button>
                            <button
                                type="button"
                                className="px-8 py-4 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors"
                            >
                                Save Draft
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
