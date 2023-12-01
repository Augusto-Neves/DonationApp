import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import {Header} from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import {Button} from '../../components/Button/Button';
import {
  StripeProvider,
  CardForm,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISH_KEY} from '@env';
import {BackButton} from '../../components/BackButton/BackButton';

import {globalStyles} from '../../../assets/styles/globalStyle';
import {styles} from './styles';

export function Payment({navigation}) {
  const [isPaymentFormReady, setIsPaymentFormReady] = useState(false);
  const {confirmPayment, loading} = useConfirmPayment();

  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const loggedUser = useSelector(state => state.user);

  async function fetchPaymentIntentClientSecret() {
    const response = await fetch('http://10.0.2.2:5000/create-payment-intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount: donationItemInformation.price * 100,
        currency: 'usd',
        email: loggedUser.email,
      }),
    });

    const {clientSecret} = await response.json();

    return clientSecret;
  }

  async function handlePayment() {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (error) {
      Alert.alert(
        'Error has occurred with your payment.',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Successful', 'The payment was confirmed successfully', [
        {
          text: 'Ok',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>

        <Header title="Making Donation" />

        <Text style={styles.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price}
        </Text>

        <View style={styles.cardFormContainer}>
          <StripeProvider publishableKey={STRIPE_PUBLISH_KEY}>
            <CardForm
              style={styles.cardForm}
              onFormComplete={() => setIsPaymentFormReady(true)}
            />
          </StripeProvider>
        </View>
      </ScrollView>

      <View style={styles.button}>
        <Button
          title="Confirm Donation"
          isDisabled={!isPaymentFormReady || loading}
          onPress={handlePayment}
        />
      </View>
    </SafeAreaView>
  );
}
