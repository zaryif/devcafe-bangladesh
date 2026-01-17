import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Download, Copy, Check, Palette, Type, Layers } from 'lucide-react';

const colors = [
    { name: 'Primary Green', hex: '#0F9F5D', usage: 'Buttons, links, accents' },
    { name: 'Dark Background', hex: '#0A0A0A', usage: 'Main background' },
    { name: 'Surface', hex: '#141414', usage: 'Cards, modals' },
    { name: 'Gray 500', hex: '#737373', usage: 'Secondary text' },
    { name: 'Accent Gold', hex: '#C4A35A', usage: 'Premium features' },
];

const fonts = [
    { name: 'Oswald', weight: 'Bold', usage: 'Headlines, display text', sample: 'DevCafe Bangladesh' },
    { name: 'Inter', weight: 'Regular', usage: 'Body text, UI elements', sample: 'The quick brown fox jumps over the lazy dog.' },
];

const logos = [
    { name: 'Primary Logo', variant: 'Dark BG', file: 'logo-primary.svg' },
    { name: 'Light Logo', variant: 'Light BG', file: 'logo-light.svg' },
    { name: 'Icon Only', variant: 'App Icon', file: 'icon.svg' },
];

export default function BrandPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/about" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to About
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Brand Identity Guide
                    </h1>
                    <p className="text-gray-400 text-lg mb-12">
                        Guidelines for using DevCafe branding assets consistently across all platforms.
                    </p>

                    {/* Logo Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-white">Logo</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {logos.map((logo) => (
                                <div key={logo.name} className="bg-surface rounded-2xl border border-gray-800 p-6 text-center">
                                    <div className={`w-full h-32 rounded-xl mb-4 flex items-center justify-center ${logo.variant === 'Light BG' ? 'bg-white' : 'bg-gray-900'
                                        }`}>
                                        <div className="flex items-center gap-2">
                                            <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">{'{ }'}</span>
                                            <span className="font-display text-xl font-bold">
                                                <span className={logo.variant === 'Light BG' ? 'text-gray-900' : 'text-white'}>Dev</span>
                                                <span className="text-primary">Cafe</span>
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-white mb-1">{logo.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{logo.variant}</p>
                                    <button className="text-primary hover:text-green-400 text-sm font-medium flex items-center gap-1 mx-auto">
                                        <Download className="w-4 h-4" />
                                        Download SVG
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-surface rounded-2xl border border-gray-800 p-6">
                            <h3 className="font-bold text-white mb-4">Logo Usage Guidelines</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    Maintain clear space around the logo equal to the height of the bracket icon
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    Don&apos;t alter colors, proportions, or add effects to the logo
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    Minimum size: 120px wide for digital, 30mm for print
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Colors Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Palette className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-white">Color Palette</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {colors.map((color) => (
                                <div key={color.name} className="bg-surface rounded-xl border border-gray-800 p-4">
                                    <div
                                        className="w-full h-20 rounded-lg mb-4"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <h3 className="font-medium text-white mb-1">{color.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <code className="text-primary text-sm font-mono">{color.hex}</code>
                                        <button className="text-gray-500 hover:text-white transition-colors">
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">{color.usage}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Typography Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Type className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-white">Typography</h2>
                        </div>

                        <div className="space-y-6">
                            {fonts.map((font) => (
                                <div key={font.name} className="bg-surface rounded-2xl border border-gray-800 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-medium text-white">{font.name}</h3>
                                            <p className="text-gray-500 text-sm">{font.weight} · {font.usage}</p>
                                        </div>
                                        <a
                                            href={`https://fonts.google.com/specimen/${font.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-green-400 text-sm"
                                        >
                                            Get Font →
                                        </a>
                                    </div>
                                    <p
                                        className="text-white text-2xl"
                                        style={{ fontFamily: font.name === 'Oswald' ? 'var(--font-display)' : 'var(--font-sans)' }}
                                    >
                                        {font.sample}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Download Kit */}
                    <div className="bg-primary/10 rounded-2xl border border-primary/30 p-8 text-center">
                        <h2 className="text-xl font-bold text-white mb-2">Download Brand Kit</h2>
                        <p className="text-gray-400 mb-6">
                            Get all logos, icons, and brand guidelines in one package.
                        </p>
                        <button className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                            <Download className="w-5 h-5" />
                            Download Brand Kit
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
