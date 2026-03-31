import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./styled/theme";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    transition: all 0.3s linear;
  }
`;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </ThemeToggleButton>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </ThemeProvider>
  );
}

export default App;

const ThemeToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
