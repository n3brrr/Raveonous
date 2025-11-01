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
        <div className="business">
          <img src={business.imageSrc} alt={business.name} />
          <h2>{business.name}</h2>
          <p className="business-address"> 
            {business.address},
            {business.city},
            {business.state},
            {business.zipCode}
          </p>
          <p className="business-category">{business.category}</p>
          <p className="business-rating">Rating: {business.rating}</p>
          <p className="business-reviewCount">Reviews: {business.reviewCount}</p>
        </div>
    );
}

export default Business;