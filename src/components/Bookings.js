import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import fakeBookings from "../data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    // console.log("This is a test");
    //   fetch('https://cyf-react.glitch.me')
    //   .then(res => res.json())
    //   .then( data => { setBookings(data)})
    const data = fakeBookings;
    setBookings(data);
  }, []);

  const onSearch = searchVal => {
    //console.info("TO DO!", searchVal);
    if (searchVal) {
      const newBookings = bookings.filter(
        value => value.firstName === searchVal || value.surname === searchVal
      );
      setBookings(newBookings);
    } else {
      setBookings(bookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={onSearch} />
        <SearchResults results={bookings} />
        <CustomerProfile />
      </div>
    </div>
  );
};

export default Bookings;
