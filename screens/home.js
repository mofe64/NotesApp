import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import notes from '../data/notesStore';
import Colors from '../constants/colors';

const generateRandomNumber = () => Math.floor(Math.random() * Colors.colorsArray.length);
let previousArrayPosition = -1
const renderItem = (itemData, navigation) => {
    let arrayPosition = generateRandomNumber();
    if (arrayPosition === previousArrayPosition) {
        arrayPosition = generateRandomNumber()
    }
    previousArrayPosition = arrayPosition
    

    let gridColor = Colors.colorsArray[arrayPosition]
    return (
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: gridColor }]}
            onPress={() => navigation.navigate( 'NoteDetails',{
                noteId: itemData.item.id,
            })
            }>
            <View>
                <Text
                    style={styles.gridItemText}
                    numberOfLines={3}>
                    {itemData.item.title}
                </Text>
           
                    <Text style={styles.gridItemDate}>
                        {itemData.item.date}
                    </Text>
              
                
            </View>
        </TouchableOpacity>
    )
}
const HomeScreen = function (props) {
    return (
        <FlatList
            data={notes}
            renderItem={(item) => renderItem(item, props.navigation)}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    gridItem: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: '40%',
        flex: 1,
        backgroundColor: '#ffab91',
        alignItems: 'center',
        minHeight: 200,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    gridItemText: {
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    gridItemDate: {
        paddingHorizontal: 10,
        color: '#6a5434',
        paddingTop:10,
        fontWeight: '700',
        fontSize: 20
    },
   

})




export default HomeScreen