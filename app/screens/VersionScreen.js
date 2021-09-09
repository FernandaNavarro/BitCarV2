import React from 'react';
import {Text, View} from 'react-native';


export default function VersionScreen (props){
  return(
    <View style={{flex: 1}}>
      <Text
        style={{
          textAlign:'left',
          alignItems:'flex-start',
          fontStyle: 'italic',
          fontSize: 26,
          color:'#ca0029'
        }}>
        Versión 1.0
      </Text>
      <Text
        style={{
          textAlign:'left',
          alignItems:'flex-start',
          fontStyle: 'normal',
          fontSize: 20
        }}>
        Nuevo: Ingreso con usuario HELPDESK {'\n'}
        Nuevo: Recuperar contraseña {'\n'}
        Nuevo: Pestañas QR, Historial, Cuenta e Info {'\n'}
        Nuevo: Escáner de código QR {'\n'}
        Nuevo: Botón cerrar sesión {'\n'}
      </Text>
    </View>
  );
}



