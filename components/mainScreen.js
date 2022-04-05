import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function MainScreen() {
    return (
        <View>
            <Text style={styles.headLine}>2-DO's on{"\n"}/current-date/</Text>
            <View style={styles.reactangle} />
        </View>
    )
}

const styles = StyleSheet.create({
    headLine: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '20%',
        width: '100%',
        height: '50%',
        color: 'white',
        textAlign: 'left',
        paddingLeft: 40,
    },
    reactangle: {
        position: 'absolute',
        marginTop: 170,
        marginLeft: 70,
        width: 320,
        height: 40,
        backgroundColor: '#20212C',
    }
})