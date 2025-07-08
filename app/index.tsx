import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Segitiga Merah */}
      <View style={styles.triangle} />

      {/* Persegi Panjang Angka */}
      <View style={styles.rectangleContainer}>
        <View style={[styles.rectangle, styles.number1]}>
          <Text style={styles.numberText}>105841105822</Text>
        </View>
      </View>

      {/* Persegi Panjang Nama */}
      <View style={styles.nameContainer}>
        <View style={[styles.nameBox, styles.nameOrange]}>
          <Text style={styles.nameText}>ILHAM GANTENG</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    marginBottom: 30,
  },
  rectangleContainer: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 10,
  },
  rectangle: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  number1: {
    backgroundColor: "blue",
  },
  numberText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  nameContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  nameBox: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nameOrange: {
    backgroundColor: "orange",
  },
  nameText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
