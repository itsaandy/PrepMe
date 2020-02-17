import React, {useState} from 'react';
import WelcomeScreen from '../../../Components/Screens/WelcomeScreen';
import {ONBOARDING_SCREEN} from '../../../Routing/routeConstants';

const WelcomeScreenContainer = ({navigation}) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const dimensions = {
    width: screenWidth > 0 ? screenWidth : '100%',
    height: screenWidth > 0 ? Math.round(screenWidth * 1.12) : 300,
  };

  const onPress = () => {
    navigation.navigate(ONBOARDING_SCREEN);
  };

  const onLayout = e => {
    setScreenWidth(e.nativeEvent.layout.width);
  };

  return (
    <WelcomeScreen
      imageDimensions={dimensions}
      onLayout={onLayout}
      onPress={onPress}
    />
  );
};

export default WelcomeScreenContainer;
