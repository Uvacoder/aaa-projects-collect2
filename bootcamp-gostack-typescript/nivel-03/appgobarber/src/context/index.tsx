import React from 'react';
import AuthProvider from './AuthContext';

const AppProvider: React.FC = function ({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
