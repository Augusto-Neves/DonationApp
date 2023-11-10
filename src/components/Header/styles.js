import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {scaleFontSize} from '../../utils/scaling';

export const styles = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    color: '#022150',
  },
  title2: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    color: '#022150',
  },
  title3: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#022150',
  },
  blueTitle: {
    color: '#156CF7',
  },
});
