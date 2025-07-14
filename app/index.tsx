import React, { useRef, useState } from "react";
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
    main: "https://img1.picmix.com/output/stamp/normal/6/9/9/4/1614996_ce8a5.gif",
    alt: "https://i.pinimg.com/originals/6d/d9/d1/6dd9d1ce4ed795ccd8db603ba764eac0.gif",
  },
  {
    id: 2,
    main: "https://i.pinimg.com/originals/e8/84/99/e884990a7863c90811e37b275cae3f0c.gif",
    alt: "https://i.pinimg.com/originals/b0/85/dc/b085dc97e96eb1b097c7733bbdb04e15.gif",
  },
  {
    id: 3,
    main: "https://media.tenor.com/aHIng-Wks00AAAAM/tanya-degurechaff.gif",
    alt: "https://media.tenor.com/qL1c_sfmbkEAAAAM/tanya-youjo-senki.gif",
  },
  {
    id: 4,
    main: "https://media.tenor.com/pl_gjRkbSLQAAAAM/gintama-gintoki.gif",
    alt: "https://i.pinimg.com/originals/50/b9/a1/50b9a1a49ddb7a40acbb35066e352cb3.gif",
  },
  {
    id: 5,
    main: "https://i.pinimg.com/originals/af/1d/61/af1d61b035f1ddf08c737f646332caae.gif",
    alt: "https://i.redd.it/fzf81y4wu3zb1.gif",
  },
  {
    id: 6,
    main: "https://i.pinimg.com/originals/8d/ef/0b/8def0b35b5c443dd3db6de2cfb3dda18.gif",
    alt: "https://i.pinimg.com/originals/fc/ba/c4/fcbac4d9b14cdd6a4bbc5f9491c02962.gif",
  },
  {
    id: 7,
    main: "https://media.tenor.com/jwucCvtz6I4AAAAM/records-of-ragnarok-buddha.gif",
    alt: "https://media.tenor.com/lXzGE7g6dNQAAAAM/shuumatsu-no-valkyrie-ragnarok.gif",
  },
  {
    id: 8,
    main: "https://media.tenor.com/yritcPNRk3gAAAAM/overlord-edit.gif",
    alt: "https://media.tenor.com/XDWz8vUSvoYAAAAM/overlord-renner.gif",
  },
  {
    id: 9,
    main: "https://static.wikia.nocookie.net/e5f4ac13-fa9e-4fb0-938e-d668a39dca93",
    alt: "https://giffiles.alphacoders.com/174/174444.gif",
  },
];

export default function Index() {
  const [showAlternate, setShowAlternate] = useState<{
    [key: number]: boolean;
  }>({});

  const [imageScales, setImageScales] = useState<{ [key: number]: number }>({});

  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
    {}
  );

  const animatedValues = useRef<{ [key: number]: Animated.Value }>({});

  const getAnimatedValue = (imageId: number) => {
    if (!animatedValues.current[imageId]) {
      animatedValues.current[imageId] = new Animated.Value(1);
    }
    return animatedValues.current[imageId];
  };

  const handleImagePress = (imageId: number) => {
    setShowAlternate((prev) => ({
      ...prev,
      [imageId]: !prev[imageId],
    }));

    setImageErrors((prev) => ({
      ...prev,
      [imageId]: false,
    }));

    setImageLoading((prev) => ({
      ...prev,
      [imageId]: true,
    }));
    setImageScales((prev) => {
      const currentScale = prev[imageId] || 1;
      let newScale;
      if (currentScale >= 2) {
        newScale = 1;
      } else {
        newScale = Math.min(currentScale * 1.2, 2);
      }
      const animatedValue = getAnimatedValue(imageId);

      Animated.timing(animatedValue, {
        toValue: newScale,
        duration: 300,
        useNativeDriver: true,
      }).start();

      return {
        ...prev,
        [imageId]: newScale,
      };
    });
  };

  const handleImageError = (imageId: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [imageId]: true,
    }));
    setImageLoading((prev) => ({
      ...prev,
      [imageId]: false,
    }));
  };

  const handleImageLoad = (imageId: number) => {
    setImageLoading((prev) => ({
      ...prev,
      [imageId]: false,
    }));
  };

  const renderGrid = () => {
    return imageData.map((item) => {
      const isAlternate = showAlternate[item.id] || false;
      const imageUri = isAlternate ? item.alt : item.main;
      const animatedValue = getAnimatedValue(item.id);
      const currentScale = imageScales[item.id] || 1;
      const hasError = imageErrors[item.id] || false;
      const isLoading = imageLoading[item.id] || false;

      return (
        <TouchableOpacity
          key={item.id}
          style={styles.gridItem}
          onPress={() => handleImagePress(item.id)}
          activeOpacity={0.8}
        >
          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [{ scale: animatedValue }],
              },
            ]}
          >
            {hasError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>❌</Text>
                <Text style={styles.errorMessage}>Gagal memuat</Text>
              </View>
            ) : (
              <>
                {isLoading && (
                  <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>⏳</Text>
                    <Text style={styles.loadingMessage}>Memuat...</Text>
                  </View>
                )}
                <Image
                  source={{ uri: imageUri }}
                  style={[styles.image, { opacity: isLoading ? 0 : 1 }]}
                  resizeMode="cover"
                  onError={() => handleImageError(item.id)}
                  onLoad={() => handleImageLoad(item.id)}
                />
              </>
            )}
            {currentScale > 1 && (
              <View style={styles.scaleIndicator}>
                <Text style={styles.scaleText}>{currentScale.toFixed(1)}x</Text>
              </View>
            )}
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
    width: 100,
    height: 100,
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
    width: 100,
    height: 100,
  },
  scaleIndicator: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  scaleText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  errorContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da",
  },
  errorText: {
    fontSize: 24,
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 10,
    color: "#721c24",
    textAlign: "center",
    fontWeight: "bold",
  },
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    zIndex: 1,
  },
  loadingText: {
    fontSize: 24,
    marginBottom: 5,
  },
  loadingMessage: {
    fontSize: 10,
    color: "#1976d2",
    textAlign: "center",
    fontWeight: "bold",
  },
});
