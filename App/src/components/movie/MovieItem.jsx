import React, { useState, useEffect } from 'react'
import '../../views/styles/MovieItem.css'
import { Card, Modal, Button } from 'react-bootstrap'
import apiMovieService from '../../services/api/MovieApiService';
import apiMoviesService from '../../services/api/MoviesApiService';

function MovieItem() {

    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        apiMoviesService.getAll().then((response) => setMovies(response.Movies));
    }, []);

    const handleModalClose = () => setIsModalOpen(false);
    //const handleModalOpen = () => setIsModalOpen(true);

    const spinnerStyle = {
        width: '4rem',
        height: '4rem',
        marginLeft: '44vw',
        marginTop: '30vh'
    };

    const handleImgError = (event) => {
        event.target.src = "https://shahrwp.com/wp-content/uploads/2019/03/403-error-in-wordpress-shahrwp.png";
    };

    const viewMovieDetail = (event) => {
        apiMovieService
            .getSingle(movies[parseInt(event.currentTarget.accessKey)].ID)
            .then((response) => {
                setMovieDetails(response); 
                setIsModalOpen(true); 
            });
    };

    return (
        <div>
            {
                movies && movies.length > 0
                    ? 
                        movies
                            .sort((a, z) => {
                                return parseInt(a.Year) - parseInt(z.Year);
                            })
                            .map((movie, index) => {
                            return (
                                <Card key={movie.ID} accessKey={index} className="movie-item-card" onClick={viewMovieDetail}>
                                    <Card.Img variant="top" className="movie-item-image" src={movie.Poster} onError={handleImgError} />
                                    <Card.Body>
                                        <Card.Title className="movie-item-card-title">{movie.Title}</Card.Title>
                                        <Card.Text className="movie-item-card-year">
                                            {movie.Year}
                                        </Card.Text>                                   
                                    </Card.Body>
                                </Card>
                            );
                        })  
                    : 
                        <div className="text-center">
                            <div className="spinner-border text-info" style={spinnerStyle} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
            }
            {
                movieDetails
                    ?
                        <Modal 
                            show={isModalOpen}                                   
                            onHide={handleModalClose} 
                            animation={true}>
                            <Modal.Header closeButton>
                                <Modal.Title>{movieDetails.Title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        </Modal>
                    : ''                 
            }                     
        </div>
    );

}

export default MovieItem;