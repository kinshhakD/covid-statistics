import { combineReducers } from 'redux';
import covidStatisticReducer from '../Reducers/statisticReducer';

const rootReducer = combineReducers({
  countries: covidStatisticReducer,
});

export default rootReducer;
