import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../utils/getFontFamily';

export const styles = StyleSheet.create({
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  createAccountButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
  },
});
