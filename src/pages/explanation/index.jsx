import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DefaultButton from "../../components/commun/DefaultButton";
import ExplanationCard from "../../components/explanation/explanationCard"
import { useNavigation } from "@react-navigation/native";

export default function Explanation(){

    const navigation = useNavigation();

    const handleSetShowHome =()=>{
        navigation.navigate("home")
    }

    return(
        <View style={Styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={Styles.title}>Antes, deixa {"\n"} eu te explicar...</Text>
                    <ExplanationCard/>
                    <Text style={Styles.descriptionCta}>
                        Pronto para subir de nivel na vida?
                    </Text>
                    <Text style={Styles.description}>
                        Na proxima tela voce vai poder escolher {'\n'} seus 4 hábitos de forma individual
                    </Text>   

                    <DefaultButton
                    buttonText={"Continuar"}
                    handlePress={handleSetShowHome}
                    width={250}
                    height={100}
                    />             
                </View>
            </ScrollView>
        </View>

    );

}

const Styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    title:{
        fontSize:30,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        marginVertical: 40,
    },
    descriptionCta:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
       },
    description:{
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    },
})