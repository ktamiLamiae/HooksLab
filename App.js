import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Exercice1 from './components/Exercice1';
import Exercice2 from './components/Exercice2';
import Exercice3 from './components/Exercice3';
import Exercice4 from './components/Exercice4';
import Exercice5 from './components/Exercice5';
import Exercice6 from './components/Exercice6';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }} >
      {/* Exercice 1 – Compteur avec useState */}
      {/* <Exercice1 /> */}
      {/* Exercice 2 – Changement dynamique de texte */}
      {/* <Exercice2 /> */}
      {/* Exercice 3 – useEffect et cycle de vie */}
      {/* <Exercice3 /> */}
      {/* Exercice 4 – Compteur avec useEffect */}
      {/* <Exercice4 /> */}
      {/* Exercice 5 – Simulation de chargement (Loading) */}
      {/* <Exercice5 /> */}
      {/* Exercice 6 – Mini formulaire contrôlé */}
      {/* <Exercice6 /> */}

        <Drawer.Screen name="Exercice1" component={Exercice1} options={{ title: 'Compteur' }} />
        <Drawer.Screen name="Exercice2" component={Exercice2} options={{ title: 'Texte dynamique' }} />
        <Drawer.Screen name="Exercice3" component={Exercice3} options={{ title: 'Cycle de vie (useEffect)' }} /> 
        <Drawer.Screen name="Exercice4" component={Exercice4} options={{ title: 'Compteur + useEffect' }} />
        <Drawer.Screen name="Exercice5" component={Exercice5} options={{ title: 'Loading' }} /> 
        <Drawer.Screen name="Exercice6" component={Exercice6} options={{ title: 'Formulaire' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
