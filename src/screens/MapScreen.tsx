import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {typography} from '../utils/typography';
import {useTheme} from '../context/ThemeContext';

const MapScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text
        style={{...typography.sectionTitle, color: theme.colors.textPrimary}}>
        MapScreen
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: theme.colors.buttonBackground},
        ]}
        onPress={toggleTheme}>
        <Text style={{color: theme.colors.textPrimary}}>Switch Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
  },
});

export default MapScreen;
