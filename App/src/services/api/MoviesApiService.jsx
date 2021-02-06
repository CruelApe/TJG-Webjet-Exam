import apiCore from '../utilities/core';
import * as constants from '../constants/URLConstants';

const apiMoviesService = new apiCore({
    getAll: true,
    getSingle: false,
    url: constants.MoviesApiURL,
});

export default apiMoviesService;