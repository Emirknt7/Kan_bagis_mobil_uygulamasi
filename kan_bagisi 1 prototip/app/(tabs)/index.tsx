import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from '@/src/screens/homeScreen';
import notificationScreen from '@/src/screens/notificationScreen';
import talepInfoScreen from '@/src/screens/talepInfoScreen';
import SignScreen from '@/src/screens/SignScreen';
import ProfileScreen from '@/app/(tabs)/profileScreen';
import SupportScreen from '@/src/screens/SupportScreen';
import SettingScreen from '@/src/screens/SettingScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="notificationScreen" component={notificationScreen} />
        <Stack.Screen name="talepInfoScreen" component={talepInfoScreen} />
        <Stack.Screen name="SignScreen" component={SignScreen} />
        <Stack.Screen name="profileScreen" component={ProfileScreen} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


