"use client";

import Link from "next/link";
import { useState } from "react";
import FaceBookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/X'
import YoutubeIcon from '@mui/icons-material/YouTube'
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

export const NavBar = () =>
{
    const [activeNav, setActiveNav] = useState<number>(0);
    return (
        <div className="flex justify-center items-center gap-4 text-green-800 font-roboto tracking-wide leading-9">
            <Link className={"hover:cursor-pointer " + (activeNav == 0 ? "underline" : "")} onClick={() => { setActiveNav(0) }} href={'#'}>Home</Link>
            <Link className={"hover:cursor-pointer " + (activeNav == 1 ? "underline" : "")} onClick={() => { setActiveNav(1) }} href={'#'}>AboutUs</Link>
            <Link className={"hover:cursor-pointer " + (activeNav == 2 ? "underline" : "")} onClick={() => { setActiveNav(2) }} href={'#'}>Services</Link>
            <Link className={"hover:cursor-pointer " + (activeNav == 3 ? "underline" : "")} onClick={() => { setActiveNav(3) }} href={'#'}>Reviews</Link>
            <Link className={"hover:cursor-pointer " + (activeNav == 4 ? "underline" : "")} onClick={() => { setActiveNav(4) }} href={'#'}>ContactUs</Link>
        </div>
    );
}

export const SocialMedia = () =>
{
    return (
        <div className="flex justify-center items-center gap-5 mx-20">
            <FaceBookIcon className="text-green-800 text-2xl cursor-pointer active:scale-90 duration-100" />
            <TwitterIcon className="text-green-800 text-2xl cursor-pointer active:scale-90 duration-100" />
            <InstagramIcon className="text-green-800 text-2xl cursor-pointer active:scale-90 duration-100" />
            <YoutubeIcon className="text-green-800 text-2xl cursor-pointer active:scale-90 duration-100" />
        </div>
    )
}

export const DrawerNavigation = () =>
{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeNav, setActiveNav] = useState<number>(0);
    return (<div>
        <IconButton sx={{ marginLeft: '1rem' }} size="large" edge='start' color="inherit" aria-label="logo" onClick={(e) => { setIsDrawerOpen(!isDrawerOpen) }}>
            <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={(e) => { setIsDrawerOpen(false) }}>
            <Box p={2} width={'250px'} textAlign={'center'} role="presentation">
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    <Link className={"hover:cursor-pointer " + (activeNav == 0 ? "underline" : "")} onClick={() => { setActiveNav(0) }} href={'#'}>Home</Link>
                    <Link className={"hover:cursor-pointer " + (activeNav == 1 ? "underline" : "")} onClick={() => { setActiveNav(1) }} href={'#'}>AboutUs</Link>
                    <Link className={"hover:cursor-pointer " + (activeNav == 2 ? "underline" : "")} onClick={() => { setActiveNav(2) }} href={'#'}>Services</Link>
                    <Link className={"hover:cursor-pointer " + (activeNav == 3 ? "underline" : "")} onClick={() => { setActiveNav(3) }} href={'#'}>Reviews</Link>
                    <Link className={"hover:cursor-pointer " + (activeNav == 4 ? "underline" : "")} onClick={() => { setActiveNav(4) }} href={'#'}>ContactUs</Link>
                </div>
                <hr />
            </Box>
        </Drawer>
    </div>)
}