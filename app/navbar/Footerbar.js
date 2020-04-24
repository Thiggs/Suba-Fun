import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export class Footerbar extends React.Component {

render(){

    return(
        <View style={styles.row}>
            <Text style={styles.bold}>SubaFun</Text>
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