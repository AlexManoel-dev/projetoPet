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
        height: 300,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 40,
        alignItems: 'center',
        paddingTop: 20
    },
    inputNome:{
        width: '90%',
        height: 40,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
    },
    input:{
        width: '43%',
        height: 40,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
    },
    inputMenor:{
        width: '45%',
        height: 40,
        backgroundColor: '#DDD',
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
    }
})