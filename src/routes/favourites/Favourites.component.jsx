import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
 const [myData, setMyData] = useState([]);

 useEffect(() => {
  const data = localStorage.getItem("favourites");
  setMyData(JSON.parse(data));
 }, []);
 return (
  <div>
   <div className="">
    {myData.length > 0 ? (
     myData.map((item) => (
      <div className="card" key={item.id}>
       <img
        src={`https://image.tmdb.org/t/p/w200/${item.backdrop_path}`}
        alt="Card-Img"
       />

       <p className="heading">{item.title}</p>
       <p className="para">{item.description}</p>

       <Link className="priceBtn" to={`/detail/${item.id}`}>
        <button>View Details</button>
       </Link>
      </div>
     ))
    ) : (
     <h1 className="notify-msg">No favourite movies added yet!</h1>
    )}
   </div>
  </div>
 );
};

export default Favourites;
