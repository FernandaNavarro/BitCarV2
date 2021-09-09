import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { loginStyles } from '../styles/styles'
import colors from '../styles/colors'


function MyButton(props){
    const sButton= props.transparent?loginStyles.btnTransparent:loginStyles.btnMain
    const sText= props.transparent?{colors: colors.PRIMARYCOLOR}: null
    return(
        <TouchableOpacity style = {[sButton, props.style]}
        onPress={props.onPress}>
            <Text style={[loginStyles.btntxt,sText]}>
                {props.titulo}
            </Text>
        </TouchableOpacity>
    )
}

export default MyButton;
