import AsyncStorage from '@react-native-async-storage/async-storage';

export class Settings {
    notifications = {
        Guadalajara: false,
        Zapopan: false,
        Tlajomulco: false,
        Tlaquepaque: false,
        Tonala: false,
        El_Salto: false,
        Ixtlahuacan_de_los_Membrillos: false,
    }

    settings(){  
    }

    store = async (value) => {
      try {
          await AsyncStorage.setItem("settings", JSON.stringify(value))
      } catch (error){
          console.log(error)
      }
    };
    
    get = async () => {
      try {
          const savedSettings = await AsyncStorage.getItem("settings");
          const currentSettings = JSON.parse(savedSettings);
          console.log(currentSettings);
          return currentSettings;
      } catch (error) {
          console.log(error)
          
      }
    };
}
