import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../../functions/colors'

import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import Home from '../../screens/Home';
import Friends from '../../screens/Friends';
import { color } from 'react-native-reanimated';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray_dark,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons
            name={focused ? 'home' : 'home-outline'}
            size={25}
            color={color}
          />
        }}
      />
      <Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons
            name={focused ? 'account-group' : 'account-group-outline'}
            size={25}
            color={color}
          />
        }}
      />
      <Screen
        name="Friends2"
        component={Friends}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons
            name="television-play"
            size={25}
            color={color}
          />
        }}
      />
      <Screen
        name="Friend3"
        component={Friends}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons
            name={focused ? 'store' : 'store-outline'}
            size={25}
            color={color}
          />
        }}
      />
      <Screen
        name="Friends4"
        component={Friends}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialIcons
            name={focused ? 'notifications' : 'notifications-none'}
            size={25}
            color={color}
          />
        }}
      />
      <Screen
        name="Friends5"
        component={Friends}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons
            name="menu"
            size={25}
            color={color}
          />
        }}
      />
    </Navigator>
  );
}

export default MyTabs