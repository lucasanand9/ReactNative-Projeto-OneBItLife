import React from 'react'
import { StyleSheet, Text, TouchableOpacity  } from 'react-native'


export default function DefaultButton({buttonText,
    handlePress,
    width,
    heigth}){
return(
        <TouchableOpacity

        style={[Styles.Button, {width: width, height: heigth}]}
        activeOpacity={0.7}
        onPress={handlePress}>

            <Text style={Styles.TextButton}> {buttonText} </Text>

        </TouchableOpacity>
        );
    };
    

const Styles = StyleSheet.create({
    Button:{
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 20,
        padding: 5
    },
    TextButton:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    }
})