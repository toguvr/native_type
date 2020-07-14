import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../pages/Profile';
import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';
import Dashboard from '../pages/Dashboard';

export const routes = {
  dashboard: 'Dashboard',
  profile: 'Profile',
  appointmentCreated: 'AppointmentCreated',
  createAppointment: 'CreateAppointment',
};

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <App.Screen name={routes.dashboard} component={Dashboard} />
    <App.Screen name={routes.profile} component={Profile} />
    <App.Screen
      name={routes.appointmentCreated}
      component={AppointmentCreated}
    />
    <App.Screen name={routes.createAppointment} component={CreateAppointment} />
  </App.Navigator>
);

export default AppRoutes;
