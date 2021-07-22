import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(){

    const [nome,setNome] = useState('')

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Consulta Pet</Text>
                <Text>Consulte os dados do Pet pelo Número do Registro</Text>
                <View style={styles.pesquisa}>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={text=>{
                            setNome(text)
                        }}
                        autoCapitalize='words'
                    />
                    <TouchableOpacity style={styles.btnPesquisa}>
                    <Icon name="search1" size={18} color="#999" />
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar
                hidden={false}
                backgroundColor='#fff'
                translucent={false}
                networkActivityIndicatorVisible={true} 
            />
        </View>
    )
}