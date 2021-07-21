import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Telas
import Home from './pages/Home/index'
import Consulta from './pages/Consulta/index'
import Noticias from './pages/Noticias/index'
import Roubo_Perda from './pages/Roubo_Perda/index'
import Mais from './pages/Mais/index'

const Stack = createStackNavigator()
const Windows = createBottomTabNavigator()

const imgHome = './assets/home.png'

export default function(){
    return(
        <NavigationContainer>
            <Windows.Navigator headerMode='none'>
                <Windows.Screen
                    name='Home'
                    component={Home}
                />
                <Windows.Screen
                    name='Consulta'
                    component={Consulta}
                />
                <Windows.Screen
                    name='Noticias'
                    component={Noticias}
                /> 
                <Windows.Screen
                    name='Roubo/Perda'
                    component={Roubo_Perda}
                />
                <Windows.Screen
                    name='Mais'
                    component={Mais}
                />           
            </Windows.Navigator>
        </NavigationContainer>
    )
}