import { Image, ScrollView, Text, View } from "react-native";

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
    <ScrollView style={{ flex: 1, backgroundColor: "#39FF14", padding: 10 }}>
      <View style={{ flexDirection: "column" }}>
        {dataFinal.map((item, index) => (
          <View
            key={item.nim}
            style={{
              backgroundColor:
                item.nim === nimSaya ? "#FFF200" : "rgba(255, 255, 255, 0.8)",
              borderRadius: 12,
              padding: 15,
              alignItems: "center",
              marginBottom: 15,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              source={{
                uri: `https://simak.unismuh.ac.id/upload/mahasiswa/${item.nim}_.jpg`,
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                fontFamily: fontList[index % fontList.length],
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {item.nama}
            </Text>
            <Text style={{ fontSize: 12, color: "#333" }}>{item.nim}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
