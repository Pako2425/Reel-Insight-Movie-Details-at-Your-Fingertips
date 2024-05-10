import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet, FlatList, Image} from 'react-native';
import {downloadMoviesData, downloadMovieDetailsData} from './Logic.jsx';

//downloadMovieDetailsData(item.id).then(movieDetails => {
//    if(movieDetails != null) {
//        navigation.navigate("DetailsPage", {movieDetails});
//    }

function ResultsPage({navigation, route}) {
    const {movies} = route.params;
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
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
}

export default ResultsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)'
    },

    poster: {
        width: 150,
        height: 'auto',
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 10,
        justifyContent: 'center',
    },

    posterImage: {
        width: 150,
        height: 250
    },

    posterText: {
        fontSize: 16,
        color: 'white'
    }
});