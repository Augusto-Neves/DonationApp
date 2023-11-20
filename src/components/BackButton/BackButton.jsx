import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {styles} from './styles';

export function BackButton({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </TouchableOpacity>
  );
}

BackButton.propTypes = {onPress: PropTypes.func};
