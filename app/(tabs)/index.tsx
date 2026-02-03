import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { ResizeMode, Video } from "expo-av";
import { Image } from "expo-image";

import { Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  const userName = "Albina and Lera";

  const handleStart = () => {
    console.log("Начать нажато");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#000", dark: "#000" }}
      headerImage={
        <Video
          source={require("../../assets/videos/video.MOV")}
          style={styles.headerVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Welcome, {userName} 👋
        </ThemedText>

        <HelloWave />

        {/* маленькая фотка */}
        <Image
          source={require("../../assets/images/ya.jpg")}
          style={styles.photo}
          contentFit="cover"
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

  /* видео в шапке */
  headerVideo: {
    width: "100%",
    height: "100%",
  },

  /* маленькая фотография */
  photo: {
    width: 220,
    height: 220,
    borderRadius: 24,
  },
});
