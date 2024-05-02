import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView, FlatList} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const movies = [];
const moviesTest = [{
                        "title": "The Avengers",
                        "year": "2012",
                        "id": "tt0848228",
                        "type": "movie",
                        "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                    },
                    {
                        "title": "Avengers: Endgame",
                        "year": "2019",
                        "id": "tt4154796",
                        "type": "movie",
                        "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                    },
                    {
                        "title": "Avengers: Infinity War",
                        "year": "2018",
                        "id": "tt4154756",
                        "type": "movie",
                        "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                    },
                    {
                        "title": "Avengers: Age of Ultron",
                        "year": "2015",
                        "id": "tt2395427",
                        "type": "movie",
                        "poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
                    },
                    {
                        "title": "The Avengers",
                        "year": "1998",
                        "id": "tt0118661",
                        "type": "movie",
                        "poster": "https://m.media-amazon.com/images/M/MV5BZTQ4NmIzMTktOTdjOC00NzE4LWIzNTgtODkwNzM5ZjUzZDkxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg"
                    },
                    {
                        "title": "The Avengers: Earth's Mightiest Heroes",
                        "year": "2010–2012",
                        "id": "tt1626038",
                        "type": "series",
                        "poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
                    }];

function MainPage({navigation}) {
    const [searchBarText, setSearchBarText] = useState("");

    async function getData(movieTitle) {
        let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&s=' + movieTitle.toLowerCase();
        try {
            let response = await fetch(apiRequest);
            data = await response.json();
            data.Search.forEach(movie => movies.push(
                {
                    id: movie["imdbID"],
                    title: movie["Title"],
                    year: movie["Year"],
                    poster: movie["Poster"]
                }
            ));
            navigation.navigate("ResultsPage");
        }
        catch(error) {
            alert(`Can't find your movie: \"${searchBarText}\"
            \nPlease check your title or internet connection.`);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                inputMode='text'
                maxLength={50}
                onChangeText={setSearchBarText}
                value={searchBarText}
                placeholder={"type movie title..."}
            />
            <TouchableHighlight
                underlayColor={'rgb(168, 113, 10)'}
                style={styles.searchButton}
                onPress={() => getData(searchBarText)}>
                <Text style={{color: 'white', fontSize: 15}}>Search</Text>
            </TouchableHighlight>
        </View>
    );
}

function ResultsPage(navigation) {

    const renderItem = ({item}) => {
        return(
            <View style={styles.poster}>
                <Image source={{uri: item.poster}} style={styles.posterImage} resizeMode='contain'/>
                <Text style={styles.posterText}>{item.title}</Text>
                <Text style={styles.posterText}>{item.year}</Text>
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

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainPage" component={MainPage}/>
                <Stack.Screen name="ResultsPage" component={ResultsPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

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
    }

});

export default App;
