import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Headline, Button } from "react-native-paper";

const Quiz = () => {
  return (
    <>
      <ScrollView style={{ marginTop: 22 }}>
        <View>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 1
          </Headline>
          <Text
            style={{
              textAlign: "center",
              top: 110,
              fontSize: 20,
            }}
          >
            Only character or integer can be used in switch statement
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 120 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 2
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            The return type of malloc function is void
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 270 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 3
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            #define is known as preprocessor compiler directive.
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 420 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 4
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            Algorithm is the graphical representation of logic.
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 570 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 5
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            sizeof( ) is a function that returns the size of a variable.
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 720 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 6
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            The ++ operator increments the operand by 1, whereas, the --
            operator decrements it by 1
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 200 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 200 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 870 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 7
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            It is necessary that a loop counter must only be an int. It cannot
            be a float.
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 1020 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 8
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            A zero value is considered to be false and a non-zero value is
            considered to be true
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 200 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 200 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 1170 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 9
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            = is used for comparison, whereas, == is used for assignment of two
            quantities
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 180 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 180 }}
          >
            F
          </Button>
        </View>
        <View style={{ top: 1320 }}>
          <Headline
            style={{
              position: "absolute",
              left: "35%",
              marginTop: 70,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Question 10
          </Headline>
          <Text style={{ textAlign: "center", top: 110, fontSize: 20 }}>
            Blank spaces may be inserted between two words to improve the
            readability of the statement
          </Text>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "25%", top: 200 }}
          >
            T
          </Button>
          <Button
            mode="outlined"
            style={{ width: 50, position: "absolute", left: "50%", top: 200 }}
          >
            F
          </Button>
        </View>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 96, color: "transparent" }}>
          Scroll me plz
        </Text>
        <Text style={{ fontSize: 70, color: "transparent" }}>
          Scroll me plz
        </Text>
      </ScrollView>
    </>
  );
};
export default Quiz;
