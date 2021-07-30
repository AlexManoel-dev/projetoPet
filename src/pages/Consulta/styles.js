import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    container2:{
        borderWidth: 1,
        borderColor: 'black',
        height: 240,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 20,
        padding: 15,
    },
    txt:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10
    },
    pesquisa:{
        flexDirection: 'row',
        display: 'flex',
    },
    btnPesquisa:{
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    btnOutros:{
        borderRadius: 10,
        width: 250,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    },
    iconeOutros:{
        marginLeft: 10
    },
    outros:{
        flexDirection: 'row',
        display: 'flex',
    },
    imgPet:{
        width: 100,
        height: 100
    },
    dadosPet:{
        width: wp('53%'),
        height: hp('14%'),
        position: 'absolute',
        marginLeft: 120,
        marginTop: 15
    },
    txtPet:{
        fontSize: 13
    },
    dadosDono:{
        width: wp('78%'),
        height: hp('15%'),
        marginTop: 10
    }
})