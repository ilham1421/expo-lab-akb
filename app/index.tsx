import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Segitiga Merah */}
      <View style={styles.triangleContainer}>
        <View style={styles.triangle} />
      </View>

      {/* Angka dengan background biru */}
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>105841105822</Text>
      </View>

      {/* Text dengan background orange */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Ilham Anjay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50", // Dark blue-gray background
    justifyContent: "center",
    alignItems: "center",
  },
  triangleContainer: {
    marginBottom: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: 110,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#e74c3c", // Bright red
  },
  numberContainer: {
    backgroundColor: "#9b59b6", // Purple
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 20,
    minWidth: 250,
    alignItems: "center",
    shadowColor: "#9b59b6",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  numberText: {
    color: "white",
    fontSize: 24,
    fontWeight: "900", // Membuat font lebih tebal (dari "bold" ke "900")
    textAlign: "center",
    letterSpacing: 1,
  },
  nameContainer: {
    backgroundColor: "#1abc9c", // Turquoise/Teal
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 0, // Menghilangkan border radius untuk bentuk persegi
    minWidth: 280,
    alignItems: "center",
    shadowColor: "#1abc9c",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  nameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
});
