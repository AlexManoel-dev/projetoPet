import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        width: '100%',
    },
    textInput: {
        // height: 60,
        // margin: 7,
        // width: '80%',
        // borderWidth: 0,
        // borderRadius: 10,
        // paddingLeft: 10,
        // backgroundColor: '#404040',
        // color: 'white'
        flex: 1,
        paddingVertical: 18,
        fontSize: 17,
        color: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#e6e6e6',
        marginBottom: 7,
    },
    box: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLogin: {
        backgroundColor: '#00BFFF',
        height: 60,
        width: '80%',
        margin: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonLogin: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#262626'
    },
    buttonSignUp: {
        height: 60,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonSignUp: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#e6e6e6',
    },
    buttonForgotPassword: {
        height: 60,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonForgotPassword: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#e6e6e6',
    },
    boxInput: {
        width: '100%',
        flexDirection: 'row'
    },
    inputIcon: {
        marginLeft: 10,
        marginTop: 2
    },
    sectionInput: {
        backgroundColor: '#181818',
        alignItems: 'center',
        flexDirection: 'row', 
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#181818'
      },
})