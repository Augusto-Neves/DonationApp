import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {globalStyles} from '../../../assets/styles/globalStyle';
import {Header} from '../../components/Header/Header';
import {Search} from '../../components/Search/Search';
import {Tab} from '../../components/Tab/Tab';
import {DonationItem} from '../../components/DonationItem/DonationItem';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updatedSelectedCategoryId} from '../../store/reducers/Categories';
import {updateSelectedDonationId} from '../../store/reducers/Donations';
import {Routes} from '../../routes/routesNames';
import {resetToInitialState} from '../../store/reducers/User';
import {logoutUser} from '../../api/user';

export function Home({navigation}) {
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [donationItem, setDonationItem] = useState([]);

  const categoryPageSize = 4;

  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();

  const categoryName = categories.categories.filter(
    category => category.categoryId === categories.selectedCategoryId,
  )[0].name;

  function pagination(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  }

  function handleDonationItemPress(id) {
    dispatch(updateSelectedDonationId(id));
    navigation.navigate(Routes.SingleDonation, {categoryName});
  }

  async function handleLogoutUser() {
    await logoutUser();
    dispatch(resetToInitialState());
  }

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );

    setDonationItem(filteredItems);
  }, [categories.selectedCategoryId, donations.items]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Hello, </Text>
            <View style={styles.userName}>
              <Header title={`${user.displayName} 👋`} type={1} />
            </View>
          </View>

          <View>
            <Image
              source={{uri: user.profileImage}}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <TouchableOpacity activeOpacity={0.7} onPress={handleLogoutUser}>
              <Header title="Logout" type={3} color="#156cf7" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Search onSearch={value => console.log(value)} />
        </View>

        <TouchableOpacity
          style={styles.highlightImageContainer}
          activeOpacity={0.7}>
          <Image
            style={styles.highlightImage}
            source={require('../../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.categoryHeader}>
          <Header title="Select Category" type={2} />
        </View>

        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={value => dispatch(updatedSelectedCategoryId(value))}
                />
              </View>
            )}
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
          />
        </View>
        {donationItem.length > 0 && (
          <View style={styles.donationItemContainer}>
            {donationItem.map(donation => (
              <View
                key={donation.donationItemId}
                style={styles.donationSingleItem}>
                <DonationItem
                  badgeTitle={categoryName}
                  donationTitle={donation.name}
                  donationItemId={donation.donationItemId}
                  price={parseFloat(donation.price)}
                  uri={donation.image}
                  onPress={handleDonationItemPress}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
