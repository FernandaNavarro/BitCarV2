import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  Alert,
  BackHandler,
} from 'react-native';
import color from '../styles/colors';
import {UsuarioContext} from '../context/UsuarioContext';
import MyButton from '../components/MyButton';


function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      console.log('hardwareBackPress close');
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

export default function PrincipalScreen(props) {
  useBackButton(desconectarse);

  const [login, loginAction] = useContext(UsuarioContext);


  return (
    
    // Boton cerrar y texto
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar
        backgroundColor={color.PRIMARYCOLOR}
        barStyle="dark-content"
        translucent={true}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          fontStyle: 'normal',
          fontSize: 26,
        }}>
        Bienvenido {'\n' + login.usuario.user}
      </Text>
      <MyButton titulo="Cerrar Sesión" onPress={() => desconectarse()} />
    </View>
   
  );


  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }

  function desconectarse() {
    Alert.alert('Salir', '¿Esta seguro que desea cerrar sesión?', [
      {
        text: 'Si',
        onPress: () => {
          loginAction({
            type: 'sign-out',
            data: {},
          });
          goToScreen('Login');
        },
      },
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  }
}


