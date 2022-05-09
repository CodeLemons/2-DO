import { FadeInFlatList } from '@ja-ka/react-native-fade-in-flatlist';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';
import ModalComponent from './modal';



const Task = () => {
    
    const [task, setTask] = useState([
        { title: 'Go to gym', category: 'daily', key: '1' },
        { title: 'Finish Paper', category: 'urgent', key: '2' },
        { title: 'Shopping', category: 'weekly', key: '3' },
    ])


    const addTaskItem = (taskItem) => {
        taskItem.key = Math.random().toString();
        setTask((currentTask) => {
            return [taskItem, ...currentTask]
        });
    }


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
            <View style={{flex: 0}}>
                <ModalComponent addTaskItem={addTaskItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 4,
        alignItems: 'center',
        marginBottom: 30
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