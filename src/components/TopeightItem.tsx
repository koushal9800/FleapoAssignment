import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';

interface Props {
  imageBackground: ImageSourcePropType;
  image: ImageSourcePropType;
  title: string;
}

const TopeightItem = ({imageBackground, image, title}: Props) => {
  const {theme, toggleTheme} = useTheme();
  const maxLength = 10;

  const getEllipsedText = (title: string) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + '...'
      : title;
  };
  return (
    <TouchableOpacity>
      <ImageBackground source={imageBackground} style={styles.backgroundImage}>
        <Image source={image} style={styles.scoreImage} />
      </ImageBackground>
      <Text style={[styles.titleStyle, {color: theme.colors.textPrimary}]}>
        {getEllipsedText(title)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: 81,
    height: 81,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  scoreImage: {width: 32, height: 32},
  titleStyle: {
    ...typography.favText,

    marginTop: spacing.m,
  },
});

export default TopeightItem;
