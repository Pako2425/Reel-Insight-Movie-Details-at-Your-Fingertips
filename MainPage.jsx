import {useState} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet} from 'react-native';
import {downloadMoviesData} from './Logic.jsx';
import {showDatabase} from './ToWatchDatabase.jsx';

function MainPage({navigation}) {
    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                inputMode='text'
                maxLength={50}
                onChangeText={setSearchBarValue}
                value={searchBarValue}
                placeholder={"type movie title..."}
            />
            <TouchableHighlight
                underlayColor={'rgb(168, 113, 10)'}
                style={styles.searchButton}
                onPress={() => {
                    downloadMoviesData(searchBarValue).then(movies => {
                        if(movies.length > 0) {
                            navigation.navigate("ResultsPage", {movies});
                        }
                        else {
                            alert(`Can't find your movie: \"${searchBarValue}\"
                                   \nPlease check your title or internet connection.`);
                        }
                    });
                }}
            >
            <Text style={{color: 'white', fontSize: 15}}>Search</Text>
            </TouchableHighlight>
            <Button title='To watch' onPress={() => navigation.navigate('ToWatchPage')}/>
        </View>
    );
}

export default MainPage;

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