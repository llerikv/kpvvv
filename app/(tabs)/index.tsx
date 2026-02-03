import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const handlePress = () => {
    console.log("Нажата кнопка Лера");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Привет 👋</Text>

      <Button title="Лера" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});