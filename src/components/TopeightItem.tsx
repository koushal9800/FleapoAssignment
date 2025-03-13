import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet, ImageSourcePropType, TouchableOpacity} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

interface Props{
    imageBackground:ImageSourcePropType,
    image:ImageSourcePropType,
    title:string
}

const TopeightItem = ({imageBackground,image,title}:Props) => {
  const maxLength = 10; 

  
  const getEllipsedText = (title: string) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + '...'
      : title;
  };
  return (
    <TouchableOpacity>
      <ImageBackground
        source={imageBackground}
        style={styles.backgroundImage}>
        <Image
          source={image}
          style={styles.scoreImage}
        />
      </ImageBackground>
      <Text
        style={styles.titleStyle}>
        {getEllipsedText(title)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
backgroundImage:{
    width: 81,
    height: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:spacing.xl
  },
  scoreImage:{width: 32, height: 32},
  titleStyle:{
    ...typography.subText,
    color: colors.textPrimary,
    marginTop: spacing.m,
    
  }
})

export default TopeightItem;
