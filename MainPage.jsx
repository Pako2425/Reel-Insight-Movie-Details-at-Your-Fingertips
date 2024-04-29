import {View, TextInput, StyleSheet} from 'react-native'

function MainPage() {

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                inputMode='text'
                placeholder={"type movie title..."}
                />
        </View>
    );

}

export default MainPage

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