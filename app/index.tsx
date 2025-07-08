import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");

const imageData = [
  {
    id: 1,
    main: "https://picsum.photos/200/200?random=1",
    alt: "https://picsum.photos/200/200?random=11",
  },
  {
    id: 2,
    main: "https://picsum.photos/200/200?random=2",
    alt: "https://picsum.photos/200/200?random=12",
  },
  {
    id: 3,
    main: "https://picsum.photos/200/200?random=3",
    alt: "https://picsum.photos/200/200?random=13",
  },
  {
    id: 4,
    main: "https://picsum.photos/200/200?random=4",
    alt: "https://picsum.photos/200/200?random=14",
  },
  {
    id: 5,
    main: "https://picsum.photos/200/200?random=5",
    alt: "https://picsum.photos/200/200?random=15",
  },
  {
    id: 6,
    main: "https://picsum.photos/200/200?random=6",
    alt: "https://picsum.photos/200/200?random=16",
  },
  {
    id: 7,
    main: "https://picsum.photos/200/200?random=7",
    alt: "https://picsum.photos/200/200?random=17",
  },
  {
    id: 8,
    main: "https://picsum.photos/200/200?random=8",
    alt: "https://picsum.photos/200/200?random=18",
  },
  {
    id: 9,
    main: "https://picsum.photos/200/200?random=9",
    alt: "https://picsum.photos/200/200?random=19",
  },
];

export default function Index() {
  const [imageStates, setImageStates] = useState<{ [key: number]: boolean }>(
    {}
  );
  // State untuk melacak scale setiap gambar
  const [scaleStates, setScaleStates] = useState<{ [key: number]: number }>({});

  const handleImagePress = (imageId: number) => {
    // Toggle antara gambar utama dan alternatif
    setImageStates((prev) => ({
      ...prev,
      [imageId]: !prev[imageId],
    }));

    // Increase scale (maksimal 2x)
    setScaleStates((prev) => {
      const currentScale = prev[imageId] || 1;
      const newScale = Math.min(currentScale + 0.2, 2); // Maksimal 2x
      return {
        ...prev,
        [imageId]: newScale,
      };
    });
  };

  const renderImageGrid = () => {
    return imageData.map((item) => {
      const isAlternate = imageStates[item.id] || false;
      const currentScale = scaleStates[item.id] || 1;
      const imageUri = isAlternate ? item.alt : item.main;

      return (
        <TouchableOpacity
          key={item.id}
          style={styles.imageCell}
          onPress={() => handleImagePress(item.id)}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[
              styles.imageWrapper,
              {
                transform: [{ scale: currentScale }],
              },
            ]}
          >
            <Image
              source={{ uri: imageUri }}
              style={styles.gridImage}
              resizeMode="cover"
            />
          </Animated.View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Grid Gambar 3x3</Text>
        <Text style={styles.subtitle}>
          Klik gambar untuk mengubah & memperbesar
        </Text>
      </View>

      <View style={styles.gridContainer}>{renderImageGrid()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1a1a2e",
    padding: 20,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#00f2fe",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: width - 40,
    maxWidth: 350,
  },
  imageCell: {
    width: (width - 80) / 3, // Membagi lebar menjadi 3 kolom dengan margin
    height: (width - 80) / 3,
    maxWidth: 110,
    maxHeight: 110,
    margin: 5,
    borderRadius: 10,
    overflow: "visible", // Penting untuk scale animation
    backgroundColor: "#16213e",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
});
