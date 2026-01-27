"use client"
import Yelp from "../utils/YelpApi";
import { useState } from "react";
import BusinessList from "../components/BusinessList/BusinessList";
import SearchBar from "../components/SearchBar/SearchBar";


function App() {

    const [businesses, setBusinesses] = useState([]);

    const searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then((businesses) => {
            setBusinesses(businesses);
            console.log(businesses);
        });
    };
    
    
    return (   
      <>
        <SearchBar searchYelp={searchYelp}/>  
        <BusinessList businesses={businesses}/>
      </>
     
  );
}

export default App;