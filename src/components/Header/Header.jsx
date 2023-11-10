import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

export function Header({title = '', type = 1, color}) {
  function stylesToApply() {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[stylesToApply(), color && styles.blueTitle]}>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
};
