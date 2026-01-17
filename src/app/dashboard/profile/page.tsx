'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { User, Settings, LogOut, Edit, ExternalLink, Github, Linkedin, Globe, MapPin, Calendar, Heart, Eye, FolderGit2 } from 'lucide-react';

const mockProfile = {
    name: 'Rahim Ahmed',
    handle: 'dev_guru',
    headline: 'ML Engineer & Open Source Contributor',
    bio: 'Building AI solutions for social good. Passionate about accessible technology and helping developers grow.',
    location: 'Dhaka, Bangladesh',
    joinedDate: 'March 2023',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    skills: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    stats: { projects: 12, likes: 234, views: 1890 },
    social: {
        github: 'rahim-dev',
        linkedin: 'rahim-ahmed',
        website: 'https://rahim.dev',
    },
};

const recentProjects = [
    {
        id: 1,
        title: 'Chokher Dekha',
        description: 'AI-based vision aid for the visually impaired',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        likes: 89,
    },
    {
        id: 2,
        title: 'BanglaOCR',
        description: 'Optical character recognition for Bengali text',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        likes: 45,
    },
];

export default function ProfilePage() {
    const { signOut } = useAuth();

    return (
        <div className="space-y-6">
            {/* Cover & Avatar */}
            <div className="relative">
                <div className="h-48 rounded-2xl overflow-hidden">
                    <Image
                        src={mockProfile.coverImage}
                        alt="Cover"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute -bottom-16 left-6 flex items-end gap-4">
                    <div className="w-32 h-32 rounded-full border-4 border-bg-darker overflow-hidden">
                        <Image
                            src={mockProfile.avatar}
                            alt={mockProfile.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                    <Link
                        href="/dashboard/profile/edit"
                        className="bg-surface/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface flex items-center gap-2"
                    >
                        <Edit className="w-4 h-4" />
                        Edit Profile
                    </Link>
                </div>
            </div>

            {/* Profile Info */}
            <div className="pt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Name & Bio */}
                    <div>
                        <h1 className="text-2xl font-display font-bold text-white">{mockProfile.name}</h1>
                        <p className="text-gray-500">@{mockProfile.handle}</p>
                        <p className="text-primary mt-1">{mockProfile.headline}</p>
                        <p className="text-gray-400 mt-4">{mockProfile.bio}</p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {mockProfile.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Joined {mockProfile.joinedDate}
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            {mockProfile.social.github && (
                                <a href={`https://github.com/${mockProfile.social.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {mockProfile.social.linkedin && (
                                <a href={`https://linkedin.com/in/${mockProfile.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {mockProfile.social.website && (
                                <a href={mockProfile.social.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                    <Globe className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="font-bold text-white mb-4">Skills & Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {mockProfile.skills.map((skill) => (
                                <span key={skill} className="bg-primary/20 text-primary px-3 py-1.5 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-bold text-white">My Projects</h2>
                            <Link href="/dashboard/projects" className="text-primary text-sm hover:text-green-400">
                                View All →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recentProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                    className="group rounded-xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-colors"
                                >
                                    <div className="relative h-32">
                                        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-gray-500 text-sm line-clamp-1">{project.description}</p>
                                        <span className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                                            <Heart className="w-4 h-4" />
                                            {project.likes}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Stats */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="font-bold text-white mb-4">Stats</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-gray-400">
                                    <FolderGit2 className="w-5 h-5" />
                                    Projects
                                </span>
                                <span className="text-white font-bold">{mockProfile.stats.projects}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-gray-400">
                                    <Heart className="w-5 h-5" />
                                    Total Likes
                                </span>
                                <span className="text-white font-bold">{mockProfile.stats.likes}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-gray-400">
                                    <Eye className="w-5 h-5" />
                                    Profile Views
                                </span>
                                <span className="text-white font-bold">{mockProfile.stats.views}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                        <h2 className="font-bold text-white mb-4">Quick Links</h2>
                        <div className="space-y-2">
                            <Link href="/dashboard/settings" className="flex items-center gap-2 text-gray-400 hover:text-white py-2 transition-colors">
                                <Settings className="w-4 h-4" />
                                Account Settings
                            </Link>
                            <Link href="/dashboard/profile/edit" className="flex items-center gap-2 text-gray-400 hover:text-white py-2 transition-colors">
                                <Edit className="w-4 h-4" />
                                Edit Profile
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="flex items-center gap-2 text-red-400 hover:text-red-300 py-2 transition-colors w-full text-left"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
