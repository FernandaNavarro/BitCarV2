import React, {useContext, useEffect} from 'react';
import {Text, View, Alert, BackHandler} from 'react-native';
import {UsuarioContext} from '../context/UsuarioContext';
import MyButton2 from '../components/MyButton2';


function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      console.log('hardwareBackPress close');
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

export default function RecordScreen(props) {
  useBackButton(desconectarse);

  const [login, loginAction] = useContext(UsuarioContext);

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          alignItems:'flex-start',
          fontStyle: 'normal',
          fontSize: 26,
        }}>
        Usuario: {'\n' + login.usuario.user}
      </Text>
      <View style={{alignItems:'center'}}>
        <MyButton2 titulo="Cerrar Sesión" onPress={() => desconectarse()}/>
        </View>
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
          // goToScreen('Login'); //redireccionar a LoginScreen no TabScreen
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
