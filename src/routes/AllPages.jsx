import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Start from '../pages/start';
import Explanation from '../pages/explanation'
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return(

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}>
                    
                    <Stack.Screen name="Start" component={Start} />
                    <Stack.Screen name="Explanation" component={Explanation} />
                    <Stack.Screen name="Home" component={Home} />

                    

                </Stack.Navigator>

        </NavigationContainer>

    );
}