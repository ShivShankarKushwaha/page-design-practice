"use client"
import { useEffect, useState } from "react"
import DarkMode from "@mui/icons-material/DarkMode"
import Brightness4 from "@mui/icons-material/Brightness4"
import { useAtom } from "jotai"
import { ThemeState } from "@/Jotai"
export const ThemeButton = ()=>
{
    const [ThemeMode,setThemeMode] = useAtom(ThemeState);
    useEffect(()=>
    {
        let date = new Date();
        if (date.getHours() > 7 && date.getHours() < 17)
        {
            setThemeMode(true);
        }
        else
        {
            setThemeMode(false);
        }
    },[])
    return (<div className="fixed bottom-5 right-5 hover:cursor-pointer contrast-200" onClick={() => { setThemeMode(!ThemeMode)}}>
        {ThemeMode ?<DarkMode/>:<Brightness4 className=" text-yellow-400"/>}
    </div>)
}