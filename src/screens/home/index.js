import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity, ContentButton } from 'react-native';
import { ImageBackground } from 'react-native';
import { useFonts, PinyonScript_400Regular } from "@expo-google-fonts/pinyon-script";
import { LinearGradient } from 'expo-linear-gradient';

function Home({ navigation }) {

    let [fontsLoaded] = useFonts({
        PinyonScript_400Regular,
    });

    return (
        <View style={styles.containerBemVindo}>


            <ImageBackground source={require('../home/pizza.jpg')} style={styles.imageBackground}>
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={{ height: '100%', width: '100%' }}

                >
                    <View style={styles.teste}>
                        <Text style={styles.bemVindo} > Je mange</Text><br />


                        <View style={styles.bt}>

               
                                <TouchableOpacity style={styles.btt} onPress={() => navigation.navigate('Login')}>
                                <LinearGradient
                                colors={['#58A88B', '#00FFB2']}
                                style={{ height: '100%', width: '100%', borderRadius:15 }}
                                start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                            >
                                    <Text style={styles.textButton} > Login</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                           


                            <TouchableOpacity style={styles.btt} onPress={() => navigation.navigate('Cadastro')}>
                                <LinearGradient
                                colors={['#000000']}
                                style={{ height: '100%', width: '100%', borderRadius:15, borderColor:'#58A88B', borderWidth: 1 }}
                                >
                                <Text style={styles.textButton} > Cadastro</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>

                </LinearGradient>

            </ImageBackground>


        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    containerBemVindo: {
        // marginTop: 20,
        width: '100%',
        height: '100vh',
        textAlign: "center",
    },

    bt: {
        marginTop: '40%',


    },
    bemVindo: {
        marginBottom: '50%',
        fontSize: 65,
        fontWeight: 450,
        color: '#fff',
        fontFamily: "PinyonScript_400Regular",
    },
    teste: {
        marginTop: 90
    },

    btt: {
        borderRadius: 15,
        width: '75%',
        height: 45,
        alignItems: "center",
        textAlign: "center",
        marginLeft: '13%',
        marginBottom: 15,

    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
        // height: "100%",
    },

    textButton: {
        marginTop: 5,
        fontSize: 22,
        textAlign: 'center',
        alignItems: 'center',
        color: '#fff'
    }
});

