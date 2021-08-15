import { combineReducers } from 'redux';
import covidStatisticReducer from '../Reducers/statisticReducer';

const rootReducer = combineReducers({
  list: covidStatisticReducer,
});

export default rootReducer;
