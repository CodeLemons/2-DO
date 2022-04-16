import { FadeInFlatList } from '@ja-ka/react-native-fade-in-flatlist';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';



const Task = () => {
    
    const [task, setTask] = useState([
        { title: 'Go to gym', category: 'daily', key: '1' },
        { title: 'Finish Paper', category: 'urgent', key: '2' },
        { title: 'Shopping', category: 'weekly', key: '3' },
        { title: 'Take a shower', category: 'personal', key: '4' },
        { title: 'Take a shower', category: 'personal', key: '5' },
        { title: 'Take a shower', category: 'personal', key: '6' },
        { title: 'Take a shower', category: 'personal', key: '7' },
        { title: 'Take a shower', category: 'personal', key: '8' },
        { title: 'Take a shower', category: 'personal', key: '9' },
        { title: 'Take a shower', category: 'personal', key: '11' },
        { title: 'Take a shower', category: 'personal', key: '12' },
        { title: 'Take a shower', category: 'personal', key: '13' },
        { title: 'Take a shower', category: 'personal', key: '14' },
        { title: 'Take a shower', category: 'personal', key: '15' },
        { title: 'Take a shower', category: 'personal', key: '16' },
        { title: 'Take a shower', category: 'personal', key: '17' },
        { title: 'Take a shower', category: 'personal', key: '18' },
        { title: 'Take a shower', category: 'personal', key: '19' },
        { title: 'Take a shower', category: 'personal', key: '20' },
        { title: 'Take a shower', category: 'personal', key: '21' },
        { title: 'Take a shower', category: 'personal', key: '22' },
    ])

    return (
        <View style={styles.container}>
            <FadeInFlatList 
                fadingEdgeLength={30}
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
                            iconStyle={{ borderRadius: 10, borderColor: '#da2d2d'}}
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