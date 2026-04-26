import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeModeL: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
