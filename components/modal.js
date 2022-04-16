import { View, Text, StyleSheet, Modal, TextInput,
TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import React, { useState } from 'react';
import { Formik } from 'formik';

export default function Heading() {

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <Modal animationType='slide' visible={modal} onRequestClose={() => setModal(false)}>
                <KeyboardAvoidingView
                    behavior='padding'
                    style={{ flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <View style={{flex: 0, marginRight: 290, marginTop: 30}}>
                            <Icon 
                                name="chevron-left" 
                                size={60} 
                                style={{}}
                                color="#eee" 
                                onPress={() => setModal(false)} />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.sectionTitle}>New Task</Text>
                            <Formik
                                initialValues={{ title: ''}}
                                onSubmit={(values) => {
                                    console.log(values);
                                }} 
                            >
                                {(props) => (
                                    <View style={{ flex: 0, alignItems: 'center'}}>
                                        <TextInput 
                                            style={styles.titleInput}
                                            placeholder="Task title"
                                            onChangeText={props.handleChange('title')}
                                            value={props.values.title} 
                                            placeholderTextColor="#eee" />
                                        <Text style={styles.sectionCategory}>Category</Text>
                                        <View style={{
                                            flex: 0,
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
                                        <View>
                                            {/* <Icon 
                                                name="checkcircle" 
                                                size={80}
                                                color="#20212C" 
                                                onPress={props.handleSubmit} /> */}
                                            <TouchableOpacity 
                                                onPress={props.handleSubmit}
                                                style={styles.submitButton}>
                                                <Text style={styles.buttonText}>CREATE TASK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setModal(true)}>
                        <Icon style={styles.iconShadow} name="plus" size={100} color="#da2d2d" />
                </TouchableOpacity>
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
        paddingLeft: 25 
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
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#da2d2d',
    },
    taskButton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#17181F',
        borderWidth: 1,
        borderColor: '#DA2D2D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    iconShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    }
})