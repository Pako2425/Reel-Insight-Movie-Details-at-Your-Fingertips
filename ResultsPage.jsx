import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

function ResultsPage() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.postersRow}>
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.postersRow}>
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.postersRow}>
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                    <Image
                        source={{uri: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"}}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)'
    },

    poster: {
        width: 150,
        height: 300,
        marginRight: 13
    },

    postersRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0
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

export default ResultsPage;