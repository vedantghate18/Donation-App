import React from 'react';
import style from './style';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import { Image, Text, View } from 'react-native';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItems = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    state => state.donations?.selectedDonationsInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.BackgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <View>
          <Header type={1} title={donationItemInformation.name} />
          <Text style={style.description}>
            {donationItemInformation.description}
          </Text>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItems;
