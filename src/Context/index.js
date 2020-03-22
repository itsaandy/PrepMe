import React, {createContext, useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {
  EXTRACT_APP_CONTENT,
  SET_ALL_SUBJECTS,
  SET_SELECTED_SUBJECTS,
} from './constants';

const context = {
  loading: true,
  hasCompletedOnboarding: false,
  selectedSubjects: [],
  allSubjects: [],
};

const AppState = createContext(context);
const AppDispatch = createContext(context);

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SUBJECTS:
      return {...state, selectedSubjects: action.value};
    case SET_ALL_SUBJECTS:
      return {...state, allSubjects: action.value};
    case EXTRACT_APP_CONTENT:
      return {...state, ...action.value};
    default:
      return {...state};
  }
};

const makeMiddleware = dispatch => action => {
  if (action.type === EXTRACT_APP_CONTENT) {
    AsyncStorage.getItem('@appContent', (err, result) => {
      if (err) {
        console.err('-- ERROR', err);
      }
      if (result) {
        const content = JSON.parse(result);
        dispatch({type: EXTRACT_APP_CONTENT, value: content});
      }
    });
  } else {
    dispatch(action);
  }
};

const useStoredContent = (middleware, state) => {
  // Order of these useEffects matter. extract -> set
  useEffect(() => {
    middleware({type: EXTRACT_APP_CONTENT});
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@appContent', JSON.stringify(state));
  }, [state]);
};

const AppStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, context);

  const middleware = makeMiddleware(dispatch, state);

  useStoredContent(middleware, state);

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
