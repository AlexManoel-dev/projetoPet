import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

export default function(){

    const [nome,setNome] = useState('')
    const [ativado,setAtivado] = useState(false)
    const [status,setStatus] = useState('REGULAR')
    const [proprietario,setProprietario] = useState('Alex Vinicius de Souza Manoel')
    const [email,setEmail] = useState('alexmanoel93@gmail.com')
    const [cel,setCel] = useState('(19) 99352-1344')
    const [data,setData] = useState('27/07/2021')
    const [nomePet,setNomePet] = useState('Beethoven')
    const [raca,setRaca] = useState('Boladeiro de Berna')
    const [idade,setIdade] = useState('2 anos')
    const [cor,setCor] = useState('Preto/Branco/Caramelo')
    const [porte,setPorte] = useState('Grande')
    const [img,setImg] = useState()

    const navigation = useNavigation()

    function transferencia(){
        navigation.navigate('Transferencia')
    }

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
                        <Icon name="search" size={35} color="#999" />
                    </TouchableOpacity>
                </View>
                
                <View>
                    <View style={styles.container2}>
                        <Image 
                            style={styles.imgPet}
                            source={
                                require('../../../assets/icon.png')
                            } 
                            />
                            <View style={styles.dadosDono}>
                                <Text style={styles.txtPet}>
                                    Status: {status}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Proprietário: {proprietario}
                                </Text>
                                <Text style={styles.txtPet}>
                                    E-mail: {email}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Cel: {cel}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Data da Aquisição: {data}
                                </Text>
                            </View>
                            <View style={styles.dadosPet}>
                                <Text style={styles.txtPet}>
                                    Nome do Pet: {nomePet}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Raça: {raca}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Idade: {idade}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Cor: {cor}
                                </Text>
                                <Text style={styles.txtPet}>
                                    Porte: {porte}
                                </Text>
                            </View>
                    </View>
                    <View style={styles.outros}>
                        <TouchableOpacity 
                            style={styles.btnOutros} 
                            onPress={ /*transferencia()*/ !ativado ? ()=>{setAtivado(true), alert('Pesquisando...')} : ()=>{setAtivado(false)}}
                        >
                            <Text>Outros Pets deste Proprietário</Text>
                            <Icon name="arrow-redo-sharp" size={35} color="#999" style={styles.iconeOutros}/>
                        </TouchableOpacity>
                    </View>
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