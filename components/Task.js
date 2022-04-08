import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <BouncyCheckbox 
                    fillColor='black'
                    iconStyle={{borderColor: 'black'}}    
                />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create ({
    item:{
        backgroundColor: '#20212C',
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    boxStyle:{
        width: 25,
        height: 25,
        backgroundColor: '#eee',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});

export default Task;