import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/Ionicons'

// Telas
// import Home from './pages/Home/index'
// import Consulta from './pages/Consulta/index'
// import Noticias from './pages/Noticias/index'
// import Roubo_Perda from './pages/Roubo_Perda/index'
// import Mais from './pages/Mais/index'
import Login from './pages/Login/index'
import Tabs from '../src/pages/Tabs/index'


const Stack = createStackNavigator()
// const Windows = createBottomTabNavigator()

export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen
                    name='Login'
                    component={Login}
                />    
                <Stack.Screen
                    name='Tabs'
                    component={Tabs}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}