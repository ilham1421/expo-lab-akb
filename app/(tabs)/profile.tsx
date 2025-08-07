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

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Profil Mahasiswa</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.photoContainer}>
            <Image
              source={require("../../assets/images/105841105822_.jpg")}
              style={styles.profilePhoto}
              resizeMode="cover"
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>👤 Nama Lengkap</Text>
              <Text style={styles.value}>MUH. ILHAM AKBAR</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>🎓 NIM</Text>
              <Text style={styles.value}>105841105822</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>🏫 Kelas</Text>
              <Text style={styles.value}>6B</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>📚 Jurusan</Text>
              <Text style={styles.value}>TEKNIK INFORMATIKA</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>🏛️ Fakultas</Text>
              <Text style={styles.value}>Fakultas TEKNIK</Text>
            </View>
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>📝 Informasi Tambahan</Text>
          <Text style={styles.description}>
            Mahasiswa aktif Program Studi Teknik Informatika di Universitas
            Muhammadiyah Makassar. Memiliki minat dalam pengembangan aplikasi
            mobile dan web development.
          </Text>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.sectionTitle}>📞 Kontak</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>📧 Email:</Text>
            <Text style={styles.contactValue}>
              105841105822@student.unismuh.ac.id
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>📱 WhatsApp:</Text>
            <Text style={styles.contactValue}>+62 812-3456-7890</Text>
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
    fontFamily: "PTSansBold",
  },
  profileCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
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
    alignItems: "center",
    marginBottom: 25,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#0066CC",
  },
  infoContainer: {
    marginTop: 10,
  },
  infoRow: {
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 6,
    fontFamily: "PTSansBold",
  },
  value: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
    fontFamily: "PTSansRegular",
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 5,
  },
  additionalInfo: {
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
  contactCard: {
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
  contactItem: {
    marginBottom: 15,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 5,
    fontFamily: "PTSansBold",
  },
  contactValue: {
    fontSize: 16,
    color: "#555",
    fontFamily: "PTSansRegular",
  },
});
