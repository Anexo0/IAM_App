import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

function Inicio() {

  return (
    <ImageBackground source={require('../../assets/img/ambiente/medio-ambiente-fondo.jpg')} style={styles.fondoImagen}>
      <View style={styles.textContainer}>
        <Text style={styles.texto}>
          La contaminación del aire es uno de los problemas más recurrentes que padece la población de la Zona Metropolitana de Guadalajara. El acelerado crecimiento urbano e industrial ha generado cantidades significativas de emisiones a la atmósfera siendo una preocupación constante por los riesgos que la contaminación representa para la salud humana, ya que incide negativamente en su bienestar y calidad de vida.
        </Text>
        <Text style={styles.texto}>
          Los profesores e investigadores del Instituto de Astronomía y Meteorología de la Universidad de Guadalajara, preocupados por la trascendencia de este fenómeno, llevan a cabo diversos proyectos de investigación relacionados a la contaminación del aire desde las causas de origen hasta los posibles efectos en nuestro entorno. Así también se realiza investigación en el área de sustentabilidad del medio ambiente.
        </Text>
      </View>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />

    </ImageBackground>

  );
}


function Especialistas() {
  return (
    <ImageBackground source={require('../../assets/img/ambiente/especialistas-fondo.jpg')} style={styles.fondoImagen}>
      <ScrollView style={styles.scroll}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.textContainer}>

            <Text style={styles.nombreEspecialista}>
              Dr. Héctor Hugo Ulloa Godínez
            </Text>
            <Image source={require('../../assets/img/ambiente/DrHectorHugoUlloaGodinez.jpg')} style={styles.imageEspecialista} />
            <Text style={{ fontWeight: '700', textAlign: 'center' }}>
              Profesor Investigador Titular A
            </Text>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Contacto
              </Text>
              <Text style={styles.tarjetaContent}>
                hector@astro.iam.udg.mx
                hector.ulloa@academicos.udg.mx
              </Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Preparación Académica
              </Text>
              <Text style={styles.tarjetaContent}>
                • Licenciatura en Administración de Empresas {"\n"}
                • Maestría en Administración de Empresas {"\n"}
                • Doctorado en Ciudad, Territorio Y Sustentabilidad
              </Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Temas de investigación
              </Text>
              <Text style={styles.tarjetaContent}>
                Utilización de energías renovables en ciudades

              </Text>
            </View>

          </View>
          <View style={styles.textContainer}>

            <Text style={styles.nombreEspecialista}>
              Stephany Paulina Arellano Ramírez
            </Text>
            <Image source={require('../../assets/img/ambiente/StephanyPaulinaArellanoRamirez.jpg')} style={styles.imageEspecialista} />
            <Text style={{ fontWeight: '700', textAlign: 'center' }}>
              Responsable de Vinculación y Difusión
            </Text>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Contacto
              </Text>
              <Text style={styles.tarjetaContent}>
                vinculacion.iam@cucei.udg.mx
                stephany.arellano@academicos.udg.mx
              </Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Preparación Académica
              </Text>
              <Text style={styles.tarjetaContent}>
                • Lic. en Geografía, Universidad de Guadalajara{"\n"}
                • M.C.S. con enfoque en Desarrollo Sustentable, Universidad Autónoma de Nuevo León{"\n"}
                • Diplomado en Locución y Conducción{"\n"}
                • Estancia de investigacion en el Consortium for Capacity Building, University of Colorado Boulder

              </Text>
            </View>

            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>
                Temas de investigación
              </Text>
              <Text style={styles.tarjetaContent}>
                • Prevención de Riesgo de Desastres{"\n"}
                • Monitoreo con Radar Doppler{"\n"}
                • Geografía{"\n"}
                • Alertas tempranas{"\n"}
                • Ciencias Sociales{"\n"}
                • Sustentabilidad{"\n"}
                • Percepción Remota.
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
    </ImageBackground>

  );
}

function Laboratorio() {
  return (
    <ImageBackground source={require('../../assets/img/ambiente/laboratorio-fondo.jpg')} style={styles.fondoImagen}>
      <ScrollView style={styles.scroll}>
        <View style={{ alignItems: 'center' }}>

          <View style={[styles.textContainer, { backgroundColor: '#ffffffdd', }]}>
            <Text style={styles.texto}>
              La contaminación ambiental es un fenómeno potencialmente negativo que afecta a los seres vivos, incluido el ser humano. La explotación intensiva y extensiva de los recursos naturales, los cambios de uso de suelo, las grandes concentraciones urbanas e industriales, así como, el elevado consumo de combustibles fósiles, contaminan la atmósfera y el medio terrestre, dañando al ecosistema natural en un proceso que parece ser irreversible. En este contexto, la contaminación del suelo, del agua y del aire, influye de manera directa en la salud de las personas y en su calidad de vida.{"\n"}{"\n"}{"\n"}

              El tipo de influencia o impacto que la contaminación ambiental puede producir -ya sea local, regional o global- depende del tiempo de permanencia del químico contaminante en el medio respectivo y de qué tan lejos puede viajar desde su origen. Sin embargo, se genera daño irreversible en extensas áreas geográficas; particularmente, al suelo, a los bosques, a la vegetación,  a los cuerpos de agua y a los animales.{"\n"}{"\n"}{"\n"}

              Un caso particular, es sin duda “la contaminación atmosférica”; problema grave de deterioro ambiental que hemos padecido de manera significativa en los últimos 30 años,  y del que no se tiene el conocimiento adecuado y oportuno sobre cuáles son los mecanismos de prevención y de adaptación ante condiciones negativas extremas. En este orden, una variable importante es la velocidad del viento, pues las condiciones meteorológicas dominantes transportan los contaminantes sin respetar límites físicos locales, regionales, nacionales e internacionales.{"\n"}{"\n"}{"\n"}

              En adición, las consecuencias no son, solo efectos a los seres vivos, sino que además, generan otras anomalías que afectan al ecosistema; tal es el caso de las lluvias ácidas. Son lluvias nocivas con alto contenido de contaminantes incorporados en los procesos de transporte, dispersión y depósito final. Las investigaciones en Europa y Norteamérica reportan que el bióxido de azufre (SO2) y óxidos de nitrógeno (NOX) son los contaminantes precursores en la acidificación de las lluvias, por interactuar con la radiación solar y la humedad atmosférica para forjar especies ácidas de sulfatos y nitratos; es decir, ácido sulfúrico y nítrico diluido. Su frecuencia en las grandes ciudades afecta a la salud humana, los lagos, ríos, suelos, plantas, árboles, materiales y estructuras artísticas.{"\n"}{"\n"}{"\n"}

              Los graves problemas de deterioro que se padecen actualmente, adquieren mayor importancia debido a que el crecimiento proyectado para la población urbana del mundo, aumenta tanto las fuentes de contaminación como el número de personas expuestas a los contaminantes nocivos. Algunos estudios reportan que las fuentes móviles son el origen primario de la contaminación del aire en las grandes ciudades; en la mitad de ellas constituye la más importante.{"\n"}{"\n"}{"\n"}

              En México, los trabajos sistemáticos sobre deterioro ambiental datan de 1980, enfocados en grandes ciudades como México D.F y Toluca, Estado de México. En particular, la Ciudad de México incluye una elevada densidad poblacional, vehicular e industrial traducida en un acelerado desarrollo tecnológico; por tanto, no es novedad el padecimiento de problemas ambientales. El deterioro ambiental más notorio en esta megaciudad es la contaminación del aire; situación similar ocurre con la Zona Metropolitana de Guadalajara (ZMG). Esta zona al estar ubicada en un valle y rodeada de cadenas montañosas, acentúa una situación caracterizada por dominio de calmas y un sistema de baja dispersión de contaminantes. Asimismo, las frecuentes condiciones de estabilidad atmosférica propician un fenómeno conocido como inversión térmica, el cual obstaculiza la dispersión de contaminantes en el aire, favoreciendo su acumulación y concentración.{"\n"}{"\n"}{"\n"}

              En el Laboratorio de química se lleva a cabo el proyecto “Estimación cuantitativa de la acidez de las lluvias en la Zona Metropolitana de Guadalajara”; el cual fue implementado desde 1994 a la fecha. Se realiza investigación primordialmente sobre la contaminación atmosférica y las lluvias ácidas en esta zona.
            </Text>

          </View>
        </View>
      </ScrollView>




      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
    </ImageBackground>
  );
}

function Aire() {
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
          uri: 'https://aire.jalisco.gob.mx/'
        }}
      />
    </View>

  )
}


const Tab = createBottomTabNavigator();

export function Ambiente() {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Especialistas') {
              iconName = 'school';
            } else if (route.name === 'Laboratorio') {
              iconName = 'flask';
            } else if (route.name === 'Calidad del aire') {
              iconName = 'cloud';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'olivedrab',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })





      } >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Especialistas" component={Especialistas} />
        <Tab.Screen name="Laboratorio" component={Laboratorio} />
        <Tab.Screen name="Calidad del aire" component={Aire} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

  texto: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
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

  imageEspecialista: {
    resizeMode: 'contain',
    height: 100,
    width: '100%'
  },
  nombreEspecialista: {
    marginBottom: 10,
    fontSize: 18,
  },
  tarjeta: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginTop: 10,
  },
  tarjetaTitulo: {
    fontWeight: '600',
    backgroundColor: '#99ff99',
    maxWidth: '80%',
    paddingLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tarjetaContent: {
    paddingLeft: 8,
    paddingBottom: 8,
    marginTop: 5,
  },
  scroll: {
    width: '100%',
    zIndex: 1
  }

});
