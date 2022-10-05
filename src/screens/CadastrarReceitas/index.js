import React, { useState, setState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Input from "../../../componentes/input/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import Camera from "../../../assets/camera.png";
// import { TouchableOpacity } from "react-native-web";
import firebase from "../../../database/firebase";
import {
    useFonts,
    PinyonScript_400Regular,
} from "@expo-google-fonts/pinyon-script";

export default function CadastrarReceitas(props) {
    let [fontsLoaded] = useFonts({
        PinyonScript_400Regular,
    });

    const initalState = {
        imagem: "",
        titulo: "",
        sobre: "",
        tempo: "",
        cal: "",
        ingred: "",
        modop: ""
    };

    const [state, setState] = useState(initalState);

    const handleChangeText = (value, titulo) => {
        setState({ ...state, [titulo]: value });
    };

    const saveNewUser = async () => {
        if (state.titulo === "") {
            alert("Digite um Título!");
        } else {

            try {
                await firebase.db.collection("database").add({
                    // name: state.name,
                    // email: state.email,
                    // phone: state.phone,

                    imagem: state.imagem,

                    titulo: state.titulo,
                    sobre: state.sobre,
                    tempo: state.tempo,
                    cal: state.cal,
                    ingred: state.ingred,
                    modop: state.modop
                });

                props.navigation.navigate("Menu");
            } catch (error) {
                console.log(error)
            }
        }
    };
    //************************************************************************** */

    return (
        <View style={styles.container}>
            <View style={styles.button1}>
                <TouchableOpacity style={styles.bnt2} onPress={() => props.navigation.navigate("Menu")}>
                    <Icons style={styles.arrowleft} name="arrow-left" color="gray" size={27} />
                </TouchableOpacity>
            </View>
            <View style={{
                //borderWidth: 1,
                //borderColor: 'white',
                width: 300,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: 500,
                        fontFamily: "PinyonScript_400Regular",
                    }}>Cadastro de receita</Text>
            </View>
            <TextInput
                placeholder="Link da imagem..."
                placeholderTextColor="green"
                
                style={styles.titulo}
                value={state.imagem}
                onChangeText={(value) => handleChangeText(value, "imagem")}></TextInput>
            <View>
                <TextInput
                    style={styles.titulo}
                    placeholder='Título da receita'
                    underlineColorAndroid='transparent'
                    placeholderTextColor={'gray'}
                    autoCorrect={true}

                    onChangeText={(value) => handleChangeText(value, "titulo")}
                    value={state.titulo}
                />

                <Text style={{ color: 'gray', marginTop: 20, }}>Sobre</Text>
                <TextInput
                    style={styles.sobre}
                    multiline={true}
                    placeholder='...'

                    onChangeText={(value) => handleChangeText(value, "sobre")}
                    value={state.sobre}
                />

                <View style={styles.preparo}>
                    <View>
                        <Text style={{ color: 'gray', marginTop: 5 }}>Tempo de preparo</Text>
                        <View style={styles.containerPreparo}>
                            <TextInput
                                // placeholder="Digite aqui"
                                style={styles.prep}
                                placeholder='...'

                                onChangeText={(value) => handleChangeText(value, "tempo")}
                                value={state.tempo}
                            />
                            <Icons style={styles.iconRelogio} name={'clock'} color={'#000000'} size={20} />
                        </View>
                    </View>

                    <View style={styles.preparo}>
                        <View style={{ marginLeft: 20, }}>
                            <Text style={{ color: 'gray', marginTop: 5 }}>Calorias</Text>
                            <View style={styles.calo}>
                                <TextInput
                                    // placeholder="Digite aqui"
                                    style={styles.calo}
                                    placeholder='...'

                                    onChangeText={(value) => handleChangeText(value, "cal")}
                                    value={state.cal}
                                />
                                <Icons style={styles.iconFogo} name={'fire'} color={'#000000'} size={25} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.camposIngredientes}>
                    <View style={styles.ingredientes}>
                        <Text style={{ color: 'gray' }}>Ingredientes</Text>
                        <Icons style={styles.IconPlus} name={'plus-circle'} color={'#000000'} size={16} />
                    </View>
                    <TextInput
                        multiline={true}
                        placeholder='...'
                        // defaultValue={false}
                        // textAlignVertical="top"
                        style={styles.inputIng}

                        onChangeText={(value) => handleChangeText(value, "ingred")}
                        value={state.ingred}
                    />
                </View>

                <View style={styles.camposIngredientes}>
                    <View style={styles.ingredientes}>
                        <Text style={{ color: 'gray' }}>Modo de preparo</Text>
                        <Icons style={styles.IconPlus} name={'plus-circle'} color={'#000000'} size={16} />
                    </View>
                    <TextInput
                        multiline={true}
                        placeholder='...'
                        // textAlignVertical="top"
                        // defaultValue={false}
                        style={styles.inputIng}

                        onChangeText={(value) => handleChangeText(value, "modop")}
                        value={state.modop}
                    />

                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.bnt} onPress={() => saveNewUser()}>
                        <Text style={styles.texto}>Publicar</Text>
                        <Icons style={styles.send} name="send" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 20,
        //marginTop: 150,
        //marginBottom: 70,
        backgroundColor: '#f4f4f4'
        // justifyContent: "center",
    },
    arrowleft:{
        marginRight: 50,
    },
    imagem: {
        width: 290,
        height: 200,
        backgroundColor: '#D9D9D9',
        borderRadius: 5
    },
    titulo: {
        fontSize: 16,
        marginTop: 30,
        color: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        borderColor: '#f4f4f4',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        // borderBottomWidth: 1,
        //borderBottomColor: '#D9D9D9',
        paddingLeft: 10,
        height: 40,  
              
    },   
    sobre: {
        height: 80,
        width: 350,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        borderColor: '#f4f4f4',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        marginTop: 3
        // marginTop: 20,
    },
    tituloInput: {
        fontSize: 16,
        color: 'gray',
        paddingLeft: 10,
        height: 30,
        // minWidth: 140,
        // width: 10,
        backgroundColor: '#F4F4F4',
        borderColor: '#D9D9D9',
        // backgroundColor: '#119',
        alignItems: 'center',
        // borderWidth:1,
        // border: 'gray solid',
    },
    calo: {
        fontFamily: 'Pinyon Script',
        fontSize: 16,
        paddingLeft: 10,
        height: 40,
        width: 160,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: 'gray',
        borderColor: '#f4f4f4',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        marginTop: 3
    },
    prep: {
        fontSize: 16,
        paddingLeft: 10,
        height: 40,
        width: 160,
        backgroundColor: '#fff',
        borderColor: '#f4f4f4',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        marginTop: 3
    },
    preparo: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    containerPreparo: {
        display: 'flex',
        flexDirection: 'row',
        //border: 'gray solid',
        width: 160,
        // marginLeft: 5,
    },
    iconRelogio: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
    iconFogo: {
        position: 'absolute',
        right: 10,
        top: 8,
    },
    IconPlus: {
        marginTop: 4,
        marginLeft: 4,
    },
    ingredientes: {
        display: 'flex',
        flexDirection: 'row',
    },
    camposIngredientes: {
        marginTop: 20,
    },
    button: {
        marginTop: 'auto',
    },
    button1: {
        marginBottom: 10,
        marginRight: 400
    },
    texto: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 5,
        // paddingRight: 5
    },

    bnt: {
        backgroundColor: '#1a694d',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 200,
        shadowColor: '#124935',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 15,
        borderTopRadius: 5,
    },
    bnt2: {
        backgroundColor: '#f4f4f4',
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 150,
        borderColor: '#f4f4f4',

        marginTop: 3

    },
    send: {
        // paddingLeft: 10,
        marginLeft: 10
    },
    inputIng: {
        maxHeight: 80,
        fontSize: 16,
        paddingLeft: 10,
        height: 40,
        width: 350,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: 'gray',
        borderColor: '#f4f4f4',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        marginTop: 3
    },

})