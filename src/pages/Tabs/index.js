import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

// Telas
import Home from '../Home/index'
import Consulta from '../Consulta/index'
import Noticias from '../Noticias/index'
import Roubo_Perda from '../Roubo_Perda/index'
import Mais from '../Mais/index'

const Stack = createStackNavigator()
const Windows = createBottomTabNavigator()

export default function(){
    return(
          <Windows.Navigator
                 screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                      } 
                      else if (route.name === 'Consulta') {
                        iconName = focused ? 'md-search-sharp' : 'md-search-outline';
                      }
                      else if (route.name === 'Noticias') {
                        iconName = focused ? 'md-newspaper' : 'md-newspaper-outline';
                      }
                      else if (route.name === 'Roubo/Perda') {
                        iconName = focused ? 'md-paw' : 'md-paw-outline';
                      }
                      else if (route.name === 'Mais') {
                        iconName = focused ? 'md-ellipsis-horizontal-sharp' : 'md-ellipsis-horizontal-outline';
                      }
                      // You can return any component that you like here!
                      return <Icon name={iconName} size={size} color={color} />
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    style:{
                        borderRadius: 23, 
                        marginBottom: 10, 
                        marginLeft: 10, 
                        marginRight: 10
                    },
                    keyboardHidesTabBar: true
                  }}
            >
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
    )
}