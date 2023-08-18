/* eslint-disable react/no-array-index-key */

import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./title";
import List, { Item } from "./list";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    {/* <Text style={styles.title}>{name}</Text> */}
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      name="Combat Abilities"
      skills={[
        "React js",
        "ES6",
        "Redux",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Express",
        "MongoDB",
        "MUI",
        "Tailwind",
      ]}
    />
  </View>
);

export default Skills;
