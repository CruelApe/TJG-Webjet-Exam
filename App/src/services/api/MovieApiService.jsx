import { ApiCore } from '../utilities/core';
import * as constants from '../constants/URLConstants';

const MovieApiService = new ApiCore({
    getAll: false,
    getSingle: true,
    url: constants.MovieApiURL,
});

export default MovieApiService;