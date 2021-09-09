import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';
import QrScreen from '../screens/QrScreen';
import RecordScreen from '../screens/RecordScreen';
import VersionScreen from '../screens/VersionScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTab from '../components/CustomTab';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Escaner"
        screenOptions={{
          activeTintColor: '#fff',
          activeBackgroundColor: '#feb72b',
          inactiveTintColor: 'gray',
        }}
        tabBar={props => <CustomTab {...props} />}>
        {/* <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Escaner"
          component={QrScreen}
          options={{
            title: 'Escáner',
            tabBarIcon: ({color, size}) => (
              <Icon name="qr-code-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Historial"
          component={DataScreen}
          options={{
            title: 'Historial',
            tabBarIcon: ({color, size}) => (
              <Icon name="clipboard-outline" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Cuenta"
          component={RecordScreen}
          options={{
            title: 'Cuenta',
            tabBarIcon: ({color, size}) => (
              <Icon name="person-outline" size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Info"
          component={VersionScreen}
          options={{
            title: 'Info',
            tabBarIcon: ({color, size}) => (
              <Icon name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
