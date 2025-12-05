import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SoftwareGuidesScreen from './screens/SoftwareGuidesScreen';
import HardwareGuidesScreen from './screens/HardwareGuidesScreen';
import PurchaseGuidesScreen from './screens/PurchaseGuidesScreen';
import BookmarkedGuidesScreen from './screens/BookmarkedGuidesScreen';
import SubmitGuidesScreen from './screens/SubmitGuidesScreen'
import GuidesDetailScreen from './screens/GuidesDetailScreen';
import Colors from './constants/Colors';
import BookmarksContextProvider from './store/context/bookmarks-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: Colors.primary300,
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Tab.Screen name="Hardware" component={HardwareGuidesScreen} />
      <Tab.Screen name="Software" component={SoftwareGuidesScreen} />
      <Tab.Screen name="Purchase" component={PurchaseGuidesScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary300,
          headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Drawer.Screen name="TechGuides" component={TabNavigator} />
      <Drawer.Screen name="Bookmarked Guides" component={BookmarkedGuidesScreen} />
      <Drawer.Screen name="Submit Guide" component={SubmitGuidesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <BookmarksContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.primary300,
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuidesDetail"
          component={GuidesDetailScreen}
          options={{ title: 'Guides Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BookmarksContextProvider>
  );
}
