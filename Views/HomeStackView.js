import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonateView from "./DonateView";
import HomeView from "./HomeView";
import RecipeView from './RecipeView';
import LocatorView from './LocatorView';

const Stack = createNativeStackNavigator()

const HomeStackView = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeContent" component={HomeView} />
            <Stack.Screen name="Donate" component={DonateView} />
            <Stack.Screen name="RecipeView" component={RecipeView} />
            <Stack.Screen name="Locator" component={LocatorView}/>
        </Stack.Navigator>
    )
}

export default HomeStackView
