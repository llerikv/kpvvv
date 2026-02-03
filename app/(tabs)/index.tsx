import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  const userName = "Lerik";

  // 🔹 добавлено
  const studentName = "Lerik";
  const courseName = "Mobile Application Development";

  const handleStart = () => {
    console.log("Начать нажато");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("../../assets/images/lake.jpg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Welcome, {userName} 👋
        </ThemedText>

        <HelloWave />

        <Image
          source={require("../../assets/images/ya.jpg")}
          style={styles.photo}
        />

        <ThemedText style={styles.description}>
          Это место только для тебя.{"\n"}
          Здесь можно быть честным с собой,{"\n"}
          записывать мысли, чувства и маленькие моменты своей жизни 🤍
        </ThemedText>

        {/* 🔹 добавленный текст */}
        <ThemedText style={styles.infoTitle}>Имя студента</ThemedText>
        <ThemedText style={styles.infoText}>{studentName}</ThemedText>

        <ThemedText style={styles.infoTitle}>Название курса</ThemedText>
        <ThemedText style={styles.infoText}>{courseName}</ThemedText>

        {/* 🔹 кнопка со стилем */}
        <Pressable style={styles.button} onPress={handleStart}>
          <ThemedText style={styles.buttonText}>Продолжить</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.8,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  photo: {
    width: 220,
    height: 220,
    borderRadius: 24,
  },

  // 🔹 добавленные стили
  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  infoText: {
    fontSize: 16,
    opacity: 0.85,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
