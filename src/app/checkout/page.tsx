'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Shield, Check } from 'lucide-react';

const paymentMethods = [
    { id: 'bkash', name: 'bKash', icon: '৳', color: 'bg-pink-600' },
    { id: 'nagad', name: 'Nagad', icon: 'N', color: 'bg-orange-500' },
    { id: 'card', name: 'Card', icon: '💳', color: 'bg-gray-600' },
];

export default function CheckoutPage() {
    const [selectedPayment, setSelectedPayment] = useState('bkash');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const orderSummary = {
        plan: 'Premium Membership',
        description: 'Monthly Hot Desk Access.',
        details: 'Includes: High-speed Wi-Fi (100mbps), Unlimited Coffee Credits, 2h Meeting Room Access.',
        subtotal: 2200,
        vat: 330,
        total: 2530,
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{'{}'}</span>
                        </div>
                        <span className="font-display text-xl font-bold">
                            <span className="text-white">Dev</span>
                            <span className="text-primary">Cafe</span>
                        </span>
                    </Link>
                    <Link
                        href="/dashboard/bookings"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Booking
                    </Link>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Order Summary */}
                    <div>
                        <div className="bg-surface rounded-2xl border border-gray-800 overflow-hidden">
                            {/* Plan Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">☕</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        BEST VALUE
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white mb-4">{orderSummary.plan}</h2>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-400 mb-1">Package Details</h3>
                                        <p className="text-white">{orderSummary.description}</p>
                                        <p className="text-sm text-gray-500 mt-1">{orderSummary.details}</p>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t border-gray-800 pt-4 space-y-3">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>৳{orderSummary.subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>VAT (15%)</span>
                                        <span>৳{orderSummary.vat.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-gray-800">
                                        <span>Total Amount</span>
                                        <span className="text-primary">৳{orderSummary.total.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Security Badge */}
                                <div className="flex items-center gap-2 mt-6 p-3 bg-gray-800/50 rounded-lg">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-400">
                                        <span className="text-primary font-medium">Secure Transaction.</span> Your billing information is encrypted.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Payment Form */}
                    <div>
                        <h1 className="text-3xl font-display font-bold text-white mb-2">Checkout</h1>
                        <p className="text-gray-400 mb-8">
                            Select your preferred payment method to complete the booking.
                        </p>

                        {/* Payment Method Selection */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedPayment(method.id)}
                                    className={`relative p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${selectedPayment === method.id
                                            ? 'border-primary bg-primary/10'
                                            : 'border-gray-700 bg-surface hover:border-gray-600'
                                        }`}
                                >
                                    {selectedPayment === method.id && (
                                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center text-white font-bold`}
                                    >
                                        {method.icon}
                                    </div>
                                    <span className="text-white font-medium">{method.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Payment Details Form */}
                        <div className="space-y-6">
                            {selectedPayment === 'bkash' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        <span className="text-pink-500">৳</span> Enter Payment Details
                                    </label>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">bKash Wallet Number</label>
                                            <input
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                placeholder="+880 1712 345 678"
                                                className="w-full"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            A verification code will be sent to this number.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {selectedPayment === 'nagad' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Nagad Wallet Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="+880 1712 345 678"
                                        className="w-full"
                                    />
                                </div>
                            )}

                            {selectedPayment === 'card' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-500 mb-1">Card Number</label>
                                        <input type="text" placeholder="1234 5678 9012 3456" className="w-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">Expiry Date</label>
                                            <input type="text" placeholder="MM/YY" className="w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-500 mb-1">CVV</label>
                                            <input type="text" placeholder="123" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Terms Agreement */}
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-gray-400">
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-primary hover:text-green-400">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="text-primary hover:text-green-400">
                                        Refund Policy
                                    </Link>
                                    .
                                </span>
                            </label>

                            {/* Submit Button */}
                            <button
                                disabled={!agreedToTerms}
                                className="w-full bg-primary hover:bg-green-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                            >
                                Pay ৳{orderSummary.total.toLocaleString()}
                                <span>→</span>
                            </button>

                            <p className="text-center text-xs text-gray-500">
                                🔒 Your payment is processed securely by SSLCommerz
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 mt-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} DevCafe Bangladesh. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/support" className="hover:text-white transition-colors">
                            Support
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
