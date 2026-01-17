'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { ArrowLeft, Camera, X, Plus, Save } from 'lucide-react';

const suggestedSkills = ['React', 'Node.js', 'Python', 'Go', 'Rust', 'Flutter', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'TypeScript'];

export default function EditProfilePage() {
    const { profile } = useAuth();
    const [fullName, setFullName] = useState(profile?.full_name || 'Arif Ahmed');
    const [headline, setHeadline] = useState('Senior Go Developer');
    const [bio, setBio] = useState('Building scalable backend systems with Go and Kubernetes. Enthusiast of open source and tea. Formerly at Shohoz, now building the future of fintech.');
    const [skills, setSkills] = useState(['Golang', 'System Design', 'Kubernetes', 'PostgreSQL']);
    const [newSkill, setNewSkill] = useState('');
    const [github, setGithub] = useState('github.com/arif-dev');
    const [linkedin, setLinkedin] = useState('https://linkedin.com/in/username');
    const [website, setWebsite] = useState('https://yourwebsite.com');

    const addSkill = (skill: string) => {
        if (skill && !skills.includes(skill)) {
            setSkills([...skills, skill]);
        }
        setNewSkill('');
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter(s => s !== skill));
    };

    const handleSave = () => {
        // TODO: Save to Supabase
        alert('Profile saved! (Demo mode)');
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            {/* Header */}
            <header className="border-b border-gray-800 bg-surface">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Profile
                    </Link>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                            src={profile?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ'}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-display font-bold text-white mb-2">Edit Profile</h1>
                <p className="text-gray-500 mb-8">Curate your professional identity within the community.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Profile Assets */}
                    <div className="space-y-6">
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Profile Assets</h3>

                            {/* Cover Photo */}
                            <div className="mb-6">
                                <label className="block text-sm text-gray-400 mb-2">Cover Photo <span className="text-gray-600">16:9 recommended</span></label>
                                <div className="relative h-28 bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-700 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Camera className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Avatar */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Avatar <span className="text-gray-600">400x400px</span></label>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
                                        <Image
                                            src={profile?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ'}
                                            alt="Avatar"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <button className="block text-sm bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700">
                                            Upload New
                                        </button>
                                        <button className="block text-sm text-red-400 hover:text-red-300">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Preview */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Live Preview</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={profile?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ'}
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">{fullName || 'Your Name'}</h4>
                                    <p className="text-sm text-gray-500">{headline || 'Your Role'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* About You */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">👤</span>
                                About You
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Professional Headline</label>
                                    <input
                                        type="text"
                                        value={headline}
                                        onChange={(e) => setHeadline(e.target.value)}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Bio <span className="text-gray-600">{bio.length}/500</span>
                                </label>
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows={4}
                                    maxLength={500}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 resize-none"
                                />
                            </div>
                        </div>

                        {/* Skills & Stack */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">🔗</span>
                                Skills & Stack
                            </h2>

                            <div className="mb-4">
                                <label className="block text-sm text-gray-400 mb-2">Add a skill (e.g. Rust, Figma, AWS)</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newSkill}
                                        onChange={(e) => setNewSkill(e.target.value)}
                                        placeholder="Type a skill..."
                                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                                        onKeyDown={(e) => e.key === 'Enter' && addSkill(newSkill)}
                                    />
                                    <button
                                        onClick={() => addSkill(newSkill)}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Selected Skills */}
                            <div className="mb-4">
                                <span className="text-sm text-gray-500 uppercase tracking-wider">Selected Skills</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1.5 rounded-lg text-sm"
                                        >
                                            {skill}
                                            <button onClick={() => removeSkill(skill)} className="hover:text-white">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Suggestions */}
                            <div>
                                <span className="text-xs text-gray-500">Suggestions:</span>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {suggestedSkills.filter(s => !skills.includes(s)).slice(0, 6).map((skill) => (
                                        <button
                                            key={skill}
                                            onClick={() => addSkill(skill)}
                                            className="text-gray-500 hover:text-white text-sm px-2 py-1 rounded border border-gray-700 hover:border-gray-600"
                                        >
                                            + {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Presence */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">🌐</span>
                                Social Presence
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">GitHub</label>
                                    <div className="flex">
                                        <span className="bg-gray-800 border border-gray-700 border-r-0 rounded-l-lg px-4 py-3 text-gray-500">GitHub</span>
                                        <input
                                            type="text"
                                            value={github}
                                            onChange={(e) => setGithub(e.target.value)}
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-r-lg px-4 py-3"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">LinkedIn</label>
                                    <div className="flex">
                                        <span className="bg-gray-800 border border-gray-700 border-r-0 rounded-l-lg px-4 py-3 text-gray-500">LinkedIn</span>
                                        <input
                                            type="text"
                                            value={linkedin}
                                            onChange={(e) => setLinkedin(e.target.value)}
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-r-lg px-4 py-3"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Website</label>
                                    <div className="flex">
                                        <span className="bg-gray-800 border border-gray-700 border-r-0 rounded-l-lg px-4 py-3 text-gray-500">🔗</span>
                                        <input
                                            type="url"
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-r-lg px-4 py-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-4">
                            <Link
                                href="/dashboard"
                                className="px-6 py-3 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors"
                            >
                                Cancel
                            </Link>
                            <button
                                onClick={handleSave}
                                className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                            >
                                Save Changes
                                <Save className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
