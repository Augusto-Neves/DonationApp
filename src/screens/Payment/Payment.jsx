import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Header} from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import {Button} from '../../components/Button/Button';
import {StripeProvider, CardForm} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISH_KEY} from '@env';
import {BackButton} from '../../components/BackButton/BackButton';

import {globalStyles} from '../../../assets/styles/globalStyle';
import {styles} from './styles';

export function Payment({navigation}) {
  const [isPaymentFormReady, setIsPaymentFormReady] = useState(false);

  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Header title="Making Donation" />

        <Text style={styles.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price}
        </Text>

        <View style={globalStyles.flex}>
          <StripeProvider publishableKey={STRIPE_PUBLISH_KEY}>
            <CardForm
              style={styles.cardForm}
              onFormComplete={() => setIsPaymentFormReady(true)}
            />
          </StripeProvider>
        </View>
      </ScrollView>

      <View style={styles.button}>
        <Button title="Confirm Payment" isDisabled={!isPaymentFormReady} />
      </View>
    </SafeAreaView>
  );
}
