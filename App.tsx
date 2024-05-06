import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView, FlatList} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SQLite from 'react-native-sqlite-storage';

const movies = [];
let movieDetails = null;

const dbConnection = SQLite.openDatabase({name: 'favorites', location: 'default',});

function MainPage({navigation}) {
    const [searchBarText, setSearchBarText] = useState("");

    async function getData(movieTitle) {
        let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&s=' + movieTitle.toLowerCase();
        movies.length = 0;
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

function ResultsPage({navigation}) {

    const renderItem = ({item, onPress}) => {
        return(
            <View style={styles.poster}>
                <TouchableHighlight
                    underlayColor={'rgb(40,40,40)'}
                    style={{flex: 1}}
                    onPress={() => getDetails(item.id)}
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

    async function getDetails(movieId) {
        let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&i=' + movieId;
        try {
            let response = await fetch(apiRequest);
            let data = await response.json();
            movieDetails = {
                title: data["Title"],
                year: data["Year"],
                rated: data["Rated"],
                released: data["Released"],
                runtime: data["Runtime"],
                genre: data["Genre"],
                director: data["Director"],
                writer: data["Writer"],
                actors: data["Actors"],
                plot: data["Plot"],
                language: data["Language"],
                country: data["Country"],
                awards: data["Awards"],
                poster: data["Poster"]
            };
            navigation.navigate("DetailsPage");
        }
        catch(error) {
            alert("Something went wrong...");
        }
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

function DetailsPage({navigation}) {

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
        </ScrollView>
    );
}

function Saved() {

    const readData = () => {
        dbConnection.transaction(txn => {
            txn.executeSql('SELECT * FROM favorites',
            [],
            (sqlTxn, res) => {
                for(let i = 0; i < res.rows.length; i++) {
                    console.log(res.rows.item(i));
                }

            })
        })
    }

    return(
        <View style={{flex: 1, backgroundColor: 'rgb(20,20,20)'}}>
        <TextInput
            inputMode="text"
            style={{
                backgroundColor: 'rgb(30,30,30)',
                color: 'white',
                borderWidth: 1,
                borderRadius: 2,
                padding: 10,
                height: 34,
            }}
            placeholder="value"
        />
        <Button title="Get data" onPress={readData}/>

        </View>
    );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

    dbConnection.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS favorites(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, movieId TEXT)', [], () => console.log("table created"));
        tx.executeSql('INSERT INTO favorites (title, movieId) VALUES (?,?)', ['predator', 'qew123'], () => console.log("row inserted"));
    });

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Saved"
                    component={Saved}
                    options={{title: " ", headerShown: true}}
                />
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

export default App;
