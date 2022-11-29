import React from 'react'
import { View, StyleSheet } from 'react-native';

import Lottie from "lottie-react-native"

export default function LifeStatus(){

    return(

        <View style={Styles.container}>

            <Lottie
            source ={require("../../../assets/education/education-100.json")} 
            autoPlay
            loop
            style={Styles.educacaoAnimacao}/>

            <Lottie
            source ={require("../../../assets/money/money-100.json")} 
            autoPlay
            loop
            style={Styles.moneyAnimacao}/>

            <Lottie
            source ={require("../../../assets/robot/robot-100-100.json")} 
            autoPlay
            loop
            style={Styles.roboAnimacao}/>


        </View>

    );

}

const Styles = StyleSheet.create({
    container:{
        width:300,
        height:300,
    },
    roboAnimacao:{
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
    moneyAnimacao:{
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute"
    },
    educacaoAnimacao:{
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute"
    }
});