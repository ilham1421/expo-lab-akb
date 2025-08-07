import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mahasiswaData } from "../../data/mahasiswa";

export default function MahasiswaDetailScreen() {
  const { id } = useLocalSearchParams();

  // Cari mahasiswa berdasarkan ID
  const mahasiswa = mahasiswaData.find((m) => m.id === id);

  if (!mahasiswa) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Mahasiswa tidak ditemukan</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleContactPress = (type: string, value: string) => {
    Alert.alert(`Kontak ${type}`, value, [{ text: "OK", style: "default" }]);
  };

  return (
    <View style={styles.container}>
      {/* Header dengan tombol kembali */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonHeader}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Mahasiswa</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Card foto dan info utama */}
        <View style={styles.profileCard}>
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: mahasiswa.foto }}
              style={styles.profilePhoto}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.nama}>{mahasiswa.nama}</Text>
          <Text style={styles.nim}>NIM: {mahasiswa.nim}</Text>
        </View>

        {/* Card informasi akademik */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>📚 Informasi Akademik</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Kelas</Text>
              <Text style={styles.infoValue}>{mahasiswa.kelas}</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Jurusan</Text>
              <Text style={styles.infoValue}>{mahasiswa.jurusan}</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Fakultas</Text>
              <Text style={styles.infoValue}>{mahasiswa.fakultas}</Text>
            </View>
          </View>
        </View>

        {/* Card informasi kontak */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>📞 Informasi Kontak</Text>

          <TouchableOpacity
            style={styles.contactRow}
            onPress={() => handleContactPress("Email", mahasiswa.email)}
          >
            <Ionicons name="mail-outline" size={20} color="#0066CC" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>{mahasiswa.email}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.contactRow}
            onPress={() => handleContactPress("WhatsApp", mahasiswa.phone)}
          >
            <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>WhatsApp</Text>
              <Text style={styles.contactValue}>{mahasiswa.phone}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Tombol kembali */}
        <TouchableOpacity
          style={styles.backButtonBottom}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.backButtonBottomText}>Kembali ke Daftar</Text>
        </TouchableOpacity>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonHeader: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "PTSansBold",
  },
  spacer: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
  },
  profileCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  photoContainer: {
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#0066CC",
  },
  nama: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "PTSansBold",
  },
  nim: {
    fontSize: 16,
    color: "#666",
    fontFamily: "PTSansRegular",
  },
  infoCard: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    fontFamily: "PTSansBold",
  },
  infoRow: {
    paddingVertical: 8,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
    fontFamily: "PTSansRegular",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    fontFamily: "PTSansBold",
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 8,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactLabel: {
    fontSize: 14,
    color: "#666",
    fontFamily: "PTSansRegular",
  },
  contactValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginTop: 2,
    fontFamily: "PTSansBold",
  },
  backButtonBottom: {
    backgroundColor: "#0066CC",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  backButtonBottomText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    fontFamily: "PTSansBold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    fontFamily: "PTSansRegular",
  },
  backButton: {
    backgroundColor: "#0066CC",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PTSansBold",
  },
});
