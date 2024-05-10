import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import {downloadMovieDetailsData} from './Logic.jsx';
import {addMovie} from './ToWatchDatabase.jsx';

function DetailsPage({navigation, route}) {
    const {movieDetails} = route.params;

    return(
        <ScrollView style={styles.detailsContainer}>
            <View style={styles.detailsImageContainer}>
                <Image
                    source={{uri: movieDetails.poster}}
                    style={styles.detailsImage}
                    resizeMode='contain'/>
            </View>
            <View style={styles.detailsTextContainer}>
                <Text style={styles.detailsMainText}>{movieDetails.title}</Text>
                <Text style={styles.detailsText}>
                    {movieDetails.year} |{" "}
                    {movieDetails.rated} |{" "}
                    {movieDetails.runtime} |{" "}
                    {movieDetails.genre}
                </Text>
                <Text style={styles.detailsText}>Role: {movieDetails.plot}</Text>
                <Text style={styles.detailsMainText}>More Details</Text>
                <Text style={styles.detailsText}>Director: {movieDetails.director}</Text>
                <Text style={styles.detailsText}>Writer: {movieDetails.writer}</Text>
                <Text style={styles.detailsText}>Language: {movieDetails.language}</Text>
                <Text style={styles.detailsText}>Country: {movieDetails.country}</Text>
                <Text style={styles.detailsText}>Released: {movieDetails.released}</Text>
                <Text style={styles.detailsText}>Awards: {movieDetails.awards}</Text>
                <Text style={styles.detailsText}>Actors: {movieDetails.actors}</Text>
            </View>
            <Button title='Add to watch list' onPress={() => {
                    addMovie(movieDetails.title, movieDetails.year, movieDetails.movieId);
                    console.log("active add Movie");
                }}
            />
        </ScrollView>
    );
}

export default DetailsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)'
    },

    text: {
        color: "rgb(255,255,255)",
        fontSize: 20
    },

    searchBar: {
        borderWidth: 2,
        borderRadius: 8,
        color: 'white',
        height: 38,
        width: 200,
        borderColor: 'rgb(168, 113, 10)',
        backgroundColor: 'rgb(60,60,60)',
        padding: 6
    },

    searchButton: {
        borderWidth: 2,
        borderColor: 'rgb(168, 113, 10)',
        height: 30,
        width: 80,
        backgroundColor: 'rgb(168, 133, 10)',
        borderRadius: 15,
        fontSize: 30,
        margin: 14,
        justifyContent: 'center',
        alignItems: 'center'
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
    },

    detailsContainer: {
        flex: 1,
        backgroundColor: 'rgb(10,10,10)'
    },

    detailsImageContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 2
    },

    detailsImage: {
        width: 300,
        height: 300
    },

    detailsTextContainer: {
        padding: 10
    },

    detailsMainText: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
        marginBottom: 4
    },

    detailsText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 4
    }
});
