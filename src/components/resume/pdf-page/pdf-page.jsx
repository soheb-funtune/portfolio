import React from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Header from "./header.jsx";
import Skills from "./skills.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src="data:image/png;base64,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"
          style={styles.image}
        />

        <Education />
        <Skills />
      </View>
      <View
        style={{
          display: "flex",
          marginTop: "10px",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: "15px" }}>
          Positivity-driven and confident individual with an aptitude for
          learning new technology. I am hoping for the position of MERN Stack
          Developer to apply sound knowledge of React.js and Node js, a good
          sense of UI design and a user-oriented focus, experience coding on
          JavaScript & soon.
        </Text>
        <Experience />
      </View>
    </View>
    <Text style={styles.footer}>This IS the candidate you are looking for</Text>
  </Page>
);

export default () => (
  <Document
    author="soheb"
    keywords="awesome, resume, start wars"
    subject="soheb"
    title="Resume"
  >
    <Resume size="A4" />
    {/* <Resume orientation="landscape" size="A4" />
    <Resume size={[380, 1250]} /> */}
  </Document>
);
