import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Modal, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BotonImagen2 } from '../../myModules/boton'
import TextTicker from 'react-native-text-ticker'
import {Pronostico} from './pronostico';

function Inicio() {
    return (
        <ImageBackground source={require('../../assets/img/meteorologia/meteorologia-fondo-inicio.jpg')} style={styles.fondoImagen}>
            <View style={styles.textContainer}>
                <Text>
                    En el Instituto nos hemos dado a la tarea de modernizar la meteorología, introduciendo modelos físico-matemáticos que ayudan a los especialistas a tener una visión más exacta de los movimientos atmosféricos y cuáles son las situaciones que pueden afectar a la República Mexicana en general y en especial al Estado de Jalisco.
                </Text>
            </View>

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{ height: '100%', width: '100%', position: 'absolute' }}
            />

        </ImageBackground>
    );
}

function Doppler() {
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <Image source={require('../../assets/img/ambiente/cargando.gif')}
                style={{
                    position: 'absolute',
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    top: '40%',
                }}
            />
            <WebView
                source={{
                    uri: 'http://iam.cucei.udg.mx/radar/iam/'
                }}
            />
        </View>

    )
}

function Estacion() {
    return (
        <ImageBackground source={require('../../assets/img/meteorologia/meteorologia-fondo-inicio.jpg')} style={styles.fondoImagen}>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={{ height: '100%', width: '100%', position: 'absolute' }} />
            <View style={{ backgroundColor: 'white', width: '95%', borderRadius: 5, padding: 5, marginTop: 5 }}>
                <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '700' }}>
                    Datos actuales de la estación meteorológica del Instituto de Astronomía y Meteorología

                </Text>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Temperatura externa
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/OutsideTemp.gif' }} style={{ width: 100, height: 200 }} />
                    </View>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Presión atmosférica
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/Barometer.gif' }} style={{ width: 100, height: 200 }} />
                    </View>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Humedad relativa
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/OutsideHumidity.gif' }} style={{ width: 100, height: 200 }} />
                    </View>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Lluvia en el día
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/Rain.gif' }} style={{ width: 100, height: 200 }} />
                    </View>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Dirección del viento
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/WindDirection.gif' }} style={{ width: '97%', height: 150 }} />
                    </View>
                    <View style={[styles.textContainer, styles.estContainer]}>
                        <View style={styles.estHeaderContainer}>
                            <Text style={styles.estHeaderText}>
                                Velocidad del viento
                            </Text>
                        </View>
                        <Image source={{ uri: 'http://astro.iam.udg.mx/Estacion/imagenes/WindSpeed.gif' }} style={{ width: '97%', height: 150 }} />
                    </View>



                </View>
                <Text style={[styles.estHeaderText, { padding: 10 }]}> Los datos de esta pagina son actualizados cada 10 minutos.</Text>
            </ScrollView>


        </ImageBackground>
    )
}

const Tab = createBottomTabNavigator();

export function Meteorologia() {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = 'home';
                        } else if (route.name === 'Pronóstico') {
                            iconName = 'umbrella';
                        } else if (route.name === 'Radar Doppler') {
                            iconName = 'globe';
                        } else if (route.name === 'Estación IAM') {
                            iconName = 'analytics';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })
            } >
                <Tab.Screen name="Inicio" component={Inicio} />
                <Tab.Screen name="Pronóstico" component={Pronostico} />
                <Tab.Screen name="Radar Doppler" component={Doppler} />
                <Tab.Screen name="Estación IAM" component={Estacion} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



const styles = StyleSheet.create({
    estContainer: {
        width: '45%',
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    estHeaderContainer: {
        backgroundColor: 'black',
        width: '100%',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginBottom: 10,
        paddingBottom: 4,

    },
    estHeaderText: {
        color: 'white',
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        minWidth: 90,
        marginTop: 10,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#ffa366',
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: '700',
    },
    texto: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    situacionTitulo: {
        textAlign: 'center',
        backgroundColor: 'tomato',
        borderRadius: 5,
        fontSize: 15,
        width: '110%',
        marginTop: -10,
    },
    imagenNacional: {
        width: '120%',
        height: 300,
    },
    fondoImagen: {
        zIndex: -10,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    textContainer: {
        backgroundColor: '#ffffffaa',
        zIndex: 2,
        width: '90%',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },


    scroll: {
        width: '100%',
        zIndex: 1,
    },
    botonImg: {
        width: '95%',
        borderRadius: 10,
    }

});

