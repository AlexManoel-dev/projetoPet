import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    pets:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13,
        width: wp('92.5%'),
        height: hp('30%')
    },
    item: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        width: wp('83.3%'),
        height: 110,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16
    },
    prod: {
        fontSize: 20,
        color: '#fff'
    },
    img:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        
    }
})