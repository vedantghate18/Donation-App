import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  console.log('Creating user with:', fullName, email);

  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(() => {})
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const loginUser = async (email, password) => {
  console.log('Logging in user with:', email);
  return signInWithEmailAndPassword(getAuth(), email, password)
    .then(async response => {
      const token = await response.user.getIdToken();
      return {
        status: true,
        data: {
          displayName: response.user.displayName,
          email: response.user.email,
          token: token,
        },
      };
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        return { status: false, error: 'Please enter a correct password' };
      } else if (error.code === 'auth/user-not-found') {
        return {
          status: false,
          error:
            'The email you entered does not exist. Please create a new account.',
        };
      }
      return { status: false, error: 'Something went wrong' };
    });
};
