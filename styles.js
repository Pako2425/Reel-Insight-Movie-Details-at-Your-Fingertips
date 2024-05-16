import {StyleSheet, Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth / 380;

export const styles = StyleSheet.create({
    container: {
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
        height: 60*rem,
        width: 200*rem,
        backgroundColor: 'rgb(20, 20, 20)',
        borderRadius: 2*rem,
        fontSize: 30*rem,
        justifyContent: 'center',
        alignItems: 'center',
    },

    poster: {
        width: 150*rem,
        height: 'auto',
        marginRight: 14*rem,
        marginLeft: 14*rem,
        marginBottom: 10*rem,
        justifyContent: 'center',
    },

    posterImage: {
        width: 150*rem,
        height: 250*rem
    },

    posterText: {
        fontSize: 16*rem,
        color: 'white'
    },

    detailsContainer: {
        flex: 1,
        backgroundColor: 'rgb(10,10,10)'
    },

    detailsImageContainer: {
        alignItems: 'center',
        marginTop: 20*rem,
        marginBottom: 2*rem
    },

    detailsImage: {
        width: 300*rem,
        height: 300*rem
    },

    detailsTextContainer: {
        padding: 10*rem
    },

    detailsMainText: {
        fontSize: 20*rem,
        color: 'white',
        marginTop: 5*rem,
        marginBottom: 4*rem
    },

    detailsText: {
        fontSize: 16*rem,
        color: 'white',
        marginBottom: 4*rem
    }
});
