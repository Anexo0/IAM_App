import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Linking, Button, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import React, { useState, useEffect } from 'react';


const win = Dimensions.get('window');
const ratio = win.width/800; //800 is actual image width



function Inicio() {
    return (
        <ImageBackground source={require('../../assets/img/clima/clima-fondo.jpg')} style={styles.fondoImagen}>
            <View style={styles.textContainer}>
                <Text style={styles.texto}>
                    La Climatología es la ciencia que estudia el clima, es decir, el estado físico de la atmósfera y sus variaciones estadísticas en el espacio y en el tiempo, en base a las condiciones meteorológicas (temperatura, precipitación, humedad, etc.) observadas durante un periodo de 30 años o más.
                    {'\n\n'}
                    El propósito principal de esta página es proporcionar información del comportamiento de las variables climatológicas de temperatura y precipitación en el Área Metropolitana de Guadalajara (AMG) de los últimos 120 años a partir de registros históricos del Instituto de Astronomía y Meteorología de la Universidad de Guadalajara (IAM).
                </Text>
            </View>


        </ImageBackground>
    );
}
function Curiosidades() {
    const [width, setWidth] = useState();
    return (
        <ImageBackground source={require('../../assets/img/clima/atardecer.jpg')} style={styles.fondoImagen}>
            <View style={styles.textContainer} onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setWidth(width);
            }}>
                <SliderBox
                    images={[
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmax-sep.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmin-sep.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmax-ago.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmin-ago.png",

                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmax-jul.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmin-jul.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmax-jun.png",
                        "http://iam.cucei.udg.mx/sites/default/files/dato_curioso_tmin-jun.png",


                    ]}
                    //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}

                    circleLoop
                    parentWidth={width - 30}
                    sliderBoxHeight={(width - 30) * 1.33}
                    autoplay
                    autoplayInterval={9000}
                />
            </View>
        </ImageBackground>
    );
}

function Stats() {
    const [width, setWidth] = useState();
    const [currImage, setCurrImage] = useState(0);

    const currentMonth = new Date().getMonth();
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const monthsComp = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const imagelinks = [
        `http://iam.cucei.udg.mx/sites/default/files/calendarioclima_${months[currentMonth]}.png`,
        `http://iam.cucei.udg.mx/sites/default/files/precipitacionmaxima_${monthsComp[currentMonth]}.png`,
        'http://iam.cucei.udg.mx/sites/default/files/tmax_1991-2020.png',
        'http://iam.cucei.udg.mx/sites/default/files/tmin_1991-2020.png',

    ];
    const leyendas = [
        'Temperaturas máximas y mínimas históricas de este mes.',
        'Precipitación máxima de cada día y el año en que se presentó dicho valor, durante el periodo 1991-2020.',
        'Valores máximos de las temperaturas diarias registradas del año, considerando el periodo 1991-2020.',
        'Valores mínimos de las temperaturas diarias registradas del año, considerando el periodo 1991-2020.',

    ];
    const ratios = [1, 1.65, 1.39, 1.39];
    return (

        <ImageBackground source={require('../../assets/img/clima/nubegris.webp')} style={styles.fondoImagen}>
            <ScrollView style={styles.scroll}><View style={{ alignItems: 'center' }}>

                <View style={[styles.textContainer, { marginBottom: 0 }]}>
                    <Text style={styles.textoBold}>{leyendas[currImage]}</Text>
                </View>


                <View style={styles.textContainer} onLayout={(event) => {
                    var { x, y, width, height } = event.nativeEvent.layout;
                    setWidth(width);
                }}>
                    <SliderBox
                        images={imagelinks}
                        onCurrentImagePressed={index => Linking.openURL(imagelinks[index])}
                        currentImageEmitter={index => setCurrImage(index)}


                        parentWidth={width - 30}
                        sliderBoxHeight={(width - 30) * ratios[currImage]}
                        autoplay
                        autoplayInterval={3000}
                    />
                </View>
            </View></ScrollView>

        </ImageBackground>

    );
}



function Webcam() {

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'black'}}>
            <Image source={require('../../assets/img/ambiente/cargando.gif')}
                style={{
                    position: 'absolute',
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    top: '40%',
                }}
            />
            <Text style={[styles.textoBold, { color: 'white', backgroundColor: 'black' }]}>
                Vista desde el hotel Fiesta Americana {'\n'}en la ciudad de Guadalajara {'\n\n'}
            </Text>
            
            <Camara posicion='a'></Camara>
            <Camara posicion='b'></Camara>

            <Text style={[styles.textoBold, { color: 'white', backgroundColor: 'black', marginBottom: 80 }]}>
                La imagen se actualiza cada 10 segundos.
            </Text>
        </View>

    )
}
let headstart = false, ticker = 1000;
/*
function Camara333(){
    const [keyW, setKeyW] = useState(1);
    const refreshWebV = function(){
        console.log('refrescando...' + keyW);
        let k = keyW;
        setKeyW(k + 1);
    };
    setTimeout(refreshWebV, 20000);
    return(
        <WebView
            key={keyW}
            source={{uri : 'https://webcamsdemexico.net/guadalajara1/live.jpg' + '?' + new Date()}}
            style={styles.camara}
            onLoad={console.log("comenzamos!!!")}
        />
    );
}

let headstart = 10000;
*/
function Camara(props){
    const [keyW, setKeyW] = useState(1);
    const refreshWebV = function(){
        console.log('refrescando...' + keyW);
        let k = keyW;
        ticker--;
        setKeyW(k + 1);
    };
    if(props.posicion == 'b' && !headstart){
        headstart = true;
        setTimeout(refreshWebV, 5000);
    }
    else{
        setTimeout(refreshWebV, 10000);
    }
    return(
        <View style={[
            styles.camaraContainer, 
            props.posicion=='b'?{marginTop : -600*ratio}:{marginTop : 0},
            {zIndex : ticker}
            ]} >
            <WebView
                key={keyW}
                source={{uri : 'https://webcamsdemexico.net/guadalajara1/live.jpg' + '?' + new Date()}}
            />
        </View>
    );
}




/*
<WebView
                source={{
                    html: `<iframe width='100%' height='50%'   src='https://www.youtube.com/embed/GsSRUYRzX-0?&autoplay=1' frameborder='0' allow='autoplay;' allowfullscreen></iframe>`
                }}
                mediaPlaybackRequiresUserAction={false}
                userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                style={{ backgroundColor: 'black' }}
            />
*/

const Tab = createBottomTabNavigator();

export function Clima() {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = 'home';
                        } else if (route.name === 'Curiosidades') {
                            iconName = 'star';
                        } else if (route.name === 'Estadísticas') {
                            iconName = 'analytics-outline';
                        } else if (route.name === 'Live Webcam') {
                            iconName = 'videocam';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#87CEFA',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })





            } >
                <Tab.Screen name="Inicio" component={Inicio} />
                <Tab.Screen name="Curiosidades" component={Curiosidades} />
                <Tab.Screen name="Estadísticas" component={Stats} />
                <Tab.Screen name="Live Webcam" component={Webcam} />
            </Tab.Navigator>
        </NavigationContainer>
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
    camara : {
         
    },
    camaraContainer :{
        width: win.width,
        height: 600 * ratio, //600 is actual height of image
        zIndex : 1100,
    }

});
