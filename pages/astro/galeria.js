import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native'


import { ImageGallery} from '@georstat/react-native-image-gallery';

const images = [
    {
        id: 1,
        url:  'https://imgur.com/b6yzODL.png',
        description : 'Imagen compuesta de NGC 650-1 con [OIII] λ5007 (azul), Hα (verde) y [NII] λ6583 (rojo).',
      },
      {
        id: 2,
        url : 'https://imgur.com/g4dJld1.png',
        description : 'Región de formación estelar Rho Ophiuchi. Imagen compuesta usando tres bandas del Telescopio Espacial Spitzer: azul para 3.6 μm; verde 8 μm y rojo 24 μm',

      },
      {
        id: 3,
        url : 'https://imgur.com/WntyFtO.png',
        description : 'NGC 7318, un par de galaxias espirales en colisión, son parte del Quinteto de Stephan. Imagen del HST.',

      },
      {
        id: 4,
        url : 'https://imgur.com/IYAWPbK.png',
        description : 'El cúmulo Bala (1E 0657-56) imagen compuesta de Hubble,  Chandra y Magellan, el rojo representa los rayos X emitidos por el gas caliente y azul la distribución de materia oscura.',

      },
            
    ]





function header(currentIndex){
  return(
    <View>
      <Text style={
        {color:'azure',
        paddingTop : 60,
        padding:20,
        textAlign : 'center',
        }}>
        {currentIndex.description} 
      </Text>
    </View>

  )
}

function footer(){
  return(
    <Text style={{color : 'purple', textAlign : 'center'}}>
      Desliza hacia abajo para cerrar
    </Text>
  )
}





export function Galeria(){
  const [isOpen, setIsOpen] = useState(true);
  const navigation = useNavigation();
  const closeGallery = () =>{
    navigation.goBack();
    setIsOpen(false);
  }
  return(
    <ImageGallery  
    images={images}
    renderHeaderComponent={header}
    renderFooterComponent={footer}
    close={closeGallery}
    isOpen={isOpen}
    />  
    )
}







