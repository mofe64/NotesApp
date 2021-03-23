import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import notes from '../data/notesStore';


const NewNoteScreen = function ({navigation}) {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteContent, setNoteContent] = useState("")
    const noteTitleHandler = (noteTitle) => {
        setNoteTitle(noteTitle);
    }
    const noteContentHandler = (noteContent) => {
        setNoteContent(noteContent)
    }
    const saveNote = (navigation) => {
        const newNote = {
            id: notes.length + 1,
            title: noteTitle,
            deleted: false,
            content: noteContent,
            date: Date().toString()
        }
        notes.unshift(newNote)
        setNoteTitle("")
        setNoteContent("")
        navigation.push('Home')
    }
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
                      saveNote(navigation)
                    }}
                style={styles.btn}>
                    <Text style={styles.btntext}>Save</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    )
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

export default NewNoteScreen;
