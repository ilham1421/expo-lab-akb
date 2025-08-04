import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function FontsDemoScreen() {
  const fontList = [
    { name: "AntonRegular", type: "Static Font", family: "Anton" },
    { name: "CinzelRegular", type: "Static Font", family: "Cinzel" },
    { name: "CinzelBold", type: "Static Font", family: "Cinzel" },
    { name: "PTSansRegular", type: "Static Font", family: "PT Sans" },
    { name: "PTSansBold", type: "Static Font", family: "PT Sans" },
    { name: "CinzelVariable", type: "Variable Font", family: "Cinzel" },
    { name: "OswaldVariable", type: "Variable Font", family: "Oswald" },
    { name: "SpaceMonoRegular", type: "Variable Font", family: "Space Mono" },
    {
      name: "ShadowsIntoLight",
      type: "Variable Font",
      family: "Shadows Into Light",
    },
    { name: "SigmarOne", type: "Variable Font", family: "Sigmar One" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎨 Demo Semua Font</Text>
        <Text style={styles.subtitle}>10 Font: 5 Static + 5 Variable</Text>
      </View>

      <View style={styles.content}>
        {fontList.map((font, index) => (
          <View key={index} style={styles.fontCard}>
            <View style={styles.fontHeader}>
              <Text style={styles.fontName}>{font.name}</Text>
              <View
                style={[
                  styles.typeBadge,
                  font.type === "Static Font"
                    ? styles.staticBadge
                    : styles.variableBadge,
                ]}
              >
                <Text style={styles.typeText}>{font.type}</Text>
              </View>
            </View>

            <Text style={styles.familyText}>Familie: {font.family}</Text>

            <Text style={[styles.demoText, { fontFamily: font.name }]}>
              The quick brown fox jumps over the lazy dog
            </Text>

            <Text style={[styles.demoTextLarge, { fontFamily: font.name }]}>
              Muh Ilham Akbar
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>📊 Ringkasan Font</Text>
        <Text style={styles.summaryText}>
          • 5 Static Font: File terpisah untuk setiap font-weight
        </Text>
        <Text style={styles.summaryText}>
          • 5 Variable Font: 1 file mendukung banyak font-weight
        </Text>
        <Text style={styles.summaryText}>
          • Total: 10 font family yang berbeda
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
  content: {
    padding: 15,
  },
  fontCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  fontHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  fontName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  staticBadge: {
    backgroundColor: "#e74c3c",
  },
  variableBadge: {
    backgroundColor: "#2ecc71",
  },
  typeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  familyText: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 15,
  },
  demoText: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 10,
    lineHeight: 24,
  },
  demoTextLarge: {
    fontSize: 24,
    color: "#2c3e50",
    fontWeight: "600",
    textAlign: "center",
  },
  summary: {
    backgroundColor: "#fff3cd",
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffeaa7",
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#856404",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    color: "#856404",
    marginBottom: 5,
  },
});
