import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PrestationListe from './PrestationListe';
import PrestationAccueil from './PrestationAccueil';
import InfoPrestations from './InfoPrestations';




const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 117, height: 40 }}
      source={require('./PMU.jpg')}
    />
  );
}

export default function Boutique({navigation}){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="PrestationAccueil">
        <Stack.Screen options={{headerShown: false}}
          name = "PrestationAccueil"
          component = { PrestationAccueil }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'transparent'
            },
            headerBackTitle : 'Catégories',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle : '',
          }}
          name = "PrestationListe"
          component = { PrestationListe }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'transparent'
            },
            headerBackTitle : 'Prestations',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle : '',
          }}
          name = "InfoPrestations"
          component = { InfoPrestations }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontStyle: 'italic',
  },
  icon: {
    paddingLeft: 15,
  }
})
