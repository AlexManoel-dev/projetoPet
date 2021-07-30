import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    container2:{
        
    },
    txt:{
        fontWeight: 'bold',
        marginBottom: 10
    },
    noticias:{
        borderWidth: 1,
        borderColor: 'black',
        height: 150,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
        marginTop: 3,
    },
    viewsFinais:{
        borderWidth: 1,
        borderColor: 'black',
        width: wp('35%'),
        height: hp('22%'),
        borderRadius: 20,
        marginTop: 3,
    },
    viewNoticias:{
        marginBottom: 20
    },
    views:{
        display: 'flex', 
        flexDirection:'row',
        marginRight: 20,
        marginLeft: 20,
        justifyContent: 'space-around',
    }
})