import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, MapPin, Clock, CreditCard } from 'lucide-react';

const menuCategories = [
    { id: 'brews', name: 'Brews', icon: '☕' },
    { id: 'snacks', name: 'Syntax Snacks', icon: '🍔' },
    { id: 'bundles', name: 'Bundles', icon: '📦' },
];

const brews = [
    { name: 'Java Runtime Environment', description: 'Double shot espresso, silently typed.', price: '৳250' },
    { name: 'sudo make coffee', description: 'XL Pour-over. Strong, deliberate, root access required.', price: '৳380' },
    { name: 'Full Stack Flat White', description: 'Perfectly balanced microfoam on a robust espresso base.', price: '৳320' },
    { name: 'Dark Mode Americano', description: 'Pure black. No milk. No sugar. No bugs.', price: '৳200' },
];

const snacks = [
    {
        name: 'Smashed Avo-code Toast',
        description: 'Sourdough toast, smashed avocado, chia besses and sunshine more greens.',
        price: '৳450',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ThZCfti2ITRsr7ZMKon1MYEgc2uwD7GmMo-9at3PdQNUJOS1TpXEhaxnPkujy_aHKmgZbRKAGyYKGEetpKLRLfHwacrSeTgMQ3egGWeBhdq0_3LPAZvihczSgnzzgt4hAKz6FbqMcdIJb01D8EHc0LdThnmnkRr6YYXvX-fSNqZLC4IVoQu7ZG-0rB-4mYa1tZA1zFJ9mSRpEAz3jTtsNn7PQyVydwRY7EjkFRNA_xfmgQ4jCMkzt9HmTtRowEVMdOBGK4wcqQ4',
    },
    {
        name: 'The "Spaghetti" Code',
        description: 'Linguine pasta with 8 complex sause. Untangle with a fork.',
        price: '৳600',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5n-yrwQVcv-wcMiOO6Chr_xdpnzri5Kmp2VgJTIPFrr-i6KZSNDEgICDog38XL9Xwe_s8bbqhCbrzdrJANGHci_4ZS6yPcjhDN17Fr60lqyb_F2bZQX-cwweShdj4V3LfX7b99nunywcwNbd1Ruv-2sXXdfshhhP1VCUH50mIOZRnkf7qkOEGz4Ny-5dMugpQYiG5ZR0kh2_4wxa8rQSVpatFNC5GLsf9hzaGYixjmGFiPM-fEbnkTsA_4kH2-kHZT8h3YFBsf8',
    },
    {
        name: 'Byte-Sized Sliders',
        description: 'Trio of miniatured burgers. Easy to eat with one hand while debugging.',
        price: '৳550',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhwyWIcohvD8dGGLqBTbQWDzkojT-VOoDbRh64kpILTLUI1GHfAUYkoemsGZNdpiP0xUOVBd_YNblD1u9JWq5p9NTjC67ODBrO8IWl5-TIt8aELahHKgP-46596uJL7RNXXo0_cfsSkNTAKl3hJAAragE3SEdQTpKl4dxcJbR-P8Xfi87H_1bJnbLB5Z7JU76WEIR9Yb-Go6gsE7gbjtMrxiAhHTAI_rflWjSQxbiK6I7yiOwH0hPATL75-vPYmWabYNdh2gKh40',
    },
    {
        name: 'RAM (Rapid Access Meal)',
        description: 'Grilled chicken wrap with hummus. Optimized for low energy depletion.',
        price: '৳450',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6UIDq0k6BKWPxl-7BfWKC1cCsgzEFNkoqY4HzwhTby8QXJfCLSlHWEtc4pzB4ujsIq00aHQ4bYjzwNPJ6S7MHa9gUZBYs6o1lyBcG72xNHd-BLfe2yYU9NAvbdvMhDx4t4TqjEbnXUNWTeyj_5WOHRu5Ouy7PUJGhomHok-m1Y5r44YjiWjUEAelh4cG0h7hrJCyZctG1IePsQDtijorURf4fGvZkaZPR_o9w8MILUs7WY9Fbdv-ejkpgbGz7pV-FFo6JbK2S0c',
    },
];

const bundles = [
    {
        name: 'The 8-Hour Sprint',
        price: '৳950',
        description: 'Designed for deep work sessions. Get in the zone and stay there.',
        features: ['Unlimited Filter Coffee Refills', 'One Main Dish (Burger or Pasta)', 'Priority Wi-Fi Access'],
        popular: true,
    },
    {
        name: 'The Hotfix',
        price: '৳450',
        description: 'Quick refuel for focused 2-3 hour sessions.',
        features: ['1x Espresso', '1x Pastry'],
    },
    {
        name: 'Pair Programming',
        price: '৳800',
        description: 'Shareable platter for you and your teammate.',
        features: ['2x Cappuccino', '1x Platter/Nachos'],
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-bg-darker">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkHtjP6601b9AJPy7jEQTQ1_v4O7s1tr2kSHDnG3fMIqPRpIaWDnadmr4dI1deMm3p1YoMGoK6GVc6HNjMUaIrYE07B4-8bP9hdN7ehEYPjdV4c-_rkXVYZ77H4CyV5fypTHTkea8yOB6CtDlfYcuwbBYXT7xTNu9sioDEEnpqPCOUeKpH7JBMkIIDnWEEv-gBx22trU_C0XJHmKGkdiv4on0i6IUtEVaWZlmRDXtgBKjuiEAn8bbuSCV8E3mSUMCKFtMTyrL9t50')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-darker via-bg-darker/80 to-bg-darker" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">Open for Tasting until 2 AM</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        Fuel Your <span className="text-primary">Focus</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Sustain your flow state with our developer-centric menu. High-caffeine brews and brain food.
                    </p>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {menuCategories.map((cat) => (
                            <button
                                key={cat.id}
                                className="px-5 py-2.5 rounded-full bg-surface border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors flex items-center gap-2"
                            >
                                <span>{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Brews & Snacks */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Brews */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <Coffee className="w-5 h-5 text-primary" />
                                <h2 className="text-2xl font-display font-bold text-white">Brews & Compilers</h2>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">☕ Caffeinated dependencies for your brain</p>
                            <div className="space-y-4">
                                {brews.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between p-4 bg-surface rounded-xl border border-gray-800 hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-3 h-3 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                            <div>
                                                <h3 className="font-bold text-white">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                        <span className="text-primary font-bold">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Syntax Snacks */}
                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-2">Syntax Snacks</h2>
                            <p className="text-gray-500 text-sm mb-6">🍴 Fuel for thought, sustain your state</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {snacks.map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-surface rounded-xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="relative h-32 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-white text-sm">{item.name}</h3>
                                                <span className="text-primary text-sm font-bold">{item.price}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Bundles */}
                    <div>
                        <div className="sticky top-24">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-xl">📦</span>
                                <h2 className="text-xl font-display font-bold text-white">Long-Session Bundles</h2>
                            </div>
                            <div className="space-y-4">
                                {bundles.map((bundle) => (
                                    <div
                                        key={bundle.name}
                                        className={`p-5 rounded-2xl border ${bundle.popular
                                            ? 'bg-primary/10 border-primary/50'
                                            : 'bg-surface border-gray-800'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-bold text-white">{bundle.name}</h3>
                                            <span className="text-primary font-bold">{bundle.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4">{bundle.description}</p>
                                        <ul className="space-y-2 mb-4">
                                            {bundle.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <span className="text-primary">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${bundle.popular
                                                ? 'bg-primary hover:bg-green-600 text-white'
                                                : 'border border-gray-700 text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            {bundle.popular ? 'Select Bundle' : 'Add to Order'}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* DevCafe Member Promo */}
                            <div className="mt-6 p-4 bg-surface rounded-xl border border-gray-800">
                                <p className="text-sm text-gray-400">
                                    <span className="text-primary font-medium">DevCafe Member?</span> Show your app and get
                                    exclusive 10% off + free refills on drip coffee.
                                </p>
                                <Link href="/community" className="text-primary text-sm font-medium hover:text-green-400 mt-2 inline-block">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <section className="border-t border-gray-800 py-8 bg-bg-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="font-display font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                Location
                            </h3>
                            <p className="text-gray-500 text-sm">House 42, Road 10<br />Banani, Dhaka 1213</p>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                Hours
                            </h3>
                            <div className="text-gray-500 text-sm space-y-1">
                                <div className="flex justify-center md:justify-start gap-4">
                                    <span>Mon - Thu</span>
                                    <span className="text-white">8am - 12am</span>
                                </div>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <span>Fri - Sun</span>
                                    <span className="text-white">8am - 2am</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                <CreditCard className="w-4 h-4 text-primary" />
                                Connect
                            </h3>
                            <div className="flex justify-center md:justify-start gap-4">
                                <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-primary cursor-pointer">X</span>
                                <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-primary cursor-pointer">in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
