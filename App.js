import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AccountsComponent from "./src/Accounts";
import UsersComponent from "./src/Users";
import StudentsComponent from "./src/Students";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createMaterialBottomTabNavigator();

function AccountsScreen() {
  return (
    <AccountsComponent/>
  );
}

function UsersScreen() {
  return (
    <UsersComponent/>
  );
}

function StudentsScreen() {
  return (
    <StudentsComponent/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator initialRouteName="Accounts" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Accounts') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Students') {
            iconName = focused ? 'school' : 'school-outline';
          }
          return <Ionicons name={iconName} size={30} color={'#4e85bf'} />;
        },
      })}>
        <TabNavigator.Screen name="Accounts" component={AccountsScreen}/>
        <TabNavigator.Screen name="User" component={UsersScreen}/>
        <TabNavigator.Screen name="Students" component={StudentsScreen}/>
      </TabNavigator.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

