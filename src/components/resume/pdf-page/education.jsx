import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./title";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  school: {
    fontFamily: "Lato Bold",
    fontSize: 10,
  },
  degree: {
    fontFamily: "Lato",
    fontSize: 10,
  },
  candidate: {
    fontFamily: "Lato Italic",
    fontSize: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>schooling is completed in 2017</Text>
    <Text style={styles.degree}>
      Diploma in Computer Science is Completed (2017-2020)
    </Text>
    <Text style={styles.candidate}>
      B-Tech in Computer Science and Engineering is Completed (2020-2023)
    </Text>
  </View>
);
