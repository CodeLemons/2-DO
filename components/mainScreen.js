import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import dayName from '../shared/dayName';
import ordinalNumbers from '../shared/ordinalNumbers';


export default function MainScreen() {
    return (
        <View>
            <Text style={styles.headLine}>2-DO's on</Text>
            <Text style={styles.date}>{dayName()}, {ordinalNumbers()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headLine: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '16%',
        width: '100%',
        height: '19%',
        color: 'white',
        textAlign: 'left',
        paddingLeft: 40,
    },
    date: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '0%',
        width: '100%',
        color: 'white',
        textAlign: 'left',
        paddingLeft: 40,
    }
    // reactangle: {
    //     position: 'absolute',
    //     marginTop: 170,
    //     marginLeft: 70,
    //     width: 320,
    //     height: 40,
    //     backgroundColor: '#20212C',
    // }
})