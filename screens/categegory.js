import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = function () {
    return (
        <View style={styles.categoryContainer}>
            <Text>Category Screen Bitches</Text>
        </View>
    )
}

const styles = StyleSheet.create({
        categoryContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default CategoryScreen