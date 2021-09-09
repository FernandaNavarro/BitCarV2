import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RecuperarPasswordScreen from '../screens/RecuperarPasswordScreen';
import TabNavigator from '../navigation/TabNavigator';


const AppNavigation = createStackNavigator ({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal: {
        screen: TabNavigator,
        navigationOptions:{
            headerShown: false,
        }
    },
    RecuperarPassword: {
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    
})

export default createAppContainer(AppNavigation)