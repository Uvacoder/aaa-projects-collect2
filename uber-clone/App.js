import React from 'react';
import { StyleSheet, YellowBox } from 'react-native';

import Map from './src/components/Map';

YellowBox.ignoreWarnings([
  'componentWillMount has been renamed',
  'Error boundaries should implement'
])
export default function App() {
  return (
    <Map className={styles.container}/>
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