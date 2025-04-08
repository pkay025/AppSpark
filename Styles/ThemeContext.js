import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode=>!prevMode)
    };

    const theme = {
        isDarkMode,
        toggleTheme,
        colors: isDarkMode
            ? {
                background: '#171726',
                text: '#fff',
                button: '#222745',
            }
            : {
                background: 'white',
                text: '#000',
            },
    };

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext);