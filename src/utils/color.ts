import { Appearance } from 'react-native';
export const colors = {
    background: '#1C1C1E',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    separator: '#323234',
    buttonBackground: 'rgba(255, 255, 255, 0.1)',
    textNearby:'#34A853',
    borderColor:'#000'
}

export const darkColors = {
    background: '#fff',
    textPrimary: '#000',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
    separator: '#DAE0E2',
    buttonBackground: 'rgba(0, 0, 0, 0.1)',
    textNearby:'#34A853',
    borderColor:'#fff'
}

export type ThemeType = {
    colors: typeof colors;
  };
  
  export const lightTheme: ThemeType = { colors: colors };
  export const darkTheme: ThemeType = { colors: darkColors };
  
 
  export const getSystemTheme = () => (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme);