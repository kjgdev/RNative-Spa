import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Home, Bag, Appointment, Info,AppointmentDetail } from './src/components/screens/index'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home': { iconName = 'home'; break; }
          case 'Appointment': { iconName = 'event-note'; break; }
          case 'Bag': { iconName = 'local-grocery-store'; break; }
          case 'Info': { iconName = 'account-circle'; break; }
        }
        // You can return any component that you like here!
        return (
          <Icon name={iconName} size={25} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#EB5757',
      inactiveTintColor: '#BDBDBD',
      //cố định tab bar bên dưới
      keyboardHidesTabBar: true,
      style: {
        position: 'absolute',
      },
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Appointment" component={Appointment} />
    <Tab.Screen name="Bag" component={Bag} />
    <Tab.Screen name="Info" component={Info} />
  </Tab.Navigator>
  );
}

const App = () => {
  return (
    <AppointmentDetail></AppointmentDetail>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Tabbar'>       
    //     <Stack.Screen name="Tabbar" component={HomeTabs} options={{headerShown: false}} />
    //     <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} options={{headerShown: false}} />
    //   </Stack.Navigator>
     
    // </NavigationContainer>
  );
};

export default App;
