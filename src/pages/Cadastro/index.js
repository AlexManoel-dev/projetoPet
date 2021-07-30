import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles'

export default function(){

    const [nome,setNome] = useState('')
    const [rg,setRg] = useState('')
    const [cpf,setCpf] = useState('')
    const [telefone,setTelefone] = useState('')
    const [data,setData] = useState()
    const [img,setImg] = useState()

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <View style={styles.fotoUsuario}>
                <Image
                    style={styles.imgUsuario}
                    source={require('../../../assets/icon.png')}
                />
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder='Nome Completo'
                    style={styles.inputNome}
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <View style={styles.inputsMenores}>
                    <TextInputMask
                        placeholder='RG'
                        style={styles.inputMenor}
                        type={'cnpj'}
                        value={rg}
                        onChangeText={text => setRg(text)}
                    />
                    <TextInputMask
                        placeholder='CPF'
                        style={styles.input}
                        type={'cpf'}
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                    />
                </View>
                <View style={styles.inputsMenores}>
                    <TextInputMask
                        placeholder='Telefone'
                        style={styles.inputMenor}
                        type={'cel-phone'}
                        value={telefone}
                        onChangeText={text => setTelefone(text)}
                    />
                    <TextInputMask
                        placeholder='Dt. Nasc'
                        style={styles.input}
                        type={'datetime'}
                        value={data}
                        onChangeText={text => setData(text)}
                    />
                </View>
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