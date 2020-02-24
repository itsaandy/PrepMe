import React from 'react';
import SubjectsScreen from '../../../Components/Screens/SubjectsScreen';
import useSubjectsScreen from '../../../Hooks/SubjectsScreenHook';

const SubjectsScreenContainer = ({navigation}) => {
  const {
    selectedSubjects,
    allSubjects,
    isLoading,
    onSelection,
    onSubmit,
  } = useSubjectsScreen(navigation);

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
