import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AppTheme } from '../../../../Context';

const Button = ({label, onPress, extendedStyles}) => {
  const {theme} = React.useContext(AppTheme);
  const styles = styleSheet(theme);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        ...styles.wrapper,
        ...extendedStyles,
      }}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  extendedStyles: PropTypes.object,
};

Button.defaultProps = {
  extendedStyles: {},
};

const styleSheet = theme =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 48,
      backgroundColor: theme.colors.primaryButton,
      justifyContent: 'center',
      borderRadius: 5,
    },
    text: {
      textAlign: 'center',
      color: theme.colors.buttonText,
      fontWeight: 'bold',
    },
  });

export default Button;
