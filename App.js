import { StyleSheet, SafeAreaView } from 'react-native';
import Heading from './components/heading';
import Modal from './components/modal';
import Task from './components/task';


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
