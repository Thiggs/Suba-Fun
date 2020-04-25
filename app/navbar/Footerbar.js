import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { game } from '../datasets/UserData'

export class Footerbar extends React.Component {

render(){

    return(
        <View style={styles.row}>
            <Text style={styles.bold}>{game}</Text>
        </View>
        
        );
};
};

const styles={
    row: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 24
    },
}