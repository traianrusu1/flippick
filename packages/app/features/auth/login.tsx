import {
  Anchor,
  Button,
  H1,
  Input,
  Paragraph,
  Separator,
  Sheet,
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useCallback, useState } from 'react'
import { useLink } from 'solito/link'

export function LoginScreen({ navigation }) {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const linkProps = useLink({
    href: '/login',
  })

  const handleLoginPress = useCallback(() => {
    navigation.navigate('home')
  }, [])

  const handleInputChange = useCallback(
    (fieldName) => (val) => {
      console.log(val)
      console.log(fieldName)
    },
    []
  )

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to FlipPick</H1>
        <Paragraph ta="center">Please Login</Paragraph>
        <Theme name="orange">
          <YStack space="$4" maw={600}>
            <Input
              size="$4"
              borderWidth={2}
              placeholder="email"
              onChangeText={handleInputChange('username')}
            />
            <Input
              size="$4"
              borderWidth={2}
              placeholder="password"
              secureTextEntry
              onChangeText={handleInputChange('password')}
            />
            <Button onPress={handleLoginPress}>Login</Button>
          </YStack>
        </Theme>
        <Separator />
      </YStack>
      <SheetDemo />
    </YStack>
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
