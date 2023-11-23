import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {Input} from '../../components/Input/Input';
import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button/Button';
import {BackButton} from '../../components/BackButton/BackButton';

import {styles} from './styles';
import {globalStyles} from '../../../assets/styles/globalStyle';
import {createUser} from '../../api/user';

export function Registration({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleRegistration() {
    const user = await createUser(fullName, email, password);

    if (user.error) {
      setError(user.error);
    } else {
      setError('');
      setSuccess('You have successfully registered.');
      setTimeout(() => navigation.goBack(), 3000);
    }
  }

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyles.marginBottom24}>
          <Header title="Hello and Welcome!" />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            label="First & Last Name"
            placeholder="Enter your full name..."
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            label="Password"
            placeholder="Enter your password..."
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
        </View>

        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}
        <View style={globalStyles.marginBottom24}>
          <Button
            title="Register"
            isDisabled={fullName <= 2 || !email || password.length < 8}
            onPress={handleRegistration}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
