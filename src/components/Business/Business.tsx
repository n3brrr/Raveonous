import React from 'react';

const business = {
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "Papa John's Pizza",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    category: "Italian",
    rating: 4.5,
    reviewCount: 100,
}

function Business() {
    return (
        <div className="p-4 w-72 flex flex-col ml-40 mt-15">
          <img 
            src={business.imageSrc} 
            alt={business.name} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          
          <div className="p-4">
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