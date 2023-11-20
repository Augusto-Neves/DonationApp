import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    height: horizontalScale(44),
    width: horizontalScale(44),
    borderRadius: horizontalScale(26),
  },
});
