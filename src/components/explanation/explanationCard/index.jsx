import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function ExplanationCard(){

    return(

        <View style={Styles.container}>
            <Text style={Styles.title}>Através deste APP voce vai consolidar {"\n"} 4 hábitos de áreas
            fundamentais:</Text>

        {/* descriçao da parte mental */}
            <View style={Styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/educationIcon.png')}
                    style={Styles.icon}
                />
                <Text style={Styles.description}>
                    <Text style={Styles.mind}>Mente:</Text> Hábitos para melhorar sua inteligência/sabedoria.
                </Text>
             </View>

        {/* descriçao da parte financeira */}
             <View style={Styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/moneyIcon.png')}
                    style={Styles.icon}
                />
                <Text style={Styles.description}>
                    <Text style={Styles.money}>Financeiro:</Text> Hábitos para te ajudar {"\n"} com o controle financeiro.
                </Text>
            </View>

        {/* descriçao da parte de saude */}
             <View style={Styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/bodyIcon.png')}
                    style={Styles.icon}
                />
                <Text style={Styles.description}>
                    <Text style={Styles.body}>Corpo:</Text> Hábitos para te deixar mais {"\n"} saudavel e forte.
                </Text>
            </View>

         {/* descriçao da parte de diversao */}
            <View style={Styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/funIcon.png')}
                    style={Styles.icon}
                />
                <Text style={Styles.description}>
                    <Text style={Styles.fun}>Diversão:</Text> Hábitos para controlar o stress{"\n"} 
                    e aumentar a felicidade.
                </Text>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor:"#151515",
        width: 350,
        borderRadius: 25,
        padding: 30
    },
    title:{
        fontWeight: "bold",
        color: "white",
        textAling:"center",
        fontSize: 16
    },
    explanationContainer:{
        flexDirection: "row",
        marginTop: 30
    },
    icon:{
        width: 40,
        height: 40,
        marginRigth: 5
    },
    mind:{
        color: "#90B7F3",
        fontWeight: "bold"
    },
    money:{
        color: "#85BB65",
        fontWeight: "bold"
    },
    body:{
        color: "#FF0044",
        fontWeight: "bold"
    },
    fun:{
        color: "#FE7F23",
        fontWeight: "bold"
    },
    description:{
        color: "white"
    }
});