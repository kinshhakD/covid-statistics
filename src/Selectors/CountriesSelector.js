import { createSelector } from 'reselect';

export const countriesSelector = (state) => state.countries.countries;

export const filteredCountriesSelector = createSelector(
  (state) => state.countries.countries,
  (state) => state.countries.inputSearch,
  // eslint-disable-next-line max-len
  (countries, search) => countries.filter(({ Country }) => Country.toLowerCase().includes(search.toLowerCase())),
);

export const sortByMinSelector = createSelector(
  (state) => state.countries.countries,
  (sortByMin) => [...sortByMin].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed),
);

export const sortByMaxSelector = createSelector(
  (state) => state.countries.countries,
  (sortByMax) => [...sortByMax].sort((a, b) => a.TotalConfirmed - b.TotalConfirmed),
);
