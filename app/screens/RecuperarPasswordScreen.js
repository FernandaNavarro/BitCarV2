import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {loginStyles} from '../styles/styles';
import color from '../styles/colors';
import ToolBar from '../components/ToolBar';
import MyTextInput from '../components/MyTextInput';

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function RecuperarPasswordScreen(props) {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: color.WHITE}}>
      <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true} />
      <View style={{}}>
        <ToolBar
          titulo="Recuperar contraseña"
          onPressLeft={() => goToScreen(props, 'Login')}
          iconLeft={require('../recursos/images/atras.png')}
        />
      </View>
      <View style={[loginStyles.container, {padding: 40}]}>
        <Text style={{textAlign: 'auto', fontSize: 18}}>
          Si necesitas solicitar permisos,
          realiza un ticket en helpdesk al departamento de TI.
        </Text>
        <Text style={{textAlign: 'center', fontSize: 25 }}>
        CAMBIO DE CONTRASEÑA
        </Text>
        <MyTextInput keyboardType="default" placeholder="Ingresa nueva contraseña" image="lock" />
        <MyTextInput keyboardType="default" placeholder="Repite la contraseña" image="check" />
        <View style={loginStyles.btnMain}>
          <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
            <Text style={loginStyles.btntxt}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
