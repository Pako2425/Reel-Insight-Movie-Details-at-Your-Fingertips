import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import MainPage from './MainPage.jsx'

function App(): React.JSX.Element {

    const [apiRequest, setApiRequest] = useState("");
    const [film, setFilm] = useState("");

    async function getData(event) {
        setApiRequest('http://www.omdbapi.com/?apikey=c9bb574f&s='
            + event.nativeEvent.text.toLowerCase())
        try{
            let response = await fetch(apiRequest);
            let data = await response.json();
            await setFilm(data["Search"]["1"]["Year"]);
        }
        catch(error) {
            alert(apiRequest);
        }
    }

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            inputMode='text'
            placeholder={"type movie title..."}
            onSubmitEditing={
                //(event) => setApiRequest('http://www.omdbapi.com/?apikey=c9bb574f&s='
                //    + event.nativeEvent.text.toLowerCase())
                //setFilm(getData(apiRequest))

                (event) => getData(event)
            }

        />
        <TouchableHighlight
            underlayColor={'rgb(168, 113, 10)'}
            style={styles.searchButton}
            onPress={() => alert('Pressed!')}>
            <Text style={{color: 'white', fontSize: 15}}>Search</Text>
        </TouchableHighlight>
        <Text style={{color: 'white', fontSize: 10}}>{film}</Text>
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
