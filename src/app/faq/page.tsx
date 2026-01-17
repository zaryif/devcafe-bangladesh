'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, Search } from 'lucide-react';

const categories = ['All', 'Membership', 'Booking', 'Events', 'Payment', 'Community'];

const faqs = [
    {
        category: 'Membership',
        question: 'What membership plans are available?',
        answer: 'We offer three membership tiers: Community Member (Free), Pro Developer (৳2,000/month), and Startup Team (৳8,000/month). Each tier comes with different benefits including workspace access, event discounts, and community features.',
    },
    {
        category: 'Membership',
        question: 'Can I upgrade or downgrade my membership?',
        answer: 'Yes! You can change your membership tier at any time from your dashboard settings. If you upgrade, the new rate will be prorated. If you downgrade, the change will take effect at the start of your next billing cycle.',
    },
    {
        category: 'Booking',
        question: 'How do I book a workspace or meeting room?',
        answer: 'Simply log in to your account, go to the Booking page, select your space type, date, and time. You\'ll receive a confirmation email with your booking details and a QR code for check-in.',
    },
    {
        category: 'Booking',
        question: 'What is your cancellation policy?',
        answer: 'You can cancel bookings up to 24 hours in advance for a full refund. Cancellations made within 24 hours may incur a 50% fee. No-shows may result in restrictions on future bookings.',
    },
    {
        category: 'Events',
        question: 'Are events free for members?',
        answer: 'Many of our workshops and networking events are free for Premium and Startup members. Community members may have access to free events with limited spots or discounted tickets for paid events.',
    },
    {
        category: 'Events',
        question: 'Can I host my own event at DevCafe?',
        answer: 'Absolutely! We welcome community-led events. Contact us through the Events page or reach out directly to discuss your event idea. We offer special rates for member-hosted events.',
    },
    {
        category: 'Payment',
        question: 'What payment methods do you accept?',
        answer: 'We accept bKash, Nagad, and major credit/debit cards. For corporate memberships, we also offer bank transfer options. All payments are processed securely.',
    },
    {
        category: 'Payment',
        question: 'Do you offer refunds?',
        answer: 'Membership fees are non-refundable after the first 7 days. For event tickets, refunds are available up to 48 hours before the event. Please contact support for special circumstances.',
    },
    {
        category: 'Community',
        question: 'How can I find collaborators for my project?',
        answer: 'Use our Community Members page to search for developers by skill, availability, and interests. You can also post your project in the Projects section to attract potential collaborators.',
    },
    {
        category: 'Community',
        question: 'Is there a code of conduct?',
        answer: 'Yes, all members must adhere to our community code of conduct which emphasizes respect, professionalism, and inclusivity. Violations may result in membership suspension.',
    },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-400">
                            Find answers to common questions about DevCafe membership and services.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-surface border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                                        ? 'bg-primary text-white'
                                        : 'bg-surface text-gray-400 hover:text-white border border-gray-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-surface rounded-2xl border border-gray-800 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between"
                                >
                                    <div>
                                        <span className="text-primary text-xs font-medium mb-1 block">{faq.category}</span>
                                        <h3 className="text-white font-medium">{faq.question}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No questions found matching your search.</p>
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="mt-12 text-center bg-primary/10 rounded-2xl border border-primary/30 p-8">
                        <h2 className="text-xl font-bold text-white mb-2">Still have questions?</h2>
                        <p className="text-gray-400 mb-4">Can&apos;t find what you&apos;re looking for? Our team is here to help.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
