import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Picker } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'
import api from '../../services/api'

export default function(){

    const [nome,setNome] = useState('')
    const [rg,setRg] = useState('')
    const [cpf,setCpf] = useState('')
    const [telefone,setTelefone] = useState('')
    const [data,setData] = useState()
    const [email,setEmail] = useState('')
    const [cep,setCep] = useState('')
    const [uf,setUf] = useState('')
    const [cidade,setCidade] = useState('')
    const [endereco,setEndereco] = useState('')
    const [num,setNum] = useState('')
    const [bairro,setBairro] = useState('')
    const [complemento,setComplemento] = useState('')
    const [img,setImg] = useState()

    const [alterar,setAlterar] = useState(false)
    const [confirmar,setConfirmar] = useState(false)
    const [action,setAction] = useState('cadastrar')

    const navigation = useNavigation()

    function handleStart() {
        navigation.navigate('Login');
      }

    var myData = {
        "action": action, 
        "email": email, 
        "nome": nome, 
        "telefone": telefone, 
        "complemento": complemento
    }

    function onSubmit(){
        api.post('/template/usuario_json', { 
            myData
         })
            alert(myData)
            handleStart()
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <View style={styles.fotoUsuario}>
                <Image
                    style={styles.imgUsuario}
                    source={require('../../../assets/icon.png')}
                />

                <TouchableOpacity 
                    style={styles.alterarFoto}
                    onPress={
                        !alterar ? ()=>{setAlterar(true), alert('Alterando...')} : ()=>{setAlterar(false)
                    }}
                >
                    <Text style={styles.txtAlterarFoto}>Alterar Foto</Text>                    
                </TouchableOpacity>
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
                <TextInput
                    placeholder='Email'
                    style={styles.inputNome}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <View style={styles.inputsMenores}>
                    <TextInput
                        placeholder='CEP'
                        style={styles.inputCep}
                        value={cep}
                        onChangeText={text => setCep(text)}
                    />  
                    <Picker
                        selectedValue={uf}
                        style={styles.uf}
                        onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
                    >
                        <Picker.Item label="AC" value="ac" />
                        <Picker.Item label="AL" value="al" />
                        <Picker.Item label="AP" value="ap" />
                        <Picker.Item label="AM" value="am" />
                        <Picker.Item label="BA" value="ba" />
                        <Picker.Item label="CE" value="ce" />
                        <Picker.Item label="DF" value="df" />
                        <Picker.Item label="ES" value="es" />
                        <Picker.Item label="GO" value="go" />
                        <Picker.Item label="MA" value="ma" />
                        <Picker.Item label="MT" value="mt" />
                        <Picker.Item label="MS" value="ms" />
                        <Picker.Item label="MG" value="mg" />
                        <Picker.Item label="PA" value="pa" />
                        <Picker.Item label="PB" value="pb" />
                        <Picker.Item label="PR" value="pr" />
                        <Picker.Item label="PE" value="pe" />
                        <Picker.Item label="PI" value="pi" />
                        <Picker.Item label="RR" value="rr" />
                        <Picker.Item label="RO" value="ro" />
                        <Picker.Item label="RJ" value="rj" />
                        <Picker.Item label="RN" value="rn" />
                        <Picker.Item label="RS" value="rs" />
                        <Picker.Item label="SC" value="sc" />
                        <Picker.Item label="SP" value="sp" />
                        <Picker.Item label="SE" value="se" />
                        <Picker.Item label="TO" value="to" />
                    </Picker>

                    <Picker
                        selectedValue={cidade}
                        style={styles.cidade}
                        onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}
                    >
                        <Picker.Item label="Indaiatuba" value="indaiatuba" />
                    </Picker>
                </View>
                <View style={styles.inputsMenores}>
                    <TextInput
                        placeholder='N°'
                        style={styles.inputNum}
                        value={num}
                        onChangeText={text => setNum(text)}
                    />
                    <TextInput
                        placeholder='Bairro'
                        style={styles.inputBairro}
                        value={bairro}
                        onChangeText={text => setBairro(text)}
                    />
                    <TextInput
                        placeholder='Complemento'
                        style={styles.inputComplemento}
                        value={complemento}
                        onChangeText={text => setComplemento(text)}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.btnCadastro}
                    // onPress={
                    //     !confirmar ? ()=>{setConfirmar(true), alert('Cadastrando...')} : ()=>{setConfirmar(false)
                    // }}                   
                    onPress={() =>{
                        onSubmit()
                    }}
                >
                    <Text style={styles.txtBtn}>Confirmar</Text>
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