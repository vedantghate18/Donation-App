import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input/Input';
import { Pressable, View } from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
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
          <Button title={'login'} />
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
