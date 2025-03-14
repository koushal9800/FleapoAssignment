import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HitlistScreen from '../screens/HitlistScreen';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Map from '../assets/icons/Map';
import People from '../assets/icons/People';
import Lists from '../assets/icons/Lists';
import HitList from '../assets/icons/HitList';
import {useTheme} from '../context/ThemeContext';

function MyTabBar({state, descriptors, navigation}: any) {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.background,
        paddingVertical: 10,
      }}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const IconComponent = options.tabBarIcon
          ? options.tabBarIcon({focused: isFocused})
          : null;

        return (
          <Pressable
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', padding: 4}}>
            <View style={{width: 35, height: 35, alignItems: 'center'}}>
              {IconComponent}
            </View>
            <Text
              style={{
                color: isFocused
                  ? theme.colors.textPrimary
                  : theme.colors.textSecondary,
                textTransform: 'uppercase',
                fontSize: 10,
                fontFamily: 'AvenirNextLTPro-Regular',
                fontWeight: '700',
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme.colors.background,display:'none'},
        tabBarHideOnKeyboard: true,
        
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Map color={focused ? '#FF9D9D' : '#969696'} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <People color={focused ? '#FF9D9D' : '#969696'} />
          ),
        }}
      />
      <Tab.Screen
        name="Lists"
        component={ListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Lists color={focused ? '#FF9D9D' : '#969696'} />
          ),
        }}
      />
      <Tab.Screen
        name="Hitlist"
        component={HitlistScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HitList color={focused ? '#FF9D9D' : '#969696'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/profileImage.png')}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderWidth: focused ? 2 : 0,
                borderColor: focused ? '#FF9D9D' : '#000',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
