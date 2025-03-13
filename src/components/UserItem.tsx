import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';
import Arrow from '../assets/icons/Arrow';

interface Props {
  image: ImageSourcePropType;
  title: string;
  followers: number;
}

const UserItem = ({image, title, followers}: Props) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {borderColor: theme.colors.buttonBackground}]}>
      <View style={styles.insideContainer}>
        <Image source={image} style={styles.mainIcon} />
        <Text style={[styles.textStyle, {color: theme.colors.textPrimary}]}>
          {title}
        </Text>
      </View>

      <View style={styles.insideContainer}>
        <Text style={[styles.textStyle, {color: theme.colors.textPrimary}]}>
          {' '}
          {followers}{' '}
        </Text>

        <Arrow color={theme.colors.textPrimary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: spacing.xl,
    marginTop: spacing.xl,
  },
  insideContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIcon: {width: 32, height: 32},
  textStyle: {
    ...typography.buttonText,

    marginHorizontal: spacing.xl,
  },
  arrowIcon: {width: 5, height: 8, marginLeft: spacing.m},
});

export default UserItem;
