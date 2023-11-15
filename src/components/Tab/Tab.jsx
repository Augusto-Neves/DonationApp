import React, {useRef, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {horizontalScale} from '../../utils/scaling';

export function Tab({title, tabId, isInactive = false, onPress = () => {}}) {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <TouchableOpacity
      style={[styles.tab, isInactive && styles.inactiveTab, tabWidth]}
      activeOpacity={0.7}
      onPress={() => onPress(tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.tabTitle, isInactive && styles.inactiveTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};
