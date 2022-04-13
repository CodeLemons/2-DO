import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayName from '../shared/dayName';
import ordinalNumbers from '../shared/ordinalNumbers';

export default function Heading() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>2-DOs on</Text>
            <Text style={styles.sectionDate}>{dayName()}, {ordinalNumbers()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'blue'
    },
    sectionTitle: {
        marginTop: 110,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    },
    sectionDate: {
        marginTop: 10,
        fontSize: 22,
        color: 'white'
    }
})