import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet, FlatList, Image} from 'react-native';
import {downloadMoviesData, downloadMovieDetailsData} from './Logic.jsx';

import {styles} from './styles.js';

function ResultsPage({navigation, route}) {

    const renderItem = ({item, onPress}) => {
        return(
            <View style={styles.poster}>
                <TouchableHighlight
                    underlayColor={'rgb(40,40,40)'}
                    style={{flex: 1}}
                    onPress={() => navigation.navigate("DetailsPage", {movieId: item.id})}
                    >
                    <View style={{flex: 1}}>
                        <Image source={{uri: item.poster}} style={styles.posterImage} resizeMode='contain'/>
                        <Text style={styles.posterText}>{item.title}</Text>
                        <Text style={styles.posterText}>{item.year}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={route.params. movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
}

export default ResultsPage;
