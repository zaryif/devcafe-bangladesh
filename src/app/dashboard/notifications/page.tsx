'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Bell, X, Check, Calendar, MessageCircle, Heart, Users, Clock } from 'lucide-react';

const notifications = [
    {
        id: 1,
        type: 'like',
        message: 'Fatima Khan liked your project "Chokher Dekha"',
        time: '5 minutes ago',
        read: false,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4',
    },
    {
        id: 2,
        type: 'comment',
        message: 'Arif Hasan commented on your project',
        time: '1 hour ago',
        read: false,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI',
    },
    {
        id: 3,
        type: 'event',
        message: 'Reminder: "React Patterns Workshop" starts in 2 hours',
        time: '2 hours ago',
        read: true,
        avatar: null,
    },
    {
        id: 4,
        type: 'collab',
        message: 'Team request from ShopLocal BD project',
        time: '1 day ago',
        read: true,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
];

const iconMap: Record<string, React.ReactNode> = {
    like: <Heart className="w-4 h-4 text-red-400" />,
    comment: <MessageCircle className="w-4 h-4 text-blue-400" />,
    event: <Calendar className="w-4 h-4 text-primary" />,
    collab: <Users className="w-4 h-4 text-yellow-400" />,
};

export default function NotificationsPage() {
    const [notifs, setNotifs] = useState(notifications);

    const markAllRead = () => {
        setNotifs(notifs.map(n => ({ ...n, read: true })));
    };

    const markRead = (id: number) => {
        setNotifs(notifs.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const deleteNotif = (id: number) => {
        setNotifs(notifs.filter(n => n.id !== id));
    };

    const unreadCount = notifs.filter(n => !n.read).length;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                        Notifications
                        {unreadCount > 0 && (
                            <span className="bg-primary text-white text-sm px-2 py-0.5 rounded-full">{unreadCount} new</span>
                        )}
                    </h1>
                    <p className="text-gray-500">Stay updated on community activity</p>
                </div>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllRead}
                        className="text-primary hover:text-green-400 text-sm font-medium flex items-center gap-1"
                    >
                        <Check className="w-4 h-4" />
                        Mark all as read
                    </button>
                )}
            </div>

            <div className="bg-surface rounded-2xl border border-gray-800 overflow-hidden">
                {notifs.length === 0 ? (
                    <div className="text-center py-12">
                        <Bell className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                        <p className="text-gray-500">No notifications yet</p>
                    </div>
                ) : (
                    <ul className="divide-y divide-gray-800">
                        {notifs.map((notif) => (
                            <li
                                key={notif.id}
                                className={`flex items-start gap-4 p-4 hover:bg-gray-800/30 transition-colors ${!notif.read ? 'bg-primary/5' : ''
                                    }`}
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-800 flex items-center justify-center">
                                    {notif.avatar ? (
                                        <Image src={notif.avatar} alt="" width={40} height={40} className="w-full h-full object-cover" />
                                    ) : (
                                        iconMap[notif.type]
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-sm ${!notif.read ? 'text-white' : 'text-gray-400'}`}>
                                        {notif.message}
                                    </p>
                                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                        <Clock className="w-3 h-3" />
                                        {notif.time}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {!notif.read && (
                                        <button
                                            onClick={() => markRead(notif.id)}
                                            className="p-1.5 text-gray-500 hover:text-primary rounded-lg hover:bg-gray-800"
                                            title="Mark as read"
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteNotif(notif.id)}
                                        className="p-1.5 text-gray-500 hover:text-red-400 rounded-lg hover:bg-gray-800"
                                        title="Delete"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
