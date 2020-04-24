import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function subaFunCircles(question){
    let circleMaker = [];

    let bucket = [0,1,2,3,4,5,6,7,8]
    let containsCircle = [false,false,false,false,false,false,false,false,false]

for (var i=0; i<(9-question); i++){
    var randomIndex = Math.floor(Math.random()*bucket.length);
     bucket.splice(randomIndex, 1);
}

for (var i=0; i<bucket.length; i++){
    containsCircle[bucket[i]]=true;
}

for (var i=0; i<3; i++){
    var rowMaker =[]
    var uniqueRow="row"+i.toString();

    for (var j=0; j<3; j++){
        var unique = "circle "+(i*3+j).toString();
        if(containsCircle[i*3+j]){
            rowMaker.push(<View style={styles.circle} key={unique}/>)
        }
        else {
        rowMaker.push(<View key={unique}></ View>)
    }
    }
    circleMaker.push(<View style={styles.row} key={uniqueRow}>{rowMaker}</ View>)
}

    return (
        <View style={styles.container}>
            {circleMaker}
        </View>
    );
};

export{ subaFunCircles };


const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding : 10
    },
    column: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'red'
    }
});