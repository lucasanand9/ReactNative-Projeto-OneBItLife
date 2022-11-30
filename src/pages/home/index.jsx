import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../components/commun/LifeStatus";

export default function Home(){

    const navigation = useNavigation();

    const handleNavExplanation =()=>{
        navigation.navigate("Explanation")
    }

    return(
        <View style={Styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={Styles.dailyCheck}>
                        20 dias - 80 checks
                    </Text>

                    <LifeStatus/>

                </View>
                <Text
                style={Styles.explanationText}
                onPress={()=>{handleNavExplanation()}}> Ver explicação novamente</Text>
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyCheck:{
        color: "white",
        fontWeigth: "bold",
        textAling: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText:{
        color: "white",
        fontSize: 16,
        fontWeigth: "bold",
        alignItems:"center",
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 25
    },


});

