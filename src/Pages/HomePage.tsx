import "./HomePageStyle.css"
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {useParams, useNavigate} from "react-router-dom";
import {apiGetMovieByPage, Movie, selectMovie } from "../features/Movie/movieSlice";
import Movie_ from "./MovieUI";
export default function HomePage(){  
  const dispatch = useAppDispatch();
  let {pageId} = useParams();
  let activeStatus = "active"
  const navigate = useNavigate()
  let NoactiveStatus = "";
  let page = 0
    useEffect(()=>{
    dispatch (apiGetMovieByPage(pageId))
    },[]);
    function nextPageClick (pageId:any){
        page+=pageId
    }
    const movies = useAppSelector(selectMovie);
    class Home extends React.Component {
      state = {
        footer:"active",
        movie: []
      }

        render() {
          return (
            <div>
               <header>
  <div className="logo">
    <a href="#">UNIVERSE</a>
  </div>
  <nav>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
  <div className="burger">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
</header>
<div className="movie-slider">
  <div className="Movie_title">
  <h2 className="PageId">Page ({pageId})</h2>
  <h2 className="FamousTitle">Popular</h2>
  </div>
  <div className="slides">
    <div className="slide">
      <img src="https://thenationroar.com/wp-content/uploads/2020/01/EM6drDxVUAAOvl0.jpg" alt="Movie 1" onClick={()=>{
        navigate(`/detail/627a67fab1de61b2c0f97cff`)
      }}/>
      <h3 className="title">Avatar 2 : Way Of Water</h3>
    </div>
    <div className="slide">
      <img src="https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png" alt="Movie 2" onClick={()=>{
        navigate(`/detail/623eb40df2472dc6f30faabb`)
      }}/>
      <h3 className="title">Luca</h3>
    </div>
    <div className="slide">
      <img src="https://m.media-amazon.com/images/I/81iew7GtO9L._AC_UF894,1000_QL80_.jpg" alt="Movie 3" onClick={()=>{
        navigate(`/detail/6279f282348132113ebb9138`)
      }}/>
      <h3 className="title">Doctor Strange in the Multiverse of Madness</h3>
    </div>
    <div className="slide">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIfwRTOMH-ziLtav6ReYrr5WKejh9ITxdtQ&usqp=CAU" alt="Movie 4" onClick={()=>{
        navigate(`/detail/6278adaff770078f23506892`)
      }}/>
      <h3 className="title">Uncharted</h3>
    </div>
  </div>
</div>



<div className="MovieList">
            
  </div>
  <div className="MovieList">
  {
    movies.map((movie:Movie)=> 
    <Movie_
    each_movie= {movie}
    />
    )
  }
   <div className="pagination">
  <a id="A" href="/0" className = "active">0</a>
  <a id="A" href="/1" className="">1</a>
  <a id="A" href="/2">2</a>
  <a id="A" href="/3">3</a>
  <a id="A" href="/4">4</a>
  <a id="A" href="/5">5</a>
  <a id="A" href="/6">6</a>
  <a id="A" href="/7">7</a>
  <a id="A" href="/8">8</a>
  <a id="A" href="/9">9</a>
  <a id="A" href="/0">10</a>
</div>
  </div>

    
            </div>
          )
        }
      }
      return(<Home/>)
}