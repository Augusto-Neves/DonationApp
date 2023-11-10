import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(24),
  },
  text: {
    color: 'black',
  },
});
