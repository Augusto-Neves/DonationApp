import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/getFontFamily';
import {scaleFontSize, verticalScale} from '../../utils/scaling';

export const styles = StyleSheet.create({
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.50)',
    color: '#022150',
  },
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455A',
  },
});
