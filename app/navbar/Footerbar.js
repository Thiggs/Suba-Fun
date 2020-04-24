import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { knownTotal, notKnownTotal } from '../datasets/UserData.js';

export class Footerbar extends React.Component {

render(){
var known = knownTotal
var yetToLearn = notKnownTotal

    return(
        <View style={styles.row}>
            <Text style={styles.column}>You know { known } items.</Text> 
            <Text style={styles.column}>You have { yetToLearn } items yet to learn.</Text>
        </View>
        );
};
};

const styles={
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
}