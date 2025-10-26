import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input/Input';
import { Pressable, View, Text } from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { createUser } from '../../api/user';
import { Routes } from '../../navigation/Routes';

const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  return (
    <SafeAreaView style={(globalStyle.BackgroundWhite, globalStyle.flex)}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBotom24}>
          <Header type={1} title={'Hello and Welcome'} />
        </View>
        <View style={globalStyle.marginBotom24}>
          <Input
            label={'First Name and Last Name'}
            placeholder={'Enter Your Full Name'}
            onChangeText={value => {
              // console.log('Full Name:', value);
              setFullName(value);
            }}
          />
        </View>
        <View style={globalStyle.marginBotom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter Your Email...'}
            onChangeText={value => {
              // console.log('Email:', value);
              setEmail(value);
            }}
          />
        </View>

        <View style={globalStyle.marginBotom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => {
              // console.log('Password:', value);
              setPassword(value);
            }}
            secureTextEntry={true}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyle.marginBotom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 6
            }
            title={'Registration'}
            onPress={async () => {
              // console.log('Credentials', email, password, fullName);
              console.log('Registration pressed');
              const user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('User created successfully');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
