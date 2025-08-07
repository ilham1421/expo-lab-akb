import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mahasiswaData } from "../data/mahasiswa";

export default function MahasiswaListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daftar Mahasiswa</Text>
        <Text style={styles.subtitle}>Universitas Muhammadiyah Makassar</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {mahasiswaData.map((mahasiswa) => (
          <Link key={mahasiswa.id} href={`/mahasiswa/${mahasiswa.id}`} asChild>
            <TouchableOpacity style={styles.mahasiswaCard}>
              <View style={styles.cardContent}>
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color="#0066CC"
                  style={styles.icon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.nama}>{mahasiswa.nama}</Text>
                  <Text style={styles.nim}>NIM: {mahasiswa.nim}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#0066CC",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    fontFamily: "PTSansBold",
  },
  subtitle: {
    fontSize: 14,
    color: "#e3f2fd",
    fontFamily: "PTSansRegular",
  },
  scrollContent: {
    padding: 20,
  },
  mahasiswaCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    fontFamily: "PTSansBold",
  },
  nim: {
    fontSize: 14,
    color: "#666",
    fontFamily: "PTSansRegular",
  },
});
