import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './home-screen'
import { SelectScreen } from './select-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  select: undefined
  // 'user-detail': {
  //   id: string
  // }
}>()

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="select" component={SelectScreen} />
    </Stack.Navigator>
  )
}
