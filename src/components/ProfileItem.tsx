import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

interface Props {
    image: ImageSourcePropType;
    title:string;
    subTitle: string;
    userBadge?:ImageSourcePropType
}

const ProfileItem = ({image,title,subTitle,userBadge}:Props) => {
  return (
    <View
      style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={image}
          style={styles.userImage}
        />
        <View style={styles.textContainer}>
            <View style={styles.leftContainer} >
            <Text
            style={styles.titleStyle}>
            {title}
          </Text>
          <Image source={userBadge} style={styles.userBadgeStyle} resizeMode='contain' />
            </View>
          
          <Text
            style={styles.subTitleStyle}>
            {subTitle}
          </Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../assets/icons/rightArrow.png')}
          style={styles.rightIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.xll,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.buttonBackground,
    paddingBottom: spacing.xl,
    marginBottom:spacing.xl
  },
  leftContainer:{flexDirection: 'row', alignItems: 'center'},
  userImage:{width: 48, height: 48},
  textContainer:{marginLeft: spacing.xl},
  titleStyle:{
    ...typography.buttonText,
    color: colors.textPrimary,
  },
  subTitleStyle:{
    ...typography.subText,
    color: colors.textSecondary,
    marginTop: spacing.s,
  },
  rightIcon:{width: 5, height: 8},
  userBadgeStyle:{ width:16, height:16, marginLeft:spacing.xl }
})

export default ProfileItem;
