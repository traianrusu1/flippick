import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings } from '@tamagui/lucide-icons'

// import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Tab = createBottomTabNavigator()

// const Stack = createNativeStackNavigator<{
//   home: undefined
//   'user-detail': {
//     id: string
//   }
// }>()

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    // <YStack f={1} jc="center" ai="center" p="$4" space>
    //   <YStack space="$4" maw={600}>
    //     <H1 ta="center">Welcome to Tamagui.</H1>
    //     <Paragraph ta="center">
    //       Here's a basic starter to show navigating from one screen to another. This screen uses the
    //       same code on Next.js and React Native.
    //     </Paragraph>

    //     <Separator />
    //     <Paragraph ta="center">
    //       Made by{' '}
    //       <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
    //         @natebirdman
    //       </Anchor>
    //       ,{' '}
    //       <Anchor
    //         color="$color12"
    //         href="https://github.com/tamagui/tamagui"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         give it a ⭐️
    //       </Anchor>
    //     </Paragraph>
    //   </YStack>

    //   <XStack>
    //     <Button {...linkProps}>Link to user</Button>
    //   </XStack>

    //   <SheetDemo />
    // </YStack>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icon

          if (route.name === 'Home') {
            Icon = Home
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
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen
        name="Settings"
        component={UserDetailScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
