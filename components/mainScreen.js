import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList } from 'react-native';
import dayName from '../shared/dayName';
import ordinalNumbers from '../shared/ordinalNumbers';
import Icon from 'react-native-vector-icons/AntDesign';


export default function MainScreen() {

    const [modalOpen, setModalOpen] = useState(false);

    const [tasks, setTasks] = useState([
        { title: 'Go to gym', body: 'lorem ipsum', category: 'daily', key: '1' },
        { title: 'Finish Paper', body: 'lorem ipsum', category: 'urgent', key: '2'},
        { title: 'Shopping', body: 'lorem ipsum', category: 'weekly', key: '3'},
        { title: 'Call grandma', body: 'lorem ipsum', category: 'personal', key: '4'}
    ])

    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='fade'>
                <View style={styles.modalContent}>
                    <Text>HELLO WORLD!</Text>
                    <TouchableOpacity>
                        <Icon
                            style={styles.modalToggleOff}
                            name='checkcircle'
                            size={60}
                            color="#20212C"
                            iconStyle={{padding: 2}}
                            onPress={() => setModalOpen(false)}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>
            <View>
                <Text style={styles.headLine}>2-DOs on</Text>
                <Text style={styles.date}>{dayName()}, {ordinalNumbers()}</Text>
           
            </View>
            <TouchableOpacity>
                <Icon
                    style={styles.modalToggleOn}
                    name='pluscircle'
                    size={60}
                    color="#20212C"
                    iconStyle={{padding: 2}}
                    onPress={() => setModalOpen(true)}
                />
            </TouchableOpacity>
            <FlatList data={tasks} renderItem={({ item }) => (
                <Text style={styles.list}>{item.title}</Text>
            )}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },  
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
    },
    modalContent: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17181F'
    },
    modalToggleOn: {
        marginTop: 360,
        padding: 10,
        alignSelf: 'center'
    },
    modalToggleOff: {
        marginTop: 510,
        padding: 10,
        alignSelf: 'center'
    },
    list: {
        fontSize: 25,
        flex: 1,
        flexDirection: 'row',
        padding: 5,
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