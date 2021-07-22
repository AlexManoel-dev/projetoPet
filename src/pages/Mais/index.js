import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function(){
    return(
        <View>
            <Text>Mais</Text>
            <StatusBar
                hidden={false}
                backgroundColor='#fff'
                translucent={false}
                networkActivityIndicatorVisible={true} 
            />
        </View>
    )
}