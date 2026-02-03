import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  const userName = "Albina and Lera";

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
          This app is created especially for you.{"\n"}
          Here you can start your journey, explore features{"\n"}
          and enjoy the experience together 💖
        </ThemedText>

        <Button title="Начать" onPress={handleStart} />
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
});
