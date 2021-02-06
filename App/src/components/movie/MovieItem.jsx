import React, { useState, useEffect } from 'react'
import '../../views/styles/MovieItem.css'
import { Card, Col } from 'react-bootstrap'
import apiMoviesService from '../../services/api/MoviesApiService';

function MovieItem() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        apiMoviesService.getAll().then((response) => setMovies(response.Movies));
    }, []);

    const handleImgError = (event) => {
        //event.target.src = "https://www.movienewsletters.net/photos/000000h1.jpg";
        event.target.src = "https://shahrwp.com/wp-content/uploads/2019/03/403-error-in-wordpress-shahrwp.png";
    };

    return (
        <div>
            {
                movies && movies.length > 0
                    ? movies.map(movie => {
                        return (
                            <Card key={movie.ID} className="movie-item-card">
                                <Card.Img variant="top" className="movie-item-image" src={movie.Poster} onError={handleImgError} />
                                <Card.Body>
                                    <Card.Title className="movie-item-card-title">{movie.Title}</Card.Title>
                                    <Card.Text className="movie-item-card-year">{movie.Year}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })
                    : "Loading..."}
        </div>
    );

}

export default MovieItem;