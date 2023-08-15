//This module generates a button with an image background
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export function BotonImagen(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.boton, props.style]}
      onPress={() => navigation.navigate(props.target)}>
      <ImageBackground
        source={props.src}
        style={styles.imagenBoton}>
        <Text style={styles.textoBoton}>{props.label}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
export function BotonImagen2(props) {
  return (
    <TouchableOpacity style={[styles.boton, props.style]}
      onPress={props.action}>
      <ImageBackground
        source={props.src}
        style={styles.imagenBoton}>
        <Text style={styles.textoBoton}>{props.label}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  boton: {
    width: '100%',
    height: 100,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  imagenBoton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowRadius: 10,
  },

});