import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {fireEvent, render} from 'react-native-testing-library';
import useSubjectsScreen from '.';
import {AppDispatch, AppState} from '../../Context';
import {customFetch} from '../../Infrastructure/fetch';
import {SET_SELECTED_SUBJECTS} from '../../Context/constants';
import {FETCH_HOME_FEED} from '../../Routing/routeConstants';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('../../Infrastructure/fetch', () => ({
  customFetch: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
};
const MockComponent = () => {
  const {
    selectedSubjects,
    allSubjects,
    isLoading,
    onSelection,
    onSubmit,
  } = useSubjectsScreen(navigation);

  return (
    <View>
      {selectedSubjects.map(sub => (
        <Text key={sub}>{`selected-${sub}`}</Text>
      ))}
      {allSubjects.map(sub => (
        <Text key={sub}>{`all-${sub}`}</Text>
      ))}
      {isLoading ? <Text>loading</Text> : <Text>notLoading</Text>}
      <TouchableOpacity
        testID="onSelection"
        onPress={() => onSelection('subject1')}
      />
      <TouchableOpacity testID="onSubmit" onPress={onSubmit} />
    </View>
  );
};

const setContextMock = (selectedSubjects, allSubjects, dispatch) => {
  useContext.mockImplementation(type => {
    switch (type) {
      case AppState:
        return {
          selectedSubjects,
          allSubjects: allSubjects,
        };
      case AppDispatch:
        return dispatch;
    }
  });
};

describe('subjects screen hook test', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it('should return selectedSubjects from context', () => {
    const selectedSubjects = ['sub1', 'sub2'];
    setContextMock(selectedSubjects, [], () => {});
    const {getByText} = render(<MockComponent />);
    selectedSubjects.forEach(sub => {
      getByText(`selected-${sub}`);
    });
  });
  it('should return allSubjects from context', () => {
    const allSubjects = ['sub1', 'sub2'];
    setContextMock([], allSubjects, () => {});
    const {getByText} = render(<MockComponent />);
    allSubjects.forEach(sub => {
      getByText(`all-${sub}`);
    });
  });
  it('should return true for onLoading initially', () => {
    const allSubjects = ['sub1', 'sub2'];
    setContextMock([], allSubjects, () => {});
    const {getByText} = render(<MockComponent />);
    getByText('loading');
  });
  it('should return false for onLoading after customFetch completes', async () => {
    const testSubjects = ['test1', 'test2', 'test3'];
    customFetch.mockImplementation((url, callback) => {
      Promise.resolve(callback(testSubjects));
    });
    const allSubjects = ['sub1', 'sub2'];
    setContextMock([], allSubjects, () => {});

    const {getByText} = render(<MockComponent />);
    getByText('notLoading');
  });
  describe('functions tests', () => {
    it('should dispatch removal of existing subject if it exists in the selectedSubjects array', () => {
      const dispatch = jest.fn();
      const selectedSubjects = ['subject1', 'subject2', 'subject3'];
      setContextMock(selectedSubjects, [], dispatch);
      const {getByTestId} = render(<MockComponent />);
      const element = getByTestId('onSelection');
      expect(dispatch).toHaveBeenCalledTimes(0);
      fireEvent.press(element);
      expect(dispatch).toHaveBeenCalledTimes(1);
      const expectedResult = ['subject2', 'subject3'];
      expect(dispatch).toHaveBeenCalledWith({
        type: SET_SELECTED_SUBJECTS,
        value: expectedResult,
      });
    });
    it("should dispatch new subject to selectedSubjects array if new subject doesn't already exist in the array", () => {
      const dispatch = jest.fn();
      setContextMock([], [], dispatch);
      const {getByTestId} = render(<MockComponent />);
      const element = getByTestId('onSelection');
      expect(dispatch).toHaveBeenCalledTimes(0);
      fireEvent.press(element);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: SET_SELECTED_SUBJECTS,
        value: ['subject1'],
      });
    });
    it('should call navigation.navigate on submit', () => {
      const dispatch = jest.fn();
      setContextMock([], [], dispatch);
      const {getByTestId} = render(<MockComponent />);
      const element = getByTestId('onSubmit');
      expect(navigation.navigate).toHaveBeenCalledTimes(0);
      fireEvent.press(element);
      expect(navigation.navigate).toHaveBeenCalledTimes(1);
      expect(navigation.navigate).toHaveBeenCalledWith(FETCH_HOME_FEED);
    });
  });
});
