import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,SafeAreaView, Alert } from 'react-native';

export default function Exercice3() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // se déclenche une seule fois (montage)
    setReady(true);
    Alert.alert("Info", "Application démarrée ");
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 3 — useEffect au chargement</Text>
      <Text style={styles.state}>{ready ? " Ready" : " Loading..."}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor : "#FFF",flex: 1, justifyContent: "center", alignItems: "center", gap: 12 },
  title: { fontSize: 20, fontWeight: "700" },
  state: { fontSize: 22, fontWeight: "700" },
});