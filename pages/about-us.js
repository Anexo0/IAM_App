import { ImageBackground, Image, StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
const fondo = require("../assets/img/aboutus/fondo-gimpeado.png"), foto = require("../assets/img/aboutus/iam-foto.jpg"), ubilogo = require("../assets/img/aboutus/ubicacion-logo.png");
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions } from 'react-native';

export function QueEsIAM() {
  const win = Dimensions.get('window');
  const ratioFoto = win.width/625; //800 is actual image width
  const ratioFondo = win.width/2392; //800 is actual image width
  
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image 
            source={fondo}
            style = {{height: 1102 * ratioFondo, width : win.width}}
          />
          <Text style={styles.texto}>
            El Instituto de Astronomía y Meteorología es parte del Departamento de Física del Centro Universitario de Ciencias Exactas e Ingenierías de la Universidad de Guadalajara y en él se lleva a cabo investigación científica en las áreas de la Astronomía, la Meteorología y el Medio Ambiente.
            {'\n\n'}
            Como parte de nuestras actividades está hacer llegar a la población información precisa y oportuna en nuestros campos de acción. Adicionalmente se desarrollan numerosas actividades de divulgación de la ciencia de manera pública y gratuita dirigidas a toda la ciudadanía pero especialmente a los jóvenes en busca de un campo de estudios profesionales para estimular en ellos las vocaciones científicas y tecnológicas.         </Text>
          <Image 
            source={foto}
            style = {{height: 490 * ratioFoto, width : win.width}}
          />

          <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 40, paddingLeft: 40, marginBottom: 20 }} >
            <Image source={ubilogo} style={styles.logo} />
            <Text style={{ color: "#fff" }} onPress={() => Linking.openURL('https://goo.gl/maps/tj31ibs7PD3hbYRc9')} >Av. Vallarta N° 2602 Col. Arcos Vallarta C.P. 4413 Guadalajara, Jalisco, México.</Text>
          </View>
          <View style={{ marginBottom: 10, width: '100%', alignSelf: 'center' }}>
            <SliderBox
              images={[
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/whatsapp_image_2022-11-14_at_12.22.49_pm.jpeg?itok=kGvfbtVP',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/whatsapp_image_2022-11-14_at_1.38.32_pm.jpeg?itok=NjkmGRcp',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/banner.jpeg?itok=UWHmueZ8',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/whatsapp_image_2022-09-26_at_11.14.59_am.jpeg?itok=H90E_iLB',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/banners_red_firmo_x_2_1200x448.jpg?itok=R61TGAXf',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/asrtronomia3.1.jpg?itok=wr77k255',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/banner_udg_protesta.jpeg?itok=TPBgI8O3',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/meteorologia4.0.jpg?itok=VaE7AdoG',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/medio_ambiente6.0.jpg?itok=LAgYZSnr',
                'http://iam.cucei.udg.mx/sites/default/files/styles/slideshow_principal/public/33degc_22degc_22.png?itok=fgNE4WjC'
              ]}
              //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
              autoplay
              circleLoop
              sliderBoxHeight={135}
            /></View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  banner: {
    maxWidth: "100%",
    maxHeight: 166,
    resizeMode: "contain",
    marginTop: 0,
  },
  texto: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: -70,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  }
});
/*
*/