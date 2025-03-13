import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { spacing, typography } from '../utils/typography';
import { colors } from '../utils/color';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>See more</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonBackground,
    borderWidth: 2,
    borderRadius: 100,
    
    alignItems: 'center',
  },
  textStyle: {
    ...typography.buttonText,
    color: colors.textPrimary,
    padding: spacing.xl,
  },
});

export default Button;
