import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
export default function Exercice5() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    // cleanup (bonne pratique)
    return () => clearTimeout(t);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 5 — Loading</Text>
      <Text style={styles.msg}>{loading ? " Chargement..." : " Données chargées !"}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor : "#FFF", flex: 1, justifyContent: "center", alignItems: "center", gap: 14 },
  title: { fontSize: 20, fontWeight: "700" },
  msg: { fontSize: 22, fontWeight: "700" },
});