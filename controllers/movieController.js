require('dotenv').config();

const TMDB_SECRET = process.env.TMDB_SECRET;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGQ0MjU1NzczMGZkZjQ1MzIzOTcwZWYzZWYyMTU3ZSIsInN1YiI6IjY1MzAyZWY5YTZhNGMxMDEyZDk1MTZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UCE3GGsTpaD37qlyFPZUga0Uyyrr3rjvYc9dIXgmFpQ'
    }
};

exports.nowPlayingMovie = async(req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

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


exports.movieTrailer = async (req, res) => {
    try {
        const { movieId } = req.query;
        
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

        const videoList = await fetch(url, options);
        const allTypesOfVideo = await videoList.json();

        let trailer = allTypesOfVideo?.results?.filter((item) => item.type == 'Trailer');

        let movieTrailer = trailer.length ? trailer[0] : allTypesOfVideo.results[0];
        
        return res.status(200).send({message: 'Trailer fetched successfully', data: movieTrailer});
    } catch (error) {
        console.log(error);
    }
}