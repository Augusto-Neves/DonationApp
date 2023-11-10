import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    letterSpacing: scaleFontSize(0.32),
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.7,
  },
});
