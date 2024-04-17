import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './HomeView'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStackView from './HomeStackView';
import ListView from './ListView';

const Tab = createBottomTabNavigator();

const MainView = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home") {
          return <FontAwesome6 name="house" size={24} color="black" />
        }
        if (route.name === "Location") {
          return <FontAwesome6 name="location-arrow" size={24} color="black" />
        }
        if (route.name === "Discounts") {
          return <FontAwesome6 name="tag" size={24} color="black" />
        }
        if(route.name === "List"){
          return <MaterialIcons name="list-alt" size={24} color="black" />
        }
        if(route.name === "Settings"){
          return <MaterialIcons name="settings" size={24} color="black" />
        }
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeStackView} />
      <Tab.Screen name="Location" component={HomeView} />
      <Tab.Screen name="Discounts" component={HomeView} />
      <Tab.Screen name="List" component={ListView} />
      <Tab.Screen name="Settings" component={HomeView} />
    </Tab.Navigator>
  );
}
export default MainView;