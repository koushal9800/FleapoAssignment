import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';

const HitlistScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text
        style={{...typography.sectionTitle, color: theme.colors.textPrimary}}>
        HitlistScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HitlistScreen;
