import { Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountriesList from './Components/CountriesList/CountriesList';
import Header from './Components/Header/Header';
import { statisticsMiddleWareActions } from './Redux/Actions/statisticsActions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.list.loading);

  useEffect(() => {
    dispatch(statisticsMiddleWareActions.fetchCountries());
  }, []);

  return (
    <Container maxWidth="lg">
      <div className="App">
        <Header />
        {
          loading ? <Typography variant="h4">Loading...</Typography> : <CountriesList />
        }
      </div>
    </Container>

  );
}

export default App;
