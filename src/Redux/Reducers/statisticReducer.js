import { ActionTypes } from '../Actions/statisticsActions';

const initialState = {

  countries: [],
  searchCountries: [],
  countryDetail: {},

};

const covidStatisticReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOADING: {
      return {
        ...state, loading: payload,
      };
    }
    case ActionTypes.SELECT_COUNTRY:
      return {
        ...state, countryDetail: payload,
      };
    case ActionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case ActionTypes.SET_INPUT_SEARCH: {
      return {
        ...state,
        // eslint-disable-next-line max-len
        searchCountries: state.countries.filter(({ Country }) => Country.toLowerCase().includes(payload.toLowerCase())),
      };
    }
    case ActionTypes.SET_SEARCH: {
      return {
        ...state, searchCountries: payload,
      };
    }
    default:
      return state;
  }
};

export default covidStatisticReducer;
