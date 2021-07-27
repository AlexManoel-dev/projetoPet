import React, { useState, useCallback } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from "axios"

import styles from './styles'
// import Navbar from '../Navbar/';
// import api from '../../services/api'
// import auth from '../../contexts/auth';

//  Ao abrir o aplicativo esta será a primeira tela apresentada para o usuário.
//  Nela ele poderá realizar o login na sua conta, inserindo os seus dados utilizados no cadastro,
//  ou criar uma conta nova, clicando no botão cadastre-se, que o levará para a tela de cadastro.    email-outline   lock-outline  login-variant



// const [email, setEmail] = useState(null);
// const [senha, setSenha] = useState(null);

// async function handleSubmit() {
//   try {
//     console.log(email, senha)
//     const response = await api.post('/sessions', { email, senha });
//     console.log("passsoo")
//     if (response.data.error) return alert(response.data.error);
//     const isLogged = auth.login(response.data.token);
//     alert(auth.getToken());

//   } catch (error) {
//     alert(`Serviço indisponível no momento!`);
//   }
// }

import Tabs from '../Tabs/index'
import { NavigationContainer } from '@react-navigation/native'

export default function Login() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedBorder, setIsFocusedBorder] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleViewFocus = useCallback(() => {
    setIsFocusedBorder(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleViewBlur = useCallback(() => {
    setIsFocusedBorder(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Faça o seu login</Text>
        <View style={[styles.sectionInput, { borderColor: isFocusedBorder ? '#00BFFF' : '#181818'}]}
        onFocus={handleViewFocus}>
          <MaterialCommunityIcons
            style={styles.inputIcon}
            name="email-outline"
            size={24}
            color={isFocused ? '#00BFFF' : '#c1bccc'}
          />
          <TextInput
            style={styles.textInput}
            placeholder='E-mail'
            placeholderTextColor='#e6e6e6'
            onChangeText={value => setEmail(value)}
            onFocus={handleInputFocus}
            onChangeText={value => setEmail(value)}
            onBlur={() => {
              handleBlur('email')
              handleInputBlur()
            }}
          />
        </View>
        <View style={[styles.sectionInput, { borderColor: isFocusedBorder ? '#00BFFF' : '#181818'}]}
        onFocus={handleViewFocus}>
          <MaterialCommunityIcons
            style={styles.inputIcon}
            name="lock-outline"
            size={24}
            color={isFocused ? '#00BFFF' : '#c1bccc'}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Senha'
            placeholderTextColor='#e6e6e6'
            onChangeText={value => setSenha(value)}
            onFocus={handleViewFocus}
            onBlur={() => {
              handleBlur('email')
              handleViewBlur()
            }}
          />
        </View>
        <TouchableOpacity style={styles.buttonLogin}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}>
          <Text style={styles.textButtonSignUp}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}