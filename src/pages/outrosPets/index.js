import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import styles from './styles'

const produtos = [
    {
        id:'001',
        desc:['Mouse', '25.00']
    },
    {
        id:'002',
        desc:['Teclado', '50.00']
    },
    {
        id:'003',
        desc:['Monitor', '430.00']
    },
    {
        id:'004',
        desc:['Gabinete', '300.00']
    },
    {
        id:'005',
        desc:['SSD', '250.00']
    }
]

export default function(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Pets</Text>

            <ScrollView style={styles.pets}>
                <FlatList
                    data={produtos}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => <View style={styles.item}><Text style={styles.prod}>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text></View>}
                />
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