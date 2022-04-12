import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Heading() {

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.wrapper}>
            <Modal animationType='slide' visible={modal}>
                <View style={styles.modalContent}>
                    <Text style={styles.heading}>New Task</Text>
                    <View style={{marginBottom: '60%'}}>
                        <View style={styles.titleInput}>
                            <TextInput placeholder="Task title"></TextInput>
                        </View>
                        <View style={styles.bodyInput}>
                            <TextInput multiline placeholder="Task Description"></TextInput>
                        </View>
                    </View>
                    <Icon name="arrow-down-circle-sharp" size={80} color="#20212C" onPress={() => setModal(false)}/>
                </View>
            </Modal>
            <Icon name="add-circle" size={80} color="#20212C" onPress={() => setModal(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: '#17181F',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapper: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 80,
        paddingRight: 213
    },
    titleInput: {
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
        width: 345,
    },
    bodyInput: {
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
        width: 345,
        height: 100
        
    }
})