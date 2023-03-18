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
  Text,
  YStack,
  Spinner,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useCallback, useState } from 'react'
import { useLink } from 'solito/link'
import { useForm, Controller } from 'react-hook-form'
import AppConfig from 'app/constants'
import axios from 'axios'
import api from 'app/helpers/api'

enum NetworkStates {
  INIT = 'INIT',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export function LoginScreen({ navigation }) {
  const [loggedInStatus, setLoggedInStatus] = useState<NetworkStates>(NetworkStates.INIT)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'test@test.com',
      password: '123456',
    },
  })
  const linkProps = useLink({
    href: '/login',
  })

  const handleLoginPress = useCallback(() => {
    navigation.navigate('tabs')
  }, [])

  const handleInputChange = useCallback(
    (fieldName) => (val) => {
      console.log(val)
      console.log(fieldName)
    },
    []
  )
  const onSubmit = async (data) => {
    setLoggedInStatus(NetworkStates.FETCHING)
    console.log(data)
    try {
      // setTimeout(() => {
      await axios.post(api('/auth/login'), data)
      setLoggedInStatus(NetworkStates.SUCCESS)
      navigation.navigate('tabs')

      // }, 1000)
    } catch (e) {
      console.log(e)
      console.log('AN ERROR OCCURRED')
      setLoggedInStatus(NetworkStates.ERROR)
    }
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to FlipPick</H1>
        <Paragraph ta="center">Please Login</Paragraph>
        <Theme name="orange">
          <YStack space="$4" maw={600}>
            <Controller
              control={control}
              rules={{
                required: 'An email is required',
                minLength: { value: 5, message: 'Must be at least 5 characters long' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  size="$4"
                  borderWidth={2}
                  placeholder="Email"
                  // onChangeText={handleInputChange('username')}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && <Text color="red">{errors.username.message}</Text>}

            <Controller
              control={control}
              rules={{
                required: 'An email is required',
                minLength: { value: 6, message: 'Must be at least 6 characters long' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  size="$4"
                  borderWidth={2}
                  placeholder="Password"
                  // onChangeText={handleInputChange('username')}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && <Text color="red">{errors.password.message}</Text>}

            <Button onPress={handleSubmit(onSubmit)}>Login</Button>

            {loggedInStatus === NetworkStates.FETCHING && (
              <Spinner size="large" color="$orange10" />
            )}
            {loggedInStatus === NetworkStates.ERROR && (
              <Text color="red">Wrong email or password combination!</Text>
            )}
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
