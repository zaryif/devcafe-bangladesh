'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Send, Paperclip, Smile, Hash, Users, Settings, Bell, Search, Pin, MoreVertical } from 'lucide-react';

const channels = [
    { id: 'general', name: 'general', unread: 3 },
    { id: 'design', name: 'design', unread: 0 },
    { id: 'backend', name: 'backend', unread: 1 },
    { id: 'bugs', name: 'bugs', unread: 0 },
];

const members = [
    { id: 1, name: 'Rahim Ahmed', role: 'Lead', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ', online: true },
    { id: 2, name: 'Fatima Khan', role: 'Frontend', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4', online: true },
    { id: 3, name: 'Arif Hasan', role: 'Backend', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI', online: false },
];

const messages = [
    {
        id: 1,
        user: members[0],
        content: 'Hey team! Just pushed the new API changes to staging. Can someone test the auth flow?',
        time: '10:45 AM',
        reactions: ['🔥'],
    },
    {
        id: 2,
        user: members[1],
        content: 'On it! Testing now. Also, I finished the dashboard redesign. Check the Figma link.',
        time: '10:48 AM',
        attachments: [{ type: 'link', title: 'Figma - Dashboard v2', url: '#' }],
    },
    {
        id: 3,
        user: members[2],
        content: 'Auth flow looks good! Found one edge case though - when the token expires mid-session, there\'s no refresh logic.',
        time: '11:02 AM',
    },
    {
        id: 4,
        user: members[0],
        content: 'Good catch @arif! I\'ll add token refresh. Can you create an issue for tracking?',
        time: '11:05 AM',
    },
];

export default function ProjectChatPage() {
    const params = useParams();
    const [activeChannel, setActiveChannel] = useState('general');
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim()) {
            // TODO: Send via Supabase Realtime
            setNewMessage('');
        }
    };

    return (
        <div className="h-screen flex bg-bg-dark">
            {/* Sidebar */}
            <div className="w-64 bg-surface border-r border-gray-800 flex flex-col">
                {/* Project Header */}
                <div className="p-4 border-b border-gray-800">
                    <Link href="/projects/1" className="flex items-center gap-2 text-gray-400 hover:text-white mb-3 text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Project
                    </Link>
                    <h2 className="font-bold text-white text-lg">Chokher Dekha</h2>
                    <p className="text-xs text-gray-500">Project Collaboration Hub</p>
                </div>

                {/* Channels */}
                <div className="p-4">
                    <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Channels</h3>
                    <div className="space-y-1">
                        {channels.map((channel) => (
                            <button
                                key={channel.id}
                                onClick={() => setActiveChannel(channel.id)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${activeChannel === channel.id
                                        ? 'bg-primary/20 text-primary'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <Hash className="w-4 h-4" />
                                    {channel.name}
                                </span>
                                {channel.unread > 0 && (
                                    <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                                        {channel.unread}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Team Members */}
                <div className="p-4 flex-1">
                    <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Team ({members.length})</h3>
                    <div className="space-y-2">
                        {members.map((member) => (
                            <div key={member.id} className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <Image src={member.avatar} alt={member.name} width={32} height={32} className="w-full h-full object-cover" />
                                    </div>
                                    {member.online && (
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full" />
                                    )}
                                </div>
                                <div>
                                    <span className="text-sm text-white block leading-tight">{member.name}</span>
                                    <span className="text-xs text-gray-500">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings */}
                <div className="p-4 border-t border-gray-800">
                    <button className="w-full flex items-center gap-2 text-gray-400 hover:text-white text-sm py-2">
                        <Settings className="w-4 h-4" />
                        Channel Settings
                    </button>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Channel Header */}
                <div className="h-14 border-b border-gray-800 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <Hash className="w-5 h-5 text-gray-500" />
                        <span className="font-medium text-white">{activeChannel}</span>
                        <Pin className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-white">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <Users className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className="flex gap-3 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src={msg.user.avatar} alt={msg.user.name} width={40} height={40} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-medium text-white">{msg.user.name}</span>
                                    <span className="text-xs text-gray-500">{msg.time}</span>
                                </div>
                                <p className="text-gray-300">{msg.content}</p>
                                {msg.attachments && (
                                    <div className="mt-2">
                                        {msg.attachments.map((att, i) => (
                                            <a
                                                key={i}
                                                href={att.url}
                                                className="inline-flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm text-primary hover:bg-gray-700"
                                            >
                                                🔗 {att.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                                {msg.reactions && (
                                    <div className="flex gap-1 mt-2">
                                        {msg.reactions.map((r, i) => (
                                            <span key={i} className="bg-gray-800 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-700">
                                                {r} 1
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-white">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-3">
                        <button className="text-gray-400 hover:text-white">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder={`Message #${activeChannel}`}
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500"
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="text-gray-400 hover:text-white">
                            <Smile className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleSend}
                            className="bg-primary hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
