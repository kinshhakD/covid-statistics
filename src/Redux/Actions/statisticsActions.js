import axios from 'axios';

export const ActionTypes = {
  SET_COUNTRIES: 'SET_COUNTRIES',
  SELECT_COUNTRY: 'SELECT_COUNTRY',
  SET_LOADING: 'SET_LOADING',
  SET_INPUT_SEARCH: 'SET_INPUT_SEARCH',
};

export const statisticsActions = {
  countries: (countries) => ({ type: ActionTypes.SET_COUNTRIES, payload: countries }),
  country: (country) => ({ type: ActionTypes.SELECT_COUNTRY, payload: country }),
  setInputSearch: (value) => ({ type: ActionTypes.SET_INPUT_SEARCH, payload: value }),
  loading: (loading) => ({ type: ActionTypes.SET_LOADING, payload: loading }),
};

export const statisticsMiddleWareActions = {
  fetchCountries: () => async (dispatch) => {
    dispatch(statisticsActions.loading(true));
    try {
      const response = await axios.get('https://api.covid19api.com/summary');
      dispatch(statisticsActions.countries(response.data.Countries));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(statisticsActions.loading(false));
    }
  },
};
