import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    pets:{
        width: wp('92%'),
        height: hp('30%'),
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13
    },
    mapa:{
        width: wp('92%'),
        height: hp('18%'),
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13
    },
    teste:{
        marginTop: 10
    },
    detalhes:{
        marginTop: 10
    },
    detalhesInput:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: wp('92%'),
        height: hp('8%'),
        marginTop: 10,
        paddingLeft: 10  
    },
    data:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: wp('40%'),
        height: hp('5%'),
        marginTop: 23,
        paddingLeft: 10          
    },
    btnEnviar:{
        marginTop: 23,
        backgroundColor: '#DDD',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,       
        justifyContent: 'center' ,
        padding: 7
    },
    rodape:{
        display: 'flex', 
        flexDirection:'row',
        marginRight: 20,
        marginLeft: 20,
        justifyContent: 'space-between',
    }
})