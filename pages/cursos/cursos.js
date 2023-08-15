import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Linking, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const win = Dimensions.get('window');
const ratio = win.width/675; //800 is actual image width


function Inicio() {
    /*
    const [width, setWidth] = useState();
    const onPageLayout = (event) => {
        //const { width, height } = event.nativeEvent.layout;
        //setWidth(width);
        setWidth(100);
      };
    */ 
    return (
        <ImageBackground source={require('../../assets/img/cursos/pizarra.jpg')} style={styles.fondoImagen}>
            <ScrollView style={{width: '100%'}}><View style={{ alignItems : 'center'}}>

                <View style={styles.textContainer} >
                    <View style={styles.estHeaderContainer}>
                        <Text style={styles.estHeaderText}>
                            Viernes de Ciencia
                        </Text>
                    </View>
                    <View style={{ padding: 15, paddingTop: 0, }}>
                        <Text style={styles.texto}>
                            Los Viernes de Ciencia del IAM son una tradición que data de mediados de la década de 1990, aunque tienen su origen en las charlas que a inicio del siglo XX ofrecía el Presbítero Severo Díaz Galindo. En los Viernes de Ciencia tendrás la ocasión de informarte sobre diversos tópicos de prácticamente cualquier rama de la ciencia, los cuales son presentados de forma clara por los charlistas invitados. Nuestra misión es acercar la ciencia a la sociedad e incentivar las vocaciones científicas.
                            {'\n\n'}
                            Te esperamos todos los viernes hábiles del año a las 19 hrs en el IAM, casa científica de los Jaliscienses, incluido en el Inventario Estatal del Patrimonio Cultural y en funcionamiento ininterrumpido en su actual ubicación desde al menos 1894.
                        </Text>
                        <Image source={require('../../assets/img/cursos/danae.jpg')} style={{ width: '100%', height: 80 }} />

                    </View>
                </View>

                

            </View></ScrollView>

        </ImageBackground>
    );
}

//style={{ width: width - 30, height: (width - 30) * 0.258 }}

function Cine(){
    return(
    <ScrollView style={{width: '100%'}}><View style={{ alignItems : 'center'}}>
        <Image 
            source={{uri : 'http://iam.cucei.udg.mx/sites/default/files/la_ciencia_en_septimo_arte_0.jpg'}}
            style = {{height: 1200 * ratio, width : win.width}}
        />
    </View></ScrollView>
    );
}

function Proximamente(){
    const [eventos, setEventos] = useState([]);
    
    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let html = xhttp.responseText;
                setEventos(getEventos(html));
            }
        };
        xhttp.open("GET", "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vTD9RhRco2toCdNcYJ3QeQApYmntA9IiQmvqiAS1q3xkjeVC1RN1h8DDpXbq2xMKQ/pubhtml");
        xhttp.send(null);
    }, []);
    //let foo = [eventoCard('2023-12-12', 'juan', 'politica', 1), eventoCard('2023-11-11', 'jose', 'naturaleza', 2)];
    let listaEventos= eventos.map(function(element, index){
        return eventoCard(element.fecha, element.nombre, element.titulo, index);
    });
    return(
        <ImageBackground source={require('../../assets/img/cursos/conferencia.jpg')} style={styles.fondoImagen}>
            <Text style={{fontSize : 26, color : 'white', fontWeight : '700', textShadowColor: '#000', textShadowRadius: 10}}>
                Viernes de Ciencia
            </Text>
            <ScrollView style={{width: '100%'}}><View style={{ alignItems : 'center'}}> 
                {listaEventos}
            </View></ScrollView>
        </ImageBackground>
    );
}

function eventoCard(fecha, nombre, titulo, key){
    const mesesNames = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ];
    
    return(<View style={styles.textContainer} key={key}>
                <View style={styles.estHeaderContainer}>
                    <Text style={styles.estHeaderText}>
                        {fecha.getDate()} de {mesesNames[fecha.getMonth()]}
                    </Text>
                </View>
                <View style={{ padding: 15, paddingTop: 0, }}>
                    <Text style={styles.texto}>
                        <Text style={{fontSize : 22, fontWeight : '700'}}>
                            {nombre}
                        </Text>
                        {'\n'}
                        {'\n'}
                        <Text style={{fontSize : 18, fontStyle : 'italic'}}>
                            "{titulo}"
                        </Text>
                    </Text>
                </View>
            </View>);
    
}


function getEventos(bodyHTML){
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    let senddata = [];
    let pointer = bodyHTML.indexOf('<tbody>');
    pointer = walkNRows(pointer, bodyHTML, 6);
    let curMonth = '';
    let vac = 0;
    for(let i = 0; i < 45; i++){
        let json = {};
        pointer = walkNCells(pointer, bodyHTML, 3);
        let dia = getInnerText(pointer, bodyHTML);
        if(meses.includes(dia)){
            curMonth = meses.indexOf(dia);
            pointer = walkNCells(pointer, bodyHTML, 1);
            dia = getInnerText(pointer, bodyHTML);
        }
        json.fecha = new Date(2023, curMonth, dia);
        pointer = walkNCells(pointer, bodyHTML, 1);
        json.nombre = getInnerText(pointer, bodyHTML);
        if(json.nombre == 'VACACIONES'){
            pointer = walkNRows(pointer, bodyHTML, 2);
            if(vac == 0){
                vac++;
            }else{
                pointer = walkNRows(pointer, bodyHTML, 1);
            }
            continue;
        }
        pointer = walkNCells(pointer, bodyHTML, 1);
        json.titulo = getInnerText(pointer, bodyHTML);
        
        if(json.titulo == ""){
            json.titulo = 'Por confirmar';
        }
        if(json.fecha >= new Date()){
            senddata.push(json);
        }
        pointer = walkNRows(pointer, bodyHTML, 1);
    }
    return(senddata);
}


const Tab = createBottomTabNavigator();

export function Cursos() {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = 'home';
                        } else if (route.name === 'Próximamente') {
                            iconName = 'md-calendar';
                        } else if (route.name === 'Cine') {
                            iconName = 'film';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#87CEFA',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })
            } >
                <Tab.Screen name="Inicio" component={Inicio} />
                <Tab.Screen name="Próximamente" component={Proximamente} />
                <Tab.Screen name="Cine" component={Cine} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}






function walkNRows(pointer, body, n){
    const reRow = /<tr.*>/i;
    for(let i = 0; i < n; i++){
        pointer = regexIndexOf(body, reRow, pointer+1);
    }
    return pointer;
}
function walkNCells(pointer, body, n){
    const reOpenTag = /<t[dh].*>/i;
    for(let i = 0; i < n; i++){
        pointer = regexIndexOf(body, reOpenTag, pointer+1);
    }
    return pointer;
}

function getInnerText(startOfOpTag, body){
    const reCloseTag = /<\/t[dh].*>/i;
    let endOfOpTag = body.indexOf('>', startOfOpTag);
    let endOfContent = regexIndexOf(body, reCloseTag, endOfOpTag);
    return body.slice(endOfOpTag+1, endOfContent);
}


function regexIndexOf(string, regex, startpos) {
    var indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
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
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 0,
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
    estHeaderContainer: {
        backgroundColor: 'black',
        width: '100%',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        paddingBottom: 4,

    },
    estHeaderText: {
        color: 'white',
        textAlign: 'center',
    },

});
