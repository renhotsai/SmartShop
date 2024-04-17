
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import MainView from './Views/MainView'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerView from './Views/DrawerView';
import LoginView from './Views/LoginView';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginView}/>
        <Stack.Screen name="Drawer" component={DrawerView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
