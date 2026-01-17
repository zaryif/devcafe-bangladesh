import Link from 'next/link';
import { Coffee, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/menu', label: 'Menu & Pricing' },
    { href: '/events', label: 'Events Calendar' },
    { href: '/careers', label: 'Careers' },
];

const communityLinks = [
    { href: '/projects', label: 'Project Gallery' },
    { href: '/community', label: 'Membership' },
    { href: '/community/members', label: 'Developer Profiles' },
    { href: '/partners', label: 'Partners' },
];

export default function Footer() {
    return (
        <footer className="bg-bg-darker text-white pt-16 pb-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Coffee className="w-8 h-8 text-primary" />
                            <span className="font-display text-2xl font-bold tracking-wide">
                                <span className="text-white">Dev</span>
                                <span className="text-primary">Cafe</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dhaka&apos;s premier hub for developers, creators, and innovators. Coffee, code, and
                            community under one roof.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-gray-800 pb-2 inline-block">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-gray-800 pb-2 inline-block">
                            Community
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {communityLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-gray-800 pb-2 inline-block">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>
                                    House 42, Road 10, Banani,
                                    <br />
                                    Dhaka 1213, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                <span>+880 1712 345678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                <span>hello@devcafe.bd</span>
                            </li>
                        </ul>

                        {/* Opening Hours */}
                        <div className="mt-6">
                            <h5 className="text-sm font-bold text-white mb-3">Opening Hours</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex justify-between border-b border-gray-800 pb-2">
                                    <span>Mon - Fri</span>
                                    <span className="text-white font-medium">24 Hours</span>
                                </li>
                                <li className="flex justify-between pt-1">
                                    <span>Sat - Sun</span>
                                    <span className="text-white font-medium">8:00 AM - 12:00 AM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} DevCafe Bangladesh. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
