import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../../Common/Atoms/Button';
import Heading1 from '../../Common/Atoms/Heading1';
import LightText from '../../Common/Atoms/LightText';

const t = {
  welcome: {
    title: 'Welcome to your preparation tool.',
    text:
      'PrepMe helps your squeeze in more content in small, bite-sized chunks.',
  },
};

const WelcomeScreen = ({imageDimensions, onLayout, onPress}) => {
  const styles = styleSheet(imageDimensions);
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Heading1>{t.welcome.title}</Heading1>
          <LightText extendedStyles={styles.text}>{t.welcome.text}</LightText>
        </View>
        <Image
          onLayout={onLayout}
          style={imageDimensions}
          source={require('../../../assets/images/welcome-image.png')}
        />
        <View style={styles.buttonWrapper}>
          <Button onPress={onPress} label="NEXT" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      backgroundColor: '#f5f5f5',
    },
    wrapper: {
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },
    textWrapper: {
      width: '95%',
      marginTop: 15,
    },
    imageWrapper: {
      width: '100%',
    },
    text: {
      marginTop: 20,
    },
    image: {
      width: theme.width,
      height: theme.height,
    },
    buttonWrapper: {
      width: '95%',
      marginBottom: 10,
    },
  });

export default WelcomeScreen;
