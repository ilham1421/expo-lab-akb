import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Tentang Aplikasi</Text>
          <Text style={styles.subtitle}>Mobile App dengan Expo Router</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📱 Deskripsi Aplikasi</Text>
          <Text style={styles.description}>
            Aplikasi ini dibuat untuk memenuhi tugas mata kuliah menggunakan
            React Native dengan Expo Router. Aplikasi ini mendemonstrasikan
            penggunaan tab navigation dan berbagai komponen dasar React Native.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🎯 Tujuan Pembuatan</Text>
          <Text style={styles.description}>
            Aplikasi ini dibuat sebagai bagian dari tugas akademik untuk
            mempelajari dan mengimplementasikan:
          </Text>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>• Expo Router untuk navigasi</Text>
            <Text style={styles.bullet}>• Tab Navigation</Text>
            <Text style={styles.bullet}>• Komponen React Native dasar</Text>
            <Text style={styles.bullet}>• Penggunaan font kustom</Text>
            <Text style={styles.bullet}>• Layout dan styling</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📄 Fungsi Halaman</Text>

          <View style={styles.pageInfo}>
            <Text style={styles.pageName}>🏠 Home</Text>
            <Text style={styles.pageDescription}>
              Menampilkan informasi lengkap tentang Universitas Muhammadiyah
              Makassar, termasuk visi, lokasi, status akreditasi, dan deskripsi
              umum universitas.
            </Text>
          </View>

          <View style={styles.pageInfo}>
            <Text style={styles.pageName}>ℹ️ About</Text>
            <Text style={styles.pageDescription}>
              Berisi penjelasan mengenai aplikasi yang dibuat, tujuan pembuatan,
              dan fungsi dari masing-masing halaman dalam aplikasi.
            </Text>
          </View>

          <View style={styles.pageInfo}>
            <Text style={styles.pageName}>👤 Profil</Text>
            <Text style={styles.pageDescription}>
              Menampilkan data diri pribadi pembuat aplikasi, meliputi nama
              lengkap, NIM, kelas, jurusan, fakultas, dan foto profil.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>⚡ Teknologi yang Digunakan</Text>
          <View style={styles.techStack}>
            <Text style={styles.tech}>React Native</Text>
            <Text style={styles.tech}>Expo</Text>
            <Text style={styles.tech}>Expo Router</Text>
            <Text style={styles.tech}>TypeScript</Text>
            <Text style={styles.tech}>Expo Vector Icons</Text>
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
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 5,
    fontFamily: "PTSansBold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    fontFamily: "PTSansRegular",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
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
    textAlign: "justify",
    fontFamily: "PTSansRegular",
  },
  bulletPoint: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 15,
    color: "#555",
    marginBottom: 5,
    fontFamily: "PTSansRegular",
  },
  pageInfo: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  pageName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 8,
    fontFamily: "PTSansBold",
  },
  pageDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    textAlign: "justify",
    fontFamily: "PTSansRegular",
  },
  techStack: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tech: {
    backgroundColor: "#e3f2fd",
    color: "#0066CC",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PTSansRegular",
  },
});
