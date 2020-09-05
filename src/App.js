import React from "react";
import Row from "./Row.js";
import Requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

import "./App.css";


function App() {
  return (
  
    
    <div className="App">
    <Nav/>
     <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURl={Requests.fetchnNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchURl={Requests.fetchToprated} />
      <Row title="Trending" fetchURl={Requests.fetchTrending}/>
      <Row title="Action Movies" fetchURl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURl={Requests.fetchComedyMovies}/>
      <Row title="Romantic Movies" fetchURl={Requests.fetchRomanticMovies}/>
     
    </div>
  );
}

export default App;
