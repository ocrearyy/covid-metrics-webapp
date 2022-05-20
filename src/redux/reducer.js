import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchData from './API';

const INITIALIZE_DATA = 'Initialize_App_Data';

export const setInitialData = () => async (dispatch) => {
  const data = await fetchData();
  dispatch(({ type: INITIALIZE_DATA, payload: data }));
};

const continentReducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_DATA:
      return [...Object.values(action.payload.countries)];
    default:
      return state;
  }
};

const store = createStore(continentReducer, applyMiddleware(thunk, logger));

export default store;
