import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

///////////////////////////////////////////////////////////////////////////////
//RENDERS THE VIEW FOR SUBAFUN QUESTIONS - BECAUSE THE QUESTIONS ARE NOT TEXT
//////////////////////////////////////////////////////////////////////////////

function fiveFrameCircles(question){
    let circleMaker = [];

    let bucket = [0,1,2,3,4]
    let containsCircle = [false,false,false,false,false]

    for (var i=0; i<(5-question); i++){
        var randomIndex = Math.floor(Math.random()*bucket.length);
        bucket.splice(randomIndex, 1);
    }

    for (var i=0; i<bucket.length; i++){
        containsCircle[bucket[i]]=true;
    }

    var rowMaker =[];
    for (var j=0; j<5; j++){
        var unique = "circle "+(j).toString();
        var uniqueFrame = "frame "+(j).toString();
        if(containsCircle[j]){
            rowMaker.push(<View style={styles.frame} key={uniqueFrame}><View style={styles.circle} key={unique}/></View>)
        }
        else {
        rowMaker.push(<View style={styles.frame} key={unique}></ View>)
        }
    }
    circleMaker.push(<View style={styles.row} key="fiveFrame">{rowMaker}</ View>);

    return (
        <View style={styles.container}>
            {circleMaker}
        </View>
    );
};

export{ fiveFrameCircles };


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
    },
    frame: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
});