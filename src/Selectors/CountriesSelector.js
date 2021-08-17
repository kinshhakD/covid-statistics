import { createSelector } from 'reselect';

export const countriesSelector = (state) => state.countries.countries;

export const sortByMinSelector = createSelector(
  (state) => state.countries.countries,
  (sortByMin) => [...sortByMin].sort((a, b) => b.TotalConfirmed - a.TotalConfirmed),
);

export const sortByMaxSelector = createSelector(
  (state) => state.countries.countries,
  (sortByMax) => [...sortByMax].sort((a, b) => a.TotalConfirmed - b.TotalConfirmed),
);
