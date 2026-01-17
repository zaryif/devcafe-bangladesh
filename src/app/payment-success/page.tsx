import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
    const order = {
        id: 'DC-2024-001234',
        plan: 'Premium Membership',
        amount: 2530,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="bg-surface rounded-2xl border border-gray-800 p-8 text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>

                    <h1 className="text-3xl font-display font-bold text-white mb-2">Payment Successful!</h1>
                    <p className="text-gray-400 mb-8">
                        Thank you for your purchase. Your membership is now active.
                    </p>

                    <div className="bg-gray-800/50 rounded-xl p-6 mb-8 text-left">
                        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Order Details</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Order ID</span>
                                <span className="text-white font-mono">{order.id}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Plan</span>
                                <span className="text-white">{order.plan}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Date</span>
                                <span className="text-white">{order.date}</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-700 pt-3">
                                <span className="text-gray-400 font-medium">Total Paid</span>
                                <span className="text-primary font-bold text-lg">৳{order.amount.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href="/dashboard"
                            className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                        >
                            Go to Dashboard
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button className="w-full py-3 border border-gray-700 text-gray-400 hover:text-white rounded-xl transition-colors flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Receipt
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm mt-6">
                        A confirmation email has been sent to your registered address.
                    </p>
                </div>
            </div>
        </div>
    );
}
