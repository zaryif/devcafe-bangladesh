'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Plus, Minus } from 'lucide-react';

const roomTypes = [
    { id: 'hot-desk', name: 'Hot Desk', price: 500, unit: 'day', description: 'Flexible seating in shared area' },
    { id: 'meeting-room', name: 'Meeting Room', price: 1500, unit: '2 hours', description: 'Private room for 4-8 people' },
    { id: 'podcast-studio', name: 'Podcast Studio', price: 2000, unit: '2 hours', description: 'Soundproof room with equipment' },
    { id: 'event-space', name: 'Event Space', price: 15000, unit: 'half day', description: 'Main hall for up to 50 people' },
];

export default function BookingPage() {
    const [selectedRoom, setSelectedRoom] = useState('hot-desk');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const selectedRoomData = roomTypes.find(r => r.id === selectedRoom);

    return (
        <div className="min-h-screen bg-bg-dark">
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Book Your Space
                    </h1>
                    <p className="text-gray-400">
                        Reserve a workspace, meeting room, or event space at DevCafe.
                    </p>
                </div>

                <div className="bg-surface rounded-2xl border border-gray-800 p-8">
                    {/* Room Type Selection */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-300 mb-4">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Select Space Type
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roomTypes.map((room) => (
                                <button
                                    key={room.id}
                                    onClick={() => setSelectedRoom(room.id)}
                                    className={`p-4 rounded-xl border-2 text-left transition-all ${selectedRoom === room.id
                                            ? 'border-primary bg-primary/10'
                                            : 'border-gray-700 hover:border-gray-600'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-white">{room.name}</h3>
                                        <span className="text-primary font-bold">৳{room.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{room.description}</p>
                                    <p className="text-xs text-gray-600 mt-1">per {room.unit}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Calendar className="w-4 h-4 inline mr-2" />
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Clock className="w-4 h-4 inline mr-2" />
                                Time
                            </label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    {selectedRoom !== 'hot-desk' && (
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Users className="w-4 h-4 inline mr-2" />
                                Number of Guests
                            </label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setGuests(Math.max(1, guests - 1))}
                                    className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-2xl font-bold text-white w-12 text-center">{guests}</span>
                                <button
                                    onClick={() => setGuests(guests + 1)}
                                    className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Summary */}
                    <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                        <h3 className="text-sm font-medium text-gray-400 mb-4">Booking Summary</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400">{selectedRoomData?.name}</span>
                                <span className="text-white">৳{selectedRoomData?.price} / {selectedRoomData?.unit}</span>
                            </div>
                            {date && (
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Date</span>
                                    <span className="text-white">{date}</span>
                                </div>
                            )}
                            {time && (
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Time</span>
                                    <span className="text-white">{time}</span>
                                </div>
                            )}
                            <div className="border-t border-gray-700 pt-3 flex justify-between">
                                <span className="font-bold text-white">Estimated Total</span>
                                <span className="font-bold text-primary">৳{selectedRoomData?.price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <Link
                        href="/checkout"
                        className="block w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all text-center"
                    >
                        Continue to Checkout
                    </Link>
                </div>
            </main>
        </div>
    );
}
