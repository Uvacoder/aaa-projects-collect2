import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = function () {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;
