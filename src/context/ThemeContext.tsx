import React, {createContext, useState, useContext, useEffect} from 'react';
import {Appearance, AppState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {lightTheme, darkTheme, ThemeType, getSystemTheme} from '../utils/color';

interface ThemeContextProps {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    Appearance.getColorScheme() === 'dark',
  );
  const [theme, setTheme] = useState<ThemeType>(getSystemTheme);

  useEffect(() => {
    const loadStoredTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        const isDark = storedTheme === 'dark';
        setIsDarkMode(isDark);
        setTheme(isDark ? darkTheme : lightTheme);
      }
    };

    loadStoredTheme();

    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      if (!isDarkMode) {
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      }
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        setTheme(getSystemTheme());
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => subscription.remove();
  }, []);

  const toggleTheme = async () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    setTheme(newIsDarkMode ? darkTheme : lightTheme);
    await AsyncStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
