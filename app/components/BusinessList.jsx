import React from 'react';
import Business from './Business';

function BusinessList() {
    const businesses = [
        {
            id: 1,
            name: "Papa John's Pizza",
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            category: "Italian",
            rating: 4.5,
            reviewCount: 100,
        }
    ];
    return (
      <div className="flex flex-wrap gap-4 justify-center max-lg:">
        {businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))}
      </div>
    );
}
export default BusinessList;
