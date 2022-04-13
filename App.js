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
      justifyContent: 'space-evenly',
      padding: 15
  },
  gradient: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 20,
  }
});
