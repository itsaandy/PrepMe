import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Button from '../../Common/Atoms/Button';
import image from '../../../assets/images/welcome-image.png';
import {AppTheme} from '../../../Context';

const t = {
  welcome: {
    title: 'Welcome to your preparation tool.',
    text:
      'PrepMe helps your squeeze in more study content in small, bite-sized quizzes, so you can better prepare yourself for your big day.',
  },
};

const WelcomeScreen = ({imageDimensions, onLayout, onPress}) => {
  const {theme} = React.useContext(AppTheme);
  const styles = styleSheet({
    imageDimensions,
    ...theme,
  });
  return (
    <>
      <StatusBar barStyle={theme.colors.statusBar} />
      <SafeAreaView style={styles.background}>
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
    </>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    background: {
      backgroundColor: theme.colors.background,
    },
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
      color: theme.colors.descriptionText,
    },
    title: {
      fontWeight: '500',
      fontSize: 32,
      color: theme.colors.heading,
    },
    image: {
      width: theme.imageDimensions.width,
      height: theme.imageDimensions.height,
    },
    buttonWrapper: {
      width: '95%',
      marginBottom: 10,
    },
  });

export default WelcomeScreen;
