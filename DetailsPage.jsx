import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import {downloadMovieDetailsData} from './Logic.jsx';
import {addMovie} from './ToWatchDatabase.jsx';

import {styles} from './styles.js';

function DetailsPage({navigation, route}) {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        downloadMovieDetailsData(route.params.movieId).then(
            details => setMovieDetails(details));
    }, [route.params]);

    if(movieDetails != null) {
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
                    <Button title='Add to watch list'
                            onPress={() => {
                                addMovie(movieDetails.title, movieDetails.year, movieDetails.movieId);
                                console.log("active add Movie");
                            }}

                    />
                </ScrollView>
            );
    }
    else {
        return(
            <Text>Loading page...</Text>
        );
    }

}

export default DetailsPage;
