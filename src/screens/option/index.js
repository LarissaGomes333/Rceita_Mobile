import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity } from 'react-native';

function Option({ navigation }) {
    return (
        <View style={styles.containerOption} >
            <Image style={styles.image} source={require("../option/azul-7.jpg")} />
            <Text style={styles.text} >
                O que você deseja?
            </Text>
                <br/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textButton} >Cadastrar</Text>
            </TouchableOpacity>
                <br/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Destinos')}>
                <Text style={styles.textButton} >Destinos nacionais</Text>
            </TouchableOpacity>
                <br/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton} >Home</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Option;

const styles = StyleSheet.create({
    containerOption: {
        backgroundColor: '#041e42',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',  
    },
    button: {
        backgroundColor: '#07b6e5',
        borderRadius: 10,
        width: '70%',
        alignItems: "center",
        textAlign: "center"
    },
    textButton: {
        fontSize: 25,
        fontWeight: 400,
        textAlign: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    text:{
        fontSize:30,
        marginTop:'15%',
        fontWeight:500,
        color: '#fff'

    },
    image: {
        width: 400,
        height: 200,
        marginTop:'20%'
    },
});