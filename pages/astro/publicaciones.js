import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';
const links = [
    'https://ui.adsabs.harvard.edu/abs/2020MNRAS.tmp.1483G/abstract',
    'https://ui.adsabs.harvard.edu/abs/2019IAUS..343..480N/abstract',
    'https://ui.adsabs.harvard.edu/abs/2020arXiv200312100L/abstract',
    'https://ui.adsabs.harvard.edu/abs/2016Ap%26SS.361..332R/abstract',
    'https://doi.org/10.1007/978-1-4419-9917-7_9070',

    'https://doi.org/10.1007/978-1-4419-9917-7_9231',
    'https://doi.org/10.1007/978-1-4419-9917-7_1278',
    'https://doi.org/10.1007/978-1-4419-9917-7_1379',
    'http://sac.csic.es/astrosecundaria/es/cursos/formato/materiales/libro/calidoscopio.pdf',
    'http://revista.iaa.es/content/zonas-de-habitabilidad-gal%C3%A1ctica'
];

export function Publicaciones() {
    return (
        <ImageBackground source={require('../../assets/img/astrofisica/libros.png')} style={styles.fondoImagen}>
            <Text style={styles.titulo}>
                Publicaciones recientes
            </Text>
            <ScrollView style={{ width: '100%' }}>

                <View style={{ alignItems: 'center', marginBottom: 30, }}>
                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[0])}>
                        <Text style={styles.cartatitulo}>
                            Rings and arcs around evolved stars. II. The Carbon Star AFGL 3068 and the Planetary Nebulae NGC 6543, NGC 7009 and NGC 7027
                        </Text>
                        <Text style={styles.cartasub}>
                            Guerrero, M. A.; Ramos-Larios, G.; Toalá, J. A.; Balick, B.; Sabin, L
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[1])}>
                        <Text style={styles.cartatitulo}>
                            Near IR and visual polarimetry of the Planetary Nebula M2-9
                        </Text>
                        <Text style={styles.cartasub}>
                            Navarro, Silvana G.; Serrano, Omar; Luna, Abraham; Devaraj, Rangaswami; Corral, Luis J.; Ramírez Vélez, Julio; Hiriart, David
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[2])}>
                        <Text style={styles.cartatitulo}>
                            Study of galaxy morphology and merging time of two interacting galaxies under different initial rotation and orientation configurations
                        </Text>
                        <Text style={styles.cartasub}>
                            Lopez, Elkin L.; Lopez, Gustavo V.; Kemp, Simon N.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[3])}>
                        <Text style={styles.cartatitulo}>
                            Variation of the Tully-Fisher relation as a function of the magnitude interval of a sample of galaxies
                        </Text>
                        <Text style={styles.cartasub}>
                            Ruelas-Mayorga, A.; Sánchez, L. J.; Trujillo-Lara, M.; Nigoche-Netro, A.; Echevarría, J.; García, A. M.; Ramírez-Vélez, J.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[4])}>
                        <Text style={styles.cartatitulo}>
                            Biographical Encyclopedia of Astronomers. Haro Barraza, Guillermo.
                        </Text>
                        <Text style={styles.cartasub}>
                            Durruty Jesús de Alba Martínez
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[5])}>
                        <Text style={styles.cartatitulo}>
                            Biographical Encyclopedia of Astronomers. Bellarmine, Robert Francis Romulus Cardinal [Saint].
                        </Text>
                        <Text style={styles.cartasub}>
                            Durruty Jesús de Alba Martínez
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[6])}>
                        <Text style={styles.cartatitulo}>
                            Biographical Encyclopedia of Astronomers. Siguenza y Góngora, Carlos.
                        </Text>
                        <Text style={styles.cartasub}>
                            Durruty Jesús de Alba Martínez
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[7])}>
                        <Text style={styles.cartatitulo}>
                            Biographical Encyclopedia of Astronomers. Thome, John Macon.
                        </Text>
                        <Text style={styles.cartasub}>
                            Durruty Jesús de Alba Martínez
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[8])}>
                        <Text style={styles.cartatitulo}>
                            Caleidoscopio NASE de experiencias en astronomía cultural. La astronomía en la ciudad: De la historia al patrimonio en el caso de Guadalajara.
                        </Text>
                        <Text style={styles.cartasub}>
                            Durruty Jesús de Alba Martínez
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(links[9])}>
                        <Text style={styles.cartatitulo}>
                            Zonas de habitabilidad galáctica
                        </Text>
                        <Text style={styles.cartasub}>
                            Alejandro Márquez Lugo
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 19,
        textAlign: 'center',
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
    },
    card: {
        backgroundColor: 'azure',
        width: '80%',
        padding: 8,
        borderRadius: 10,
        marginTop: 15,
    },
    cartatitulo: {
        fontSize: 16,
        textAlign: 'left',
    },
    cartasub: {
        fontSize: 12,
        color: '#777777'
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

});