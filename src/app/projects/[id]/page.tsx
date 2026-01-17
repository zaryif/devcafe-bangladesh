'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ArrowLeft,
    Heart,
    Share2,
    MessageSquare,
    Users,
    Github,
    ExternalLink,
    Calendar,
    Tag,
} from 'lucide-react';

// Mock project data
const projectsData: Record<string, {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    author: { name: string; handle: string; avatar: string; role: string };
    tags: string[];
    likes: number;
    comments: number;
    collaborators: number;
    category: string;
    createdAt: string;
    image: string;
    screenshots: string[];
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    lookingFor: string[];
}> = {
    '1': {
        id: 1,
        title: 'Chokher Dekha',
        description: 'AI-based vision aid assisting the visually impaired through real-time object detection and audio.',
        fullDescription: `Chokher Dekha is an AI-powered mobile application designed to assist visually impaired individuals in Bangladesh. Using advanced computer vision and machine learning, the app provides real-time audio descriptions of the surrounding environment.

Key features include:
- Real-time object detection and identification
- Scene description in Bengali and English
- Navigation assistance with obstacle detection
- Text recognition and reading (OCR)
- Currency note identification
- Face recognition for familiar people

The app works offline for core functionality and uses minimal battery, making it accessible for daily use.`,
        author: {
            name: 'Rahim Ahmed',
            handle: 'dev_guru',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
            role: 'ML Engineer',
        },
        tags: ['Python', 'TensorFlow', 'OpenCV', 'React Native'],
        likes: 89,
        comments: 23,
        collaborators: 4,
        category: 'AI/ML',
        createdAt: '2024-09-15',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        screenshots: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
        ],
        techStack: ['Python', 'TensorFlow', 'OpenCV', 'React Native', 'FastAPI', 'PostgreSQL'],
        githubUrl: 'https://github.com/example/chokher-dekha',
        liveUrl: 'https://chokher-dekha.app',
        lookingFor: ['iOS Developer', 'UI/UX Designer', 'Bengali Voice Actor'],
    },
    '2': {
        id: 2,
        title: 'Dhaka Commute',
        description: 'A community-driven bus route optimizer for Dhaka city, helping commuters find the fastest routes.',
        fullDescription: `Dhaka Commute is a mobile app that helps citizens navigate the complex bus network of Dhaka. Using crowdsourced data and smart algorithms, it provides the fastest routes for daily commuters.

Features:
- Real-time bus tracking with GPS
- Route optimization with multiple options
- Fare calculator
- Crowdsourced bus arrival times
- Offline mode for saved routes`,
        author: {
            name: 'Fatima Khan',
            handle: 'transit_hero',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4',
            role: 'Full Stack Developer',
        },
        tags: ['Flutter', 'Google Maps API', 'Firebase', 'Dart'],
        likes: 126,
        comments: 45,
        collaborators: 6,
        category: 'Mobile Apps',
        createdAt: '2024-08-20',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        screenshots: [],
        techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Node.js'],
        githubUrl: 'https://github.com/example/dhaka-commute',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.dhakacommute',
        lookingFor: ['Data Analyst', 'Backend Developer'],
    },
};

// Default project for unknown IDs
const defaultProject = {
    id: 0,
    title: 'Project Not Found',
    description: 'This project does not exist.',
    fullDescription: 'Please check the URL and try again.',
    author: { name: 'Unknown', handle: 'unknown', avatar: '', role: '' },
    tags: [],
    likes: 0,
    comments: 0,
    collaborators: 0,
    category: 'Unknown',
    createdAt: '',
    image: '',
    screenshots: [],
    techStack: [],
    githubUrl: '',
    liveUrl: '',
    lookingFor: [],
};

const feedbackComments = [
    {
        id: 1,
        author: 'Sarah Chen',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI',
        content: 'This is exactly what Bangladesh needs! Have you considered partnering with local NGOs for wider adoption?',
        timeAgo: '2 days ago',
        likes: 12,
    },
    {
        id: 2,
        author: 'Arif Hasan',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7bzfojQszyXRXr_8bSLZDupRiQJArtKb4qmBJI0juHGhJsB-W1E3h5At1vUlxJzErzLyrighko0smFKIiw9mk4hk47mqhnE4cnEnxf0D98-gq0rte0SMHrv_HUBfY9sTPsC6KxKdfJLFZjg5vlec_kzUuSpQa2YMt-r8QXg4xdS-ba7sJd-rPcDJJtLnIj3ez3KS0PsiQMGjb9-MxtqlRLZZMSBzI9nC9YpiVvm_c-vBjMr0PozT0aHx4O96yMSn1VjDh43IeZ4U',
        content: 'Great work on the offline mode! That\'s crucial for accessibility. Would love to help with the Bengali voice integration.',
        timeAgo: '1 week ago',
        likes: 8,
    },
];

export default function ProjectDetailsPage() {
    const params = useParams();
    const projectId = params.id as string;
    const project = projectsData[projectId] || defaultProject;

    if (!projectsData[projectId]) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Project Not Found</h1>
                        <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/projects" className="btn-primary">
                            Back to Projects
                        </Link>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hero Image */}
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-black/80 transition-colors">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-black/80 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Title & Meta */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="text-gray-500 text-sm flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {project.createdAt}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-lg text-gray-400">{project.description}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Heart className="w-5 h-5 text-red-400" />
                                    <span>{project.likes} likes</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>{project.comments} comments</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Users className="w-5 h-5" />
                                    <span>{project.collaborators} collaborators</span>
                                </div>
                            </div>

                            {/* Full Description */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
                                <div className="prose prose-invert max-w-none">
                                    {project.fullDescription.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-gray-400 mb-4">{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Tag className="w-5 h-5 text-primary" />
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Screenshots */}
                            {project.screenshots.length > 0 && (
                                <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                    <h2 className="text-xl font-bold text-white mb-4">Screenshots</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.screenshots.map((screenshot, i) => (
                                            <div key={i} className="relative h-48 rounded-xl overflow-hidden border border-gray-700">
                                                <Image
                                                    src={screenshot}
                                                    alt={`Screenshot ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Feedback & Comments */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    Feedback Hub ({feedbackComments.length})
                                </h2>

                                {/* Comment Form */}
                                <div className="mb-6 pb-6 border-b border-gray-700">
                                    <textarea
                                        rows={3}
                                        placeholder="Share your thoughts or feedback..."
                                        className="w-full resize-none mb-3"
                                    />
                                    <button className="bg-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                        Post Comment
                                    </button>
                                </div>

                                {/* Comments List */}
                                <div className="space-y-6">
                                    {feedbackComments.map((comment) => (
                                        <div key={comment.id} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={comment.avatar}
                                                    alt={comment.author}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-white">{comment.author}</span>
                                                    <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
                                                </div>
                                                <p className="text-gray-400 mb-2">{comment.content}</p>
                                                <button className="text-gray-500 text-sm flex items-center gap-1 hover:text-primary transition-colors">
                                                    <Heart className="w-4 h-4" />
                                                    {comment.likes}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Author Card */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Created by</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                        <Image
                                            src={project.author.avatar}
                                            alt={project.author.name}
                                            width={56}
                                            height={56}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{project.author.name}</h4>
                                        <p className="text-gray-500 text-sm">@{project.author.handle}</p>
                                        <p className="text-primary text-sm">{project.author.role}</p>
                                    </div>
                                </div>
                                <Link
                                    href={`/community/members/${project.author.handle}`}
                                    className="block w-full text-center py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors text-sm"
                                >
                                    View Profile
                                </Link>
                            </div>

                            {/* Action Buttons */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6 space-y-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-green-600 text-white font-medium transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            </div>

                            {/* Looking For */}
                            {project.lookingFor.length > 0 && (
                                <div className="bg-primary/10 rounded-2xl border border-primary/30 p-6">
                                    <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Looking for Collaborators
                                    </h3>
                                    <ul className="space-y-2 mb-4">
                                        {project.lookingFor.map((role) => (
                                            <li key={role} className="text-gray-300 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-primary rounded-full" />
                                                {role}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 rounded-xl bg-primary hover:bg-green-600 text-white font-medium transition-colors">
                                        Apply to Collaborate
                                    </button>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-lg"
                                        >
                                            {tag}
                                        </span>
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
