import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { statisticsActions } from '../../Redux/Actions/statisticsActions';
import CountriesHeader from './CountriesHeader';
import CountryDetails from './CountryDetails';
import CountryItem from './CountryItem';

function CountriesList() {
  const [isModal, setIsModal] = useState(false);

  const [sortByTotalConfirmed, setSortByTotalConfirmed] = useState('default');

  const countries = useSelector((state) => state.countries.countries);

  const searchCountries = useSelector((state) => state.countries.searchCountries);

  const sortByMaxTotal = useSelector(createSelector(
    (state) => state.countries.countries,
    (listCountriesMax) => [...listCountriesMax]
      .sort((a, b) => a.TotalConfirmed - b.TotalConfirmed),
  ));

  const sortByMinTotal = useSelector(createSelector(
    (state) => state.countries.countries,
    (listCountriesMin) => [...listCountriesMin].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed),
  ));

  const dispatch = useDispatch();

  const countryDetailClose = () => {
    setIsModal(false);
  };

  const countryDetailOpen = (country) => {
    setIsModal(true);
    dispatch(statisticsActions.country(country));
  };

  const sortCountriesByTotal = () => {
    switch (sortByTotalConfirmed) {
      case 'default':
        setSortByTotalConfirmed('sortByMax');
        break;
      case 'sortByMax':
        setSortByTotalConfirmed('sortByMin');
        break;
      case 'sortByMin':
        setSortByTotalConfirmed('default');
        break;
      default:
        break;
    }
  };

  return (
    <List>
      <CountriesHeader onTotal={sortCountriesByTotal} />
      {
        searchCountries.length > 0 ? searchCountries.map(({
          Country, TotalConfirmed, ID, TotalDeaths, TotalRecovered,
        }, index) => (
          <CountryItem
            key={ID}
            itemNumber={index + 1}
            country={Country}
            total={TotalConfirmed}
            onModal={() => countryDetailOpen({
              Country, TotalConfirmed, TotalDeaths, TotalRecovered,
            })}
          />
        ))
          : sortByTotalConfirmed === 'default' ? countries.length > 0 && countries.map(({
            Country, TotalConfirmed, ID, TotalDeaths, TotalRecovered,
          }, index) => (
            <CountryItem
              key={ID}
              itemNumber={index + 1}
              country={Country}
              total={TotalConfirmed}
              onModal={() => countryDetailOpen({
                Country, TotalConfirmed, TotalDeaths, TotalRecovered,
              })}
            />
          )) : sortByTotalConfirmed === 'sortByMax' ? sortByMaxTotal.length > 0 && sortByMaxTotal.map(({
            Country, TotalConfirmed, ID, TotalDeaths, TotalRecovered,
          }, index) => (
            <CountryItem
              key={ID}
              itemNumber={index + 1}
              country={Country}
              total={TotalConfirmed}
              onModal={() => countryDetailOpen({
                Country, TotalConfirmed, TotalDeaths, TotalRecovered,
              })}
            />
          )) : sortByTotalConfirmed === 'sortByMin' ? sortByMinTotal.length > 0 && sortByMinTotal.map(({
            Country, TotalConfirmed, ID, TotalDeaths, TotalRecovered,
          }, index) => (
            <CountryItem
              key={ID}
              itemNumber={index + 1}
              country={Country}
              total={TotalConfirmed}
              onModal={() => countryDetailOpen({
                Country, TotalConfirmed, TotalDeaths, TotalRecovered,
              })}
            />
          )) : null
      }
      {
       isModal
       && (
       <CountryDetails
         onOpen={isModal}
         onClose={countryDetailClose}
       />
       )
     }
    </List>
  );
}

export default CountriesList;
