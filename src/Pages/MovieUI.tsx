import React from "react"
import { useNavigate } from "react-router-dom";
import { Movie } from "../features/Movie/movieSlice"
import './MovieUIStyle.css'
export default function Movie_(props:any){
  let navigate = useNavigate()
    let movie:Movie = props.each_movie
    console.log("MovieS")
    console.log("movie",movie)
        return(
            <div className="movie-card" onClick={()=>{
              navigate(`/detail/${movie._id}`)
            }}>
  <div className="movie-card-content">
    <h3 className="movie-card-title">{movie.title}</h3>
    <p className="movie-card-summary">{movie.summary}</p>
    <a href="#" className="movie-card-btn">Detail</a>
  </div>
  <img src={movie.image_adress} alt="The Shawshank Redemption"/>
</div>


)
}