import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import CategoryScreen from '../screens/categegory';
import RecentlyDeletedScreen from '../screens/recentlyDeleted';
import NoteDetailsScreen from '../screens/noteDetailsPage';
import EditNotesScreen from '../screens/editNote';
import { createAppContainer } from 'react-navigation';
import { Ionicons} from '@expo/vector-icons';
const NotesHomeNavigator = createStackNavigator({
    Home:  HomeScreen,
    NoteDetails: NoteDetailsScreen,
    EditNote: EditNotesScreen
})

const NotesTabNavigator = createBottomTabNavigator({
    Home: {
        screen: NotesHomeNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='home' size={25} color={ tabInfo.tintColor}/>
            }
        }
    },
    Categories: {
        screen: CategoryScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='folder-outline' size={25} color={ tabInfo.tintColor}/>
            }
        }  
    },
    RecentlyDeleted: {
        screen: RecentlyDeletedScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='trash-outline' size={25} color = {tabInfo.tintColor} />
            }
        }
    }
},
{
    tabBarOptions: {
        activeTintColor:'blue'
    }
});


export default createAppContainer(NotesTabNavigator);