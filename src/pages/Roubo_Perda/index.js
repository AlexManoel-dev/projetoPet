import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from './styles'

export default function(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Alerta de Roubo ou Perda</Text>
            <Text style={{fontSize: 16}}>Selecione o Pet:</Text>

            <ScrollView style={styles.pets}>

            </ScrollView>

            <StatusBar
                hidden={false}
                backgroundColor='#fff'
                translucent={false}
                networkActivityIndicatorVisible={true} 
            />
        </View>
    )
}