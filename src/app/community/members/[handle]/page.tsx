import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Github, Linkedin, Twitter, Globe, Calendar, Star, Code } from 'lucide-react';

const membersData: Record<string, {
    handle: string;
    name: string;
    title: string;
    avatar: string;
    bio: string;
    location: string;
    joinedDate: string;
    skills: string[];
    stats: { projects: number; contributions: number; reputation: number };
    social: { github?: string; linkedin?: string; twitter?: string; website?: string };
    badges: { name: string; icon: string }[];
    recentProjects: { name: string; role: string }[];
}> = {
    'dev_guru': {
        handle: 'dev_guru',
        name: 'Rahim Ahmed',
        title: 'Full Stack Developer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
        bio: 'Passionate developer building tools for the Bangladeshi tech community. Co-founder of DevCafe. I love Rust, TypeScript, and mentoring aspiring developers.',
        location: 'Dhaka, Bangladesh',
        joinedDate: 'January 2024',
        skills: ['TypeScript', 'React', 'Rust', 'Node.js', 'PostgreSQL', 'AWS'],
        stats: { projects: 15, contributions: 342, reputation: 2850 },
        social: {
            github: 'https://github.com/rahimahmed',
            linkedin: 'https://linkedin.com/in/rahimahmed',
            twitter: 'https://twitter.com/rahimahmed',
            website: 'https://rahimahmed.dev',
        },
        badges: [
            { name: 'Founding Member', icon: '🏆' },
            { name: 'Top Contributor', icon: '⭐' },
            { name: 'Mentor', icon: '🎓' },
        ],
        recentProjects: [
            { name: 'BanglaCode IDE', role: 'Lead Developer' },
            { name: 'DevCafe Website', role: 'Co-Founder' },
            { name: 'LocaleConnect', role: 'Contributor' },
        ],
    },
};

export function generateStaticParams() {
    return [
        { handle: 'dev_guru' },
    ];
}

export default function MemberProfilePage({ params }: { params: { handle: string } }) {
    const member = membersData[params.handle];

    if (!member) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Member Not Found</h1>
                        <p className="text-gray-400 mb-8">This profile doesn&apos;t exist or has been removed.</p>
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

            <div className="pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/community/members" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Members
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Profile Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6 text-center sticky top-24">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary mb-4">
                                    <Image src={member.avatar} alt={member.name} width={128} height={128} className="w-full h-full object-cover" />
                                </div>
                                <h1 className="text-2xl font-bold text-white">{member.name}</h1>
                                <p className="text-gray-500 mb-2">@{member.handle}</p>
                                <p className="text-primary font-medium mb-4">{member.title}</p>

                                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {member.location}
                                </div>

                                <div className="flex justify-center gap-3 mb-6">
                                    {member.social.github && (
                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social.twitter && (
                                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.social.website && (
                                        <a href={member.social.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Globe className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>

                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    Joined {member.joinedDate}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <p className="text-2xl font-bold text-white">{member.stats.projects}</p>
                                    <p className="text-sm text-gray-500">Projects</p>
                                </div>
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <p className="text-2xl font-bold text-white">{member.stats.contributions}</p>
                                    <p className="text-sm text-gray-500">Contributions</p>
                                </div>
                                <div className="bg-surface rounded-xl border border-gray-800 p-4 text-center">
                                    <p className="text-2xl font-bold text-primary">{member.stats.reputation}</p>
                                    <p className="text-sm text-gray-500">Reputation</p>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">About</h2>
                                <p className="text-gray-400">{member.bio}</p>
                            </div>

                            {/* Badges */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Badges</h2>
                                <div className="flex flex-wrap gap-3">
                                    {member.badges.map((badge, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                                            <span>{badge.icon}</span>
                                            <span className="text-white">{badge.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill) => (
                                        <span key={skill} className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Projects */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Recent Projects</h2>
                                <div className="space-y-4">
                                    {member.recentProjects.map((project, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <Code className="w-5 h-5 text-primary" />
                                                <span className="text-white">{project.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{project.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
