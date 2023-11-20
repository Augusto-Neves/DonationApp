import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../utils/getFontFamily';

export const styles = StyleSheet.create({
  badge: {
    marginBottom: verticalScale(16),
  },
  button: {
    marginHorizontal: horizontalScale(14),
    marginBottom: verticalScale(10),
  },
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  description: {
    marginTop: verticalScale(7),
    marginBottom: verticalScale(10),
    marginHorizontal: horizontalScale(7),
    color: '#000000',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(22),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
});
