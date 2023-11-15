import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {Badge} from '../Badge/Badge';
import {Header} from '../Header/Header';

export function DonationItem({
  uri,
  badgeTitle,
  donationTitle,
  donationItemId,
  price,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => onPress(donationItemId)}>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{uri: uri}} style={styles.image} />
      </View>
      <View style={styles.donationInformation}>
        <Header title={donationTitle} type={3} />
        <View style={styles.price}>
          <Header title={`$${price.toFixed(2)}`} type={3} color="#156CF7" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

DonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  donationItemId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};
