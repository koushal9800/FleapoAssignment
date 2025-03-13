import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

interface Props {
image:ImageSourcePropType;
title: string;
subTitle: string;
restaurants: string;
position?: string;
like: string
}

const ListItem = ({image,title,subTitle,restaurants,position,like}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={image}
          style={styles.imageStyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text
            style={{
              ...typography.subText,
              color: colors.textSecondary,
              marginTop: spacing.m,
            }}>
            {subTitle}
          </Text>

          <View
            style={styles.subtextContainer}>
            <Text style={[styles.subTitleStyle, {color: colors.textSecondary}]}>
              {restaurants} restaurants
            </Text>
            <Text
              style={[styles.subTitleStyle, {color: colors.textNearby, marginLeft: 6}]}>
              {position}
            </Text>

            <View style={styles.radio} />

            <Image
              source={require('../assets/images/followIcon.png')}
              style={styles.followIcon}
              resizeMode="contain"
            />
            <Text style={[styles.subTitleStyle, {color: colors.textSecondary}]}>
             {like}
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 3, alignItems:'flex-end'}}>
        <Image
          source={require('../assets/icons/rightArrow.png')}
          style={styles.rightIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: spacing.xl,
    borderColor: colors.separator,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {flexDirection: 'row', flex: 9},
  imageStyle: {width: 48, height: 48},
  textContainer: {marginLeft: spacing.xl},
  titleStyle: {
    ...typography.buttonText,
    color: colors.textPrimary,
  },
  subTitleStyle: {
    ...typography.subText,
  },
  radio: {
    width: 4,
    height: 4,
    backgroundColor: colors.textSecondary,
    borderRadius: 2,
    marginHorizontal: spacing.m,
  },
  rightIcon:{width: 5, height: 8},
  subtextContainer:{flexDirection: 'row', marginTop: spacing.xl, alignItems: 'center'},
  followIcon:{width: 16, height: 16, marginRight: spacing.xl}
});

export default ListItem;
