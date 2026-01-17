import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Plug, Monitor, Headphones, ArrowRight, Check } from 'lucide-react';

const amenities = [
    { icon: Plug, title: 'Power at Every Seat', description: 'Never fight for an outlet again.' },
    { icon: Wifi, title: 'Gigabit Fiber WiFi', description: 'Fast enough for live demos.' },
    { icon: Monitor, title: 'Herman Miller Chairs', description: 'Your back will thank you.' },
    { icon: Headphones, title: 'Monk Area Friendly', description: 'Quiet zones for deep focus.' },
];

const zones = [
    {
        title: 'The Deep Work Zone',
        description: 'Whisper-quiet area for focus, no calls. Ideal for deep coding sessions.',
        features: ['Silent environment', 'Individual booths', 'Soft lighting'],
    },
    {
        title: 'The Collab Hub',
        description: 'Open seating for teamwork, discussion, and pair programming is encouraged.',
        features: ['Whiteboards', 'Group tables', 'Presentation screens'],
    },
];

const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
];

const pricing = [
    { name: 'Casual Coder', price: '৳150', unit: '/hour', description: 'Drop in anytime, pay as you go.' },
    { name: 'Day Pass', price: '৳800', unit: '/day', description: 'Full day access to all zones.' },
    { name: 'Member', price: '৳12K', unit: '/month', description: 'Unlimited access, priority booking.' },
];

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[#f5f0e8]">
            {/* Light theme header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-display text-xl font-bold text-gray-900">DevCafe</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <Link href="/menu" className="hover:text-gray-900">Menu</Link>
                        <Link href="/services" className="hover:text-gray-900">Services</Link>
                        <Link href="/community" className="hover:text-gray-900">Community</Link>
                    </nav>
                    <Link href="/booking" className="bg-[#0f9f5d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                        Book a Table
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0"
                        alt="DevCafe Interior"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
                        Code, Coffee,<br />Community
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
                        Bangladesh&apos;s first coworking space built by & engineered for developers.
                        Experience a physical environment designed for deep focus and meaningful collaboration.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/booking" className="bg-[#0f9f5d] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                            Book Your Spot
                        </Link>
                        <Link href="#gallery" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors">
                            Take a Virtual Tour
                        </Link>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="text-[#0f9f5d] text-sm font-medium uppercase tracking-wider">Physical Space Amenities</span>
                            <h2 className="text-2xl font-display font-bold text-gray-900">Engineered for Productivity</h2>
                        </div>
                        <p className="text-gray-500 max-w-md text-sm">
                            Every inch of our space is optimized for the most productive workflow you&apos;ll ever love.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {amenities.map((amenity) => (
                            <div key={amenity.title} className="text-center">
                                <div className="w-14 h-14 bg-[#0f9f5d]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <amenity.icon className="w-7 h-7 text-[#0f9f5d]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">{amenity.title}</h3>
                                <p className="text-gray-500 text-sm">{amenity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zones */}
            <section className="py-16 bg-[#f5f0e8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-[#0f9f5d] text-sm font-medium uppercase tracking-wider">Spaces For Every Mode</span>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Quiet vs. Discussion</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl">
                        We know not every task requires the same vibe. Choose your zone based on what you need today.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {zones.map((zone) => (
                            <div key={zone.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">{zone.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{zone.description}</p>
                                <ul className="space-y-2">
                                    {zone.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-[#0f9f5d]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Vibe Check</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((img, i) => (
                            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                                <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 bg-[#f5f0e8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-[#0f9f5d] text-sm font-medium uppercase tracking-wider">Flexible Options</span>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Stay a While</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricing.map((plan) => (
                            <div key={plan.name} className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-1">{plan.name}</h3>
                                <div className="mb-2">
                                    <span className="text-2xl font-bold text-[#0f9f5d]">{plan.price}</span>
                                    <span className="text-gray-500">{plan.unit}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                                <Link
                                    href="/booking"
                                    className="block w-full text-center py-2 rounded-lg border border-[#0f9f5d] text-[#0f9f5d] hover:bg-[#0f9f5d] hover:text-white transition-colors text-sm font-medium"
                                >
                                    Book Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-gray-500 text-sm">© DevCafe Bangladesh</span>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
                        <Link href="/contact" className="hover:text-gray-900">Contact</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
