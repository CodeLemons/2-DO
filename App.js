import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, SafeAreaView } from 'react-native';
import Heading from './components/heading';
import Task from './components/task';
import Modal from './components/modal';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Heading />
      <Task />
      <Modal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#17181F',
      padding: 10,
      justifyContent: 'space-around'
  }
});
