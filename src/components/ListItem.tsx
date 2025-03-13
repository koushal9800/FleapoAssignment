import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';
import FollowIcon from '../assets/icons/FollowIcon';
import Arrow from '../assets/icons/Arrow';

interface Props {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  restaurants: string;
  position?: string;
  like: string;
}

const ListItem = ({
  image,
  title,
  subTitle,
  restaurants,
  position,
  like,
}: Props) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {borderColor: theme.colors.buttonBackground}]}>
      <View style={styles.leftContainer}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={[styles.titleStyle, {color: theme.colors.textPrimary}]}>
            {title}
          </Text>
          <Text
            style={{
              ...typography.subText,
              color: theme.colors.textSecondary,
              marginTop: spacing.m,
            }}>
            {subTitle}
          </Text>

          <View style={styles.subtextContainer}>
            <Text
              style={[
                styles.subTitleStyle,
                {color: theme.colors.textSecondary},
              ]}>
              {restaurants} restaurants
            </Text>
            <Text
              style={[
                styles.subTitleStyle,
                {color: theme.colors.textNearby, marginLeft: 6},
              ]}>
              {position}
            </Text>

            <View
              style={[
                styles.radio,
                {backgroundColor: theme.colors.textSecondary},
              ]}
            />

            <FollowIcon color={theme.colors.textSecondary} />
            <Text
              style={[
                styles.subTitleStyle,
                {color: theme.colors.textSecondary},
              ]}>
              {like}
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 3, alignItems: 'flex-end'}}>
        <Arrow color={theme.colors.textPrimary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: spacing.xl,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {flexDirection: 'row', flex: 9},
  imageStyle: {width: 48, height: 48},
  textContainer: {marginLeft: spacing.xl},
  titleStyle: {
    ...typography.buttonText,
  },
  subTitleStyle: {
    ...typography.subText,
    marginLeft: spacing.m,
  },
  radio: {
    width: 4,
    height: 4,

    borderRadius: 2,
    marginHorizontal: spacing.m,
  },
  rightIcon: {width: 5, height: 8},
  subtextContainer: {
    flexDirection: 'row',
    marginTop: spacing.xl,
    alignItems: 'center',
  },
  followIcon: {width: 16, height: 16, marginRight: spacing.xl},
});

export default ListItem;
