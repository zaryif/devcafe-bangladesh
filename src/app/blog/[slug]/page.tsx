import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Twitter, Facebook, Linkedin, Share2 } from 'lucide-react';

const blogPosts: Record<string, {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: { name: string; avatar: string; role: string };
    date: string;
    readTime: string;
    tags: string[];
}> = {
    'why-coworking-spaces-matter': {
        title: 'Why Coworking Spaces Matter for Bangladesh\'s Tech Ecosystem',
        excerpt: 'Exploring the role of collaborative workspaces in fostering innovation.',
        content: `The tech ecosystem in Bangladesh is experiencing unprecedented growth. With over 2,000 active IT companies and a rapidly expanding startup scene, the demand for flexible, collaborative workspaces has never been higher.

## The Rise of Coworking

Traditional office spaces often don't meet the needs of modern tech teams. Startups need flexibility, freelancers need community, and remote workers need infrastructure. Coworking spaces like DevCafe fill this gap by offering:

- **Flexible membership options** that scale with your team
- **Networking opportunities** with like-minded professionals
- **Premium amenities** without the overhead of a traditional lease
- **Events and workshops** for continuous learning

## Building Community

Beyond just desks and WiFi, the real value of coworking lies in community. At DevCafe, we've seen countless collaborations born from chance encounters in our space. A frontend developer meets a startup founder over coffee. A designer shares feedback on a new app. These organic connections drive innovation.

## The Future of Work in Bangladesh

As remote work becomes more prevalent globally, Bangladesh's tech industry is well-positioned to capitalize on this trend. Coworking spaces serve as hubs for this distributed workforce, providing the infrastructure and community that make remote work sustainable.

We believe the future of work is flexible, collaborative, and community-driven. That's why we built DevCafe – not just as a workspace, but as a launchpad for Bangladesh's next great tech companies.`,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj6ZgkJIwowiO4_azbdRchrDyAgCrW_mfTEzpkDJ3UVJkp5z3W9BeDfGbWP0Nqc4SFzGGFIT74NUmfmOLH5fHsBbydZ6SnIj3amjqhi96lzN1yk1G2WuTGiSxhfnhLN4OBBCM1V2moyDvRAh79b28q0QDbg6FCirCTBbDdIKSRoM6zNQldY03kME110LrzuGDbpX-xam9uCmpmOKcrmPItkq8fGKrrHHOzDN-fyl16-pkIqE3p5lT-1sqJawbZGYEF2t5hhlDdlg0',
        author: {
            name: 'Rahim Ahmed',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCguPEeTvoTrSSfPLdR8acfu2eWqR67H8ZvFldalt1vQl4wJlT0w6oTzD42qZ7PRsVnVQYhLF7ui6FrgKNxWY5KtsG8rNOqY1CBH9S7S7pksl5QBJ-EU6_Kz2wmJhCWEsCbKqsSt4fGY1Xnw9kh5IbHN3ZgXEuBB91E4n8bvQjr1QVW7dn9nw4XkYYFWtaRAIPJ1FlESC4U2zXeYlSWwgdMuaV24b66lMRjes27doCCIHlahS0gRsBVZ2yNtivq2zZeb57aGTuXTqQ',
            role: 'Co-Founder, DevCafe',
        },
        date: 'October 10, 2024',
        readTime: '5 min read',
        tags: ['Coworking', 'Tech Ecosystem', 'Bangladesh'],
    },
};

export function generateStaticParams() {
    return [
        { slug: 'why-coworking-spaces-matter' },
    ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        return (
            <main className="min-h-screen bg-bg-dark">
                <Navbar />
                <div className="pt-24 pb-20 text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
                        <p className="text-gray-400 mb-8">This blog post doesn&apos;t exist.</p>
                        <Link href="/blog" className="btn-primary">Back to Blog</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <article className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 flex-wrap text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image src={post.author.avatar} alt={post.author.name} width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-medium text-white">{post.author.name}</h3>
                            <p className="text-sm text-gray-500">{post.author.role}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {post.content.split('\n\n').map((para, i) => {
                            if (para.startsWith('## ')) {
                                return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{para.replace('## ', '')}</h2>;
                            }
                            if (para.startsWith('- ')) {
                                const items = para.split('\n').filter(line => line.startsWith('- '));
                                return (
                                    <ul key={i} className="list-disc list-inside space-y-2 text-gray-400">
                                        {items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}
                                    </ul>
                                );
                            }
                            return <p key={i} className="text-gray-400 leading-relaxed">{para}</p>;
                        })}
                    </div>

                    {/* Share */}
                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Share this article</h3>
                        <div className="flex gap-3">
                            <button className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
