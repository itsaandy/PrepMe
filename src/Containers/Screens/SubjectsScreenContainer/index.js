import React, {useContext} from 'react';
import SubjectsScreen from '../../../Components/Screens/SubjectsScreen';
import { AppDispatch, AppState } from '../../../Context';

const mockData = [
  {
    _id: '17f39002-de86-4e5d-85f3-18309282c908',
    name: 'Biology',
  },
  {
    _id: '1e23e028-f5ce-4ff2-b0f6-d660913702c7',
    name: 'Geography',
  },
  {
    _id: '3f9622f3-8b0d-40b5-8b8d-98b4998e1df3',
    name: 'Maths (General)',
  },
  {
    _id: '589880a2-f698-434b-9a8b-bd451d97ed03',
    name: 'Maths (Advanced 1)',
  },
  {
    _id: '60f0c629-8ff2-48ea-b97c-c4d2fc1c3d1b',
    name: 'Chemistry',
  },
  {
    _id: '888daf31-9fb3-4dff-b98f-0c092d941d78',
    name: 'Maths (Standard)',
  },
  {
    _id: 'f07713fe-349e-4407-88f0-910f94df3d12',
    name: 'Physics',
  },
];

const SubjectsScreenContainer = ({navigation}) => {
  const {selectedSubjects} = useContext(AppState);
  const dispatch = useContext(AppDispatch);

  const onSelection = subject => {
    if (selectedSubjects.includes(subject)) {
      const subjectsCopy = [...selectedSubjects];
      subjectsCopy.splice(selectedSubjects.indexOf(subject), 1);
      dispatch({
        type: 'SET_SELECTED_SUBJECT',
        value: subjectsCopy,
      });
    } else {
      dispatch({
        type: 'SET_SELECTED_SUBJECT',
        value: [...selectedSubjects, subject],
      });
    }
  };

  const onSubmit = () => {
  };

  return (
    <SubjectsScreen
      navigation={navigation}
      selectedSubjects={selectedSubjects}
      allSubjects={mockData}
      onSelection={onSelection}
      onSubmit={onSubmit}
    />
  );
};

export default SubjectsScreenContainer;
