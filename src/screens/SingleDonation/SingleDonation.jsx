import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {Badge} from '../../components/Badge/Badge';
import {Button} from '../../components/Button/Button';
import {globalStyles} from '../../../assets/styles/globalStyle';
import {BackButton} from '../../components/BackButton/BackButton';
import {Routes} from '../../routes/routesNames';

export function SingleDonation({navigation, route}) {
  const selectedDonationItem = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryName = route.params.categoryName;

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{uri: selectedDonationItem.image}}
          style={styles.image}
        />

        <View style={styles.badge}>
          <Badge title={categoryName} />
        </View>

        <Header title={selectedDonationItem.name} />

        <Text style={styles.description}>
          {selectedDonationItem.description}
        </Text>
      </ScrollView>

      <View style={styles.button}>
        <Button
          title="Donate"
          onPress={() => navigation.navigate(Routes.Payment)}
        />
      </View>
    </SafeAreaView>
  );
}
