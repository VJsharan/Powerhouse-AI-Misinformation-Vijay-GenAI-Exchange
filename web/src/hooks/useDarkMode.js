import { useState } from "react";

export function useDarkMode(initialState = false) {
  const [isDark, setIsDark] = useState(initialState);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return { isDark, toggleDarkMode };
}
