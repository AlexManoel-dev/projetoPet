import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    container2:{
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 20
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
        display: 'flex'
    },
    btnPesquisa:{
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    btnOutros:{
        borderWidth: 1,
        borderColor: 'black',
        width: 250
    },
    outros:{
        flexDirection: 'row',
        display: 'flex',
    }
})