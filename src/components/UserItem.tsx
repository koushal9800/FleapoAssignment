import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

interface Props {
  image: ImageSourcePropType;
  title: string;
  followers: number;
}

const UserItem = ({image, title, followers}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Image source={image} style={styles.mainIcon} />
        <Text style={styles.textStyle}>{title}</Text>
      </View>

      <View style={styles.insideContainer}>
        <Text style={[styles.textStyle]}> {followers} </Text>
        <Image
          source={require('../assets/icons/rightArrow.png')}
          style={styles.arrowIcon}
        />
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
    borderColor: colors.separator,
    marginTop:spacing.xl
  },
  insideContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIcon: {width: 32, height: 32},
  textStyle: {
    ...typography.buttonText,
    color: colors.textPrimary,
    marginLeft: spacing.xl,
  },
  arrowIcon: {width: 5, height: 8, marginLeft: spacing.m},
});

export default UserItem;
