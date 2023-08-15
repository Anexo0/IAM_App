import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Modal, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BotonImagen2 } from '../../myModules/boton'
import TextTicker from 'react-native-text-ticker'


export function Pronostico() {
    const [pronost, setPronost] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMensaje, setModalMensaje] = useState('{}');

    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let html = xhttp.responseText;
                setPronost(getPronosticos(html));
            }
        };
        xhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEqu9owc9-mk2jT8dzATmxWtgxwdwD6BhHU4vSq3kJuaCXTH-WVkYPhaQ4g-wQQ/pubhtml");
        xhttp.send(null);
    }, [])

    return (
        <ImageBackground source={require('../../assets/img/meteorologia/meteoro-fondo.jpg')} style={styles.fondoImagen}>
            <View style={{ backgroundColor: '#FAEBD7', width: '100%', borderBottomWidth: 2, borderBottomColor: 'black' }}>
                <TextTicker
                    duration={40000}
                    loop
                    repeatSpacer={50}
                    marqueeDelay={1000}
                >
                    {pronost.recomendacion}
                </TextTicker>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={{ width: '100%', alignItems: 'center' }}>

                    <View style={styles.textContainer}>
                        <Text style={styles.situacionTitulo}>
                            Situación metereológica nacional
                        </Text>
                        <Text style={styles.texto}>
                            {pronost.situacionNacional}
                        </Text>
                        <Image source={{ uri: pronost.imagenNacional }} style={styles.imagenNacional} />
                    </View>

                    <View style={{ width: '98%', alignItems: 'center', backgroundColor: '#ffffffaa', borderRadius: 10, }}>
                        <View style={{ backgroundColor: 'white', width: '100%', borderRadius: 10, padding: 10, }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700' }}>
                                {pronost.mensajeBienvenida}
                            </Text>
                        </View>



                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/gdl.webp')} label='ÁREA METROPOLITANA DE GUADALAJARA' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[0]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/autlan.jpg')} label='ZONA SIERRA AMULA: AUTLÁN DE NAVARRO	' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[1]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/ocotlan.jpg')} label='ZONA CIÉNEGA: OCOTLÁN' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[2]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/colotlan.jpg')} label='ZONA NORTE: COLOTLÁN' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[3]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/lagos.jpg')} label='ZONA ALTOS: LAGOS DE MORENO' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[4]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/guzman.jpeg')} label='ZONA SUR: CIUDAD GUZMÁN' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[5]);
                            }
                        } />
                        <BotonImagen2 src={require('../../assets/img/meteorologia/lugares/vallarta.jpg')} label='ZONA COSTA: PUERTO VALLARTA' target='Eclipses' style={styles.botonImg} action={
                            function () {
                                setModalVisible(true);
                                setModalMensaje(pronost.regionales[6]);
                            }
                        } />
                    </View>
                </View>

            </ScrollView>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>{modalMensaje.name}</Text>
                        <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                            {modalMensaje.desc}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 10, borderRadius: 5, }}>
                            <View style={{ marginRight: 10 }}>
                                <Text style={{ fontWeight: '700' }}>
                                    Temperaturas
                                </Text>
                                <Text>Min : {modalMensaje.min} C°</Text>
                                <Text>Max : {modalMensaje.max} C°</Text>

                                <Text style={{ fontWeight: '700' }}>
                                    Viento
                                </Text>
                                <Text>
                                    {modalMensaje.viento} km/h
                                </Text>
                            </View>

                            <Image source={{ uri: modalMensaje.imageLink }} style={{ width: 100, height: 100 }} />
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}



function getPronosticos(bodyHTML) {
    
    let json = {
        'regionales': [
            {
                'name': 'ÁREA METROPOLITANA DE GUADALAJARA	',
            },
            {
                'name': 'ZONA SIERRA AMULA: AUTLÁN DE NAVARRO		',
            },
            {
                'name': 'ZONA CIÉNEGA: OCOTLÁN		',
            },
            {
                'name': 'ZONA NORTE: COLOTLÁN		',
            },
            {
                'name': 'ZONA ALTOS: LAGOS DE MORENO		',
            },
            {
                'name': 'ZONA SUR: CIUDAD GUZMÁN		',
            },
            {
                'name': 'ZONA COSTA: PUERTO VALLARTA		',
            },
        ],
    };
    let pointer = 0;
    pointer = walkNRows(pointer, bodyHTML, 3);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.mensajeBienvenida = 'PRONÓSTICO DEL ESTADO DEL TIEMPO PARA JALISCO\n' + getInnerText(pointer, bodyHTML);

    
    pointer = walkNRows(pointer, bodyHTML, 7);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.situacionNacional = getInnerText(pointer, bodyHTML);


    pointer = walkNRows(pointer, bodyHTML, 1);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.imagenNacional = getImgSrc(pointer, bodyHTML);


    pointer = bodyHTML.indexOf('ÁREA METROPOLITANA DE GUADALAJARA');
    pointer = walkNRows(pointer, bodyHTML, 1);

    for(let k = 0; k < 6; k+=2){
        for(let i = 0; i < 2; i++){
            pointer = walkNCells(pointer, bodyHTML, 2);
            json.regionales[i+k].imageLink = getImgSrc(pointer, bodyHTML);
            pointer = walkNCells(pointer, bodyHTML, 1);
            json.regionales[i+k].desc = getInnerText(pointer, bodyHTML);
        }
        
        pointer = walkNRows(pointer, bodyHTML, 2);
        
        for(let j = 0; j < 2; j++){
            pointer = walkNCells(pointer, bodyHTML, 2);
            json.regionales[j+k].max = getInnerText(pointer, bodyHTML);
            pointer = walkNCells(pointer, bodyHTML, 1);
            json.regionales[j+k].min = getInnerText(pointer, bodyHTML);
            pointer = walkNCells(pointer, bodyHTML, 1);
            json.regionales[j+k].viento = getInnerText(pointer, bodyHTML);
        }
    
        pointer = walkNRows(pointer, bodyHTML, 6);    

    }

    pointer = bodyHTML.indexOf('ZONA COSTA:</span>');
    pointer = walkNRows(pointer, bodyHTML, 1);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.regionales[6].imageLink = getImgSrc(pointer, bodyHTML);
    pointer = walkNCells(pointer, bodyHTML, 1);
    json.regionales[6].desc = getInnerText(pointer, bodyHTML);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.recomendacion = getInnerText(pointer, bodyHTML);
    pointer = walkNRows(pointer, bodyHTML, 2);
    pointer = walkNCells(pointer, bodyHTML, 2);
    json.regionales[6].max = getInnerText(pointer, bodyHTML);
    pointer = walkNCells(pointer, bodyHTML, 1);
    json.regionales[6].min = getInnerText(pointer, bodyHTML);
    pointer = walkNCells(pointer, bodyHTML, 1);
    json.regionales[6].viento = getInnerText(pointer, bodyHTML);
      
    return json;
}

function walkNRows(pointer, body, n){
    const reRow = /<tr.*>/i;
    for(let i = 0; i < n; i++){
        pointer = regexIndexOf(body, reRow, pointer+1);
    }
    return pointer;
}
function walkNCells(pointer, body, n){
    const reOpenTag = /<t[d].*>/i;
    for(let i = 0; i < n; i++){
        pointer = regexIndexOf(body, reOpenTag, pointer+1);
    }
    return pointer;
}

function getInnerText(startOfOpTag, body){
    const reCloseTag = /<\/t[d].*>/i;
    let endOfOpTag = body.indexOf('>', startOfOpTag);
    let endOfContent = regexIndexOf(body, reCloseTag, endOfOpTag);
    return body.slice(endOfOpTag+1, endOfContent);
}

function getImgSrc(startOfOpTag, body){
    let startOfURL = body.indexOf('http', startOfOpTag);
    let endOfURL = body.indexOf('"', startOfURL);
    return body.slice(startOfURL, endOfURL);
}

function regexIndexOf(string, regex, startpos) {
    var indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}




const styles = StyleSheet.create({
    fondoImagen: {
        zIndex: -10,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    scroll: {
        width: '100%',
        zIndex: 1,
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
    situacionTitulo: {
        textAlign: 'center',
        backgroundColor: 'tomato',
        borderRadius: 5,
        fontSize: 15,
        width: '110%',
        marginTop: -10,
    },
    texto: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    imagenNacional: {
        width: '120%',
        height: 300,
    },
    botonImg: {
        width: '95%',
        borderRadius: 10,
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
    
});