import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Github, Globe, Star, Users, MessageSquare, GitFork, Calendar, CheckCircle, Code } from 'lucide-react';

const projectsData: Record<string, {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    techStack: string[];
    contributors: { name: string; avatar: string; role: string }[];
    stats: { stars: number; forks: number; contributors: number };
    status: string;
    category: string;
    createdAt: string;
    liveUrl?: string;
    githubUrl: string;
    features: string[];
    lookingFor: string[];
}> = {
    '1': {
        id: 1,
        title: 'BanglaCode IDE',
        description: 'An open-source IDE designed for Bangla programming education with syntax highlighting and localized documentation.',
        longDescription: `BanglaCode IDE is a community-driven project aimed at making programming more accessible to Bengali speakers. 

Our goal is to create a welcoming environment for beginners who may find English-only IDEs intimidating. The IDE features complete Bengali localization, including error messages, documentation, and a built-in tutorial system.

We're actively developing features like:
- Real-time syntax highlighting for popular languages
- Bengali voice command support
- Integrated Bengali programming tutorials
- Community code sharing platform`,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKy7CRxKOlx5gZW25J3fTiSJnr1LNwvWO7P45qxXLtWQgMIrWcJq2lG_5UM7bH3hCGlhcEYXVaofvQPRhDuNVVY0G6PVSb03Rps5uyLAmoxLzOC1lX4e88RfQ2OzDzL3N8jnEwqhjMmg',
        techStack: ['TypeScript', 'Electron', 'React', 'Node.js'],
        contributors: [
            { name: 'Rahim Ahmed', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ', role: 'Lead Developer' },
            { name: 'Fatima Khan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNqELhZUwDhSvWmU9Tdr0PS9owoZzXVgj_J7YfvDqMxhxbfFLcpbTMFKEbQMFH_F80q3w6_rVB0kfqVVCMkxnlSb6hStf8sYBmWjBRYfbJQiYf2eFobF5oCE4YBd0i9sHJBQwZ3t0qfWafog', role: 'UI/UX Designer' },
        ],
        stats: { stars: 234, forks: 45, contributors: 12 },
        status: 'In Development',
        category: 'Developer Tools',
        createdAt: 'March 2024',
        liveUrl: 'https://banglacode.dev',
        githubUrl: 'https://github.com/devcafe/banglacode',
        features: [
            'Complete Bengali localization',
            'Syntax highlighting for 20+ languages',
            'Built-in Bengali programming tutorials',
            'Code sharing and collaboration',
            'Offline support',
        ],
        lookingFor: [
            'Frontend developers (React/TypeScript)',
            'Technical writers for documentation',
            'UI/UX designers for accessibility',
        ],
    },
    '2': {
        id: 2,
        title: 'LocaleConnect',
        description: 'A platform connecting local freelancers with businesses in Bangladesh, focusing on the tech industry.',
        longDescription: `LocaleConnect aims to bridge the gap between local tech talent and businesses in Bangladesh.

The platform features smart matching algorithms, escrow-based secure payments, and a robust review system to build trust in the freelance ecosystem.`,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKy7CRxKOlx5gZW25J3fTiSJnr1LNwvWO7P45qxXLtWQgMIrWcJq2lG_5UM7bH3hCGlhcEYXVaofvQPRhDuNVVY0G6PVSb03Rps5uyLAmoxLzOC1lX4e88RfQ2OzDzL3N8jnEwqhjMmg',
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        contributors: [
            { name: 'Sara Islam', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ', role: 'Founder' },
        ],
        stats: { stars: 156, forks: 28, contributors: 8 },
        status: 'Beta',
        category: 'Platform',
        createdAt: 'January 2024',
        githubUrl: 'https://github.com/devcafe/localeconnect',
        features: [
            'Smart freelancer matching',
            'Secure escrow payments',
            'Review and rating system',
        ],
        lookingFor: [
            'Backend developers',
            'Payment integration specialists',
        ],
    },
};

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
    ];
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const project = projectsData[params.id];

    if (!project) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Project Not Found</h1>
                        <p className="text-gray-400 mb-8">This project doesn&apos;t exist or has been removed.</p>
                        <Link href="/projects" className="btn-primary">Browse Projects</Link>
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
                    <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hero */}
                            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="bg-yellow-500/20 text-yellow-400 text-sm font-bold px-4 py-1 rounded-full">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-gray-400 text-lg">{project.description}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Star className="w-5 h-5" />
                                    <span>{project.stats.stars} stars</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <GitFork className="w-5 h-5" />
                                    <span>{project.stats.forks} forks</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Users className="w-5 h-5" />
                                    <span>{project.stats.contributors} contributors</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar className="w-5 h-5" />
                                    <span>Started {project.createdAt}</span>
                                </div>
                            </div>

                            {/* About */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
                                <div className="prose prose-invert max-w-none">
                                    {project.longDescription.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-gray-400 mb-4">{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-400">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Looking For */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">Looking For Contributors</h2>
                                <ul className="space-y-2">
                                    {project.lookingFor.map((role, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-400">
                                            <Code className="w-5 h-5 text-primary" />
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Actions */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-4">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2">
                                        <Globe className="w-5 h-5" />
                                        View Live Demo
                                    </a>
                                )}
                                <Link href={`/projects/${project.id}/chat`} className="w-full py-3 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    Discussion
                                </Link>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Contributors */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Top Contributors</h3>
                                <div className="space-y-4">
                                    {project.contributors.map((contributor, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <Image src={contributor.avatar} alt={contributor.name} width={40} height={40} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white">{contributor.name}</h4>
                                                <p className="text-xs text-gray-500">{contributor.role}</p>
                                            </div>
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
