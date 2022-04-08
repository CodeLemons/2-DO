import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BoxStyle from '../shared/boxStyle';


const Task = (props) => {
    
    const [task, setTask] = useState([
        { title: 'Go to gym', category: 'daily', body:'lorem ipsum', key: '1' },
        { title: 'Finish Paper', category: 'urgent', body:'lorem ipsum', key: '2' },
        { title: 'Shopping', category: 'weekly', body:'lorem ipsum', key: '3' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '4' },
    ])

    return (
        <View>
            <FlatList data={task} renderItem={({ item }) => (
                <BoxStyle>
                    <Text style={styles.itemText}>{ item.title }</Text>
                </BoxStyle>
            )}/>
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
    itemText :{
        fontSize: 18,
    }
});

export default Task;