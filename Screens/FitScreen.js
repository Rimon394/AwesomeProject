import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../utils/Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  const { completed, setCompleted, minutes, setMinutes, calories, setCalories, setWorkout, workout } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: current.image }} />
      <Text style={styles.title}>{current.name}</Text>
      <Text style={styles.sets}>x{current.sets}</Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      )}

      <View style={styles.navButtons}>
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={[styles.navButton, { backgroundColor: "green" }]}
        >
          <Text style={styles.navButtonText}>PREV</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={[styles.navButton, { backgroundColor: "green" }]}
        >
          <Text style={styles.navButtonText}>SKIP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 370,
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  sets: {
    marginTop: 30,
    fontSize: 38,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  navButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  navButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  navButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FitScreen;
