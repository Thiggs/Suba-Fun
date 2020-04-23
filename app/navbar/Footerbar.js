import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export class Footerbar extends React.Component {

render(){
var known = "You know 7 items"
var yetToLearn = "You have 2 items left to learn"

    return(
        <View style={styles.row}>
            <Text style={styles.column}>{ known }</Text> 
            <Text style={styles.column}>{ yetToLearn }</Text>
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