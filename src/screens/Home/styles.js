import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import {getFontFamily} from '../../utils/getFontFamily';

export const styles = StyleSheet.create({
  categoriesContainer: {
    marginHorizontal: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
  donationItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  donationSingleItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    letterSpacing: scaleFontSize(0.32),
    color: '#636776',
  },
  highlightImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightImage: {
    width: '100%',
    height: verticalScale(160),
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
});
