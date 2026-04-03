import React from 'react';
import Header from '../component/shared/Header';
import FeedbackCard from '../component/feedback/FeedbackCard';
import { ArrowRight } from 'lucide-react';

const passengerReviews = [
  { id: '1', rideId: 'BK-4501', date: 'Today', recipientName: 'James Wilson', rating: 5, message: 'Excellent service! Driver was very professional.', user: { fullName: 'Emily Johnson', avatarColor: 'bg-[#1FA75B]', avatarText: 'EJ' } },
  { id: '2', rideId: 'BK-4501', date: 'Today', recipientName: 'Sarah Chen', rating: 5, message: 'Good ride, shuttle was clean and on time.', user: { fullName: 'John Davis', avatarColor: 'bg-[#1FA75B]', avatarText: 'JD' } },
  { id: '3', rideId: 'BK-4501', date: 'Today', recipientName: 'Anna Rivera', rating: 3, message: 'Ride was okay but had to wait longer than expected.', user: { fullName: 'Chris Martin', avatarColor: 'bg-[#1FA75B]', avatarText: 'CM' } },
  { id: '4', rideId: 'BK-4501', date: 'Today', recipientName: 'James Wilson', rating: 5, message: 'Excellent service! Driver was very professional.', user: { fullName: 'Emily Johnson', avatarColor: 'bg-[#1FA75B]', avatarText: 'EJ' } },
  { id: '5', rideId: 'BK-4501', date: 'Today', recipientName: 'James Wilson', rating: 5, message: 'Excellent service! Driver was very professional.', user: { fullName: 'Emily Johnson', avatarColor: 'bg-[#1FA75B]', avatarText: 'EJ' } },
];

const driverReviews = [
  { id: '6', rideId: 'BK-4501', date: 'Today', recipientName: 'Emily Jhonson', rating: 5, message: 'Very polite and punctual passenger. A pleasure to drive.', user: { fullName: 'James Wilson', avatarColor: 'bg-[#1FA75B]', avatarText: 'JW' } },
  { id: '7', rideId: 'BK-4501', date: 'Today', recipientName: 'John Davis', rating: 4, message: 'Good passenger, was ready at the pickup point on time.', user: { fullName: 'Sarah Chen', avatarColor: 'bg-[#1FA75B]', avatarText: 'SC' } },
  { id: '8', rideId: 'BK-4501', date: 'Today', recipientName: 'Emily Jhonson', rating: 2, message: 'Passenger was disruptive and left trash in the shuttle.', user: { fullName: 'Anna Rivera', avatarColor: 'bg-[#1FA75B]', avatarText: 'AR' } },
  { id: '9', rideId: 'BK-4501', date: 'Today', recipientName: 'Emily Jhonson', rating: 5, message: 'Very polite and punctual passenger. A pleasure to drive.', user: { fullName: 'James Wilson', avatarColor: 'bg-[#1FA75B]', avatarText: 'JW' } },
  { id: '10', rideId: 'BK-4501', date: 'Today', recipientName: 'Emily Jhonson', rating: 5, message: 'Very polite and punctual passenger. A pleasure to drive.', user: { fullName: 'James Wilson', avatarColor: 'bg-[#1FA75B]', avatarText: 'JW' } },
];

const Feedback = () => {
    return (
        <div className="animate-in fade-in duration-700">
            <div className="space-y-10">
                {/* Page Title */}
                <Header 
                    title="Feedback Center"
                    description="Monitor reviews from passengers and drivers"
                />

                {/* Feedback Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-10">
                    {/* Passenger to Driver */}
                    <div className="bg-[#1A1F2B]/30 border border-white/5 rounded-3xl p-6 lg:p-6 space-y-6 backdrop-blur-md lg:h-[calc(100vh-280px)] h-auto overflow-y-auto no-scrollbar">
                        <div className="flex items-center gap-3 text-white/40 mb-2 pl-2">
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Passenger</span>
                            <ArrowRight size={14} className="text-white/20" />
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Driver</span>
                        </div>
                        <div className="space-y-4">
                            {passengerReviews.map(review => (
                                <FeedbackCard key={review.id} review={review} />
                            ))}
                        </div>
                    </div>

                    {/* Driver to Passenger */}
                    <div className="bg-[#1A1F2B]/30 border border-white/5 rounded-3xl p-6 lg:p-6 space-y-6 backdrop-blur-md lg:h-[calc(100vh-280px)] h-auto overflow-y-auto no-scrollbar">
                        <div className="flex items-center gap-3 text-white/40 mb-2 pl-2">
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Driver</span>
                            <ArrowRight size={14} className="text-white/20" />
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Passenger</span>
                        </div>
                        <div className="space-y-4">
                            {driverReviews.map(review => (
                                <FeedbackCard key={review.id} review={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;