import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import logo3 from '../../assets/icons/logo3.png'
import LifeStatus from "../../components/commun/LifeStatus"

export default function Start(){
    return(

        <View style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{alignItems: 'center'}}>
                    <Image source={logo3} style={Styles.logo} />
                    <LifeStatus/>
                    <Text style={Styles.description}>Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'} o melhor nivel.</Text>
                </View>

            </ScrollView>
        </View>


    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },
    logo:{
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description:{
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,

    }

})