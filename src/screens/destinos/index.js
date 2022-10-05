import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function Destionos({navigation}){
    return(
        <View style={styles.containerDestino}>
               <View style={styles.header}>
                    <Text style={styles.title} >Destinos</Text>
                </View>
            <ScrollView>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/rj.jpg")} />
                    <Text style={styles.text} >Rio de Janeiro</Text>
                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/fortaleza.jpg")} />
                    <Text style={styles.text} >Fortaleza</Text>

                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/sao_luis.jpg")} />
                    <Text style={styles.text} >São Luis</Text>

                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/brasilia.jpg")} />
                    <Text style={styles.text} >Brasília</Text>

                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/poa.jpg")} />
                    <Text style={styles.text} >Porto Alegre</Text>

                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/curitib.jpg")} />
                    <Text style={styles.text} >Curitiba</Text>

                </View>
                <br/>
                <View style={styles.item} >
                    <Image style={styles.image} source={require("./assets/sao_paulo.jpg")} />
                    <Text style={styles.text} >São Paulo</Text>

                </View>

                <br/>
                <View style={styles.buttons} >
                         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Option')}>
                         <Text style={styles.textButton} > Opções</Text>
                        </TouchableOpacity>
                        <br/>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Passagem')}>
                        <Text style={styles.textButton} >Passagem</Text>
                        </TouchableOpacity>
                        <br/>
                </View>
                  <Text></Text>
                <Text></Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerDestino: {
        backgroundColor: '#041e42',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',
    },
    image: {
        width: 270,
        height: 170,
        marginTop:9,
        borderRadius:'8%'
    },
    item:{
        backgroundColor:'#041e42',
        width:300,
        height:220,
        alignItems:'center',
        borderRadius:'10%',
        borderBottomColor: '#07b6e5',
        borderBottomWidth:4
    },
    text:{
        fontSize:20,
        fontWeight:500,
        color: 'white'
    },
    header:{
        flexDirection:'row',
        marginBottom:20,
        backgroundColor:'#07b6e5',
        width: '100%',
        height: '4vh',
    },
    button: {
        backgroundColor: '#07b6e5',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        textAlign: "center"
    },
    textButton: {
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
    },
    title:{
        fontSize:25,
        fontWeight:700,
        color: 'white'
    },
    buttons:{
        alignItems:'center',
        textAlign:'center'
    }
});