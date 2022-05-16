import { FadeInFlatList } from '@ja-ka/react-native-fade-in-flatlist';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';
import ModalComponent from './modal';
import Icon from 'react-native-vector-icons/EvilIcons';



const Task = () => {
    
    const [task, setTask] = useState([])


    const addTaskItem = (taskItem) => {
        taskItem.key = Math.random().toString();
        setTask((currentTask) => {
            return [taskItem, ...currentTask]
        });
    }

    const deleteTaskItem = (key) => {
        setTask((prevTasks) => {
            return prevTasks.filter(task => task.key != key);
        });
    };


    const ListEmptyView = () => {
        return (
            <View>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 230, color: 'white'}}> Start by adding tasks below</Text>
            </View>
        );
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
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    text={item.title}
                                    textStyle={{color: 'white', fontSize: 20, fontWeight: 'bold',}}
                                    size={35}
                                    iconStyle={{ borderRadius: 10, borderColor: '#da2d2d'}}
                                    fillColor='#20212C'
                                    textDecorationColor='red' />
                                {/* <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold', color: '#da2d2d'}}>{item.category}</Text> */}
                                <Icon style={{paddingRight: 5}} name="close" size={30} color="#da2d2d" onPress={() => deleteTaskItem(item.key)} />
                        </View>
                    </View>
                    

            )}
            ListEmptyComponent={ListEmptyView}/>
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
        color: 'green',
        backgroundColor: '#20212C',
        padding: 15,
        borderRadius: 10,
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