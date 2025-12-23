import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function Exercice1() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 1 — Compteur</Text>
      <Text style={styles.big}>{count}</Text>
      <View style={styles.row}>
        <Button title=" + " onPress={() => setCount(count + 1)} />
        <View style={styles.spacer} />
        <Button title=" - " onPress={() => setCount(count - 1)} />
        <View style={styles.spacer} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor : "#FFF", flex: 1, justifyContent: "center", alignItems: "center", gap: 14 },
  title: { fontSize: 20, fontWeight: "700" },
  big: { fontSize: 48, fontWeight: "800" },
  row: { flexDirection: "row", alignItems: "center" },
  spacer: { width: 12 },
});
