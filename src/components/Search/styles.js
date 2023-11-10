import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../utils/getFontFamily';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    color: '#686C7A',
    height: '100%',
    flex: 1,
    marginLeft: horizontalScale(6),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
  },
});
