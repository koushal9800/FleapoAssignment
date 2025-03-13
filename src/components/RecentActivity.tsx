import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {spacing, typography} from '../utils/typography';
import Arrow from '../assets/icons/Arrow';
import {useTheme} from '../context/ThemeContext';

interface Props {
  mainImage: ImageSourcePropType;
  rateImage?: ImageSourcePropType;
  titleText: string;
  placeText: string;
  days: string;
}

const RecentActivity = ({
  mainImage,
  rateImage,
  titleText,
  placeText,
  days,
}: Props) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {borderColor: theme.colors.buttonBackground}]}>
      <View style={styles.leftContainer}>
        <Image source={mainImage} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text
            style={{...typography.favText, color: theme.colors.textPrimary}}>
            {titleText}
          </Text>
          <View style={styles.subTextContainer}>
            <Text
              style={{
                ...typography.subText,
                color: theme.colors.textSecondary,
              }}>
              {placeText}
            </Text>
            <View
              style={[
                styles.radio,
                {backgroundColor: theme.colors.textSecondary},
              ]}
            />
            <Text
              style={{
                ...typography.subText,
                color: theme.colors.textSecondary,
              }}>
              {days}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Image source={rateImage} style={styles.ratingImage} />
        <Arrow color={theme.colors.textPrimary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    paddingVertical: spacing.xl,
  },
  leftContainer: {flexDirection: 'row', alignItems: 'center', flex: 9},
  imageStyle: {width: 48, height: 48},
  textContainer: {marginLeft: spacing.xl},

  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.s,
  },
  radio: {
    width: 4,
    height: 4,

    borderRadius: 2,
    marginHorizontal: spacing.m,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    justifyContent: 'space-around',
  },
  ratingImage: {width: 32, height: 32},
  arrowIcon: {width: 5, height: 8},
});

export default RecentActivity;
