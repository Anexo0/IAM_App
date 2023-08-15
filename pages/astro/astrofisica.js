import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BotonImagen } from '../../myModules/boton'


export function Astrofisica() {
    return(
        <View style={styles.fondo}>
            <ImageBackground source={require('../../assets/img/astrofisica/fondo.jpg')} style = {styles.fondo}>
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={{height : '100%', width : '100%'}}
                />
            </ImageBackground>            
            <Text style={{textAlign:'center', color:'white', marginTop:20}}>
                El grupo de Astrofísica del IAM trabaja en temas tanto galácticos como extragalácticos, empleando múltiples regiones de espectro electromagnético: radio, IR, visible, UV. Se tiene colaboración con decenas de investigadores de instituciones de todo el mundo.
            </Text>

            <Text style={styles.subtitulo}>
                Links rapidos
            </Text>

            <View style={{paddingRight:20, paddingLeft: 20,}}>
                <View style={styles.botonera}>
                    <BotonImagen src = {require('../../assets/img/astrofisica/eclipse.webp')} label='Eclipses' target='Eclipses' style={styles.boton} />
                    <BotonImagen src = {require('../../assets/img/astrofisica/sidus.jpg')} label='Revista SIDUS' target='Sidus' style={[styles.boton, ]} />
                    <BotonImagen src = {require('../../assets/img/astrofisica/galeria.jpg')} label='Galería' target='Galeria' style={styles.boton} />
                    <BotonImagen src = {require('../../assets/img/astrofisica/publicaciones.png')} label='Publicaciones' target='Publicaciones' style={styles.boton} />
                </View>
            </View>
        </View>
    )
}





const styles = StyleSheet.create({
    fondo:{
        position: 'absolute',
        zIndex:-1,
        height:'100%',
        width:'100%',
    },
    subtitulo:{
        textAlign: 'center', 
        fontWeight: '700', 
        fontSize: 30,
        marginTop: 50,
        color: 'white',
    },
    botonera:{
        backgroundColor: '#ffffff55',
        flexDirection: 'row',
        width:'100%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    boton:{
        width:'45%',
        borderRadius: 30,
        borderStyle: 'solid',
    }
});