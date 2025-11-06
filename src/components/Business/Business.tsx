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
      
        <div className="p-4 w-72 flex flex-between ml-40 mt-15">
          <img src={business.imageSrc} alt={business.name} />
          
          <h2 className="text-xl font-bold mb-2">{business.name}</h2>
          <p className="text-gray-600 text-sm mb-1"> 
            {business.address}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            {business.city}
          </p>
          <p className="text-gray-600 text-sm mb-1">	
            {business.state},
            {business.zipCode}
          </p>
        <div className="flex flex-col tetx-right">
          <p className="text-xl uppercase font-bold text-[#C49847]">{business.category}</p>
          <p className="text-m font-bold text-[#C49847]">Rating: {business.rating}</p>
          <p className="tetx-m ">Reviews: {business.reviewCount}</p>
        </div>
         
        </div>
    );
}
export default Business;
