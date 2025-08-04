import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const daftarMahasiswa = [
  { nama: "Fikrah Lejahtegis", nim: "105841105322" },
  { nama: "Alya Anandha", nim: "105841105422" },
  { nama: "M. Fikri Haikal Ayatullah", nim: "105841105522" }, // ← Kamu
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

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f8ff" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          minHeight: "100%",
        }}
      >
        {/* Header dengan Font Custom */}
        <Text
          style={{
            fontFamily: "AntonRegular",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            color: "#2c3e50",
          }}
        >
          Selamat Datang! 🎉
        </Text>

        {/* Profil dengan Font yang Berbeda */}
        <View
          style={{
            backgroundColor: "white",
            padding: 25,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 5,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "CinzelRegular",
              fontSize: 18,
              textAlign: "center",
              lineHeight: 28,
              color: "#34495e",
              marginBottom: 15,
            }}
          >
            Halo Kak, Nama Saya Muh Ilham Akbar
          </Text>

          <Text
            style={{
              fontFamily: "SpaceMonoRegular",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 22,
              color: "#7f8c8d",
              marginBottom: 10,
            }}
          >
            📚 Mahasiswa Universitas Muhammadiyah Makassar
          </Text>

          <Text
            style={{
              fontFamily: "PTSansRegular",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 22,
              color: "#7f8c8d",
              marginBottom: 10,
            }}
          >
            🏛️ Fakultas Teknik
          </Text>

          <Text
            style={{
              fontFamily: "PTSansBold",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 22,
              color: "#7f8c8d",
              marginBottom: 10,
            }}
          >
            💻 Jurusan Teknik Informatika
          </Text>

          <Text
            style={{
              fontFamily: "OswaldVariable",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 22,
              color: "#7f8c8d",
            }}
          >
            🎓 NIM: {nimSaya}
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View
          style={{
            width: "100%",
            gap: 15,
            marginBottom: 20,
          }}
        >
          <Link href={"/nama-list" as any} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "#e74c3c",
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                shadowColor: "#e74c3c",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "CinzelBold",
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                📝 Lihat 10 Nama (10 Font Berbeda)
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href={"/gambar-grid" as any} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "#2ecc71",
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                shadowColor: "#2ecc71",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "ShadowsIntoLight",
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                📸 Grid Gambar Mahasiswa
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href={"/icon-screen" as any} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "#9b59b6",
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                shadowColor: "#9b59b6",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "SigmarOne",
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                🎨 10 Ikon Berbeda (5 Keluarga)
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href={"/fonts-demo" as any} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "#3498db",
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                shadowColor: "#3498db",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "CinzelVariable",
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                🎨 Demo Semua Font
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text
          style={{
            fontFamily: "SpaceMonoRegular",
            fontSize: 12,
            color: "#95a5a6",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Aplikasi ini menggunakan 10 font berbeda (5 Static + 5 Variable)
        </Text>

        <View
          style={{
            backgroundColor: "#fff3cd",
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#ffeaa7",
          }}
        >
          <Text
            style={{
              fontFamily: "AntonRegular",
              fontSize: 14,
              color: "#856404",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            🎯 NIM Saya: {nimSaya}
          </Text>
          <Text
            style={{
              fontFamily: "PTSansRegular",
              fontSize: 12,
              color: "#856404",
              textAlign: "center",
            }}
          >
            5 nama sebelum dan sesudah urutan mahasiswa
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
