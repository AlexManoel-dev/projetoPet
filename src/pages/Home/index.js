import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles'

export default function(){
    return(
        <View style={styles.container}>
            <View>
                {/* Colocar imagem */}
                <Text>Seja bem-vindo,</Text>
                <Text style={styles.txt}>Confira as novidades!</Text>

                <View>
                    <Text>Notícias</Text>
                    <View style={styles.noticias}></View>
                </View>

                <View>
                    <View>
                        <Text>Perdidos/Roubados</Text>
                        <View style={styles.viewsFinais}>

                        </View>
                    </View>
                    <View>

                    </View>
                        <Text>Localizados</Text>
                        <View style={styles.viewsFinais}>

                        </View>
                    </View>
            </View>
        </View>
    )
}