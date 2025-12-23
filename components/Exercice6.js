import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Alert, View,TouchableOpacity  } from "react-native";
export default function Exercice6() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Erreur", "Veuillez remplir le nom et l'email.");
      return;
    }
  
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!okEmail) {
      Alert.alert("Erreur", "Email invalide. Exemple: test@gmail.com");
      return;
    }
  
    Alert.alert("Succès", `Nom: ${name}\nEmail: ${email}`);
  };
  const handleReset = () => {
    setName("");
    setEmail("");
    Alert.alert("Succès", "Formulaire reset.");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ex 6 — Formulaire contrôlé</Text>
      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ex: Rachid"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Ex: rachid@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={{ width: 220, marginTop: 6 , alignSelf: "center"}}>
         {/*button est limite nhandleSubmit accpt pas style sauf que color of text this is whay we use TouchableOpacity ou Pressable*/} 
        {/* <Button color="#3B2AF4" title="Valider" onPress={handleSubmit} /> */} 
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Valider</Text>
        </TouchableOpacity>
        <Button color="#3B2AF4" title="Reset" onPress={handleReset} />
      </View>
      <Text style={styles.preview}>
        Aperçu :{"\n"}• Nom: {name || "(vide)"}{"\n"}• Email: {email || "(vide)"}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 18, gap: 10 ,margin: 20},
  title: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 6 },
  label: { fontSize: 13, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#3B2AF4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16
  },
  preview: { marginTop: 12, fontSize: 14, lineHeight: 20 },
});