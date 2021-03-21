import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import notes from '../data/notesStore';

const getNotes = (id) => {
   return notes.find(note => note.id === id)
}
const NoteDetailsScreen = function ({ navigation }) {
    const noteId = navigation.state.params.noteId;
    const note = getNotes(noteId)
    return (
        <View style={styles.noteContainer}>
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>
                    {note.title}
                </Text>
            </View>
            <ScrollView style={styles.noteContentContainer}>
                <Text style={styles.noteContent}>
                    {note.content}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleTextContainer: {
        alignItems: 'center',
        paddingVertical:10
    },
    titleText: {
        fontSize: 35,
        fontWeight: '800',
    },
    noteContentContainer: {
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    noteContent: {
        fontSize: 25,  
    }


})


export default NoteDetailsScreen