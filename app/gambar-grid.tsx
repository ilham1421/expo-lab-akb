import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const daftarMahasiswa = [
  { nama: "Fikrah Lejahtegis", nim: "105841105322" },
  { nama: "Alya Anandha", nim: "105841105422" },
  { nama: "M. Fikri Haikal Ayatullah", nim: "105841105522" },
  { nama: "Muh Dirham Rahim", nim: "105841105622" },
  { nama: "Zaskya Aulia Ashar", nim: "105841105722" },
  { nama: "Muh Ilham Akbar", nim: "105841105822" },
  { nama: "Zelvia", nim: "105841105922" },
  { nama: "Andi Dhifta Rameyza Kailah", nim: "105841106022" },
  { nama: "Arsifah Ainun Aulia", nim: "105841106122" },
  { nama: "Tegar Surya Prayoga", nim: "105841106222" },
];

const nimSaya = "105841105822";

export default function GambarGridScreen() {
  // Ambil 9 mahasiswa untuk grid 3x3
  const gridData = daftarMahasiswa.slice(0, 9);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📸 Grid Gambar Mahasiswa</Text>
        <Text style={styles.subtitle}>Grid 3x3 dengan 9 Foto Mahasiswa</Text>
      </View>

      <View style={styles.gridContainer}>
        {gridData.map((mahasiswa, index) => (
          <View key={mahasiswa.nim} style={styles.gridItem}>
            <View
              style={[
                styles.imageContainer,
                mahasiswa.nim === nimSaya && styles.highlightContainer,
              ]}
            >
              <Image
                source={{
                  uri: `https://simak.unismuh.ac.id/upload/mahasiswa/${mahasiswa.nim}_.jpg`,
                }}
                style={styles.profileImage}
              />
              {mahasiswa.nim === nimSaya && (
                <View style={styles.myBadge}>
                  <Text style={styles.myBadgeText}>SAYA</Text>
                </View>
              )}
            </View>
            <Text style={styles.nameText} numberOfLines={2}>
              {mahasiswa.nama}
            </Text>
            <Text style={styles.nimText}>{mahasiswa.nim}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.infoPanelTitle}>ℹ️ Informasi Grid</Text>
        <Text style={styles.infoPanelText}>
          • Grid 3x3 menampilkan 9 foto mahasiswa
        </Text>
        <Text style={styles.infoPanelText}>
          • Foto diambil dari server SIMAK Unismuh
        </Text>
        <Text style={styles.infoPanelText}>
          • Kartu Anda (NIM: {nimSaya}) diberi highlight khusus
        </Text>
        <Text style={styles.infoPanelText}>
          • Setiap kartu menampilkan nama dan NIM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  header: {
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#7f8c8d",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 15,
    gap: 10,
  },
  gridItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  highlightContainer: {
    backgroundColor: "#fff200",
    borderRadius: 50,
    padding: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  myBadge: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  myBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 2,
  },
  nimText: {
    fontSize: 10,
    color: "#7f8c8d",
    textAlign: "center",
  },
  infoPanel: {
    backgroundColor: "#e8f5e8",
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a5d6a7",
  },
  infoPanelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 10,
  },
  infoPanelText: {
    fontSize: 14,
    color: "#2e7d32",
    marginBottom: 5,
    lineHeight: 20,
  },
});
