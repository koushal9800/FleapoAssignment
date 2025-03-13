import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  FlatList,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import { typography } from '../utils/typography';
import { colors } from '../utils/color';

const tabs = ['Friends', 'Verified', 'Everyone'];

interface userProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  userBadge?: ImageSourcePropType;
}

const userData: userProps[] = [
  {
    id: 1,
    image: require('../assets/images/user1.png'),
    title: 'CaptainCrunch',
    subTitle: 'Los Angeles, CA',
  },
  {
    id: 2,
    image: require('../assets/images/user2.png'),
    title: 'how.kev.eats',
    subTitle: 'Los Angeles, CA',
    userBadge: require('../assets/images/UserBadge.png'),
  },
  {
    id: 3,
    image: require('../assets/images/user3.png'),
    title: 'tenderlove',
    subTitle: 'Los Angeles, CA',
  },
  {
    id: 4,
    image: require('../assets/images/user4.png'),
    title: 'GourmetGuru',
    subTitle: 'Los Angeles, CA',
  },
];

const PeopleScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Friends');
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}} >
      <Text style={styles.userNameStyle}>People</Text>

      <View style={styles.tabs}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={styles.separator}
      />

      <FlatList
        data={userData}
        renderItem={({item, index}) => (
          <ProfileItem
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            userBadge={item.userBadge}
          />
        )}
      />

      <View
        style={styles.searchContainer}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.searchInput}
        />
        <TextInput
          placeholder="Search People"
          placeholderTextColor={colors.textPrimary}
          style={{color: colors.textPrimary}}
        />
      </View>
      </ScrollView>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  userNameStyle: {
    ...typography.title,
    color: colors.textPrimary,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    elevation: 70,
    marginTop: 8,
    padding: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.buttonBackground,
    borderRadius: 100,
    marginTop: 16,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginHorizontal: 16,
  },
  tab: {padding: 10, borderRadius: 100, paddingHorizontal: 24},
  activeTab: {backgroundColor: colors.textPrimary},
  tabText: {
    color: colors.textPrimary,
    ...typography.buttonText
  },
  activeTabText: {
    color: colors.background,
    ...typography.buttonText
  },
  searchContainer:{
    backgroundColor: colors.buttonBackground,
    paddingHorizontal: 16,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 12,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput:{width: 15, height: 15, marginRight: 16},
  separator:{
    width: '100%',
    backgroundColor: colors.separator,
    height: 2,
    marginVertical: 16,
  }
});

export default PeopleScreen;
