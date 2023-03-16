import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings } from '@tamagui/lucide-icons'
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { LoginScreen } from 'app/features/auth/login'

const Stack = createNativeStackNavigator<{
  login: undefined
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
