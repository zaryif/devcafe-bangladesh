import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        slug: 'why-coworking-spaces-matter',
        title: 'Why Coworking Spaces Matter for Bangladesh\'s Tech Ecosystem',
        excerpt: 'Exploring the role of collaborative workspaces in fostering innovation and driving the next wave of tech startups.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        author: 'Rahim Ahmed',
        date: 'October 10, 2024',
        readTime: '5 min read',
        tags: ['Coworking', 'Tech Ecosystem'],
    },
    {
        slug: 'top-10-productivity-tips',
        title: 'Top 10 Productivity Tips for Remote Developers',
        excerpt: 'Maximize your output while working from a coworking space or home office with these proven strategies.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7tbmCNOjTE6kGeuTcE0uj33xiPj1aHs5YlTsQFA_WqNvSQyRk8Mh1fzLis7houbFB38L7KJMkdE0k6adUtI4uApbpiPRcfD6DbI-FlMZCBTfQbIulj-Uu5AQ_FSQUuPsWOVEySes7askccUw47yiWeNKwBBoTcAduEe31mqCueLH8PM1NmeunS4p4sw4ypi8SPvh6NOvwZgk75ZBDZgltJiAYVnBaCJRcOLFnW0iZx11U9iYAHZTWw8Etnh41mHQ6_BeYZYyK88',
        author: 'Fatima Khan',
        date: 'October 5, 2024',
        readTime: '7 min read',
        tags: ['Productivity', 'Remote Work'],
    },
    {
        slug: 'building-your-first-startup',
        title: 'Building Your First Startup: Lessons from DevCafe Founders',
        excerpt: 'Real insights from entrepreneurs who launched their companies from our coworking space.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqnUGsPmpSEX4V0yQUdabaWfMFgO3JhUeAL64YUkBzo_P1DA7oj9TMGP6G7UQFFfS4CW3W32wqH71TbFgqApO4fSjXqdGtD6NGoIoRRtUT1-oLhfauWk7XxpIUAg_MlLgbTft8zKnlt4aeALUn9XYqrP6dUgd7qTy1kVbTXUg5TaRcGtgUc4v-F7oMFfhELWcO7SY5oqQ3Bf7kPZ1fcziFSDcJwq2ZArGagT4XcaJuKyv5AlPm5PvqKroMGN9UP5dao2AYCXQMY0',
        author: 'Sarah Chen',
        date: 'September 28, 2024',
        readTime: '10 min read',
        tags: ['Startup', 'Entrepreneurship'],
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            DevCafe Blog
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Insights, stories, and tips from Bangladesh&apos;s developer community.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        className="block bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors mb-12 group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-64 lg:h-auto">
                                <Image
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {blogPosts[0].tags.map((tag) => (
                                        <span key={tag} className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {blogPosts[0].date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {blogPosts[0].readTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Post Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="bg-surface rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-colors group"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="text-primary text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <span>{post.author}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
