import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import TopeightItem from '../components/TopeightItem';
import RecentActivity from '../components/RecentActivity';
import Button from '../components/Button';
import ListItem from '../components/ListItem';
import UserItem from '../components/UserItem';
import LinearGradient from 'react-native-linear-gradient';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';
import FollowIcon from '../assets/icons/FollowIcon';

interface topeightProps {
  id: number;
  imageBackground: ImageSourcePropType;
  image: ImageSourcePropType;
  title: string;
}

interface recentActivityProps {
  id: number;
  mainImage: ImageSourcePropType;
  rateImage?: ImageSourcePropType;
  titleText: string;
  placeText: string;
  days: string;
}

interface listProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  restaurants: string;
  position?: string;
  like: string;
}

interface userProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  followers: number;
}

const topEightData: topeightProps[] = [
  {
    id: 1,
    imageBackground: require('../assets/images/image1.png'),
    image: require('../assets/images/Score1.png'),
    title: 'Cobis',
  },
  {
    id: 2,
    imageBackground: require('../assets/images/image2.png'),
    image: require('../assets/images/Score3.png'),
    title: 'Easy Street',
  },
  {
    id: 3,
    imageBackground: require('../assets/images/image3.png'),
    image: require('../assets/images/Score2.png'),
    title: 'Don Angie',
  },
  {
    id: 4,
    imageBackground: require('../assets/images/image4.png'),
    image: require('../assets/images/Score6.png'),
    title: 'Osteria Mare',
  },
  {
    id: 5,
    imageBackground: require('../assets/images/image5.png'),
    image: require('../assets/images/Score3.png'),
    title: 'Sushi by Scratch',
  },
  {
    id: 6,
    imageBackground: require('../assets/images/image6.png'),
    image: require('../assets/images/Score6.png'),
    title: 'Chipotle Mexican Grill',
  },
  {
    id: 7,
    imageBackground: require('../assets/images/image7.png'),
    image: require('../assets/images/Score3.png'),
    title: 'Honor Bar',
  },
  {
    id: 8,
    imageBackground: require('../assets/images/image8.png'),
    image: require('../assets/images/Score8.png'),
    title: 'Ospi Brentwood',
  },
];

const recentActivityData: recentActivityProps[] = [
  {
    id: 1,
    mainImage: require('../assets/images/recentActivity1.png'),
    rateImage: require('../assets/images/Score2.png'),
    titleText: 'Anajak Thai Cuisine',
    placeText: 'Sherman Oaks, CA',
    days: '1d',
  },
  {
    id: 2,
    mainImage: require('../assets/images/recentActivity2.png'),
    rateImage: require('../assets/images/Score2.png'),
    titleText: 'Night + Market Weho',
    placeText: 'West Hollywood, CA',
    days: '4d',
  },
  {
    id: 3,
    mainImage: require('../assets/images/recentActivity3.png'),
    titleText: 'Thai Boom',
    placeText: 'West Hollywood, CA',
    days: '1w',
  },
];

const listData: listProps[] = [
  {
    id: 1,
    image: require('../assets/images/list1.png'),
    title: 'best thai in LA',
    subTitle: 'Exactly what it says dummy!',
    restaurants: '3',
    position: '1 nearby!',
    like: 'No likes yet',
  },
  {
    id: 2,
    image: require('../assets/images/list2.png'),
    title: 'tendies',
    subTitle: 'You already know i love me some basement chicken tendies',
    restaurants: '5',
    like: '12 likes',
  },
  {
    id: 3,
    image: require('../assets/images/list3.png'),
    title: 'Favorite date spots',
    subTitle: 'If we make it to one of these spots, we are vibin hard',
    restaurants: '3',
    like: '27 likes',
  },
];

const userData: userProps[] = [
  {
    id: 1,
    image: require('../assets/icons/Frame1.png'),
    title: 'Following',
    followers: 3,
  },
  {
    id: 2,
    image: require('../assets/icons/Frame2.png'),
    title: 'Hitlist',
    followers: 3,
  },
];

const ProfileScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const renderRow = (topEightData: topeightProps[]) => (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: spacing.xll,
      }}>
      {topEightData.map((item, index) => (
        <TopeightItem
          key={item.id}
          imageBackground={item.imageBackground}
          image={item.image}
          title={item.title}
        />
      ))}
    </View>
  );

  const itemsPerRow = 2;

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < topEightData.length; i += itemsPerRow) {
      const rowItems = topEightData.slice(i, i + itemsPerRow);
      rows.push(<View key={i}>{renderRow(rowItems)}</View>);
    }
    return rows;
  };
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/images/userLocationBack.png')}
          style={styles.bannerImage}>
          <LinearGradient
            colors={['rgba(28, 28, 31,0.1)', 'rgba(28, 28, 31,1)']}
            style={styles.bannerImageGradient}
          />
        </ImageBackground>

        {/* USER PROFILE SECTION */}
        <View style={styles.profileContainer}>
          <View>
            <View style={styles.badgeContainer}>
              <Text
                style={[styles.badgeText, {color: theme.colors.textPrimary}]}>
                kumargauravof
              </Text>
              <Image
                source={require('../assets/images/UserBadge.png')}
                style={styles.badgeStyle}
              />
            </View>

            <Text
              style={[styles.userNameStyle, {color: theme.colors.textPrimary}]}>
              KUMAR GAURAV
            </Text>

            <Text
              style={[
                styles.placeNameStyle,
                {color: theme.colors.textSecondary},
              ]}>
              Los Angeles, CA
            </Text>
          </View>

          <Image
            source={require('../assets/images/profileImage.png')}
            style={styles.profileImageStyle}
            resizeMode="contain"
          />
        </View>

        {/* Follow Button */}

        <TouchableOpacity
          style={[
            styles.followButton,
            {backgroundColor: theme.colors.buttonBackground},
          ]}>
          <FollowIcon color={theme.colors.textPrimary} />
          <Text
            style={[styles.followTextStyle, {color: theme.colors.textPrimary}]}>
            Follow
          </Text>
        </TouchableOpacity>

        {/* Separator */}

        <View
          style={[
            styles.separator,
            {backgroundColor: theme.colors.buttonBackground},
          ]}
        />

        {/* TOP EIGHT */}

        <View style={{marginLeft: spacing.xll}}>
          <Text
            style={[styles.topEightTitle, {color: theme.colors.textPrimary}]}>
            Gaurav’s Top 8
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>{renderRows()}</View>
          </ScrollView>
        </View>

        {/* Separator */}

        <View
          style={[
            styles.separator,
            {backgroundColor: theme.colors.buttonBackground},
          ]}
        />

        {/* Recent Activity */}
        <View style={{marginHorizontal: spacing.xll}}>
          <Text
            style={[styles.topEightTitle, {color: theme.colors.textPrimary}]}>
            Recent Activity
          </Text>
          <View style={{marginTop: spacing.xl, marginBottom: spacing.xll}}>
            {recentActivityData.map((item, index) => (
              <RecentActivity
                key={item.id}
                mainImage={item.mainImage}
                rateImage={item.rateImage}
                titleText={item.titleText}
                placeText={item.placeText}
                days={item.days}
              />
            ))}
          </View>

          <Button />

          {/* Graph */}

          <View style={{marginTop: spacing.xlll}}>
            <Image
              source={require('../assets/images/graph.png')}
              style={{width: '100%', height: 114}}
            />
          </View>

          {/* Separator */}

          <View
            style={[
              styles.separator,
              {backgroundColor: theme.colors.buttonBackground},
            ]}
          />

          {/* LISTS */}
          <View>
            <Text
              style={[styles.topEightTitle, {color: theme.colors.textPrimary}]}>
              Lists
            </Text>

            <View style={{marginTop: spacing.xl, marginBottom: spacing.xll}}>
              {listData.map((item, index) => (
                <ListItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  subTitle={item.subTitle}
                  restaurants={item.restaurants}
                  position={item.position}
                  like={item.like}
                />
              ))}
            </View>
          </View>

          {/* Separator */}

          <Button />

          <View
            style={[
              styles.separator,
              {backgroundColor: theme.colors.buttonBackground},
            ]}
          />
          <View style={{marginBottom: spacing.xllll}}>
            {userData.map((item, index) => (
              <UserItem
                key={item.id}
                image={item.image}
                title={item.title}
                followers={item.followers}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bannerImage: {width: '100%', height: 300},
  bannerImageGradient: {width: '100%', height: '100%'},
  profileContainer: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.xll,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeContainer: {flexDirection: 'row'},
  badgeText: {
    ...typography.subtitle,
  },
  badgeStyle: {width: 20, height: 20, marginLeft: spacing.m},
  userNameStyle: {
    ...typography.title,

    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    elevation: 70,
    marginTop: spacing.l,
  },
  placeNameStyle: {
    ...typography.subText,

    marginTop: spacing.s,
  },
  profileImageStyle: {width: 96, height: 96},
  followTextStyle: {
    ...typography.buttonText,

    marginLeft: spacing.m,
  },
  followButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: spacing.xll,
    paddingVertical: spacing.l,
    width: 102,
    borderRadius: 100,
    marginLeft: spacing.xl,
    marginTop: spacing.xl,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 8,
  },
  topEightTitle: {...typography.sectionTitle},
  separator: {
    width: '100%',

    height: 2,
    marginVertical: spacing.xll,
  },
});

export default ProfileScreen;
