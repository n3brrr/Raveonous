import React from 'react';
import Business from '../Business/Business';


function BusinessList({ businesses }) {
   
    return (
      <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3 gap-15 max-w-5xl mx-auto ">
        {businesses && businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))}
      </div>
    );
}
export default BusinessList;