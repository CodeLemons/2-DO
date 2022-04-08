import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, SafeAreaView } from 'react-native';
import Task from './components/Task';
import dayName from './shared/dayName';
import ordinalNumbers from './shared/ordinalNumbers';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>2-DOs on</Text>
        <Text style={styles.sectionDate}>{dayName()}, {ordinalNumbers()}</Text>
        <View style={styles.items}>
          <Task />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#17181F',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  sectionDate: {
    fontSize: 22,
    color: 'white'
  },
  items: {
    marginTop: 30,
  }

});
