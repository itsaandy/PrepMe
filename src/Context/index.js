import React, {createContext, useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
// import AsyncStorage from '@react-native-community/async-storage';
// import {
//   ADD_ACTIVITY_COMPLETE,
//   FETCH_ALL_CONTENT,
//   SET_ALL_ACTIVITIES,
// } from './contextConstants';

const context = {
  loading: true,
  selectedSubjects: [],
  allSubjects: [],
};

const AppState = createContext(context);
const AppDispatch = createContext(context);

const AppReducer = (state, action) => {
  if (action.type === 'SET_SELECTED_SUBJECTS') {
    return {
      ...state,
      selectedSubjects: action.value,
    };
  }
  if (action.type === 'SET_ALL_SUBJECTS') {
    return {
      ...state,
      allSubjects: action.value,
    };
  }
};

const makeMiddleware = dispatch => action => {
  switch (action.type) {
    // case 'FETCH_ALL_CONTENT':
    //   AsyncStorage.getItem('@appContent', (err, result) => {
    //     if (err) {
    //       console.err('-- ERROR', err);
    //     }
    //     if (result) {
    //       const content = JSON.parse(result);
    //       dispatch({type: 'FETCH_ALL_CONTENT', value: content});
    //     }
    //   });
    //   break;
    default:
      dispatch(action);
  }
};

const AppStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, context);

  const middleware = makeMiddleware(dispatch, state);

  useEffect(() => {
    // AsyncStorage.setItem('@appContent', JSON.stringify(state));
  }, [state]);

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={middleware}>{children}</AppDispatch.Provider>
    </AppState.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export {AppStateProvider, AppState, AppDispatch};
