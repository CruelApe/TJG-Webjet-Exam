import logo from '../logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ApplicationConstants from '../services/constants/ApplicationConstants';
import { Navbar } from 'react-bootstrap';
import Movies from '../components/movie/Movies';

import apiMoviesService from '../services/api/MoviesApiService';
// import { AccessToken, MoviesApiURL } from '../services/api/utilities/constants/URLConstants';
// import axios from 'axios';

function App() {

// const availableMovies = apiMoviesService.getAll()
// .then((response) => {
//     console.log(response);
// });

// const getMovies = () => {
//   // WORKING
// /*   fetch(MoviesApiURL)
//   .then(response => {
//     return response.json();
//   })
//   .then(movies => {
//     console.log(movies);
//   })
//   .catch(function(e){
// 		console.log(e);
//   }); */
//   // WORKING
// /*   fetch(MoviesApiURL, {
//     headers: { 
//       'x-access-token' : AccessToken,
//     },
//   })
//   .then(response => {
//     return response.json();
//   })
//   .then(movies => {
//     console.log(movies);
//   })
//   .catch(function(e){
// 		console.log(e);
//   }); */

//   axios.get(MoviesApiURL, {
//     headers: { 
//       'x-access-token' : AccessToken,
//     },    
//   })
//   .then((response) => {
//     console.log(response.data);
//   });
// }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" width="50" height="50" />{' '}
          {ApplicationConstants.ApplicationTitle}
        </Navbar.Brand>
      </Navbar>
      <section className="App-section">
          <article className="App-article">
            <Movies/>
          </article>
      </section>
    </div>
  );
}

export default App;
