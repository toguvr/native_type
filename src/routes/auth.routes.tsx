import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Logo from '../assets/logo.png';

const App = createStackNavigator();
const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </App.Navigator>
);

// const AppRoutes: React.FC = () => (
//   <App.Navigator
//     screenOptions={{
//       headerShown: true,
//       cardStyle: { backgroundColor: '#EBEEF8' },
//     }}
//     initialRouteName="Dashboard"
//   >
//     <App.Screen
//       options={{
//         headerShown: true,
//         headerTransparent: true,
//         headerTitle: () => <Image source={Logo} />,
//       }}
//       name="Dashboard"
//       component={Dashboard}
//     />
//     <App.Screen
//       options={{
//         headerTransparent: true,
//         headerTitle: () => <Image source={Logo} />,
//         headerBackTitleVisible: false,
//         headerLeftContainerStyle: {
//           marginLeft: 20,
//         },

//         headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
//       }}
//       name="Cart"
//       component={Cart}
//     />
//   </App.Navigator>
// );

export default AuthRoutes;
