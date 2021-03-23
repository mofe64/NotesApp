import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity,Keyboard,TouchableWithoutFeedback } from 'react-native';
import notes from '../data/notesStore';

const EditNotesScreen = function ({ navigation }) {
    const note = navigation.state.params.note;
    const noteId = note.id;
    const [noteTitle, setNoteTitle] = useState(note.title)
    const [noteContent, setNoteContent] = useState(note.content)
    const noteTitleHandler = (noteTitle) => {
        setNoteTitle(noteTitle);
    }
    const noteContentHandler = (noteContent) => {
        setNoteContent(noteContent)
    }
    const handleSave = (navigation) => {
        notes.forEach(note => {
            if (note.id == noteId) {
                note.title = noteTitle;
                note.content = noteContent;
                note.date = Date().toString();
            }
        })
        navigation.push('Home')
    }
    console.log(noteTitle)
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <Text style={styles.inputHeader}>Note Title</Text>
                <TextInput
                    style={styles.input}
                    value={noteTitle}
                    onChangeText={noteTitleHandler}
                />
                <Text style={styles.inputHeader}>Note Content</Text>
                <TextInput
                    style={styles.inputFill}
                    value={noteContent}
                    onChangeText={noteContentHandler}
                    multiline
                    numberOfLines={100}
                />
                <TouchableOpacity
                    onPress={() => {
                        handleSave(navigation)
                    }}
                style={styles.btn}>
                    <Text style={styles.btntext}>Save</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
}

EditNotesScreen.navigationOptions = navigationData => {
    return {
        headerBackTitle: 'back'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    inputHeader: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal:10
    },
    inputFill: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 50
    },
    btn: {
        backgroundColor: 'blue',
        marginTop: 20,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btntext: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18
    }

})

export default EditNotesScreen;