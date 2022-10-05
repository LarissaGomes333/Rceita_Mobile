import React, { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Input(props) {
    const [sec, setSec] = useState(props.secureTextEntry)

    return (
        <View>
            <View style={styles.campos}>
                <Icons
                    name={props.iconName}
                    style={styles.icon}
                    size={23}
                    color={"#58A88B"}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='tranparent'
                    placeholderTextColor={'gray'}
                    placeholder="Digite sua senha"
                    {...props}
                    secureTextEntry={sec}
                />
                {props.secureTextEntry &&(
                <TouchableOpacity onPress={() =>{
                    setSec(!sec)
                }}>
                    <Icons
                        style={styles.secret}
                        name={sec ? "eye" : "eye-off"}
                        size={26}
                        color={'gray'} />
                </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() =>{
                    setSec(!sec)
                }}>
                    {/* <Icons
                        style={styles.secret}
                        name="eye"
                        size={26}
                        color={'gray'} /> */}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "#000000",
        color: 'gray',
        height: 50,
        paddingLeft: 40,
        borderRadius: 10,
        fontSize: 16,
        borderColor: '#58A88B',
        borderWidth: 1,
    },
    campos: {
        flexDirection: "row",
        // margin: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 0,
    },
    icon: {
        left: 10,
        top: 13,
        position: "absolute",
    },
    secret: {
        position: "absolute",
        right: 10,
        top: 12,
    }
})
