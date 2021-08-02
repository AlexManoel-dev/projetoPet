import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    pets:{
        width: wp('90%'),
        height: hp('30%'),
        borderWidth: 1,
        borderColor: 'black'
    }
})