export async function downloadMoviesData(searchInputValue) {
    let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&s=' + searchInputValue.toLowerCase();
    let resMovies = [];
    try {
        let response = await fetch(apiRequest);
        data = await response.json();
        data.Search.forEach(movie => resMovies.push(
            {
                id: movie["imdbID"],
                title: movie["Title"],
                year: movie["Year"],
                poster: movie["Poster"]
            }
        ));
        return resMovies;
    }
    catch(error) {
        alert(`Can't find your movie: \"${searchBarText}\"
        \nPlease check your title or internet connection.`);
        return [];
    }
}

export async function downloadMovieDetailsData(movieId) {
    let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&i=' + movieId;
    try {
        let response = await fetch(apiRequest);
        let data = await response.json();
        let movieDetails = {
            title: data["Title"],
            year: data["Year"],
            rated: data["Rated"],
            released: data["Released"],
            runtime: data["Runtime"],
            genre: data["Genre"],
            director: data["Director"],
            writer: data["Writer"],
            actors: data["Actors"],
            plot: data["Plot"],
            language: data["Language"],
            country: data["Country"],
            awards: data["Awards"],
            poster: data["Poster"]
        };
        return movieDetails;
    }
    catch(error) {
        alert("Something went wrong...");
        return null;
    }
}