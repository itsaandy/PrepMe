import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Button = ({label, onPress}) => {
  const styles = styleSheet();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.wrapper}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styleSheet = theme =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 48,
      backgroundColor: '#4d13da',
      justifyContent: 'center',
      borderRadius: 5,
    },
    text: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  });
