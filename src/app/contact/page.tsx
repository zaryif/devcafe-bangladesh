import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg-dark">
            <Navbar />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Have questions about membership, events, or partnerships? We&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">First Name</label>
                                        <input type="text" placeholder="John" className="w-full" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Subject</label>
                                    <select className="w-full">
                                        <option>General Inquiry</option>
                                        <option>Membership</option>
                                        <option>Events & Workshops</option>
                                        <option>Partnerships</option>
                                        <option>Support</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us how we can help..."
                                        className="w-full resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Map Placeholder */}
                            <div className="bg-surface rounded-2xl border border-gray-800 h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                                        <p className="text-gray-500">Interactive Map</p>
                                        <p className="text-xs text-gray-600">House 42, Road 10, Banani</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-surface rounded-xl border border-gray-800 p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-white">Location</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        House 42, Road 10, Banani<br />
                                        Dhaka 1213, Bangladesh
                                    </p>
                                </div>

                                <div className="bg-surface rounded-xl border border-gray-800 p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-white">Phone</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        +880 1712 345678<br />
                                        +880 2 9876543
                                    </p>
                                </div>

                                <div className="bg-surface rounded-xl border border-gray-800 p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-white">Email</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        hello@devcafe.bd<br />
                                        support@devcafe.bd
                                    </p>
                                </div>

                                <div className="bg-surface rounded-xl border border-gray-800 p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-white">Hours</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        Mon-Fri: 24 Hours<br />
                                        Sat-Sun: 8AM - 12AM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
