import fetchData from './API';

const INITIALIZE_DATA = 'Initialize_App_Data';

export const setInitialData = () => async (dispatch) => {
  const data = await fetchData();
  dispatch(({ type: INITIALIZE_DATA, payload: data }));
};

export default function continentReducer (state = [], action) {
  switch (action.type) {
    case INITIALIZE_DATA:
      return [...Object.values(action.payload.countries)];
    default:
      return state;
  }
};


