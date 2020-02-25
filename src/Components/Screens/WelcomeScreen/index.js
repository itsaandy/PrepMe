import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../../Common/Atoms/Button';
import image from '../../../assets/images/welcome-image.png';

const t = {
  welcome: {
    title: 'Welcome to your HSC preparation tool.',
    text:
      'PrepMe helps your squeeze in more study content in small, bite-sized quizzes, so you can better prepare yourself for the big day.',
  },
};

const WelcomeScreen = ({imageDimensions, onLayout, onPress}) => {
  const styles = styleSheet(imageDimensions);
  return (
    <SafeAreaView>
      <View style={styles.wholeWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{t.welcome.title}</Text>
          <Text style={styles.text}>{t.welcome.text}</Text>
        </View>
        <Image onLayout={onLayout} style={imageDimensions} source={image} />
        <View style={styles.buttonWrapper}>
          <Button onPress={onPress} label="NEXT" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    wholeWrapper: {
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
      color: '#666666',
    },
    title: {
      fontWeight: '500',
      fontSize: 32,
      color: '#1A1A1A',
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
