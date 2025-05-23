import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CartScreen from "./screens/cartScreen/CartScreen";
import AddressScreen from "./screens/addressScreen/AddressScreen";
import {Provider} from 'react-redux';
import {store} from './store/store';


const Stack = createStackNavigator();

export default function App()  {
  return(

    <Provider store={store}>
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name= 'Cart' component={CartScreen}/>
        <Stack.Screen name= 'Address' component={AddressScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  )
}
