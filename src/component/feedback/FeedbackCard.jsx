import React from 'react';
import { Star } from 'lucide-react';

const FeedbackCard = ({ review }) => {
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            size={16}
            className={`${
              star <= rating 
                ? 'fill-[#FF8D21] text-[#FF8D21]' 
                : 'text-white/10 fill-none'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#1A1F2B]/50 border border-white/5 rounded-2xl p-6 space-y-4 hover:border-white/10 transition-all duration-300 backdrop-blur-sm group">
      <div className="flex justify-between items-start gap-4">
        {/* User Identity */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white/5 group-hover:ring-primary/20 transition-all ${review.user.avatarColor || 'bg-primary text-[#101319]'}`}>
            {review.user.avatarText || review.user.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white group-hover:text-primary transition-colors leading-tight">
              {review.user.fullName}
            </span>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 tracking-tight mt-0.5">
              <span className="uppercase">Ride {review.rideId}</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>{review.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span className="text-primary/40 capitalize">{review.recipientName}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        {renderStars(review.rating)}
      </div>

      {/* Message */}
      <p className="text-[15px] text-white font-medium leading-relaxed">
        {review.message}
      </p>
    </div>
  );
};

export default FeedbackCard;
