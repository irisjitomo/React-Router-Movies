import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import MovieList from './Movies/MovieList';
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );

  // const [movieData, setMovieData] = useState([]);
    
    // useEffect(() => {
    //   axios.get('http://localhost:5000/api/movies')
    //   .then(res => {
    //     console.log(res.data)
    //     setMovieData(res.data)
    //   })
    //   .catch(error => {
    //     console.error('Server Error', error);
    //   });
    // },[]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
      </div>
    </div>
  );
};

export default App;
