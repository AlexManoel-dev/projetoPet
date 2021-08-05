import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from '../../pages/Login/index'

export default function(props){
    return(
        <Modal
            animationType='slide'
            transparent={false}
            visible={props.esqueceuSenha}
        >
      <View>
        <TouchableOpacity
          onPress={()=>{
            {props.setEsqueceuSenha}
          }}
        >
          <Icon name="close-outline" size={60}/>
        </TouchableOpacity>
      </View>
    </Modal>
    )
}