import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteDetailsScreen = function () {
    return (
        <View style={styles.homeContainer}>
            <Text>Note Detail Bitches </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default NoteDetailsScreen