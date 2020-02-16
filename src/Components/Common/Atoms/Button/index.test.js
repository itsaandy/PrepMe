import React from 'react';
import {TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';
import {fireEvent, render} from 'react-native-testing-library';
import Button from '.';

describe('button tests', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Button onPress={() => {}} label="test" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render button label', () => {
    const label = 'test label';
    const {getByText} = render(<Button onPress={() => {}} label={label} />);
    getByText(label);
  });

  it('should call onPress on button press', () => {
    const onPress = jest.fn();
    const {getByType} = render(<Button onPress={onPress} label="test label" />);
    const element = getByType(TouchableOpacity);
    fireEvent.press(element);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
