require('dotenv').config();

const TMDB_SECRET = process.env.TMDB_SECRET;

exports.nowPlayingMovie = async(req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGQ0MjU1NzczMGZkZjQ1MzIzOTcwZWYzZWYyMTU3ZSIsInN1YiI6IjY1MzAyZWY5YTZhNGMxMDEyZDk1MTZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UCE3GGsTpaD37qlyFPZUga0Uyyrr3rjvYc9dIXgmFpQ'
            }
        };

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.error('error:' + err));
        const movie = await fetch(url, options);
        const movieList = await movie.json();

        return res.status(200).send({message: "Recent movie fetched successfully", data: movieList?.results});
    } catch (error) {
        console.log(error);
    }
}