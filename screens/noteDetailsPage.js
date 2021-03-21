import React from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableWithoutFeedback} from 'react-native';
import notes from '../data/notesStore';
import { Ionicons} from '@expo/vector-icons';



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
NoteDetailsScreen.navigationOptions = navigationData => {
    const noteId = navigationData.navigation.state.params.noteId;
    const note = getNotes(noteId)
    return {
        headerTitle: note.title,
        headerRight: () => <View style={styles.editIconContainer}>
            <Ionicons name='create-outline' size={25} color='blue' onPress={()=> console.log("pressed") }/>
            </View>
    }
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
    },
    editIconContainer: {
        paddingHorizontal: 20
    }


})


export default NoteDetailsScreen