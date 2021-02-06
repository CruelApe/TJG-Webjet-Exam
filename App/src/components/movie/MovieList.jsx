import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap'
import '../../views/styles/MovieList.css'
import MovieItem from './MovieItem'

class MovieList extends Component{

    render(){
        return(
            <div className="box">
                <h3>RECENT ADDED MOVIES</h3>
                <CardDeck>
                    <MovieItem />
                </CardDeck>
            </div>
        )
    }
}

export default MovieList;