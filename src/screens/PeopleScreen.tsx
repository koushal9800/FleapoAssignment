import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  TextInput,
  ScrollView,
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import {typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';
import Search from '../assets/icons/Search';

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
  const {theme, toggleTheme} = useTheme();
  const [selectedTab, setSelectedTab] = useState('Friends');
  return (
    <ScrollView contentContainerStyle={{flex: 1, flexGrow: 1}}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Text
          style={[
            styles.userNameStyle,
            {
              color: theme.colors.textPrimary,
              textShadowColor: theme.colors.textPrimary,
            },
          ]}>
          People
        </Text>

        <View
          style={[
            styles.tabs,
            {
              backgroundColor: theme.colors.buttonBackground,
              borderColor: theme.colors.borderColor,
            },
          ]}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                selectedTab === tab && {
                  backgroundColor: theme.colors.textPrimary,
                },
              ]}
              onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      selectedTab === tab
                        ? theme.colors.background
                        : theme.colors.textPrimary,
                  },
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={[
            styles.separator,
            {backgroundColor: theme.colors.buttonBackground},
          ]}
        />

        {userData.map((item, index) => (
          <ProfileItem
            key={index}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            userBadge={item.userBadge}
          />
        ))}

        <View
          style={[
            styles.searchContainer,
            {backgroundColor: theme.colors.buttonBackground},
          ]}>
          <Search color={theme.colors.textPrimary} />
          <TextInput
            placeholder="Search People"
            placeholderTextColor={theme.colors.textPrimary}
            style={{color: theme.colors.textPrimary, marginLeft: 16}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userNameStyle: {
    ...typography.title,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    elevation: 70,
    marginTop: 8,
    padding: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 100,
    marginTop: 16,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginHorizontal: 16,
  },
  tab: {padding: 10, borderRadius: 100, paddingHorizontal: 24},
  tabText: {
    ...typography.buttonText,
  },
  activeTabText: {
    ...typography.buttonText,
  },
  searchContainer: {
    paddingHorizontal: 16,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 12,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  separator: {
    width: '100%',
    height: 2,
    marginVertical: 16,
  },
});

export default PeopleScreen;
