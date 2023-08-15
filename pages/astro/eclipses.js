import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Text, View, StyleSheet, Image, ImageBackground, Linking, TouchableOpacity, Alert, ScrollView, Dimensions, Modal, Pressable } from 'react-native';
import React, { useState } from "react";

const eclipseData = [
    {
      "duracion": "3 hours, 6 minutes",
      "fecha": "Oct 14, 2023",
      "fin": "12:37 pm",
      "image": "https://c.tadst.com/gfx/eclipses2/20231014/path-160.png",
      "inicio": "9:31 am",
      "link": "https://www.timeanddate.com/eclipse/in/mexico/guadalajara?iso=20231014",
      "max": "10:59 am",
      "title": "Partial Solar Eclipse",
      "thumbnaili" : <Image source={require('../../assets/img/astrofisica/eclipse-vectors/2023-oct-14.jpg')} />

    },
    {
      "duracion": "4 hours, 39 minutes",
      "fecha": "Mar 24\u201325, 2024",
      "fin": "3:32 am",
      "image": "https://c.tadst.com/gfx/eclipses2/20240325/path-160.png",
      "inicio": "10:53 pm",
      "link": "https://www.timeanddate.com/eclipse/in/mexico/guadalajara?iso=20240325",
      "max": "1:12 am",
      "title": "Penumbral Lunar Eclipse",
      "thumbnaili" : <Image source={require('../../assets/img/astrofisica/eclipse-vectors/2024-mar-24.jpg')} />

    },
    {
      "duracion": "2 hours, 42 minutes",
      "fecha": "Apr 8, 2024",
      "fin": "1:32 pm",
      "image": "https://c.tadst.com/gfx/eclipses2/20240408/path-160.png",
      "inicio": "10:50 am",
      "link": "https://www.timeanddate.com/eclipse/in/mexico/guadalajara?iso=20240408",
      "max": "12:09 pm",
      "title": "Partial Solar Eclipse",
      "thumbnaili" : <Image source={require('../../assets/img/astrofisica/eclipse-vectors/2024-abr-8.jpg')} />

    },
    {
      "duracion": "3 hours, 56 minutes",
      "fecha": "Sep 17, 2024",
      "fin": "10:47 pm",
      "image": "https://c.tadst.com/gfx/eclipses2/20240918/path-160.png",
      "inicio": "6:51 pm",
      "link": "https://www.timeanddate.com/eclipse/in/mexico/guadalajara?iso=20240918",
      "max": "8:44 pm",
      "title": "Partial Lunar Eclipse",
      "thumbnaili" : <Image source={require('../../assets/img/astrofisica/eclipse-vectors/2024-sep-17.jpg')} />

    }
  ]

var mensaje = {};

export function Eclipses(){
    const [modalVisible, setModalVisible] = useState(false);

    let componentList = eclipseData.map((currElem, index) => (
        <CartaEclipse key={index} index={index} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    ));
    return(
        <ImageBackground source={require('../../assets/img/astrofisica/eclipse-fondo.jpeg')}>
        <ScrollView style={styles.fondo}>
        <View style = {{flexDirection : 'column', alignItems : 'center'}}>
            {componentList}   
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
            
            <Text style={styles.modalText}>{mensaje.title}</Text>
            {mensaje.thumbnaili}
            <Text>{mensaje.fecha}</Text>
            <Text>Empieza: {mensaje.inicio}</Text>
            <Text>Punto máximo: {mensaje.max}</Text>
            <Text>Termina: {mensaje.fin}</Text>
            
            
            
            
            
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => Linking.openURL(mensaje.link)}
            >
              <Text style={styles.textStyle}>Ver aún más</Text>
            </Pressable>
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

    )
}

function CartaEclipse(props){
    let i = props.index;
    return(
        <TouchableOpacity style = {styles.card} 
        onPress={() => {
            mensaje = eclipseData[i];
            props.setModalVisible(true);
        }}>
            <View style={{flexDirection: 'row', justifyContent : 'space-around', alignItems:'flex-start'}}>
            <View style={{width : '60%'}}>
                    <Text style = {styles.cartatitulo}>
                        {eclipseData[i].title}
                    </Text>
                    <Text >
                        {eclipseData[i].fecha}
                    </Text>
                </View>
                <View style = {{width : '30%'}}>
                    <Image style = {styles.imagen} source={{uri : eclipseData[i].image}}/>
                </View>
            </View>
            <Text style={{textAlign : 'center'}}>
                Toca para ver más
            </Text>
            </TouchableOpacity>
    )
}




const styles = StyleSheet.create({

    card : {
        backgroundColor: '#ffffffcc',
        width: '80%',
        padding: 8,
        borderRadius : 10,
        marginTop: 15,
        
    },
    cartatitulo : {
        fontSize: 16,
        textAlign : 'center',
    },
    cartasub : {
        fontSize: 12,
        color : '#777777'
    },
    fondo : {
        height: '100%',
    },
    imagen : {
        maxWidth: 100,
        height : 70,
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
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        minWidth:90,
        marginTop:10,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});