import { FadeInFlatList } from '@ja-ka/react-native-fade-in-flatlist';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';



const Task = () => {
    
    const [task, setTask] = useState([
        { title: 'Go to gym', category: 'daily', body:'lorem ipsum', key: '1' },
        { title: 'Finish Paper', category: 'urgent', body:'lorem ipsum', key: '2' },
        { title: 'Shopping', category: 'weekly', body:'lorem ipsum', key: '3' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '4' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '5' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '6' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '7' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '8' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '9' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '11' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '12' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '13' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '14' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '15' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '16' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '17' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '18' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '19' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '20' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '21' },
        { title: 'Take a shower', category: 'personal', body:'lorem ipsum', key: '22' },
    ])

    return (
        <View style={styles.container}>
            <FadeInFlatList 
                data={task}
                initialDelay={0}
                parallelItems={5}
                itemsToFadeIn={10}
                durationPerItem={500}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.boxStyle}>
                        <BouncyCheckbox 
                            isChecked={false}
                            text={item.title}
                            textStyle={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
                            size={35}
                            iconStyle={{ borderRadius: 10, borderColor: 'white'}}
                            fillColor='#20212C'
                            textDecorationColor='red' />
                    </View>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 3,
        alignItems: 'center',
    },
    boxStyle:{
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
        width: 360
    },
});

export default Task;