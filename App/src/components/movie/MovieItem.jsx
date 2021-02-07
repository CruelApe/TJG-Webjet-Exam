import React, { useState, useEffect } from 'react'
import '../../views/styles/MovieItem.css'
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap'
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
        
        // Reset the movie details.
        setMovieDetails(null);

        // Opens the modal
        setIsModalOpen(true);

        // Retrieves the data from the API service.
        apiMovieService
            .getSingle(movies[parseInt(event.currentTarget.accessKey)].ID)
            .then((response) => {
                setMovieDetails(response); 
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
            <Modal
                className="moviedetail-modal"
                show={isModalOpen}                           
                onHide={handleModalClose} 
                animation={true}>
                <Modal.Body>
                {
                    movieDetails
                        ?
                            <Container>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <img className="movie-detail-poster" src={movieDetails.Poster} onError={handleImgError} />
                                                    </div>                                                
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={2} md={2}>
                                                                <p className="movie-detail-metascore-label">METASCORE</p>
                                                                <div className="movie-detail-metascore">{movieDetails.Metascore}</div>
                                                            </Col>  
                                                            <Col xs={2} md={2}>
                                                                <p className="movie-detail-rating-label">RATING</p>
                                                                <div className="movie-detail-rating">{movieDetails.Rating}</div>
                                                            </Col>                                                                                                        
                                                        </Row>
                                                    </Container>                                                
                                                </Col>
                                            </Row>                                            
                                        </Container>
                                    </Col>
                                    <Col xs={6} md={8}>
                                        <h3 className="movie-detail-title">{movieDetails.Title}</h3>
                                        <p className="movie-detail-year">{movieDetails.Year}</p>
                                        <Container>
                                            <Row>
                                                <Col xs={2} md={2}>
                                                    <p className="movie-detail-mediainfo-runtime">{movieDetails.Runtime}</p>
                                                </Col>
                                                <Col xs={2} md={2}>
                                                    <div className="movie-detail-mediainfo-rated">{movieDetails.Rated}</div>
                                                </Col>  
                                                <Col xs={2} md={2}>
                                                    <div className="movie-detail-mediainfo-language">{movieDetails.Language}</div>
                                                </Col>    
                                                <Col xs={2} md={2}>
                                                    <div className="movie-detail-mediainfo-country">{movieDetails.Country}</div>
                                                </Col>                                             
                                            </Row>
                                        </Container>
                                        <p className="movie-detail-defaultfont">{movieDetails.Genre}</p>
                                        <p className="movie-detail-defaultfont">{movieDetails.Plot}</p>
                                        <p className="movie-detail-defaultfont"><b style={{fontWeight:'700'}}>Writer:</b> {movieDetails.Writer}</p>
                                        <p className="movie-detail-defaultfont"><b style={{fontWeight:'700'}}>Director:</b> {movieDetails.Director}</p>
                                        <p className="movie-detail-defaultfont"><b style={{fontWeight:'700'}}>Casts:</b> {movieDetails.Actors}</p>
                                        <p className="movie-detail-defaultfont"><b style={{fontWeight:'700'}}>Awards:</b> {movieDetails.Awards}</p> 
                                        <p className="movie-detail-defaultfont"><b style={{fontWeight:'700'}}>Votes:</b> {movieDetails.Votes}</p> 
                                        <p className="movie-detail-price">
                                        {
                                            parseFloat(movieDetails.Price)
                                            .toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                            })
                                        }
                                        </p>                                     
                                    </Col>
                                </Row>
                            </Container>
                        : 
                        <div className="text-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>                 
                }
                    <Modal.Footer>
                        <Button onClick={handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>                                 
        </div>
    );

}

export default MovieItem;