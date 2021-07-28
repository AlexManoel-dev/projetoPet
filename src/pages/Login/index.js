import React, { useState, useCallback } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

// import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from "axios"

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

export default function Login({navigation}) {

  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')

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
            onChangeText={value => setEmail(email)}
            onFocus={handleInputFocus}
            // onChangeText={value => setEmail(value)}
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
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.textInput}
            placeholder='Senha'
            placeholderTextColor='#e6e6e6'
            onChangeText={value => setSenha(senha)}
            onFocus={handleViewFocus}
            onBlur={() => {
              handleBlur('email')
              handleViewBlur()
            }}
          />
        </View>
        <TouchableOpacity style={styles.buttonLogin}
          onPress={() => navigation.navigate('Tabs')}
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