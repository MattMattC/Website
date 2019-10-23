import React from 'react';
import { LightTheme, DarkTheme } from '../theme';
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext({
    toggle: () => { }
});

export const useTheme =
    () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

    const [themeState, setThemeState] = React.useState({
        mode: 'light',
        theme: LightTheme
    });


    const toggle = () => {
        const mode = (themeState.mode === 'light' ? `dark` : `light`);
        const currentTheme = (themeState.mode === 'light' ? DarkTheme : LightTheme);
        console.log(currentTheme);
        setThemeState({ 
            mode: mode, 
            theme: currentTheme 
            });
    };

    return (
        <ThemeToggleContext.Provider value={{ toggle: toggle }}>
            <ThemeProvider
                theme={{
                    mode: themeState.mode,
                    theme: themeState.theme
                }}
            >
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
}


export default ThemeProvider;