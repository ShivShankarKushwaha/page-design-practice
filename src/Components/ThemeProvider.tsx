"use client"
import { ThemeState } from "@/Jotai";
import { ThemeProvider, createTheme } from "@mui/material";
import { useAtom,Provider as JotaiProvider } from "jotai";

export default function Provider({children}:{children:React.ReactNode})
{
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })
    const lightTheme = createTheme({
        palette: {
            mode: 'light'
        }
    })
    const [ThemeMode,setThemeMode] = useAtom(ThemeState);
    return (
        <JotaiProvider>
            <ThemeProvider theme={ThemeMode ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </JotaiProvider>        
    )
}