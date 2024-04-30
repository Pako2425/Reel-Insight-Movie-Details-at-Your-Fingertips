import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import MainPage from './MainPage.jsx'

function App(): React.JSX.Element {

    const [searchBarText, setSearchBarText] = useState("");
    const [apiRequest, setApiRequest] = useState("");
    const [film, setFilm] = useState("");

    async function getData(movieTitle) {
        let apiRequest = 'http://www.omdbapi.com/?apikey=c9bb574f&s=' + movieTitle;
        try{
            let response = await fetch(apiRequest);
            let data = await response.json();
            await setFilm(data["Search"]["1"]["Year"]);
            await alert(film);
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
    }
});

export default App;
