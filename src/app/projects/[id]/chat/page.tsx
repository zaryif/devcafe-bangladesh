import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Send, Users, Calendar, MessageSquare, Code } from 'lucide-react';

const projectsData: Record<string, {
    id: number;
    title: string;
    description: string;
}> = {
    '1': {
        id: 1,
        title: 'BanglaCode IDE',
        description: 'An open-source IDE designed for Bangla programming education.',
    },
    '2': {
        id: 2,
        title: 'LocaleConnect',
        description: 'A platform connecting local freelancers with businesses.',
    },
};

const mockMessages = [
    { id: 1, user: 'Rahim Ahmed', avatar: '🧑‍💻', message: 'Welcome to the project chat! Feel free to ask questions.', time: '2:30 PM' },
    { id: 2, user: 'Fatima Khan', avatar: '👩‍🎨', message: 'I just pushed some new UI designs, check them out!', time: '2:45 PM' },
    { id: 3, user: 'Dev Community', avatar: '🤖', message: 'New contributor joined: @newdev123', time: '3:00 PM', isSystem: true },
];

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
    ];
}

export default function ProjectChatPage({ params }: { params: { id: string } }) {
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
        <main className="min-h-screen bg-bg-dark flex flex-col">
            <Navbar />

            <div className="flex-1 pt-20 flex flex-col">
                {/* Header */}
                <div className="bg-surface border-b border-gray-800 px-4 py-4">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href={`/projects/${project.id}`} className="text-gray-400 hover:text-white transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    {project.title} Chat
                                </h1>
                                <p className="text-sm text-gray-500">{project.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                12 online
                            </span>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {mockMessages.map((msg) => (
                            <div key={msg.id} className={`flex gap-3 ${msg.isSystem ? 'justify-center' : ''}`}>
                                {msg.isSystem ? (
                                    <div className="bg-gray-800/50 text-gray-500 text-sm px-4 py-2 rounded-full">
                                        {msg.message}
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                                            {msg.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-medium text-white">{msg.user}</span>
                                                <span className="text-xs text-gray-500">{msg.time}</span>
                                            </div>
                                            <p className="text-gray-300 bg-gray-800/50 rounded-xl rounded-tl-none px-4 py-2 inline-block">
                                                {msg.message}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-surface border-t border-gray-800 p-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800 rounded-xl p-2 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type a message... (Sign in to chat)"
                                className="flex-1 bg-transparent text-white placeholder-gray-500 px-4 py-2 outline-none"
                                disabled
                            />
                            <button className="bg-primary hover:bg-green-600 text-white p-3 rounded-lg transition-colors" disabled>
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            <Link href="/auth/login" className="text-primary hover:underline">Sign in</Link> to participate in the discussion
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
