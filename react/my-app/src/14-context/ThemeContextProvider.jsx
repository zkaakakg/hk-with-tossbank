import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import ThemeContextUseContext from "./ThemeContextUseContext";
import ThemeContextConsumer from "./ThemeContextConsumer";

function ThemeContextProvider({ initTeme }) {
  const [theme, setTheme] = useState(initTeme);

  // useMemo : 값이 저장
  // useCallback : 함수를 저장해 놓음
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeContextUseContext />
      <ThemeContextConsumer />
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
