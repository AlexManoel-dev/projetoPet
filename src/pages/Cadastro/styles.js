import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 30
    },
    form:{
        width: wp('92%'),
        height: 380,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 40,
        alignItems: 'center',
        paddingTop: 20
    },
    inputNome:{
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
    },
    input:{
        width: '43%',
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
    },
    inputMenor:{
        width: '45%',
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
        marginRight: 10
    },
    inputsMenores:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    fotoUsuario:{
        alignItems: 'center',
        paddingBottom: 15
    },
    imgUsuario:{
        width: 130,
        height: 130
    },
    alterarFoto:{
        marginTop: 15, 
        borderWidth: 1,
        borderColor: 'black', 
        borderRadius: 13, 
        width: '33%', 
        alignItems: 'center'
    },
    txtAlterarFoto:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputCep:{
        height: 40,
        width: '20%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
    },
    inputNum:{
        height: 40,
        width: '13%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginRight: 10
    },
    inputBairro:{
        height: 40,
        width: '27%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5, 
        marginRight: 10
    },
    inputComplemento:{
        height: 40,
        width: '41%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginRight: 10
    },
    uf:{
        width: '30%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13
    },
    cidade:{
        width: '40%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13
    },
    btnCadastro:{
        alignItems: 'center',
        width: '90%',
        marginTop: 18,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: 'black',
        backgroundColor: '#DDD'
    },
    txtBtn:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})