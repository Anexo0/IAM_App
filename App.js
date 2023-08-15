import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Homescreen } from './pages/homescreen';
import { QueEsIAM } from './pages/about-us';

import * as astrofisica from './pages/astro';
import * as ambiente from './pages/ambiente';
import * as meteoro from './pages/meteoro';
import * as clima from './pages/clima';
import * as cursos from './pages/cursos';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} options={{ title: 'IAM', headerShown: false }} />

        <Stack.Screen name="AcercaDe" component={QueEsIAM} options={{ title: 'Acerca del IAM' }} />

        <Stack.Screen name="Astrofisica" component={astrofisica.Astrofisica} options={{ title: 'Astrofísica' }} />
        <Stack.Screen name="Sidus" component={astrofisica.Sidus} options={{ title: 'Revista SIDUS' }} />
        <Stack.Screen name="Publicaciones" component={astrofisica.Publicaciones} options={{ title: 'Publicaciones' }} />
        <Stack.Screen name="Eclipses" component={astrofisica.Eclipses} options={{ title: 'Eclipses' }} />
        <Stack.Screen name="Galeria" component={astrofisica.Galeria} options={{ title: 'Galería' }} />

        <Stack.Screen name="MedioAmbiente" component={ambiente.Ambiente} options={{ title: 'Medio Ambiente' }} />
        <Stack.Screen name="Meteorologia" component={meteoro.Meteorologia} options={{ title: 'Metereología' }} />
        <Stack.Screen name="Climatologia" component={clima.Clima} options={{ title: 'Climatología' }} />
        <Stack.Screen name="Cursos" component={cursos.Cursos} options={{ title: 'Cursos' }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

