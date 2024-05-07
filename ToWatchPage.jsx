function ToWatchPage(navigation) {

    const readData = () => {
        let data = [];
        dbConnection.transaction(txn => {
            txn.executeSql('SELECT * FROM toWatchUserList',
            [],
            (sqlTxn, res) => {
                let len = res.rows.length;
                for(let i = 0; i < len; i++) {
                    data.push(res.rows.item(i));
                }
            });
        });
        return data;
    };

    const renderItem = ({item, onPress}) => {
        return(
            <TouchableHighlight
                underlayColor={'rgb(40,40,40)'}
                style={{flex: 1}}
                onPress={() => {
                    alert("on press to watch");
                }}>

                <View style={{borderWidth: 2, padding: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>{item.title} ({item.year})</Text>
                </View>
            </TouchableHighlight>
        );
    };

    return(
            <View style={{flex: 1, backgroundColor: 'rgb(20,20,20)'}}>
            <FlatList
                data={readData()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
    );
}

export default ToWatchPage;