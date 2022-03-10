import { useState, useEffect} from 'react'

import classes from './MoviesPage.module.css';
import MovieList from '../components/moviereview/MovieList';

function MoviesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
    
        fetch(
            'https://moviereview-9ec1c-default-rtdb.firebaseio.com/movielist.json'
        )
        .then(response => {
            return response.json();
        })
        .then(data => {
             const movies = [];

            for (const key in data) {
                const movie = {
                    id: key,
                    ...data[key]
                };

                movies.push(movie);
            }

            setIsLoading(false);
            setLoadedMovies(movies);

        });
    
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading Please Wait...</p>
            </section>
        );
    }
    
    return (
        <section>
            <div className={classes.pagetitle}>
                <h1>Please Rate This Movie</h1>
            </div>
            <div className={classes.moviecontent}>
                <MovieList movies={loadedMovies} />
            </div>

        </section>
    );
}

export default MoviesPage;