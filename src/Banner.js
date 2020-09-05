import React, {useState, useEffect} from "react";
import Axios from "./axios";
import Requests from "./requests";
import "./Banner.css";
function Banner(){
    const[movie,setMovie]=useState([]);


    useEffect(()=>{
        async function fetchData(){
            const request=await Axios.get(Requests.fetchnNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
        }
        fetchData();
    },[])


    console.log(movie);
    function truncate(str,n){
        return str?.length > n?str.substr(0,n-1)+"...":str;
    }
   


    return(

        <header className="Banner" 
        style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
            
        }}>

        <div className="Banner-Contents">
        <h1 className="Banner-Title">{movie?.title||movie?.name||movie?.original_name}</h1>

        <div className="Banner-Buttons">
            <button className="Banner-Button">Play</button>
            <button className="Banner-Button">My List</button>
            
        </div>
        <h1 className="Banner-description">{truncate(movie?.overview,200)}</h1>
        
      


       </div>

       <div className="Banner-fadeBottom">
       </div>


        </header>

    )

}



export default Banner;
