import {
  StatusBar,
  Image
} from 'react-native';
import { Styles } from './Styles/Styles';
import Home from './Screens/Home';
import MyCard from './Screens/MyCard';
import Settings from './Screens/Settings';
import Statistics from './Screens/Statistics';
import { ThemeProvider } from './Styles/ThemeContext';
import { useTheme } from './Styles/ThemeContext';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function AppComponents() {
  
  const theme  = useTheme();

  const navigationTheme = theme.isDarkMode ? DarkTheme : DefaultTheme;
  
  return (
    <NavigationContainer theme={navigationTheme} style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name='Home' component={Home}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/home.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }
        }/>
        <Tab.Screen name ='My Card' component={MyCard}
         options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/myCards.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}
          />
        <Tab.Screen  name='Statistics' component={Statistics}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/statictics.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}/>
        <Tab.Screen name ='Settings' component={Settings}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/settings.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppComponents/>

    </ThemeProvider>
  );
}




    




















































