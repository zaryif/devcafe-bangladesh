'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/lib/auth/context';
import {
    Coffee,
    LayoutDashboard,
    Calendar,
    MessageSquare,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    FolderKanban,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/bookings', label: 'Bookings', icon: Calendar },
    { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare, badge: 3 },
    { href: '/dashboard/community', label: 'Community', icon: Users },
    { href: '/dashboard/projects', label: 'My Projects', icon: FolderKanban },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const { user, profile, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-bg-darker flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed top-0 left-0 z-50 h-full w-64 bg-surface border-r border-gray-800 transform transition-transform duration-300 lg:translate-x-0 lg:static',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-800">
                        <Link href="/" className="flex items-center gap-2">
                            <Coffee className="w-8 h-8 text-primary" />
                            <div>
                                <span className="font-display text-xl font-bold">
                                    <span className="text-white">Dev</span>
                                    <span className="text-primary">Cafe</span>
                                </span>
                                <span className="block text-xs text-gray-500 uppercase tracking-wider">
                                    Dhaka Hub
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {sidebarLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                                        isActive
                                            ? 'bg-primary text-white shadow-glow'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    )}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.label}
                                    {link.badge && (
                                        <span className="ml-auto bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                                            {link.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Section & Logout */}
                    <div className="p-4 border-t border-gray-800">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            Log Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="sticky top-0 z-30 bg-bg-darker/95 backdrop-blur-md border-b border-gray-800">
                    <div className="flex items-center justify-between px-4 lg:px-8 h-16">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                        >
                            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Welcome Text */}
                        <div className="hidden lg:block">
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Welcome back</p>
                            <h1 className="text-xl font-display font-bold text-white">
                                {profile?.full_name || user?.user_metadata?.full_name || 'Member'}
                            </h1>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/dashboard/bookings/new"
                                className="hidden sm:flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                            >
                                + New Booking
                            </Link>

                            {/* User Avatar */}
                            <Link href="/dashboard/profile" className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50">
                                    <Image
                                        src={profile?.avatar_url || '/default-avatar.png'}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
