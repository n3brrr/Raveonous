import React from "react";
import BusinessList from "../components/BusinessList/BusinessList";


function App() {

     const businesses = [
  {
    id: 1,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "KFC",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    category: "Fast Food",
    rating: 4.5,
    reviewCount: 100,
  },
   {
    id: 2,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "Bakery",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    category: "Bakery",
    rating: 4.5,
    reviewCount: 100,
  },
   {
    id: 3,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "Mama Mia",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    category: "Italian",
    rating: 4.9,
    reviewCount: 182,
  },
   {
    id: 4,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "Terra Nostra Italiano",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "21323",
    category: "Italian",
    rating: 4.8,
    reviewCount: 1010,
  },
   {
    id: 5,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "McDonalds",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    category: "Fast Food",
    rating: 4.3,
    reviewCount: 120,
  },
  {
    id: 6,
    imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/o.jpg",
    name: "Sushi Place",
    address: "456 Sushi Ave",
    city: "Sushitown",
    state: "NY",
    zipCode: "67890",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 200,
  }
    ];
    return (   
      <BusinessList businesses={businesses} />
  );
}

export default App;