import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
          <Text style={styles.subtitle}>UNISMUH MAKASSAR</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.universityImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Tentang Universitas</Text>
          <Text style={styles.description}>
            Universitas Muhammadiyah Makassar (UNISMUH) adalah salah satu
            perguruan tinggi swasta terkemuka di Sulawesi Selatan. Didirikan
            dengan visi menjadi universitas yang unggul dalam pendidikan,
            penelitian, dan pengabdian kepada masyarakat.
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📍 Lokasi:</Text>
            <Text style={styles.infoText}>Makassar, Sulawesi Selatan</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🏛️ Status:</Text>
            <Text style={styles.infoText}>Perguruan Tinggi Swasta</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🎓 Akreditasi:</Text>
            <Text style={styles.infoText}>Terakreditasi BAN-PT</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>🌟 Visi:</Text>
            <Text style={styles.infoText}>
              Menjadi universitas yang unggul dalam pendidikan, penelitian, dan
              pengabdian kepada masyarakat berbasis nilai-nilai Islam
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0066CC",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "PTSansBold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    fontFamily: "PTSansRegular",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  universityImage: {
    width: width * 0.6,
    height: 150,
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    fontFamily: "PTSansBold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 20,
    textAlign: "justify",
    fontFamily: "PTSansRegular",
  },
  infoRow: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 5,
    fontFamily: "PTSansBold",
  },
  infoText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    fontFamily: "PTSansRegular",
  },
});
