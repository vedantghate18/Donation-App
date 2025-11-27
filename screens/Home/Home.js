import React, { useEffect, useState } from 'react';
import style from './style';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Search from '../../components/SearchBar/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { updateSelectCategoryId } from '../../redux/reducers/Categories';
import { updateSelectedDonationsId } from '../../redux/reducers/Donations';
import { Routes } from '../../navigation/Routes';

const Home = ({ navigation }) => {
  const donations = useSelector(state => state.donations);
  const categories = useSelector(state => state.categories);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations?.items || [];
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectCategoryId),
    );
    setDonationItems(filteredItems);
  }, [donations, categories.selectCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  // useEffect(() => {
  //   dispatch(resetToInitialState());
  // }, [dispatch]);

  return (
    <SafeAreaView style={globalStyle.BackgroundWhite}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello</Text>
            <View style={style.headerMain}>
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/Image/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}
                >
                  <SingleDonationItem
                    onPress={selectDonationId => {
                      dispatch(updateSelectedDonationsId(selectDonationId));
                      navigation.navigate(Routes.SingleDonationItems, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    badgeTitle={categoryInformation.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
