'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, X, Lock } from 'lucide-react';

const slides = [
    { id: 1, title: 'Cover', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0' },
    { id: 2, title: 'Problem', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88' },
    { id: 3, title: 'Solution', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0' },
    { id: 4, title: 'Market', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY' },
    { id: 5, title: 'Traction', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ' },
    { id: 6, title: 'Ask', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0' },
];

const assessmentCriteria = [
    { name: 'Market Fit', score: 4.0, max: 5 },
    { name: 'Tech Feasibility', score: 3.0, max: 5 },
    { name: 'Team Capability', score: 5.0, max: 5 },
];

export default function PitchDeckViewerPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const handleSubmit = () => {
        // TODO: Submit review via API
        alert('Review submitted! (Demo mode)');
    };

    return (
        <div className="min-h-screen bg-[#0a1a1f]">
            {/* Header */}
            <header className="border-b border-gray-800 bg-[#0c2025]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/startups" className="text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="font-bold text-white">EcoGro Solutions</h1>
                            <span className="text-xs text-primary">BATCH 2024 · SEED STAGE</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <HelpCircle className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                            Exit Review
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Slide Viewer */}
                    <div className="lg:col-span-2">
                        {/* Current Slide */}
                        <div className="relative aspect-video bg-[#0c2025] rounded-2xl overflow-hidden border border-gray-800 mb-4">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Simulated chart graphic */}
                                <div className="w-full h-full p-8 flex items-end justify-center gap-2">
                                    {[40, 55, 45, 60, 70, 85, 90].map((h, i) => (
                                        <div
                                            key={i}
                                            className="w-12 bg-gradient-to-t from-primary/50 to-primary rounded-t"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                {/* Arrow annotation */}
                                <div className="absolute top-1/3 right-1/4">
                                    <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                                        <path d="M0 35 Q40 0 75 10" stroke="#C4A35A" strokeWidth="3" fill="none" />
                                        <polygon points="75,10 70,20 80,15" fill="#C4A35A" />
                                    </svg>
                                </div>
                            </div>
                            {/* Coffee mugs decoration */}
                            <div className="absolute bottom-4 left-8 w-16 h-12 bg-[#1a3035] rounded-lg" />
                            <div className="absolute bottom-4 right-8 w-16 h-12 bg-[#1a3035] rounded-lg" />
                        </div>

                        {/* Deck Overview Thumbnails */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider">Deck Overview</h3>
                            <button className="text-gray-500 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-4">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${currentSlide === index ? 'border-primary' : 'border-gray-700 hover:border-gray-600'
                                        }`}
                                >
                                    <Image src={slide.thumbnail} alt={slide.title} width={96} height={64} className="w-full h-full object-cover" />
                                    <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-center py-0.5 text-white">
                                        {index + 1}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar - Assessment */}
                    <div className="space-y-6">
                        {/* Founder Profile */}
                        <div className="bg-[#0c2025] rounded-2xl border border-gray-800 p-6">
                            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Founder Profile</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ"
                                        alt="Founder"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Rahim Ahmed</h4>
                                    <p className="text-sm text-gray-500">CEO & Co-Founder</p>
                                    <p className="text-xs text-primary">📍 Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Mentor Assessment */}
                        <div className="bg-[#0c2025] rounded-2xl border border-gray-800 p-6">
                            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Mentor Assessment</h3>
                            <div className="space-y-4">
                                {assessmentCriteria.map((criteria) => (
                                    <div key={criteria.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-400">{criteria.name}</span>
                                            <span className="text-primary font-medium">{criteria.score.toFixed(1)}</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full"
                                                style={{ width: `${(criteria.score / criteria.max) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Feedback */}
                        <div className="bg-[#0c2025] rounded-2xl border border-gray-800 p-6">
                            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-4">Detailed Feedback</h3>
                            <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Enter your observations about the deck structure, GTM strategy, or financial assumptions..."
                                rows={4}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm resize-none"
                            />
                            <label className="flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer">
                                <Lock className="w-4 h-4" />
                                Private Note
                                <input
                                    type="checkbox"
                                    checked={isPrivate}
                                    onChange={(e) => setIsPrivate(e.target.checked)}
                                    className="ml-auto w-10 h-5 rounded-full bg-gray-700 transition-colors"
                                />
                            </label>
                        </div>

                        <p className="text-xs text-gray-500 text-center">
                            Feedback will be shared with startup admins.
                        </p>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors"
                        >
                            Submit Review →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
