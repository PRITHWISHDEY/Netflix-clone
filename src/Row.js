
 import React, {useState,useEffect} from "react";
 import Axios from "./axios";
 import "./Row.css";
 import YouTube from "react-youtube";
 import movieTrailer from "movie-trailer";
 const baseURL="https://image.tmdb.org/t/p/original/";
function Row({title,fetchURl,isLargeRow}){

const[movies,setMovies]=useState([]);
const[trailerUrl,setTrailerUrl]=useState("");
useEffect(()=>{
    async function fetchData(){
        const request=await Axios.get(fetchURl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();

},[fetchURl]);

const opts={
    height:"450",
    width:"100%",
    PlayerVars:{
        autoplay:1,
    },

};

const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl("");
    }
    else{
        movieTrailer(movie?.title||"").then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"));

        }).catch((error)=>{
            console.log(error);
        })
    }
}



    return(<div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
        
        {movies.map((movie)=>(
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
            key={movie.id}
            onClick={()=>{
                handleClick(movie);
            }}
            src={`${baseURL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.title}/>
        ))};
        </div>
        
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}






        </div>
    )

}

export default Row;