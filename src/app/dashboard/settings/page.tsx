'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Camera, Save, ArrowLeft } from 'lucide-react';

export default function SettingsPage() {
    const { profile } = useAuth();
    const [fullName, setFullName] = useState(profile?.full_name || '');
    const [bio, setBio] = useState('Building AI solutions for social good.');
    const [location, setLocation] = useState('Dhaka, Bangladesh');
    const [website, setWebsite] = useState('https://example.com');
    const [github, setGithub] = useState('username');
    const [twitter, setTwitter] = useState('username');
    const [linkedin, setLinkedin] = useState('username');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [available, setAvailable] = useState(true);

    const handleSave = () => {
        // TODO: Save to Supabase
        alert('Settings saved! (Demo mode)');
    };

    return (
        <div className="max-w-3xl space-y-8">
            <div>
                <h1 className="text-2xl font-display font-bold text-white">Settings</h1>
                <p className="text-gray-500">Manage your account and preferences.</p>
            </div>

            {/* Profile Section */}
            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                <h2 className="text-lg font-bold text-white mb-6">Profile Information</h2>

                {/* Avatar */}
                <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
                            <Image
                                src={profile?.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ'}
                                alt="Avatar"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>
                    <div>
                        <h3 className="font-medium text-white">{fullName || 'Your Name'}</h3>
                        <p className="text-sm text-gray-500">JPG, PNG up to 2MB</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={3}
                            className="w-full resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                <h2 className="text-lg font-bold text-white mb-6">Social Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                        <input
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="https://yoursite.com"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">GitHub</label>
                        <input
                            type="text"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            placeholder="username"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Twitter/X</label>
                        <input
                            type="text"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder="username"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn</label>
                        <input
                            type="text"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder="username"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                <h2 className="text-lg font-bold text-white mb-6">Notifications</h2>
                <div className="space-y-4">
                    <label className="flex items-center justify-between cursor-pointer">
                        <div>
                            <span className="text-white">Email Notifications</span>
                            <p className="text-sm text-gray-500">Receive updates about events and messages</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={(e) => setEmailNotifications(e.target.checked)}
                            className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                        />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                        <div>
                            <span className="text-white">Push Notifications</span>
                            <p className="text-sm text-gray-500">Get notified on your device</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={(e) => setPushNotifications(e.target.checked)}
                            className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                        />
                    </label>
                </div>
            </div>

            {/* Availability */}
            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                <h2 className="text-lg font-bold text-white mb-4">Collaboration Status</h2>
                <label className="flex items-center justify-between cursor-pointer">
                    <div>
                        <span className="text-white">Available for Collaboration</span>
                        <p className="text-sm text-gray-500">Show that you&apos;re open to working on projects</p>
                    </div>
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                    />
                </label>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                    <Save className="w-5 h-5" />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
