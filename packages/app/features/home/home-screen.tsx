import {
  Anchor,
  Button,
  H1,
  Input,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
  ScrollView,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings } from '@tamagui/lucide-icons'

// import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../user/detail-screen'
import { SettingsScreen } from '../settings/settings-screen'
import ItemCard from './item-card'

const items = [
  {
    name: 'Movies 1',
    desc: 'Watch tonight',
  },
  {
    name: 'Movies 2',
    desc: 'Watch tonight',
  },
  {
    name: 'Movies 3',
    desc: 'Watch tonight',
  },
  {
    name: 'Movies 4',
    desc: 'Watch tonight',
  },
  {
    name: 'Movies 5',
    desc: 'Watch tonight',
  },
  {
    name: 'Movies 6',
    desc: 'Watch tonight',
  },
]

export function HomeScreen({ navigation }) {
  const handleItemPress = (item) => () => {
    navigation.navigate('Select', { params: { item: item } })
  }

  return (
    <ScrollView>
      <YStack marginVertical="$4" space="$4">
        {items.map((item) => (
          <ItemCard
            onPress={handleItemPress(item)}
            item={item}
            animation="bouncy"
            size="$4"
            // w={250}
            // h={300}
            mx="$4"
            // scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            key={item.name}
          />
        ))}
      </YStack>
    </ScrollView>
  )
}
