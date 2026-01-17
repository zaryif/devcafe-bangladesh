'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Send, Phone, Video, MoreVertical, Smile, Paperclip } from 'lucide-react';

const conversations = [
    {
        id: 1,
        user: { name: 'Fatima Khan', handle: 'transit_hero', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4', online: true },
        lastMessage: "That sounds great! Let's meet at DevCafe tomorrow.",
        time: '2m ago',
        unread: 2,
    },
    {
        id: 2,
        user: { name: 'Arif Hasan', handle: 'arif_codes', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI', online: false },
        lastMessage: 'I pushed the changes to the repo. Check it out!',
        time: '1h ago',
        unread: 0,
    },
    {
        id: 3,
        user: { name: 'Sarah Chen', handle: 'sarah_designs', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7bzfojQszyXRXr_8bSLZDupRiQJArtKb4qmBJI0juHGhJsB-W1E3h5At1vUlxJzErzLyrighko0smFKIiw9mk4hk47mqhnE4cnEnxf0D98-gq0rte0SMHrv_HUBfY9sTPsC6KxKdfJLFZjg5vlec_kzUuSpQa2YMt-r8QXg4xdS-ba7sJd-rPcDJJtLnIj3ez3KS0PsiQMGjb9-MxtqlRLZZMSBzI9hC9YpiVvm_c-vBjMr0PozT0aHx4O96yMSn1VjDh43IeZ4U', online: true },
        lastMessage: 'The new mockups are ready for review 🎨',
        time: '3h ago',
        unread: 1,
    },
];

const messages = [
    { id: 1, sender: 'them', content: "Hey! I saw your project Chokher Dekha. It's amazing!", time: '10:30 AM' },
    { id: 2, sender: 'me', content: "Thanks! I've been working on it for months. Would love your feedback.", time: '10:32 AM' },
    { id: 3, sender: 'them', content: 'I think the UI could use some improvements. Would you be open to collaboration?', time: '10:35 AM' },
    { id: 4, sender: 'me', content: "Absolutely! I'm looking for a UI/UX designer actually.", time: '10:36 AM' },
    { id: 5, sender: 'them', content: "That sounds great! Let's meet at DevCafe tomorrow.", time: '10:38 AM' },
];

export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [newMessage, setNewMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSend = () => {
        if (newMessage.trim()) {
            // TODO: Send message via Supabase
            setNewMessage('');
        }
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex bg-bg-darker rounded-2xl overflow-hidden border border-gray-800">
            {/* Sidebar - Conversations */}
            <div className="w-80 border-r border-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-800">
                    <h2 className="text-lg font-bold text-white mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {conversations.map(conv => (
                        <button
                            key={conv.id}
                            onClick={() => setSelectedConversation(conv)}
                            className={`w-full p-4 flex items-start gap-3 hover:bg-gray-800/50 transition-colors ${selectedConversation.id === conv.id ? 'bg-gray-800/50' : ''
                                }`}
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image src={conv.user.avatar} alt={conv.user.name} width={48} height={48} className="w-full h-full object-cover" />
                                </div>
                                {conv.user.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-bg-darker rounded-full" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-medium text-white truncate">{conv.user.name}</h3>
                                    <span className="text-xs text-gray-500 flex-shrink-0">{conv.time}</span>
                                </div>
                                <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                            </div>
                            {conv.unread > 0 && (
                                <span className="w-5 h-5 bg-primary rounded-full text-xs text-white flex items-center justify-center flex-shrink-0">
                                    {conv.unread}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image src={selectedConversation.user.avatar} alt={selectedConversation.user.name} width={40} height={40} className="w-full h-full object-cover" />
                            </div>
                            {selectedConversation.user.online && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full" />
                            )}
                        </div>
                        <div>
                            <h3 className="font-medium text-white">{selectedConversation.user.name}</h3>
                            <p className="text-xs text-gray-500">
                                {selectedConversation.user.online ? 'Online' : 'Offline'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] ${msg.sender === 'me' ? 'order-2' : ''}`}>
                                <div className={`px-4 py-2 rounded-2xl ${msg.sender === 'me'
                                        ? 'bg-primary text-white rounded-br-sm'
                                        : 'bg-gray-800 text-gray-200 rounded-bl-sm'
                                    }`}>
                                    {msg.content}
                                </div>
                                <span className={`text-xs text-gray-500 mt-1 block ${msg.sender === 'me' ? 'text-right' : ''}`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Smile className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white"
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="p-3 bg-primary hover:bg-green-600 text-white rounded-xl transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
