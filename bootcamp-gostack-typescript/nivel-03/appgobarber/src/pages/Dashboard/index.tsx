import React from 'react';
import { View, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';

const Dashboard: React.FC = function () {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 80 }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
