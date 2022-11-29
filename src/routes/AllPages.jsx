import {NavigationContainer} from '@react-navigation/native';
import {creatNativeStackNavigation} from '@react-navigation/native-stack'

import Start from '../pages/start';

const Stack = creatNativeStackNavigation();

export default function AllPages(){
    return(

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}>

                    <Stack.Screen name="Start" component={Start} />

                </Stack.Navigator>

        </NavigationContainer>

    );
}