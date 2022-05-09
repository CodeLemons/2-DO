import { View, Text, StyleSheet, Modal, TextInput,
TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker'

export default function ModalComponent({ addTaskItem }) {

    const [modal, setModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();

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
                                style={{paddingRight: 30}}
                                color="#eee" 
                                onPress={() => setModal(false)} />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.sectionTitle}>New Task</Text>
                            <Formik
                                initialValues={{ title: '', category: ''}}
                                onSubmit={(values) => {
                                    addTaskItem(values);
                                    setModal(false);
                                }} 
                            >
                                {({handleChange, setFieldValue, handleSubmit, values}) => (
                                    <View style={{ flex: 0}}>
                                        <View style={{alignItems: 'center'}}>
                                            <TextInput 
                                                color='white'
                                                style={styles.titleInput}
                                                placeholder="Task title"
                                                onChangeText={handleChange('title')}
                                                value={values.title} 
                                                placeholderTextColor="#eee" />
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={styles.sectionCategory}>Category</Text>
                                        </View>
                                        <View style={styles.dialogInput}>
                                            <Picker
                                            style={{color: 'white'}}
                                            dropdownIconColor='white'
                                            themeVariant='dark'
                                            selectedValue={selectedLanguage}
                                            mode='dialog'
                                            onValueChange={(itemValue, itemIndex) => {
                                                setFieldValue('category', itemValue)
                                                setSelectedLanguage(itemValue)
                                            }}>
                                            <Picker.Item label="Business" value="Business" />
                                            <Picker.Item label="Personal" value="Personal" />
                                            <Picker.Item label="Urgent" value="Urgent" />
                                            <Picker.Item label="Daily" value="Daily" />
                                            <Picker.Item label="Weekly" value="Weekly" />
                                            </Picker>
                                        </View>
                                        <View style={{paddingTop: 300, paddingLeft: 22}}>
                                            <TouchableOpacity 
                                                onPress={handleSubmit}
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
        // flex: 1,
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
        marginTop: 50,
        marginBottom: 20,
        paddingLeft:2 
    },
    titleInput: {
        backgroundColor: '#20212C',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 345,
    },
    dialogInput: {
        backgroundColor: '#20212C',
        borderRadius: 10,
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 345,
        paddingLeft: 4
    },
    sectionCategory: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 220
    },
    iconView: {
        paddingTop: 50,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#da2d2d',
        width: 300
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