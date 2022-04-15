import { View, Text, StyleSheet, Modal, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

export default function Heading() {

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <Modal animationType='slide' visible={modal}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Text style={styles.sectionTitle}>New Task</Text>
                            <View> 
                                <TextInput 
                                    style={styles.titleInput}
                                    placeholder="Task title" 
                                    placeholderTextColor="#eee" />
                                <TextInput
                                    style={styles.bodyInput} 
                                    multiline 
                                    placeholder="Task Description" 
                                    placeholderTextColor="#eee" />
                        </View>
                            <Text style={styles.sectionCategory}>Category</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row', 
                            margin: 10,
                            padding: 10,
                            marginRight: 155}}>
                            <View style={{width: 30, height: 30, backgroundColor: 'red', margin: 5}}/>
                            <View style={{width: 30, height: 30, backgroundColor: 'red', margin: 5}}/>
                            <View style={{width: 30, height: 30, backgroundColor: 'red', margin: 5}}/>
                            <View style={{width: 30, height: 30, backgroundColor: 'red', margin: 5}}/>
                            <View style={{width: 30, height: 30, backgroundColor: 'red', margin: 5}}/>
                        </View>
                        <Icon 
                            name="arrow-down-circle-sharp" 
                            size={80} 
                            style={{marginBottom: 75}}
                            color="#20212C" 
                            onPress={() => setModal(false)} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style={styles.iconView}>
                <Icon name="add-circle" size={80} color="#20212C" onPress={() => setModal(true)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#17181F',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 100,
        marginBottom: 40,
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
    },
    sectionCategory: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 213
    },
    iconView: {
        paddingTop: 50,
    }
})