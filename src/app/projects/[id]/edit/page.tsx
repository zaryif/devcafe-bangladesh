import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Save, Upload, Plus, X, Code, FileText, Image as ImageIcon, Settings } from 'lucide-react';

const projectsData: Record<string, {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    status: string;
    category: string;
    githubUrl: string;
    liveUrl?: string;
}> = {
    '1': {
        id: 1,
        title: 'BanglaCode IDE',
        description: 'An open-source IDE designed for Bangla programming education with syntax highlighting and localized documentation.',
        techStack: ['TypeScript', 'Electron', 'React', 'Node.js'],
        status: 'In Development',
        category: 'Developer Tools',
        githubUrl: 'https://github.com/devcafe/banglacode',
        liveUrl: 'https://banglacode.dev',
    },
    '2': {
        id: 2,
        title: 'LocaleConnect',
        description: 'A platform connecting local freelancers with businesses in Bangladesh.',
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        status: 'Beta',
        category: 'Platform',
        githubUrl: 'https://github.com/devcafe/localeconnect',
    },
};

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
    ];
}

export default function ProjectEditPage({ params }: { params: { id: string } }) {
    const project = projectsData[params.id];

    if (!project) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Project Not Found</h1>
                        <p className="text-gray-400 mb-8">This project doesn&apos;t exist.</p>
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Link href={`/projects/${project.id}`} className="text-gray-400 hover:text-white transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-display font-bold text-white">Edit Project</h1>
                                <p className="text-gray-500">{project.title}</p>
                            </div>
                        </div>
                        <button className="bg-primary hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2">
                            <Save className="w-5 h-5" />
                            Save Changes
                        </button>
                    </div>

                    {/* Notice */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
                        <p className="text-yellow-400 text-sm">
                            ⚠️ This is a demo page. Sign in as a project maintainer to edit project details.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-8">
                        {/* Basic Info */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Basic Information
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Title</label>
                                    <input
                                        type="text"
                                        defaultValue={project.title}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                                    <textarea
                                        defaultValue={project.description}
                                        rows={4}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                        disabled
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                                        <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" disabled>
                                            <option>{project.category}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
                                        <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" disabled>
                                            <option>{project.status}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Code className="w-5 h-5 text-primary" />
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
                                        {tech}
                                        <button className="text-gray-500 hover:text-red-400 transition-colors" disabled>
                                            <X className="w-4 h-4" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <button className="text-primary hover:text-green-400 transition-colors flex items-center gap-1 text-sm" disabled>
                                <Plus className="w-4 h-4" />
                                Add Technology
                            </button>
                        </div>

                        {/* Links */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-primary" />
                                Project Links
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">GitHub URL</label>
                                    <input
                                        type="url"
                                        defaultValue={project.githubUrl}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Live Demo URL (optional)</label>
                                    <input
                                        type="url"
                                        defaultValue={project.liveUrl || ''}
                                        placeholder="https://yourproject.com"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Cover Image */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-primary" />
                                Cover Image
                            </h2>
                            <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center">
                                <Upload className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400 mb-2">Drag and drop an image, or click to browse</p>
                                <p className="text-sm text-gray-600">PNG, JPG up to 5MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
