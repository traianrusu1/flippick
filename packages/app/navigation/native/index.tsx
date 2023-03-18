import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings, User } from '@tamagui/lucide-icons'
import { NavigationContainer } from '@react-navigation/native'

// import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { LoginScreen } from 'app/features/auth/login'
import { SettingsScreen } from '../../features/settings/settings-screen'
import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { HomeScreen } from '../../features/home/home-screen'
import { HomeNavigation } from '../../features/home/home-navigation'

const Tab = createBottomTabNavigator()

// const Stack = createNativeStackNavigator<{
//   home: undefined
//   'user-detail': {
//     id: string
//   }
// }>()

export function TabNavigatorScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icon

          if (route.name === 'Home') {
            Icon = Home
          } else if (route.name === 'User') {
            Icon = User
          } else if (route.name === 'Settings') {
            Icon = Settings
          }

          // You can return any component that you like here!
          return <Icon size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={UserDetailScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator<{
  login: undefined
  tabs: undefined
  // 'user-detail': {
  //   id: string
  // }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="tabs" component={TabNavigatorScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
