import React, {useState,useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import { loginStyles } from '../styles/styles';
import MyTextInput from '../components/MyTextInput';
import MyButton from "../components/MyButton";
import color from '../styles/colors';
import { UsuarioContext } from '../context/UsuarioContext';


export default function LoginScreen(props) {

  const [login,loginAction] = useContext(UsuarioContext)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(false)

  return (
    <View style={[loginStyles.container, {padding:26}]}>
      <StatusBar backgroundColor={color.PRIMARYCOLOR} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={require("../recursos/images/logo.png")}
          style={{ height: 250, width: 250 }}
        />
      </View>
      <MyTextInput keyboardType="default" placeholder="Usuario" image="user" 
      value= {user} onChangeText={ (user) => setUser(user)}/>
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={!hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value= {password} onChangeText={ (password) => setPassword(password)}
      />
      <MyButton 
        titulo= 'Iniciar Sesión'
        onPress={() => iniciarSesion()}
      />
      {/* <View style={loginStyles.btnTransparent}>
        <TouchableOpacity>
          <Text style={[loginStyles.btntxt, { color: color.PRIMARYCOLOR }]}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <TouchableOpacity onPress={()=> goToScreen('RecuperarPassword')}>
          <Text
            style={[
              loginStyles.txtTransparent,
              { textDecorationLine: "underline" }
            ]}
          >
            Olvidé mi contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  function iniciarSesion() {
    loginAction({
      type: 'sign' , data:{
        user,password
      }
    })
    goToScreen('Principal')
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }
}
