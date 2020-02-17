import React from 'react';
import {fireEvent, render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import WelcomeScreen from './index';
import Button from '../../Common/Atoms/Button';

describe('welcome screen tests', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <WelcomeScreen
        onPress={() => {}}
        imageDimensions={{width: 30, height: 30}}
        onLayout={() => {}}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should press onPress on button press', () => {
    const onPress = jest.fn();
    const setDimensions = jest.fn();
    const {getByType} = render(
      <WelcomeScreen
        onPress={onPress}
        imageDimensions={{width: 30, height: 30}}
        onLayout={setDimensions}
      />,
    );
    expect(onPress).toHaveBeenCalledTimes(0);
    const button = getByType(Button);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
