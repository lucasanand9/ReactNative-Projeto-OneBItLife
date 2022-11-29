import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native';

export default function Start(){
    return(

        <View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Image source={'../../assets/icons/logo3.png'} />
                    <Text>Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nivel.</Text>
                </View>

            </ScrollView>
        </View>


    );
}