import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {render, fireEvent, waitForElement} from 'react-native-testing-library';
import WelcomeScreenContainer from './index';
import WelcomeScreen from '../../../Components/Screens/WelcomeScreen';
import {ONBOARDING_SCREEN} from '../../../Routing/routeConstants';

jest.mock('../../../Components/Screens/WelcomeScreen', () => ({
  __esModule: true,
  default: jest.fn(),
}));

WelcomeScreen.mockImplementation(({imageDimensions, onLayout, onPress}) => (
  <View>
    <Text>Width: {imageDimensions.width}</Text>
    <Text>Height: {imageDimensions.height}</Text>
    <TouchableOpacity testID="onPressButton" onPress={onPress}>
      {' '}
      <Text>Button</Text>
    </TouchableOpacity>
    <TouchableOpacity
      testID="setScreenWidthButton"
      onPress={() => onLayout({nativeEvent: {layout: {width: 700}}})}>
      <Text>Button</Text>
    </TouchableOpacity>
  </View>
));

describe('Welcome screen container tests', () => {
  it('should call navigation.navigate when button pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId} = render(
      <WelcomeScreenContainer navigation={navigation} />,
    );
    const element = getByTestId('onPressButton');
    fireEvent.press(element);
    expect(navigation.navigate).toHaveBeenCalledWith(ONBOARDING_SCREEN);
  });

  it('should change imageDimensions if setScreenWidth is called', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId, getByText} = render(
      <WelcomeScreenContainer navigation={navigation} />,
    );

    getByText('Width: 100%');

    const element = getByTestId('setScreenWidthButton');
    fireEvent.press(element);

    await waitForElement(() => getByText('Width: 700'));
  });

  it('should set imageHeight to 1.12 * imageWidth (1.12 = aspect ratio)', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId, getByText} = render(
      <WelcomeScreenContainer navigation={navigation} />,
    );

    getByText('Height: 300');

    const element = getByTestId('setScreenWidthButton');
    fireEvent.press(element);

    await waitForElement(() => getByText('Height: 784'));
  });
});
