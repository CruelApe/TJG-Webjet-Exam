import apiCore from '../utilities/core';
import * as constants from '../constants/URLConstants';

const MovieApiService = new apiCore({
    getAll: false,
    getSingle: true,
    url: constants.MovieApiURL,
});

export default MovieApiService;