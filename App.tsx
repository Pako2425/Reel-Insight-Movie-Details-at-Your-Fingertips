import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native'
import MainPage from './MainPage.jsx'

function App(): React.JSX.Element {

    const [apiRequest, setApiRequest] = useState("");

    

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            inputMode='text'
            placeholder={"type movie title..."}
            onSubmitEditing={(event) => setApiRequest('http://www.omdbapi.com/?apikey=c9bb574f&s='
                + event.nativeEvent.text.toLowerCase())}
            />
        <Text style={{color: 'white', fontSize: 10}}>{apiRequest}</Text>
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
        borderRadius: 10,
        color: 'white',
        height: 38,
        width: 200,
        borderColor: 'rgb(168, 113, 10)',
        backgroundColor: 'rgb(60,60,60)',
        padding: 6

    }
});

export default App;
