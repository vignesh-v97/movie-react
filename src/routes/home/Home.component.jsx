import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();
 const favouriteMovies = [];
 const [data, setData] = useState([]);
 //  const [favourites, setFavourites] = useState(favouriteMovies);

 const fetchMovies = () => {
  axios
   .get(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=b3bc4d6602053fa2a4e8d97f581a297b"
   )
   .then((response) => {
    setData(response.data.results);
   })
   .catch((error) => {
    console.log(error);
   });
 };

 const searchMovies = (value) => {
  axios
   .get(
    `https://api.themoviedb.org/3/search/movie?api_key=b3bc4d6602053fa2a4e8d97f581a297b&language=en-US&query=${value}&page=1`
   )
   .then((response) => {
    setData(response.data.results);
   })
   .catch((error) => {
    console.log(error);
   });
 };

 const addToFavourites = (item) => {
  // console.log(item);
  favouriteMovies.push(item);
  // setFavourites((favourites) => [...favourites, item]);
  // setFavourites([...favourites, item]);
 };

 const handleChange = (e) => {
  if (e.target.value.length > 0) {
   searchMovies(e.target.value);
  } else {
   fetchMovies();
  }
 };

 const navigateToFavourites = () => {
  localStorage.setItem("favourites", JSON.stringify(favouriteMovies));
  navigate("/favourites");
 };

 useEffect(() => {
  fetchMovies();
 }, []);

 return (
  <>
   <div className="search">
    <input type="search" placeholder="Search Movie" onChange={handleChange} />
    <button onClick={navigateToFavourites}>View Favourites</button>
   </div>
   <div className="main">
    {data.map((item) => (
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
      <button onClick={() => addToFavourites(item)}>Add to favourites</button>
     </div>
    ))}
   </div>
  </>
 );
};

export default Home;
