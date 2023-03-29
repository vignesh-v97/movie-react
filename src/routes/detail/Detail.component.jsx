import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
 const { id } = useParams();
 const [data, setData] = useState([]);

 useEffect(() => {
  axios
   .get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b3bc4d6602053fa2a4e8d97f581a297b`
   )
   .then((response) => {
    console.log(response.data);
    setData(response.data);
   })
   .catch((error) => {
    console.log(error);
   });
 }, [id]);

 return (
  <>
   <div>
    <img
     src={`https://image.tmdb.org/t/p/w400/${data.backdrop_path}`}
     alt="Card-Img"
    />

    <p className="heading">{data.title}</p>
    <p className="">{data.overview}</p>
    <p className="">{data.tagline}</p>
    <p className="">{data.status}</p>
   </div>
  </>
 );
};

export default Detail;
