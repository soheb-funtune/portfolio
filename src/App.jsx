import { useContext, useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./components/context-wrapper/context-wrapp";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import TimeLine from "./components/time-line/time-line";
import Skills from "./components/skills/skills";
import Resume from "./components/resume/resume";
import Footer from "./components/footer/footer";
import Project from "./components/project/project";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const { state } = useContext(ThemeContext);
  const [theme, setTheme] = useState(state?.mode);

  useEffect(() => {
    setTheme(state?.mode);
    console.log({ theme });
  }, [state?.mode]);

  return (
    <div className={`${theme} app-without-p`}>
      {" "}
      <div className={`app`}>
        <Header />
        <Home />
        <About />
        <TimeLine />
        <Skills />
        <Project />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
