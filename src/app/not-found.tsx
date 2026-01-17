import Link from 'next/link';
import { Coffee, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center p-4">
            <div className="text-center">
                <div className="mb-8">
                    <Coffee className="w-24 h-24 text-primary mx-auto opacity-50" />
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">404</h1>
                <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Oops! Looks like this page took a coffee break. Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-6 py-3 rounded-xl font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
