/* eslint-disable react/no-array-index-key */

import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./title";
import List, { Item } from "./list";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato Italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
  school: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10,
    lineHeight: 1.5,
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: "Fyntune Solution Private Limited",
    date: "2022-2023",
    details: [
      "I have learned React js, Redux-Toolkit,React-Query, ES6, CSS, HTML,Bootstap in the Full Time",
      "Developed and maintained React.js applications for clients",
      "Implemented best practices for performance optimization, accessibility,and security",
      "Worked with Redux, and other front-end tools and frameworks.",
      "Successfully delivered multiple projects on time and within budget.",
    ],
    position: "React js Developer",
  },
  {
    company: "Internship ",
    date: "2021-2022",
    details: [
      "I have learned React js , JavaScript, CSS, HTML,Bootstap in the internship",
      "Developed and maintained React.js applications for clients",
    ],
    position: "React js Developer",
  },
];

const Experience = () => (
  <View style={styles.container}>
    <Text style={styles.school}>
      {" "}
      Positivity-driven and confident individual with an aptitude for learning
      new technology. I am hoping for the position of MERN Stack Developer to
      apply sound knowledge of React.js and Node js, a good sense of UI design
      and a user-oriented focus, experience coding on JavaScript & soon.
    </Text>
    <Title>Experience</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
    <Title>Projects</Title>
  </View>
);

export default Experience;
