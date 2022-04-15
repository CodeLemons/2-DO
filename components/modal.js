import { View, Text, StyleSheet, Modal, TextInput,
TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
                        <View style={{flex: 0, backgroundColor: 'red'}}>
                            <Icon 
                                name="arrowleft" 
                                size={60} 
                                style={{}}
                                color="#eee" 
                                onPress={() => setModal(false)} />
                        </View>
                        <View style={{backgroundColor: 'green'}}>
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
                                        <View style={{paddingRight: 50}}>
                                            <Icon 
                                                name="checkcircle" 
                                                size={80} 
                                                style={{paddingTop: 70}}
                                                color="#20212C" 
                                                onPress={props.handleSubmit} />
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
                <Icon name="pluscircle" size={80} color="#20212C" onPress={() => setModal(true)}/>
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
    }
})