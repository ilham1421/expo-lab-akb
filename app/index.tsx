import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.triangleContainer}>
        <View style={styles.triangle} />
      </View>

      {/* Angka dengan background biru */}
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>105841105822</Text>
      </View>

      {/* Text dengan background hijau */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Ilham Anjay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  triangleContainer: {
    marginBottom: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#e74c3c",
  },
  numberContainer: {
    backgroundColor: "#f1c40f", // Kuning
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  numberText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  nameContainer: {
    backgroundColor: "#27ae60", // Hijau
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
  },
  nameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
