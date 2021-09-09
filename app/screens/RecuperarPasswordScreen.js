import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { loginStyles } from "../styles/styles";
import color from "../styles/colors";
import ToolBar from "../components/ToolBar";

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function RecuperarPasswordScreen(props) {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      style={{ backgroundColor: color.WHITE}}>
      <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true}/>
      <View style={{}}>
      <ToolBar
      titulo='Recuperar contraseña'
      onPressLeft={() => goToScreen(props, 'Login') }
      iconLeft = {require ('../recursos/images/atras.png')}/>
      </View>
      <View style={[loginStyles.container, { padding: 50 }]}>
        <Text style={{textAlign: 'center', fontSize: 22}}>
          Comunicate con el dpto. de TI para levantar el reporte
        </Text>
        {/* <MyTextInput
          keyboardType="default"
          placeholder="E-mail"
          image="user"
        /> */}

        {/* <View style={loginStyles.btnMain}>
          <TouchableOpacity onPress = {() => goToScreen(props,'Login')}>
            <Text style={loginStyles.btntxt}>Recuperar</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
}
