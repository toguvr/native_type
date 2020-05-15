import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './auth';
// import { ToastProvider } from './toast';

const AppProvider: React.FC = ({children}) => {
  return (
    <AuthProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </AuthProvider>
  );
};

export default AppProvider;
