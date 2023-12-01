import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

export const styles = StyleSheet.create({
  backButtonContainer: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  cardForm: {
    height: verticalScale(200),
    marginTop: verticalScale(12),
  },
  cardFormContainer: {
    marginTop: verticalScale(5),
  },
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
  },
  donationAmountDescription: {
    color: '#022150',
    marginTop: verticalScale(12),
  },
});
