import { View } from 'react-native';
import Main from './src/components/Main.jsx';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Main />
    </View>
  );
}