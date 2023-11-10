import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {horizontalScale} from '../../utils/scaling';

export function Badge({title}) {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[styles.badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={styles.badgeTitle}>
        {title}
      </Text>
    </View>
  );
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};
