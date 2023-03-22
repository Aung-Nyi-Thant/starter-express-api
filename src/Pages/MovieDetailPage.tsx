import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import './MovieDetailStyle.css'
import {useAppDispatch, useAppSelector} from "../app/hooks";
import { Movie, selectMovieById } from "../features/Movie/movieSlice";
import HomePage from "./HomePage";
export default function MovieDetail(){
    let {MovieId} = useParams();
    let navigate = useNavigate()
    var movie:Movie = useAppSelector(state=>selectMovieById(state,MovieId!));
    console.log("Movie",movie)
        class Detail extends React.Component {
            render(){
                return(
                    <div className="DetailMain">
                        <header id="header">
                        <h1>{movie.title}</h1>
                        </header>
                    <div id="content">
                    <div id="poster">
            <img src={movie.image_adress} alt="The Godfather poster"/>
        </div>
        <div id="details">
            <h2 className="summary">Plot Summary</h2>
            <p className="SummaryText">{movie.summary}</p>
            <h2 className="DateTitle">Release Date</h2>
            <p className="Date">{movie.year}</p>
            <h2 className="Director">Director</h2>
            <p className="DirectorName">{movie.director.name}</p>
            <button className="WatchBtn" onClick={()=>{
            }}><a className="DownloadText" href="https://drive.google.com/file/d/1TK8vWVInCzj98zm2Hn-sNd8sSp4Jc864/view?usp=sharing">Download</a></button>
        </div>
                    </div>

                    </div>
                )
            }
        }
    return(<Detail/>)
}