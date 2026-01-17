'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { Star, MapPin, Clock, Users, Bookmark, Filter, Search, ChevronDown, ExternalLink } from 'lucide-react';

const favoriteSpaces = [
    {
        id: 1,
        name: 'Hot Desk Zone A',
        type: 'Hot Desk',
        rating: 4.8,
        reviews: 24,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        price: '৳150/hr',
        available: true,
    },
    {
        id: 2,
        name: 'Meeting Room Banani',
        type: 'Meeting Room',
        rating: 4.9,
        reviews: 18,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        price: '৳500/hr',
        available: true,
    },
    {
        id: 3,
        name: 'Podcast Studio',
        type: 'Studio',
        rating: 5.0,
        reviews: 8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        price: '৳800/hr',
        available: false,
    },
];

const favoriteMembers = [
    {
        handle: 'fatima_dev',
        name: 'Fatima Khan',
        role: 'Frontend Developer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLFtA_kSsM_z5H7dPMJW1o0vfZ194I_8v10umWK30WDp2Qb6-44ShbiHHpYDWy7tRA7YIrhKuzRgqX2wTSNgmNw8p6PgyDoGw37Unkoxh5BUZA5c_a2v4itqHjvfTPx3aMwM6DtqMq7ae6dbhh0UCwS1t8mJ_R7OPL6y0GOU-38TgWTg4jx27bjDX3WLnn3QK0IoKN0p916tk0bLOQyGHIZJEWys9LN3aZ0eOAzkwWCSOPAXuJQk9jyocDyGf_rEK4hPDLJxHTE4',
        online: true,
    },
    {
        handle: 'arif_hasan',
        name: 'Arif Hasan',
        role: 'Backend Engineer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn4Awi8xW2w5B41kucp9oHVisKjIxQM6itwyTMqwbo4VvSjPtXjmpOEjwRPdYuQJ2rVxczBUTj1daKTfHuAFXJrnrurok9WJASAW1spJ7ZfDAlNJ1x_Ta5-UEUfwC35sNezGGJ3fFyZVFl7fsEvJPSkst9R0K9vBtQI7QqQA0EDpp6zGq4dAirE42JhPi-iFw3vACvcxVzJAPqL6_vlUXDrlxyzXOxgRHyZBxDWKksx-clzftd3PHtEfvV1X74pMOUYv-DfoIYYI',
        online: false,
    },
];

export default function FavoritesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-display font-bold text-white">Favorites</h1>
                <p className="text-gray-500">Your saved spaces and members</p>
            </div>

            {/* Favorite Spaces */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-white flex items-center gap-2">
                        <Bookmark className="w-5 h-5 text-primary" />
                        Saved Spaces
                    </h2>
                    <Link href="/spaces" className="text-primary text-sm hover:text-green-400">
                        Browse All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favoriteSpaces.map((space) => (
                        <div
                            key={space.id}
                            className="bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors"
                        >
                            <div className="relative h-40">
                                <Image src={space.image} alt={space.name} fill className="object-cover" />
                                {!space.available && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="bg-red-500/80 text-white text-sm px-3 py-1 rounded-full">Unavailable</span>
                                    </div>
                                )}
                                <button className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white/20">
                                    <Bookmark className="w-4 h-4 fill-current" />
                                </button>
                            </div>
                            <div className="p-4">
                                <span className="text-xs text-primary font-medium">{space.type}</span>
                                <h3 className="font-bold text-white mt-1">{space.name}</h3>
                                <div className="flex items-center gap-2 mt-2 text-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-white">{space.rating}</span>
                                    <span className="text-gray-500">({space.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-primary font-bold">{space.price}</span>
                                    <Link
                                        href="/booking"
                                        className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${space.available
                                                ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Favorite Members */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Following
                    </h2>
                    <Link href="/community/members" className="text-primary text-sm hover:text-green-400">
                        Find Members →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {favoriteMembers.map((member) => (
                        <Link
                            key={member.handle}
                            href={`/community/members/${member.handle}`}
                            className="flex items-center gap-4 bg-surface rounded-xl border border-gray-800 p-4 hover:border-primary/30 transition-colors"
                        >
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <Image src={member.avatar} alt={member.name} width={56} height={56} className="w-full h-full object-cover" />
                                </div>
                                {member.online && (
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-surface rounded-full" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-white">{member.name}</h3>
                                <p className="text-gray-500 text-sm">@{member.handle}</p>
                                <p className="text-gray-400 text-sm">{member.role}</p>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-800 rounded-lg transition-colors">
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
