import {StyleSheet} from 'react-native';
import {verticalScale} from '../../src/utils/scaling';

export const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  text: {
    color: '#000000',
  },
  headerText: {
    color: '#022150',
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});
