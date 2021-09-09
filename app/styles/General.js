import { StyleSheet } from 'react-native'
import colors from './colors'

//Estilo para ImageBackground
const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
    }
})

export { imageBackgroundStyle }