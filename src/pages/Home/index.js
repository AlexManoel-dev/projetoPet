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

                <View style={styles.viewNoticias}>
                    <Text>Notícias</Text>
                    <View style={styles.noticias}></View>
                </View>

                <View style={styles.views}> 
                    <View style={styles.responsiveBox}>
                        <Text>Perdidos/Roubados</Text>
                        <View style={styles.viewsFinais}>

                        </View>
                    </View>
                    
                    <View>
                        <Text>Localizados</Text>
                        <View style={styles.viewsFinais}>

                        </View>
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