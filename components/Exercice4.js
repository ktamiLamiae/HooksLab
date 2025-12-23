import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,SafeAreaView, View,Button } from 'react-native';

export default function Exercice4() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState("Aucun changement pour le moment.");
  useEffect(() => {
    // se déclenche à chaque changement de count
    setLog(`Nouvelle valeur : ${count}`);
  }, [count]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 4 — useEffect sur count</Text>
      <Text style={styles.big}>{count}</Text>
      <View style={styles.row}>
        <Button title=" + " onPress={() => setCount((c) => c + 1)} />
        <View style={styles.spacer} />
        <Button title=" - " onPress={() => setCount((c) => c - 1)} />
      </View>
      <Text style={styles.log}>{log}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor : "#FFF",flex: 1, justifyContent: "center", alignItems: "center", gap: 14, padding: 16 },
  title: { fontSize: 20, fontWeight: "700" },
  big: { fontSize: 48, fontWeight: "800" },
  row: { flexDirection: "row", alignItems: "center" },
  spacer: { width: 12 },
  log: { fontSize: 16, marginTop: 10 },
});