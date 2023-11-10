import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  badgeTitle: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    letterSpacing: scaleFontSize(0.2),
    textAlign: 'center',
  },
});
