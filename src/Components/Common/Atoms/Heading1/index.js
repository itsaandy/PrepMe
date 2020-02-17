import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Heading1 = ({children}) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 32,
    color: '#1A1A1A',
  },
});

export default Heading1;
