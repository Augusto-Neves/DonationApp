import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../../assets/styles/globalStyle';
import {Header} from '../../components/Header/Header';
import {Search} from '../../components/Search/Search';
import {DonationItem} from '../../components/DonationItem/DonationItem';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export function Home() {
  const user = useSelector(state => state.user);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={`${user.firstName} ${user.lastName}`} type={1} />
      <Search onSearch={value => console.log(value)} />
      <View style={styles.container}>
        <DonationItem
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
          price={44}
          uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
        />
        <DonationItem
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
          price={44}
          uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
        />
      </View>
    </SafeAreaView>
  );
}
