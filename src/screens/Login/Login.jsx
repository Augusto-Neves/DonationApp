import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Input} from '../../components/Input/Input';
import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button/Button';
import {Routes} from '../../routes/routesNames';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';

import {styles} from './styles';
import {globalStyles} from '../../../assets/styles/globalStyle';
import {login} from '../../store/reducers/User';

export function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  function handleCreateAccountButtonPress() {
    navigation.navigate(Routes.Registration);
  }

  async function handleLoginButtonPress() {
    const user = await loginUser(email, password);
    if (!user.status) {
      setError(user.error);
    } else {
      dispatch(login(user.data));
      setError('');
      setSuccess('Successful login!');
      setTimeout(() => {
        navigation.navigate(Routes.Home);
      }, 2000);
    }
  }

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyles.marginBottom24}>
          <Header title="Welcome Back" />
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
            title="Login"
            isDisabled={!email || password.length < 8}
            onPress={handleLoginButtonPress}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCreateAccountButtonPress}
          style={styles.createAccountButton}>
          <Header title={"Don't have an account?"} type={3} color="#2979F2" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
