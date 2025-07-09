import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

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
  const [showAlternate, setShowAlternate] = useState<{
    [key: number]: boolean;
  }>({});

  const [imageScales, setImageScales] = useState<{ [key: number]: number }>({});

  const handleImagePress = (imageId: number) => {
    setShowAlternate((prev) => ({
      ...prev,
      [imageId]: !prev[imageId],
    }));

    setImageScales((prev) => {
      const currentScale = prev[imageId] || 1;
      const newScale = Math.min(currentScale + 0.2, 2);
      return {
        ...prev,
        [imageId]: newScale,
      };
    });
  };

  const renderGrid = () => {
    return imageData.map((item) => {
      const isAlternate = showAlternate[item.id] || false;
      const scale = imageScales[item.id] || 1;
      const imageUri = isAlternate ? item.alt : item.main;

      return (
        <TouchableOpacity
          key={item.id}
          style={styles.gridItem}
          onPress={() => handleImagePress(item.id)}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[styles.imageContainer, { transform: [{ scale }] }]}
          >
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
          </Animated.View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Muh. Ilham Akbar (Grid Gambar)</Text>
      <Text style={styles.subtitle}>
        Klik gambar untuk mengubah dan memperbesar
      </Text>

      <View style={styles.gridContainer}>{renderGrid()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 330,
    height: 330,
  },
  gridItem: {
    width: 100,
    height: 100,
    margin: 5,
    overflow: "visible",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
