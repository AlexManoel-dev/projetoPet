import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 15
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
        marginLeft: 10
    }
})