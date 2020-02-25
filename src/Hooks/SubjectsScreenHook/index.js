import {useContext, useEffect, useState} from 'react';
import {AppDispatch, AppState} from '../../Context';
import {customFetch} from '../../Infrastructure/fetch';
import Config from 'react-native-config';
import {SET_ALL_SUBJECTS, SET_SELECTED_SUBJECTS} from '../../Context/constants';
import {FETCH_HOME_FEED} from '../../Routing/routeConstants';

const useSubjectsScreen = navigation => {
  const {selectedSubjects, allSubjects} = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // todo: add error page.
    customFetch(
      Config.SUBJECTS_ENDPOINT,
      res => {
        dispatch({
          type: SET_ALL_SUBJECTS,
          value: res,
        }),
          setIsLoading(false);
      },
      () => {},
    );
  }, []);

  useEffect(() => {
    if (allSubjects.length > 0) {
      setIsLoading(false);
    }
  }, [selectedSubjects]);

  const onSelection = subject => {
    const removeExisting = () => {
      const subjectsCopy = [...selectedSubjects];
      subjectsCopy.splice(selectedSubjects.indexOf(subject), 1);
      dispatch({
        type: SET_SELECTED_SUBJECTS,
        value: subjectsCopy,
      });
    };
    const addNew = () => {
      dispatch({
        type: SET_SELECTED_SUBJECTS,
        value: [...selectedSubjects, subject],
      });
    };

    if (selectedSubjects.some(s => s._id === subject._id)) {
      removeExisting();
    } else {
      addNew();
    }
  };

  const onSubmit = () => {
    navigation.navigate(FETCH_HOME_FEED);
  };
  return {selectedSubjects, allSubjects, isLoading, onSelection, onSubmit};
};

export default useSubjectsScreen;