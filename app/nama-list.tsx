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

function ambilDataSekitar(
  nimTarget: string,
  data: typeof daftarMahasiswa,
  jumlah = 5
) {
  const index = data.findIndex((item) => item.nim === nimTarget);
  const sebelum = data.slice(Math.max(0, index - jumlah), index);
  const sesudah = data.slice(index + 1, index + 1 + jumlah);
  return [...sebelum, data[index], ...sesudah];
}

export default function NamaListScreen() {
  const dataFinal = ambilDataSekitar(nimSaya, daftarMahasiswa, 5);

  const fontList = [
    "AntonRegular",
    "CinzelRegular",
    "CinzelBold",
    "PTSansRegular",
    "PTSansBold",
    "CinzelVariable",
    "OswaldVariable",
    "SpaceMonoRegular",
    "ShadowsIntoLight",
    "SigmarOne",
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📝 10 Nama dengan 10 Font Berbeda</Text>
        <Text style={styles.subtitle}>5 Sebelum + Target + 4 Sesudah</Text>
      </View>

      <View style={styles.content}>
        {dataFinal.map((item, index) => (
          <View
            key={item.nim}
            style={[styles.card, item.nim === nimSaya && styles.highlightCard]}
          >
            <Image
              source={{
                uri: `https://simak.unismuh.ac.id/upload/mahasiswa/${item.nim}_.jpg`,
              }}
              style={styles.profileImage}
            />
            <Text
              style={[
                styles.nameText,
                { fontFamily: fontList[index % fontList.length] },
              ]}
            >
              {item.nama}
            </Text>
            <Text style={styles.nimText}>{item.nim}</Text>
            <Text style={styles.fontInfo}>
              Font: {fontList[index % fontList.length]}
            </Text>
          </View>
        ))}
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
  content: {
    padding: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  highlightCard: {
    backgroundColor: "#fff200",
    borderWidth: 2,
    borderColor: "#f39c12",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 5,
  },
  nimText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  fontInfo: {
    fontSize: 12,
    color: "#95a5a6",
    fontStyle: "italic",
  },
});
