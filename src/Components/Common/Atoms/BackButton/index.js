import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const BlackIcon = require('../../../../assets/icons/back-dark.png');
const WhiteIcon = require('../../../../assets/icons/back-light.png');

const BackButton = ({onPress, whiteIcon}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image
      style={styles.image}
      aspectRatio={1}
      source={whiteIcon ? WhiteIcon : BlackIcon}
    />
  </TouchableOpacity>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  whiteIcon: PropTypes.bool,
};

BackButton.defaultProps = {
  whiteIcon: false,
};

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
  },
});

export default BackButton;
