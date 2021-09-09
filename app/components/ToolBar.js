import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import color from '../styles/colors'

export default function ToolBar(props){

    return (
        <View style={[props.style, { height: 73, marginTop: 30, backgroundColor: color.PRIMARYCOLOR }]}>
            {props.titulo && 
                <Text style={{  
                    marginTop: 'auto', textAlign: 'center', fontSize: 27, 
                    color: color.WHITE }}>{props.titulo}
                </Text>
            }
            {props.iconLeft &&
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 40 }} onPress={props.onPressLeft}>
                <Image style={{ tintColor: color.WHITE, width: 27, height: 27 }} source={props.iconLeft} />
            </TouchableOpacity>
            }
        </View>
    )
}
