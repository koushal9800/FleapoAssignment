import React from 'react';
import {View, Text, Image,StyleSheet, ImageSourcePropType, TouchableOpacity} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

interface Props {
    mainImage: ImageSourcePropType;
    rateImage?: ImageSourcePropType;
    titleText:string;
    placeText: string;
    days: string
}

const RecentActivity = ({mainImage,rateImage,titleText,placeText,days}:Props) => {
  return (
    <TouchableOpacity
      style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={mainImage}
          style={styles.imageStyle}
        />
        <View style={styles.textContainer}>
          <Text
            style={{...typography.subText,color: colors.textPrimary,}}
            >
            {titleText}
          </Text>
          <View
            style={styles.subTextContainer}>
            <Text
              style={{...typography.subText, color: colors.textSecondary,}}>
              {placeText}
            </Text>
            <View
              style={styles.radio}
            />
            <Text
              style={{...typography.subText, color: colors.textSecondary,}}>
             {days}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={styles.rightContainer}>
        <Image
          source={rateImage}
          style={styles.ratingImage}
        />
        <Image
          source={require('../assets/icons/rightArrow.png')}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    borderBottomWidth: 1,
    paddingVertical: spacing.xl,
    borderColor: colors.buttonBackground,
  },
  leftContainer:{flexDirection: 'row', alignItems: 'center', flex: 9},
  imageStyle:{width: 48, height: 48},
  textContainer:{marginLeft: spacing.xl},
  titleText:{
    ...typography.subText
  },
  subTextContainer:{flexDirection: 'row', alignItems: 'center', marginTop: spacing.s},
  radio:{
    width: 4,
    height: 4,
    backgroundColor: colors.textSecondary,
    borderRadius: 2,
    marginHorizontal: spacing.m,
  },
  rightContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    justifyContent: 'space-around',
  },
  ratingImage:{width: 32, height: 32},
  arrowIcon:{width: 5, height: 8}
})

export default RecentActivity;
