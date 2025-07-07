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

      {/* Bentuk Lingkaran */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>◯</Text>
        </View>
      </View>

      {/* Angka dengan background biru (Bentuk Pil) */}
      <View style={[styles.numberContainer, styles.pillShape]}>
        <Text style={styles.numberText}>105841105822</Text>
        <Text style={styles.pillLabel}>Bentuk Pil</Text>
      </View>

      {/* Text dengan background orange */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Ilham Anjay</Text>
      </View>

      {/* Bentuk Lingkaran Kecil */}
      <View style={styles.smallCircleContainer}>
        <View style={styles.smallCircle}>
          <Text style={styles.smallCircleText}>●</Text>
        </View>
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
    marginBottom: 20,
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
  // Bentuk Lingkaran Besar
  circleContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Membuat lingkaran sempurna
    backgroundColor: "#f39c12", // Orange
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#f39c12",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  circleText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  // Bentuk Pil (Container dengan border radius tinggi)
  numberContainer: {
    backgroundColor: "#9b59b6", // Purple
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 20,
    minWidth: 250,
    alignItems: "center",
    shadowColor: "#9b59b6",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  pillShape: {
    borderRadius: 50, // Border radius tinggi untuk bentuk pil
    paddingVertical: 20,
  },
  numberText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  pillLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },
  nameContainer: {
    backgroundColor: "#1abc9c", // Turquoise/Teal
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 280,
    alignItems: "center",
    shadowColor: "#1abc9c",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 20,
  },
  nameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  // Bentuk Lingkaran Kecil
  smallCircleContainer: {
    marginTop: 10,
  },
  smallCircle: {
    width: 60,
    height: 60,
    borderRadius: 30, // Membuat lingkaran sempurna
    backgroundColor: "#e67e22", // Orange berbeda
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e67e22",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  smallCircleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
