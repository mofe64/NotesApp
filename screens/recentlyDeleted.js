import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentlyDeletedScreen = function () {
    return (
        <View style={styles.recentlyDeletedContainer}>
            <Text>Recently Deleted Screen Bitches</Text>
        </View>
    )
}

const styles = StyleSheet.create({
        recentlyDeletedContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default RecentlyDeletedScreen