const APIKEY = "b41027fb7e5b56daf79e1c8eacd5a0fc";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
    fetchnNetflixOriginals: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=1&with_networks=213`,
    fetchToprated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=35`,
    fecthHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=10749`,
   



}

export default requests;