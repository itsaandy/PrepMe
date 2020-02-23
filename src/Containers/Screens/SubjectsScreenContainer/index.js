import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import SubjectsScreen from '../../../Components/Screens/SubjectsScreen';
import {AppDispatch, AppState} from '../../../Context';
import {
  SET_ALL_SUBJECTS,
  SET_SELECTED_SUBJECTS,
} from '../../../Context/constants';

const SubjectsScreenContainer = ({navigation}) => {
  const {selectedSubjects, allSubjects} = useContext(AppState);
  const dispatch = useContext(AppDispatch);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://prepme-be.azurewebsites.net/api/AllSubjects?code=e51XcmiaCHUkr1CUhQ0WYhm0BS6zTVpNLJY/BaVLg3xLIaDvRBBazg==',
      )
      .then(res => {
        dispatch({
          type: SET_ALL_SUBJECTS,
          value: res.data,
        });
        setIsLoading(false);
      })
      .catch(err => {
        throw new Error(`PrepMe Error -- fetch error
        ${err.message}`);
      });
  }, []);

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

    if (selectedSubjects.includes(subject)) {
      removeExisting();
    } else {
      addNew();
    }
  };

  const onSubmit = () => {};
  return (
    <SubjectsScreen
      navigation={navigation}
      selectedSubjects={selectedSubjects}
      allSubjects={allSubjects}
      onSelection={onSelection}
      onSubmit={onSubmit}
      isFetching={isLoading}
    />
  );
};

export default SubjectsScreenContainer;
