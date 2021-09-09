import React, {useContext} from "react";
import { View, Text, StatusBar, Image } from "react-native";
import color from '../styles/colors';
import {UsuarioContext} from '../context/UsuarioContext';

export default function HomeScreen(){

  const[login] = useContext (UsuarioContext);
  return(

    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar
        backgroundColor={color.PRIMARYCOLOR}
        barStyle="dark-content"
        translucent={true}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 100,
          fontStyle: 'normal',
          fontSize: 30,
        }}>
        Bienvenido {'\n' + login.usuario.user}
      </Text>
    </View>
  );
}
