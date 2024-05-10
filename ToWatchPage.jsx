import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView, FlatList} from 'react-native'
import {getMoviesList} from './ToWatchDatabase.jsx';

function ToWatchPage({navigation, route}) {

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(getMoviesList());
    }, []);

    const renderItem = ({item, onPress}) => {
        return(
            <TouchableHighlight
                underlayColor={'rgb(40,40,40)'}
                style={{flex: 1}}
                onPress={() => {
                    navigation.navigate("DetailsPage", {movieId: item.movieId});
                }}>

                <View style={{borderWidth: 2, padding: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>{item.title} ({item.year})</Text>
                </View>
            </TouchableHighlight>
        );
    };

    return(
            <View style={{flex: 1, backgroundColor: 'rgb(20,20,20)'}}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
    );
}

export default ToWatchPage;
