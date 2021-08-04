import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-datepicker'
import styles from './styles'

export default function(){

    const [detalhes,setDetalhes] = useState('')
    const [data,setData] = useState('')

    const [ativado,setAtivado] = useState(false)

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Alerta de Roubo ou Perda</Text>
            <Text style={{fontSize: 16}}>Selecione o Pet:</Text>

            {/* Tentar com ScrollView depois, porque está dando errado */}
            <ScrollView style={styles.pets}>

            </ScrollView>

            <View style={styles.teste}>
                <Text>Clique no mapa o local da ocorrência:</Text>
                <View style={styles.mapa}>

                </View>
            </View>

            <View style={styles.detalhes}>
                <Text>Descreva detalhes da ocorrência:</Text>
                <TextInput
                    style={styles.detalhesInput}
                    placeholder={'Digite aqui os detalhes da ocorrência'}
                    value={detalhes}
                    onChangeText={text => setDetalhes(text)}
                />
            </View>

            <View style={styles.rodape}>
                <View style={styles.data}>

                </View>

                <TouchableOpacity
                    style={styles.btnEnviar}
                    onPress={!ativado ? ()=>{setAtivado(true), alert('Enviando...')} : ()=>{setAtivado(false)}}
                >
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>ENVIAR ALERTA</Text>
                </TouchableOpacity>
            </View>

            <StatusBar
                hidden={false}
                backgroundColor='#fff'
                translucent={false}
                networkActivityIndicatorVisible={true} 
            />
        </ScrollView>
    )
}