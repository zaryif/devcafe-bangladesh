import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ArrowRight,
    Laptop,
    Brain,
    GraduationCap,
    Wifi,
    Coffee,
    Users,
    Calendar,
} from 'lucide-react';

const stats = [
    { label: 'Community Members', value: '500+' },
    { label: 'High-Speed Fiber', value: '24/7' },
    { label: 'Tech Workshops', value: 'Weekly' },
];

const features = [
    {
        icon: Laptop,
        title: 'Dev-Friendly Environment',
        description:
            'Ergonomic chairs, dual-monitor setups available, and power outlets at every seat. Coding marathon ready.',
    },
    {
        icon: Brain,
        title: 'Expert Help & Mentorship',
        description:
            'Stuck on a bug? Our "Code Doctors" are available on-site. Connect with senior devs over coffee.',
    },
    {
        icon: GraduationCap,
        title: 'Weekly Workshops',
        description:
            'From React basics to AI integration. Join our free weekly sessions hosted by industry leaders.',
    },
];

const menuItems = [
    {
        name: 'Java Runtime Environment',
        description: 'Double-shot espresso, silky smooth. Caffeinated dependencies for your brain.',
        price: '৳250',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6UIDq0k6BKWPxl-7BfWKC1cCsgzEFNkoqY4HzwhTby8QXJfCLSlHWEtc4pzB4ujsIq00aHQ4bYjzwNPJ6S7MHa9gUZBYs6o1lyBcG72xNHd-BLfe2yYU9NAvbdvMhDx4t4TqjEbnXUNWTeyj_5WOHRu5Ouy7PUJGhomHok-m1Y5r44YjiWjUEAelh4cG0h7hrJCyZctG1IePsQDtijorURf4fGvZkaZPR_o9w8MILUs7WY9Fbdv-ejkpgbGz7pV-FFo6JbK2S0c',
    },
    {
        name: 'sudo make coffee',
        description: 'With root-level flavor. Slow-brewed, bold, no-access-denied.',
        price: '৳380',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhwyWIcohvD8dGGLqBTbQWDzkojT-VOoDbRh64kpILTLUI1GHfAUYkoemsGZNdpiP0xUOVBd_YNblD1u9JWq5p9NTjC67ODBrO8IWl5-TIt8aELahHKgP-46596uJL7RNXXo0_cfsSkNTAKl3hJAAragE3SEdQTpKl4dxcJbR-P8Xfi87H_1bJnbLB5Z7JU76WEIR9Yb-Go6gsE7gbjtMrxiAhHTAI_rflWjSQxbiK6I7yiOwH0hPATL75-vPYmWabYNdh2gKh40',
    },
    {
        name: 'Full Stack Flat White',
        description: 'Perfectly balanced ristretto on a cloud espresso base.',
        price: '৳320',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5n-yrwQVcv-wcMiOO6Chr_xdpnzri5Kmp2VgJTIPFrr-i6KZSNDEgICDog38XL9Xwe_s8bbqhCbrzdrJANGHci_4ZS6yPcjhDN17Fr60lqyb_F2bZQX-cwweShdj4V3LfX7b99nunywcwNbd1Ruv-2sXXdfshhhP1VCUH50mIOZRnkf7qkOEGz4Ny-5dMugpQYiG5ZR0kh2_4wxa8rQSVpatFNC5GLsf9hzaGYixjmGFiPM-fEbnkTsA_4kH2-kHZT8h3YFBsf8',
    },
    {
        name: 'Dark Mode Americano',
        description: 'Pure black. No milk, no sugar, no bugs.',
        price: '৳200',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ThZCfti2ITRsr7ZMKon1MYEgc2uwD7GmMo-9at3PdQNUJOS1TpXEhaxnPkujy_aHKmgZbRKAGyYKGEetpKLRLfHwacrSeTgMQ3egGWeBhdq0_3LPAZvihczSgnzzgt4hAKz6FbqMcdIJb01D8EHc0LdThnmnkRr6YYXvX-fSNqZLC4IVoQu7ZG-0rB-4mYa1tZA1zFJ9mSRpEAz3jTtsNn7PQyVydwRY7EjkFRNA_xfmgQ4jCMkzt9HmTtRowEVMdOBGK4wcqQ4',
    },
];

const events = [
    {
        date: 'OCT 15',
        type: 'Workshop',
        title: 'Intro to Rust Programming',
        description: 'A beginner-friendly session on memory safety and concurrency. Bring your laptop!',
        attendees: 12,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
    },
    {
        date: 'OCT 22',
        type: 'Networking',
        title: 'Startups & Coffee Mixer',
        description: 'Meet local founders, investors, and developers in a casual setting. Coffee on the house!',
        attendees: 45,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
    },
    {
        date: 'OCT 28',
        type: 'Hackathon',
        title: '24h AI Hackathon',
        description: 'Build the next big AI tool. Prizes worth $5000 up for grabs. Teams of 4.',
        attendees: 80,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRi23_EpGLfIdRrCj1E49Rb-I03UrW9-ojZT9NF3c5Yj_u9KuztL4LQL7fiJvyPMB8DJ1YUSb_l9eZmlsN_2pWa70DGcOsGNmIpo_kMlsJXOFxszoKJJ7Utc_yy9-4o4B2fbOJDa9GQWDPvOvRYMXo6RF3ujXBKP1wY_HdUIGbU4O5Z4CgCArVsgn0lohTKPMoS1jBRtZInq0OLMZ1dgib7FlBQHI_P4OP25EvbgPG9gRBMVeC1xSdF5u-8WG1-rpkwCbxM24BdY',
    },
];

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 pt-28 overflow-hidden bg-bg-darker">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0"
                        alt="Developers collaborating in a modern cafe"
                        fill
                        className="object-cover grayscale-[30%] opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-dark/90 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_8px_#0f9f5d]" />
                                <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                                    Dhaka&apos;s First Tech Hub
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                                Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Code</span> Meets <br />
                                <span className="text-gray-400 italic font-light">Coffee & Ideas</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed">
                                DevCafe Bangladesh is more than a coffee shop. It&apos;s a sanctuary for developers, a launchpad for startups, and a home for innovation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/community"
                                    className="btn-primary flex items-center justify-center group"
                                >
                                    Join the Community
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/booking" className="btn-secondary flex items-center justify-center">
                                    Book a Seat
                                </Link>
                            </div>

                            <div className="pt-8 border-t border-gray-800 grid grid-cols-3 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center md:text-left">
                                        <span className="block text-2xl font-bold text-white font-display">
                                            {stat.value}
                                        </span>
                                        <span className="text-sm text-gray-500">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5l0yn8CUkSDCWL7oT9n5hsPFtXMOyB74V1WjWiZo8zX_dzeTaCTqQngaOCiW2ZwMrA-BpBBnk02VfCYWMoSVoQyKcle-g1hyZqV1pfFl7o56AhzqPFIKXY5rRmPmY4jZYMut1cjw6NaXF1LlRMAsDtLr4ioHM1n4909n6XPg26QGeq_hdU5RbvNLpptEVq8gn2Hkh75GgdutN_xFHdIMoDCoCTJuH3BMLFCtMRfj88BGNTZwh4Whqo4w7dixsGn01caz527RMVe0"
                                    alt="Latte art and laptop"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6 z-10">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-primary rounded-full shadow-[0_0_10px_rgba(15,159,93,0.5)]">
                                            <Wifi className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Ultra-Fast 1Gbps</p>
                                            <p className="text-xs text-gray-400">Dedicated for Devs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating notification */}
                            <div className="absolute -bottom-10 -left-10 bg-surface p-4 rounded-2xl shadow-2xl border border-gray-700 max-w-xs animate-float z-20">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ"
                                        alt="User Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full border-2 border-primary"
                                    />
                                    <div>
                                        <p className="text-xs text-primary font-medium">Just joined</p>
                                        <p className="text-sm font-bold text-white">Rahim is coding...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-surface-dark relative rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
                            Built for the Modern Developer
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-green-700 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group p-8 rounded-3xl bg-surface border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(15,159,93,0.2)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Coffee className="w-24 h-24 text-white" />
                                </div>
                                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-primary/50 group-hover:bg-primary/10">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-12 bg-bg-dark relative overflow-hidden" id="services">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">
                                Fuel Your Code
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2">
                                Our Signature <span className="text-primary italic">Fuel</span>
                            </h2>
                        </div>
                        <Link
                            href="/menu"
                            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-green-400 transition-colors mt-4 md:mt-0"
                        >
                            View Full Menu <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="bg-surface rounded-2xl p-4 shadow-lg border border-gray-800 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col"
                            >
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-white border border-gray-700 z-10">
                                        {item.price}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white font-display">{item.name}</h3>
                                <p className="text-sm text-gray-400 mt-1 mb-3 flex-1">{item.description}</p>
                                <button className="w-full py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors text-sm font-medium mt-auto">
                                    Order Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href="/menu"
                            className="inline-flex items-center text-primary font-semibold hover:text-green-400 transition-colors"
                        >
                            View Full Menu <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 bg-accent text-white relative overflow-hidden border-t border-b border-gray-800" id="about">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111827] skew-x-12 translate-x-32 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#334155]">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzIn1VAZ2GlxZWvjVTYdvb8ATYgJMCYehVcYcgr-82gWJEb6Tm8Jzt-hSamXbLiO_3eohhtwvABkX9Zp84x4w_6GH6Oe6lqsU43sN5z2T3UmQLaYh87o1x7QCppDnS8RDSFpKBxnH9tL97kdjWr-ZIYOAYEvDOn5OjoJeh46c4CHn12BgybdmYMBFmsNPNk6QPghM8fF7W8FapPz8dx8kZzwCzKvUK6NZG9rtXoYE1DCmBI_wnmR7E2-0Z5ZCtxQjCaqvXOrvLwk"
                                    alt="Team meeting"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto opacity-80"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-[#0F172A] p-6 rounded-2xl shadow-xl max-w-xs text-white border border-gray-700 hidden md:block">
                                <div className="flex items-start">
                                    <span className="text-4xl text-primary mr-3 opacity-50">&quot;</span>
                                    <p className="font-display font-medium text-lg italic text-gray-200">
                                        The best code is written with good coffee and great company.
                                    </p>
                                </div>
                                <p className="text-right text-sm font-bold text-primary mt-2">- Founder, DevCafe</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                                About DevCafe
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                                We Brew Coffee & <br />
                                <span className="text-primary">Compile Dreams</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                DevCafe Bangladesh started as a small meetup spot and grew into the country&apos;s first
                                dedicated workspace for tech professionals. We understand the unique needs of
                                developers – quiet zones for deep work, collaborative spaces for brainstorming, and a
                                network that helps you grow.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    'Dedicated Fiber Optic Line (Dual ISP Backup)',
                                    'Soundproof Meeting Pods',
                                    'Open 24/7 for Night Owls',
                                ].map((item) => (
                                    <li key={item} className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6">
                                <Link
                                    href="/about"
                                    className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    Read Our Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-12 bg-bg-dark" id="events">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                            Community & Events
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
                            What&apos;s Happening at the Cafe
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.title}
                                className="bg-surface rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 flex flex-col group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-md z-10">
                                        {event.date}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs text-primary font-semibold uppercase mb-2">
                                        {event.type}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-display">{event.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">{event.description}</p>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 text-gray-400 mr-2" />
                                            <span className="text-sm text-gray-400">+{event.attendees} attending</span>
                                        </div>
                                        <Link href="/events" className="text-primary font-medium hover:text-green-400 text-sm">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA Section */}
            <section className="py-16 relative">
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkHtjP6601b9AJPy7jEQTQ1_v4O7s1tr2kSHDnG3fMIqPRpIaWDnadmr4dI1deMm3p1YoMGoK6GVc6HNjMUaIrYE07B4-8bP9hdN7ehEYPjdV4c-_rkXVYZ77H4CyV5fypTHTkea8yOB6CtDlfYcuwbBYXT7xTNu9sioDEEnpqPCOUeKpH7JBMkIIDnWEEv-gBx22trU_C0XJHmKGkdiv4on0i6IUtEVaWZlmRDXtgBKjuiEAn8bbuSCV8E3mSUMCKFtMTyrL9t50')",
                    }}
                >
                    <div className="absolute inset-0 bg-bg-darker/80" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Secure Your Spot
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you need a desk for a day or a meeting room for your team, booking ahead
                        guarantees you the perfect environment to focus.
                    </p>
                    <form className="bg-surface-dark/70 backdrop-blur-md p-6 rounded-3xl border border-gray-700 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full"
                            />
                            <select className="w-full">
                                <option>Hot Desk (Daily)</option>
                                <option>Meeting Room</option>
                                <option>Event Space</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <input type="date" className="w-full" />
                            <input type="time" className="w-full" />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-colors"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
