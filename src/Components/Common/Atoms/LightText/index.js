import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';

const LightText = ({children, extendedStyles}) => (
  <Text
    style={{
      ...styles.text,
      ...extendedStyles,
    }}>
    {children}
  </Text>
);

LightText.propTypes = {
  children: PropTypes.string.isRequired,
  extendedStyles: PropTypes.object,
};

LightText.defaultProps = {
  extendedStyles: {},
};

const styles = StyleSheet.create({
  text: {
    color: '#666666',
  },
});

export default LightText;
