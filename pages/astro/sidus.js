import { Text, View, StyleSheet, Image, ImageBackground, Linking, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';

const linksRevista = [
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_1_2012.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_2_2012.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_3_2012.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_4_2013.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_5_2013.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_6_2013.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_7_2013.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_8_2014.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_9_2014.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_10_2014_0.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_11_abril_2020.pdf',
    'http://iam.cucei.udg.mx/sites/default/files/adjuntos/sidus_12_2021_1_corregido.pdf'
];








export function Sidus() {
    return(
        <ScrollView>
        <Text style={styles.texto}>
            A continuación encontraras enlaces para acceder a los diversos ejemplares de la revista.

        </Text>
        <Text style={[styles.texto, {textAlign:'center', fontSize:11}]}>
            Haz click en alguna de las imágenes para ser redireccionado.
        </Text>
        <View style = {styles.imageContainer} >
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[0])} key={0}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_1.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[1])} key={1}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[2])} key={2}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_3.jpg')}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[3])} key={3}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_4.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[4])} key={4}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_5.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[5])} key={5}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_6.jpg')}/>
                </TouchableOpacity>
            
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[6])} key={6}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_7.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[7])} key={7}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_8.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[8])} key={8}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_9.jpg')}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[9])} key={9}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_10.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[10])} key={10}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_11.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => Linking.openURL(linksRevista[11])} key={11}>
                    <Image style = {styles.thumbnail} source={require('../../assets/img/astrofisica/sidus/sidus_12.jpg')}/>
                </TouchableOpacity>
        
        </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    thumbnail:{
        width: Dimensions.get('window').width * 0.3,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 10,
    },
    imageContainer:{
        flexDirection : 'row', 
        flexWrap : 'wrap', 
        justifyContent : 'space-between',
        backgroundColor: 'black',
    },
    texto : {
        color: 'white',
        backgroundColor: 'black',
        padding:5
    },
});
//            <Text>Para descargar los diferentes numeros de la revista, favor de pulsar sobre la imagen correspondiente.</Text>
