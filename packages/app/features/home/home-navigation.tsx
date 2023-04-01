import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './home-screen'
import { SelectScreen } from './select-screen'

const Stack = createNativeStackNavigator<{
  Home: undefined
  Select: undefined
  // 'user-detail': {
  //   id: string
  // }
}>()

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Select"
        component={SelectScreen}
        options={({ route }) => ({ title: route.params.params.item.name })}
      />
    </Stack.Navigator>
  )
}
