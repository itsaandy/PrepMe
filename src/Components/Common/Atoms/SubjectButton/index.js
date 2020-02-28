import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SubjectButton = ({subject, onPress, isSelected}) => {
  const styles = styleSheet(isSelected);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{subject.name}</Text>
    </TouchableOpacity>
  );
};

const styleSheet = isSelected =>
  StyleSheet.create({
    button: {
      backgroundColor: isSelected ? '#6F6CF8' : '#E7E7E7',
      borderRadius: 14,
      height: 28,
      justifyContent: 'center',
      paddingHorizontal: 14,
      marginRight: 7,
      marginBottom: 15,
    },
    text: {
      fontWeight: 'bold',
      color: isSelected ? 'white' : '#595959',
    },
  });

export default SubjectButton;
