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
      width: '100%',
      height: '100%',
      backgroundColor: '#17181F',
  }
});
