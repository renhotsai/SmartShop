
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainView from './MainView';
import { Image, Text, View } from 'react-native';
import DonateView from './DonateView';
import MainStackView from './HomeStackView';


const Drawer = createDrawerNavigator();


const DrawerView = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerTintColor:"black",
            headerTitle:()=>(
                <Image source={require('../assets/smartshop.png')} style={{ width: 100, height: 30 }} />
           )
        }}>
            <Drawer.Screen name="Main" component={MainView}/>
        </Drawer.Navigator>
    )
}

export default DrawerView;