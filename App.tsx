import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView, FlatList} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SQLite from 'react-native-sqlite-storage';

import MainPage from './MainPage.jsx';
import ResultsPage from './ResultsPage.jsx';
import DetailsPage from './DetailsPage.jsx';
import ToWatchPage from './ToWatchPage.jsx';
import {init} from './ToWatchDatabase.jsx';

function App(): React.JSX.Element {

    const Stack = createNativeStackNavigator();
    useEffect(() => {
        init();
    }, []);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{title: " ", headerShown: false}}
                />
                <Stack.Screen
                    name="ResultsPage"
                    component={ResultsPage}
                    options={{title: " ", headerShown: true}}
                />
                <Stack.Screen
                    name="DetailsPage"
                    component={DetailsPage}
                    options={{title: " ", headerShown: true}}
                />
                <Stack.Screen
                    name="ToWatchPage"
                    component={ToWatchPage}
                    options={{title: " ", headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
