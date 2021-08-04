import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function(){
    return(
        <View style={styles.container}>
            <Text>Transferência de Propriedade</Text>
        
            <StatusBar
                hidden={false}
                backgroundColor='#fff'
                translucent={false}
                networkActivityIndicatorVisible={true} 
            />
        </View>
    )
}