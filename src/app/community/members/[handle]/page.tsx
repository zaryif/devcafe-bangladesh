'use client';

import { useParams } from 'next/navigation';

// Generate static params for all member profiles
export function generateStaticParams() {
    return [
        { handle: 'dev_guru' },
    ];
}
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ArrowLeft,
    MapPin,
    LinkIcon,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Calendar,
    Code,
    Users,
    Heart,
    MessageCircle,
    ExternalLink,
} from 'lucide-react';

const memberData: Record<string, {
    name: string;
    handle: string;
    role: string;
    bio: string;
    avatar: string;
    coverImage: string;
    location: string;
    memberSince: string;
    website: string;
    github: string;
    twitter: string;
    linkedin: string;
    email: string;
    skills: string[];
    stats: { projects: number; connections: number; likes: number };
    available: boolean;
    projects: { id: number; title: string; image: string; likes: number }[];
}> = {
    'dev_guru': {
        name: 'Rahim Ahmed',
        handle: 'dev_guru',
        role: 'ML Engineer',
        bio: 'Building AI solutions for social good. Passionate about making technology accessible to everyone in Bangladesh. Currently working on Chokher Dekha - an AI vision aid for the visually impaired.',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        location: 'Dhaka, Bangladesh',
        memberSince: 'Nov 2021',
        website: 'https://rahimahmed.dev',
        github: 'rahim-ahmed',
        twitter: 'rahim_codes',
        linkedin: 'rahim-ahmed-bd',
        email: 'rahim@devcafe.bd',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'React Native', 'FastAPI'],
        stats: { projects: 5, connections: 142, likes: 89 },
        available: true,
        projects: [
            { id: 1, title: 'Chokher Dekha', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88', likes: 89 },
            { id: 2, title: 'BanglaOCR', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0', likes: 45 },
        ],
    },
};

export default function MemberProfilePage() {
    const params = useParams();
    const handle = params.handle as string;
    const member = memberData[handle];

    if (!member) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Member Not Found</h1>
                        <p className="text-gray-400 mb-8">This profile doesn&apos;t exist.</p>
                        <Link href="/community/members" className="btn-primary">Browse Members</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-16 pb-20">
                {/* Cover Image */}
                <div className="relative h-48 md:h-64">
                    <Image src={member.coverImage} alt="Cover" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                    {/* Back Link */}
                    <Link href="/community/members" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Members
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left - Profile Info */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Avatar & Basic Info */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary">
                                        <Image src={member.avatar} alt={member.name} width={128} height={128} className="w-full h-full object-cover" />
                                    </div>
                                    {member.available && (
                                        <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-3 border-surface rounded-full" />
                                    )}
                                </div>
                                <h1 className="text-2xl font-bold text-white">{member.name}</h1>
                                <p className="text-primary">@{member.handle}</p>
                                <p className="text-gray-400 mt-1">{member.role}</p>

                                <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    {member.location}
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-1 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    Member since {member.memberSince}
                                </div>

                                {member.available && (
                                    <span className="inline-block mt-4 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                        Available for Collaboration
                                    </span>
                                )}
                            </div>

                            {/* Social Links */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Connect</h3>
                                <div className="space-y-3">
                                    {member.website && (
                                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                                            <LinkIcon className="w-5 h-5" />
                                            <span className="text-sm truncate">{member.website.replace('https://', '')}</span>
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                            <span className="text-sm">{member.github}</span>
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                            <span className="text-sm">@{member.twitter}</span>
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                            <span className="text-sm">{member.linkedin}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-3">
                                <button className="w-full py-3 rounded-xl bg-primary hover:bg-green-600 text-white font-medium transition-colors flex items-center justify-center gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    Send Message
                                </button>
                                <button className="w-full py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors flex items-center justify-center gap-2">
                                    <Users className="w-5 h-5" />
                                    Connect
                                </button>
                            </div>
                        </div>

                        {/* Right - Details */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-white">{member.stats.projects}</span>
                                    <span className="text-sm text-gray-500">Projects</span>
                                </div>
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-white">{member.stats.connections}</span>
                                    <span className="text-sm text-gray-500">Connections</span>
                                </div>
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-white">{member.stats.likes}</span>
                                    <span className="text-sm text-gray-500">Likes</span>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-lg font-bold text-white mb-4">About</h2>
                                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                            </div>

                            {/* Skills */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-lg font-bold text-white mb-4">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map(skill => (
                                        <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-lg font-bold text-white mb-4">Projects</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {member.projects.map(project => (
                                        <Link
                                            key={project.id}
                                            href={`/projects/${project.id}`}
                                            className="group rounded-xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-colors"
                                        >
                                            <div className="relative h-32">
                                                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                            <div className="p-3 bg-gray-800/50">
                                                <h3 className="font-bold text-white text-sm">{project.title}</h3>
                                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                                    <Heart className="w-3 h-3" />
                                                    {project.likes}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
}
