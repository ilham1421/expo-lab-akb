import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function IconScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎨 10 Ikon Berbeda</Text>
        <Text style={styles.headerSubtitle}>
          Menggunakan 5 Keluarga Ikon yang Berbeda
        </Text>
        <Text style={styles.studentInfo}>
          👨‍🎓 Baso Hamzah - NIM: 105841106922
        </Text>
      </View>

      {/* Info Panel */}
      <View style={styles.infoPanel}>
        <Text style={styles.infoPanelTitle}>ℹ️ Daftar Keluarga Ikon:</Text>
        <Text style={styles.infoPanelText}>• Ionicons (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• FontAwesome (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• MaterialIcons (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• AntDesign (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• Entypo (2 ikon)</Text>
      </View>

      {/* Grid Ikon */}
      <View style={styles.iconGrid}>
        {/* Ionicons */}
        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#e74c3c" }]}>
            <Ionicons name="home" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Home</Text>
          <Text style={styles.iconFamily}>Ionicons</Text>
        </View>

        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#3498db" }]}>
            <Ionicons name="person" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Person</Text>
          <Text style={styles.iconFamily}>Ionicons</Text>
        </View>

        {/* FontAwesome */}
        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#2ecc71" }]}>
            <FontAwesome name="heart" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Heart</Text>
          <Text style={styles.iconFamily}>FontAwesome</Text>
        </View>

        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#f39c12" }]}>
            <FontAwesome name="star" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Star</Text>
          <Text style={styles.iconFamily}>FontAwesome</Text>
        </View>

        {/* MaterialIcons */}
        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#9b59b6" }]}>
            <MaterialIcons name="email" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Email</Text>
          <Text style={styles.iconFamily}>MaterialIcons</Text>
        </View>

        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#1abc9c" }]}>
            <MaterialIcons name="phone" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Phone</Text>
          <Text style={styles.iconFamily}>MaterialIcons</Text>
        </View>

        {/* AntDesign */}
        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#e67e22" }]}>
            <AntDesign name="camera" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Camera</Text>
          <Text style={styles.iconFamily}>AntDesign</Text>
        </View>

        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#8e44ad" }]}>
            <AntDesign name="setting" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Setting</Text>
          <Text style={styles.iconFamily}>AntDesign</Text>
        </View>

        {/* Entypo */}
        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#c0392b" }]}>
            <Entypo name="music" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Music</Text>
          <Text style={styles.iconFamily}>Entypo</Text>
        </View>

        <View style={styles.iconItem}>
          <View style={[styles.iconContainer, { backgroundColor: "#27ae60" }]}>
            <Entypo name="location" size={40} color="white" />
          </View>
          <Text style={styles.iconLabel}>Location</Text>
          <Text style={styles.iconFamily}>Entypo</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>📊 Ringkasan Ikon:</Text>
        <Text style={styles.summaryText}>
          • Total ikon:{" "}
          <Text style={{ fontWeight: "bold" }}>10 ikon berbeda</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Keluarga ikon:{" "}
          <Text style={{ fontWeight: "bold" }}>5 keluarga berbeda</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Layout:{" "}
          <Text style={{ fontWeight: "bold" }}>
            Grid 2 kolom dengan warna berbeda
          </Text>
        </Text>
        <Text style={styles.summaryText}>
          • Source:{" "}
          <Text style={{ fontWeight: "bold" }}>@expo/vector-icons</Text>
        </Text>
      </View>

      {/* Detail Tabel */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>📋 Detail Setiap Ikon:</Text>

        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>
            No
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>
            Nama
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>
            Keluarga
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>
            Warna
          </Text>
        </View>

        {[
          { no: 1, name: "home", family: "Ionicons", color: "#e74c3c" },
          { no: 2, name: "person", family: "Ionicons", color: "#3498db" },
          { no: 3, name: "heart", family: "FontAwesome", color: "#2ecc71" },
          { no: 4, name: "star", family: "FontAwesome", color: "#f39c12" },
          { no: 5, name: "email", family: "MaterialIcons", color: "#9b59b6" },
          { no: 6, name: "phone", family: "MaterialIcons", color: "#1abc9c" },
          { no: 7, name: "camera", family: "AntDesign", color: "#e67e22" },
          { no: 8, name: "setting", family: "AntDesign", color: "#8e44ad" },
          { no: 9, name: "music", family: "Entypo", color: "#c0392b" },
          { no: 10, name: "location", family: "Entypo", color: "#27ae60" },
        ].map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>{item.no}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.family}</Text>
            <View
              style={[
                styles.tableCell,
                { flex: 2, flexDirection: "row", alignItems: "center" },
              ]}
            >
              <View
                style={[styles.colorIndicator, { backgroundColor: item.color }]}
              />
              <Text style={styles.colorText}>{item.color}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#2c3e50",
    padding: 25,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#bdc3c7",
    textAlign: "center",
    marginBottom: 10,
  },
  studentInfo: {
    fontSize: 14,
    color: "#f39c12",
    fontWeight: "bold",
    textAlign: "center",
  },
  infoPanel: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoPanelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },
  infoPanelText: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 6,
    lineHeight: 20,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconItem: {
    alignItems: "center",
    marginBottom: 25,
    width: "45%",
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  iconLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  iconFamily: {
    fontSize: 12,
    color: "#7f8c8d",
    fontStyle: "italic",
  },
  summaryContainer: {
    backgroundColor: "#ecf0f1",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#bdc3c7",
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
    textAlign: "center",
  },
  summaryText: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 6,
    lineHeight: 20,
  },
  tableContainer: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    padding: 15,
    textAlign: "center",
    backgroundColor: "#ecf0f1",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#34495e",
    paddingVertical: 12,
  },
  tableHeaderText: {
    color: "white",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  tableCell: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#2c3e50",
    textAlign: "center",
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  colorText: {
    fontSize: 12,
    color: "#7f8c8d",
  },
});
