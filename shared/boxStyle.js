import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function BoxStyle(props){
 

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <BouncyCheckbox 
                    size={30}
                    fillColor='black'
                    iconStyle={{borderColor: 'black'}}    
                />
                {props.children}
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create ({
    item:{
        backgroundColor: '#20212C',
        padding: 15,
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
        width: 40,
        height: 40,
        backgroundColor: '#eee',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
});
