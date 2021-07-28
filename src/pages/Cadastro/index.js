import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles'

export default function(){

    const [nome,setNome] = useState('')
    const [cpf,setCpf] = useState('')
    const [cell,setCell] = useState('')
    const [img,setImg] = useState()

    return(
        <View style={styles.container}>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInputMask
                        placeholder='RG'
                        style={styles.inputRg}
                        type={'cnpj'}
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                    />
                    <TextInputMask
                        placeholder='CPF'
                        style={styles.input}
                        type={'cpf'}
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                    />
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