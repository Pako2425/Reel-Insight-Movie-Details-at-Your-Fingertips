import {useState} from 'react';
import {Dimensions, View, Text, TextInput, TouchableHighlight, Button, StyleSheet, Image, ScrollView} from 'react-native';

import {downloadMoviesData} from './Logic.jsx';
import {showDatabase} from './ToWatchDatabase.jsx';

import {styles} from './styles.js';

function MainPage({navigation}) {

    const [searchBarValue, setSearchBarValue] = useState("");

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.logo}>
            <Image source={require('./reelinsight.png')}
                   style={styles.logoImage}/>
            <Text style={styles.logoText}>Reel Insight</Text>
            </View>

            <View style={styles.search}>
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
                        </View>

            <View style={styles.toWatch}>
            <TouchableHighlight
                underlayColor={'rgb(20, 20, 20)'}
                style={styles.toWatchButton}
                onPress={() => navigation.navigate('ToWatchPage')}
            >
            <Text style={{color: 'white', fontSize: 15}}>To watch</Text>
            </TouchableHighlight>
            </View>


            </ScrollView>
        </View>

    );
}

export default MainPage;
