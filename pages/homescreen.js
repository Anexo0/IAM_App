import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Linking, Button, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { BotonImagen } from '../myModules/boton';
import TextTicker from 'react-native-text-ticker';
import {normFS} from '../myModules/normalize_font.js'
import Checkbox from 'react-native-modest-checkbox';
import {Settings} from './notification-settings';


const windowWidth = Dimensions.get('window').width;



export function Homescreen() {
  const [showNotif, setNotif] = useState(true)
  const win = Dimensions.get('window');
  const [gdl, setGdl] = useState(false)
  const [zap, setZap] = useState(false)
  const [tlaj, setTlaj] = useState(false)
  const [tlaq, setTlaq] = useState(false)
  const [ton, setTon] = useState(false)
  const [salto, setSalto] = useState(false)
  const [ixt, setIxt] = useState(false)
  const [anyChecked, setAnyChecked] = useState(false)
  const CheckStates = {
    Guadalajara: [gdl, setGdl],
    Zapopan: [zap, setZap],
    Tlajomulco: [tlaj, setTlaj],
    Tlaquepaque: [tlaq, setTlaq],
    Tonala: [ton, setTon],
    El_Salto: [salto, setSalto],
    Ixtlahuacan_de_los_Membrillos: [ixt, setIxt]
  }

  //const [test, setTest] = useState(false)
  const ratioQci = win.width/2068; //800 is actual image width
  const ratioIam = win.width/1216; //800 is actual image width
  const [pronost, setPronost] = useState(
    {
      "fecha": "",
      "pronostico": "",
      "estado": "",
    }
  );

  const settings = new Settings();
  

  const municipios = [
    "Guadalajara",
    "Zapopan",
    "Tlajomulco",
    "Tlaquepaque",
    "Tonala",
    "El Salto",
    "Ixtlahuacan de los Membrillos",
  ];
  let municipiosChecks = [];

  municipios.forEach((item, i) => {
    municipiosChecks.push(
      <Checkbox
            key={i}
            containerStyle={styles.notificationChecksContainer}
            checkboxStyle={styles.notificationChecks}
            labelStyle={styles.notificationCheckLabels}
            label={item}
            checked={CheckStates[item.replaceAll(" ", "_")][0]}
            onChange={c => {
              CheckStates[c.label.replaceAll(" ", "_")][1](c.checked)
              checkIfAnyChecked(c)
              }}
      >

      </Checkbox>
    )
  })

  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let html = xhttp.responseText;
        setPronost(getGDLPronostico(html));
      }
    };
    xhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEqu9owc9-mk2jT8dzATmxWtgxwdwD6BhHU4vSq3kJuaCXTH-WVkYPhaQ4g-wQQ/pubhtml");
    xhttp.send(null);

    //notif
  }, [])

  const saveSettings = () => {
    
  }

  const clearChecks = () => {
    for (const [key, value] of Object.entries(CheckStates)){
      value[1](false)
    }
    setAnyChecked(false)
  }
  const checkIfAnyChecked = (c) => {
    let isAny = false
    for (const [key, value] of Object.entries(CheckStates)){
      if (key == c.label){
        if (c.checked){
          isAny = true
          break
        }
      }
      else if (value[0]){
        isAny = true
        break
      }
    }
    console.log(c)
    console.log("is any ",isAny, "check ", c.checked)
    setAnyChecked(isAny ? true : false)
    console.log(anyChecked)
  }

  return (
    <ImageBackground source={require('../assets/img/homescreen/estados/nublado.jpg')} style={styles.fondoImagen}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />

      <Image 
        source={require('../assets/img/homescreen/iam-logo.png')}
        style = {{height: 301 * ratioIam, width : win.width}}
      />

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.botonera}>
          <View style={styles.botoneraLateral}>
            <BotonImagen src={require('../assets/img/homescreen/iam-foto.jpg')} label='¿Quiénes somos?' target='AcercaDe' style={styles.botonIzquierdo} />
            <BotonImagen src={require('../assets/img/homescreen/metereology.jpg')} label='Metereología' target='Meteorologia' style={styles.botonIzquierdo} />
            <BotonImagen src={require('../assets/img/homescreen/climatology.jpeg')} label='Climatología' target='Climatologia' style={styles.botonIzquierdo} />
          </View>
          <View style={styles.botoneraLateral}>
            <BotonImagen src={require('../assets/img/homescreen/astro.jpeg')} label='Astrofísica' target='Astrofisica' style={styles.botonDerecho} />
            <BotonImagen src={require('../assets/img/homescreen/ambiente.jpg')} label='Medio Ambiente' target='MedioAmbiente' style={styles.botonDerecho} />
            <BotonImagen src={require('../assets/img/homescreen/cursos.jpg')} label='Cursos' target='Cursos' style={styles.botonDerecho} />
          </View>
        </View>
      </ScrollView>

      <Image 
        source={require('../assets/img/homescreen/udg-cucei-logo.png')}
        style = {{height: 572 * ratioQci, width : win.width}}
      />
      <View style={{ alignSelf: 'flex-start', backgroundColor: 'darkred', borderTopEndRadius: 20, paddingRight: 10 }}>
        <Text style={{ color: 'azure', }} >Pronóstico del día {pronost.fecha} </Text>
      </View>
      <View style={{ backgroundColor: 'azure', width: '100%', }}>
        <TextTicker
          duration={18000}
          loop
          repeatSpacer={50}
          marqueeDelay={1000}
        >
          {pronost.pronostico}
        </TextTicker>
      </View>

      {showNotif ? 
        <View style={styles.notificationBack}>
          <View style={styles.notificationFront}>
          <Text style={styles.notificationText1}>
            ¿Desea recibir notificaciones de las siguientes localidades?
          </Text>
          <ScrollView style={styles.notificationScrollView} >
            {municipiosChecks}
          </ScrollView>
          <Text style={styles.notificationText2}>
            Ajuste de notificaciones puede ser cambiado en configuraciones

          </Text>
          <View style={styles.notificationViewButtons}>
          <TouchableHighlight 
            style={styles.notificationButtons} 
            underlayColor={'#00000044'}  
            onPress={() => 
              null
            }>
            <Text style={styles.notificationButtonText}>
              Aceptar
            </Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.notificationButtons} 
            underlayColor={'#00000044'} 
            onPress={() => {
              //setNotif(false)
              clearChecks()
            }}>
          <Text style={styles.notificationButtonText}>
              {anyChecked ? "Limpiar" : "Rechazar"}
            </Text>
          </TouchableHighlight> 
          </View>
          
          </View>  
        </View>
      : null
      }
    </ImageBackground>
  );
}






const styles = StyleSheet.create({

  scroll: {
    width: '100%',
    zIndex: 1
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
  },
  texto: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textoBold: {
    fontWeight: '700',
    textAlign: 'center',
  },
  botonIzquierdo: {
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    borderLeftWidth: 0,
  },
  botonDerecho: {
    borderBottomStartRadius: 30,
    borderTopStartRadius: 30,
    borderRightWidth: 0,

  },
  botonera: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    flex: 1,
    alignItems: 'center',
  },
  botoneraLateral: {
    width: '45%',
  },
  notificationBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#302c2caf'
  },
  notificationFront: {
    padding: 10,
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '60%',
    backgroundColor: '#ffffffff',
    borderRadius: 15,
  },
  notificationText1: {
    marginVertical: '5%',
    height: '10%',
    fontSize: normFS(18),
    textAlign: 'center',
  },
  notificationText2: {
    marginTop: '2%',
    height: '11%',
    fontSize: normFS(15),
    textAlign: 'center',
  },
  notificationScrollView: {
    marginHorizontal: '5%',
    backgroundColor: '#b8b7b7',
    borderColor: '#000000ff',
    borderWidth: 1,
    borderRadius: 10,
  },
  notificationViewButtons:{
    paddingHorizontal: '10%',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationButtons: {
    height: '100%',
    width: '40%',
    backgroundColor: '#8d898955',
    justifyContent: 'center',
    borderRadius: 10,
  },
  notificationButtonText: {
    fontWeight: 'bold',
    fontSize: normFS(18),
    textAlign: 'center',
  },
  notificationTexts: {
    width: '20%',
    height: '10%'
  },
  notificationChecks: {
    marginLeft: 10,
    width: '15%',
    height: '60%',
    resizeMode: 'contain',
  },
  notificationChecksContainer: {
    borderWidth: 1,
    borderColor: '#676767bb',
    flex: 1,
    width: '100%',
    height: 60,
  },
  notificationCheckLabels: {
    fontSize: normFS(15),
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#ffffff',
    width: '100%',
    height: '100%',
  },

});

function getGDLPronostico(bodyHTML) {
  let json = {
    "fecha": "",
    "pronostico": "",
    "estado": "",
  };
  let pointer = 0;
  pointer = walkNRows(pointer, bodyHTML, 3);
  pointer = walkNCells(pointer, bodyHTML, 2);
  json.fecha = getInnerText(pointer, bodyHTML);

  pointer = bodyHTML.indexOf('ÁREA METROPOLITANA DE GUADALAJARA');
  pointer = walkNRows(pointer, bodyHTML, 1);
  pointer = walkNCells(pointer, bodyHTML, 3);
  json.pronostico = getInnerText(pointer, bodyHTML);
  if (json.pronostico.length < 100) {
    json.pronostico += "    " + json.pronostico;
  }

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
//  const reCloseTag = /<\/t[dh].*>/i;
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

