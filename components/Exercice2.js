import React, { useState } from 'react';
import { StyleSheet, Text, Button, SafeAreaView,View} from 'react-native';

export default function Exercice2() {
  const messages = ["Bonjour", "Bienvenue", "Bonne chance", "Bon courage"];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % messages.length);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 2 — Texte dynamique</Text>
      <Text style={styles.msg}>{messages[index]}</Text>
      <View style={{ width: 220 }}>
        <Button title="Changer le message" onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor : "#FFF", flex: 1, justifyContent: "center", alignItems: "center", gap: 16 },
  title: { fontSize: 20, fontWeight: "700" },
  msg: { fontSize: 26, fontWeight: "700" },
});