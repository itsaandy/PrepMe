import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {fireEvent, render, waitForElement} from 'react-native-testing-library';
import AsyncStorage from '@react-native-community/async-storage';
import useAsyncStorage from './index';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const MockComponent = () => {
  const [value, setValue, hasError] = useAsyncStorage('@testKey', {
    name: 'test initial value',
  });
  return (
    <View>
      <TouchableOpacity onPress={() => setValue({name: 'new onPress value'})}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>{value.name}</Text>
      <Text>{hasError ? 'error' : 'noError'}</Text>
    </View>
  );
};
describe('Async storage hook tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  })
  it('should set value to initial value', () => {
    AsyncStorage.getItem.mockImplementation(() => Promise.resolve(''));
    const {getByText} = render(<MockComponent />);
    getByText('test initial value');
  });

  it('should set set value to retrieved value if AsyncStorage.getItem resolves', async () => {
    const newValue = {
      name: 'new test value',
    };
    AsyncStorage.getItem.mockImplementation(() => {
      return Promise.resolve(JSON.stringify(newValue));
    });

    const {getByText} = render(<MockComponent />);

    await waitForElement(() => getByText(newValue.name));
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('@testKey');
  });

  it('should set hasError to true if AsyncStorage.getItem throws an error', () => {

  });

  it('should call AsyncStorage.setItem with required parameters when setStorageValue is called', () => {});

  it('should set hasError to true if error setting/getting item from async storage', () => {});
})
