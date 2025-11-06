import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import TechNewsScreen from './screens/TechNewsScreen';
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import Colors from './constants/Colors'
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
      <Tab.Screen name="US News" component={USNewsScreen} />
      <Tab.Screen name="World News" component={WorldNewsScreen} />
      <Tab.Screen name="Tech News" component={TechNewsScreen} />
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
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Bookmarked News" component={BookmarkedNewsScreen} />
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
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{ title: 'News Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BookmarksContextProvider>
  );
}
