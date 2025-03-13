import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';
import Arrow from '../assets/icons/Arrow';

interface Props {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  userBadge?: ImageSourcePropType;
}

const ProfileItem = ({image, title, subTitle, userBadge}: Props) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {borderColor: theme.colors.buttonBackground}]}>
      <View style={styles.leftContainer}>
        <Image source={image} style={styles.userImage} />
        <View style={styles.textContainer}>
          <View style={styles.leftContainer}>
            <Text
              style={[styles.titleStyle, {color: theme.colors.textPrimary}]}>
              {title}
            </Text>
            <Image
              source={userBadge}
              style={styles.userBadgeStyle}
              resizeMode="contain"
            />
          </View>

          <Text
            style={[styles.subTitleStyle, {color: theme.colors.textSecondary}]}>
            {subTitle}
          </Text>
        </View>
      </View>

      <View>
        <Arrow color={theme.colors.textPrimary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.xll,
    alignItems: 'center',
    borderBottomWidth: 1,

    paddingBottom: spacing.xl,
    marginBottom: spacing.xl,
  },
  leftContainer: {flexDirection: 'row', alignItems: 'center'},
  userImage: {width: 48, height: 48},
  textContainer: {marginLeft: spacing.xl},
  titleStyle: {
    ...typography.buttonText,
  },
  subTitleStyle: {
    ...typography.subText,

    marginTop: spacing.s,
  },
  rightIcon: {width: 5, height: 8},
  userBadgeStyle: {width: 16, height: 16, marginLeft: spacing.xl},
});

export default ProfileItem;
