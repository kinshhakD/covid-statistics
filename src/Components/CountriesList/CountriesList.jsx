import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { statisticsActions } from '../../Redux/Actions/statisticsActions';
import CountriesHeader from './CountriesHeader';
import CountryDetails from './CountryDetails';
import CountryItem from './CountryItem';
import {
  countriesSelector, filteredCountriesSelector, sortByMaxSelector, sortByMinSelector,
} from '../../Selectors/CountriesSelector';

function CountriesList() {
  const [isModal, setIsModal] = useState(false);

  const [sortByTotalConfirmed, setSortByTotalConfirmed] = useState('default');

  const countries = useSelector(countriesSelector);

  const filteredCountries = useSelector(filteredCountriesSelector);

  const sortByMaxTotal = useSelector(sortByMaxSelector);

  const sortByMinTotal = useSelector(sortByMinSelector);

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
        filteredCountries.length > 0 ? filteredCountries.map(({
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
