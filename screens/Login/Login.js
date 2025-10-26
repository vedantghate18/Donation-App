import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input/Input';
import { Pressable, View, Text } from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/user';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <SafeAreaView style={(globalStyle.BackgroundWhite, globalStyle.flex)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBotom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBotom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter Your Email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>

        <View style={globalStyle.marginBotom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBotom24}>
          {error.length > 0 && <Text style={style.error}>{error}</Text>}
          <Button
            onPress={async () => {
              let user = await loginUser(email, Password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                navigation.navigate(Routes.Home);
              }
            }}
            title={'login'}
            isDisabled={email.length <= 5 || Password.length <= 6}
          />
        </View>
        <Pressable
          style={style.registry}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header type={3} title={'Dont Have an Account'} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
