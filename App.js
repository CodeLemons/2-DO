import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native-web';
import MainScreen from './components/mainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#17181F'
  },
});
