import auth from '@react-native-firebase/auth';
import {store} from '../store/store';
import {updateToken} from '../store/reducers/User';

export async function createUser(fullName, email, password) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await response.user.updateProfile({
      displayName: fullName,
    });
    return response;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {
        error: 'That email is already in use!',
      };
    } else if (error.code === 'auth/invalid-email') {
      return {
        error: 'Please enter a valid email address',
      };
    }

    return {
      error: 'Something went wrong. Please try again later.',
    };
  }
}

export async function loginUser(email, password) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = response.user.getIdToken();

    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {
        status: false,
        error: 'Email or password is incorrect. Please try again.',
      };
    } else if (error.code === 'auth/invalid-email') {
      return {
        status: false,
        error: 'Please type a valid email address.',
      };
    } else if (error.code === 'auth/invalid-login') {
      return {
        status: false,
        error:
          'The entered email does not register. Please create a new account.',
      };
    } else {
      return {
        status: false,
        error: 'Something went wrong. Please try again later.',
      };
    }
  }
}

export async function logoutUser() {
  await auth().signOut();
}

export async function checkToken() {
  try {
    const response = await auth().currentUser.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
}
