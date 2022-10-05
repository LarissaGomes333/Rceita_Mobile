import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <View >
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

