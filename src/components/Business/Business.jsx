import React from 'react';

function Business({ business }) {
    return (
        <div className="gap-4 bg-white rounded-lg flex flex-col">
          <img 
            src={business.imageSrc} 
            alt={business.name} 
            className="w-full h-48 object-cover"
          />
          
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">{business.name}</h2>
            
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-600 text-sm mb-1">{business.address}</p>
                <p className="text-gray-600 text-sm mb-1">{business.city}</p>
                <p className="text-gray-600 text-sm">{business.state} {business.zipCode}</p>
              </div>

              <div className="flex-1 text-right">
                <p className="text-sm uppercase font-bold text-[#C49847] mb-1">
                  {business.category}
                </p>
                <p className="text-sm font-bold text-[#C49847] mb-1">
                  {business.rating} stars
                </p>
                <p className="text-sm text-gray-600">
                  {business.reviewCount} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Business;