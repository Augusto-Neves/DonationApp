import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

export function Button({title, isDisabled = false, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabled]}
      disabled={isDisabled}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};
