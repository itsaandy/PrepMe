import React, {useState} from 'react';
import WelcomeScreen from '../../Components/WelcomeScreen';
import {ONBOARDING_SCREEN} from '../../Routing/routeConstants';

const WelcomeScreenContainer = ({navigation}) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const dimensions = {
    width: screenWidth > 0 ? screenWidth : '100%',
    height: screenWidth > 0 ? screenWidth * 1.12 : 300,
  };

  const onPress = () => {
    navigation.navigate(ONBOARDING_SCREEN);
  };

  return (
    <WelcomeScreen
      imageDimensions={dimensions}
      setScreenWidth={setScreenWidth}
      onPress={onPress}
    />
  );
};

export default WelcomeScreenContainer;
