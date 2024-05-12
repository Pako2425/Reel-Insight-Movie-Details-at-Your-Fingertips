import {useState} from 'react';
import {View, Text, TextInput, TouchableHighlight, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {Dimensions, EStyleSheet, KeyboardAvoidingView} from 'react-native';
import {downloadMoviesData} from './Logic.jsx';
import {showDatabase} from './ToWatchDatabase.jsx';

const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth / 380;

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

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)',

    },

    logo: {
        alignItems: 'center',
        marginTop: 20*rem,
        marginBottom: 10*rem,
        marginLeft: 80*rem,
        marginRight: 80*rem

    },

    logoImage: {
        width: 220*rem,
        height: 220*rem,
        resizeMode: 'strech',
    },

    logoText: {
        color: 'white',
        fontSize: 24*rem,
    },

    search: {
        alignItems: 'center',
        marginTop: 20*rem,
        marginBottom: 40*rem,
    },

    toWatch: {
        alignItems: 'center',
        marginBottom: 60*rem
    },

    text: {
        color: "rgb(255,255,255)",
        fontSize: 20*rem
    },

    searchBar: {
        borderWidth: 2*rem,
        borderRadius: 8*rem,
        color: 'white',
        height: 40*rem,
        width: 200*rem,
        borderColor: 'rgb(168, 113, 10)',
        backgroundColor: 'rgb(60,60,60)',
        padding: 6*rem,
        margin: 10*rem
    },

    searchButton: {
        borderWidth: 2*rem,
        borderColor: 'rgb(168, 113, 10)',
        height: 30*rem,
        width: 80*rem,
        backgroundColor: 'rgb(168, 133, 10)',
        borderRadius: 15*rem,
        fontSize: 30*rem,
        justifyContent: 'center',
        alignItems: 'center',
    },

    toWatchButton: {
        borderWidth: 2*rem,
        borderColor: 'rgb(12,12,12)',
        //height: 50*rem,
        height: 60*rem,
        width: 200*rem,
        //width: 140*rem,
        backgroundColor: 'rgb(20, 20, 20)',
        borderRadius: 2*rem,
        fontSize: 30*rem,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
