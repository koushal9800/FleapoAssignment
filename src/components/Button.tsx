import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {spacing, typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';

const Button = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: theme.colors.buttonBackground},
      ]}>
      <Text style={[styles.textStyle, {color: theme.colors.textPrimary}]}>
        See more
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 100,

    alignItems: 'center',
  },
  textStyle: {
    ...typography.buttonText,

    padding: spacing.xl,
  },
});

export default Button;
