import { Icon, Paper, Typography } from "@mui/material";
import { DrawerNavigation, NavBar, SocialMedia } from "../Components/Component1";
import Image from "next/image";
import CheckMark from '@mui/icons-material/CheckCircle'
import Lock from '@mui/icons-material/Lock'
import Link from "next/link";
import Provider from "@/Components/ThemeProvider";
export default function Home()
{
  return (
    <Provider>
      <Paper className="lg:px-20 px-3 py-5 min-h-screen brightness-110">
        <header className="flex justify-between items-center w-full">
          <div>
            <h1 className="uppercase text-2xl"><span className="text-green-700 font-bold">Rent</span> <span className="text-green-700">Homes</span></h1>
          </div>
          <div className="hidden lg:block">
            <NavBar />
          </div>
          <div className="block lg:hidden">
            <DrawerNavigation />
          </div>
        </header>
        <main className="pt-10 lg:pt-0">
          <div className="w-full lg:h-[85vh] h-[40rem] flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
              <Typography variant="h1" className="text-green-700 lg:text-7xl text-xl lg:pr-20 px-10 lg:px-0 font-Helvetica text-center lg:text-start my-10 lg:my-0">Your Rental Journey  Begins Here</Typography>
              <p className="capitalize font-roboto font-bold py-5 px-10 lg:px-0 text-center lg:text-start">We make finding rentals easy, effortless search, endless choice</p>
              <div className="flex justify-start items-center lg:gap-5 gap-2">
                <button className="rounded bg-green-700 p-2 px-4 text-white shadow-inner shadow-green-900 active:scale-95 duration-100 text-sm lg:text-base">Rent Now</button>
                <button className="rounded border-2 border-gray-400 p-2 px-4 active:border-transparent duration-100 transition-all text-green-700 text-sm lg:text-base">Rent Your Place</button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
              <Image width={500} height={500} src={'/first.png'} alt="Home Image"></Image>
            </div>
          </div>
          <div className="w-full lg:h-[90vh] flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-green-700 lg:text-7xl text-xl lg:pr-20 font-roboto text-center lg:text-start">Begin your awesome  journey</h1>
              <div className="lg:pr-32 py-3 text-justify text-sm lg:text-base px-4 lg:px-0">
                <p>Looking for the perfect home to rent? our User-friendly house rental website makes your search a breeze.</p>
                <p>Browse through a diverse range of listings, from cozy apartments to spacious fmily houses.</p>
                <p className="pt-5">With detailed descriptions, vivid photos,, and handy filters, finding your ideal rental is just a click away.</p>
              </div>
              <div className="flex lg:justify-start justify-center items-center gap-5">
                <button className="rounded bg-green-700 p-2 px-4 text-white shadow-inner shadow-green-900 active:scale-95 duration-100">Continue</button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-full flex justify-center items-center">
              <Image width={500} height={500} src={'/second.png'} alt="Home Image"></Image>
            </div>
          </div>
          <div className="w-full lg:h-[90vh]">
            <h1 className="text-center lg:text-6xl text-xl text-green-700 my-5">See Our Services</h1>
            <p className="capitalize text-center font-roboto px-5 lg:px-0">We make finding Rentals easy,Effortless search,Endless choice</p>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 my-20">
              <div className="lg:w-1/4 w-full h-72 bg-green-900 rounded-xl flex flex-col justify-start items-center p-5">
                <CheckMark className="text-white text-8xl" />
                <h1 className="uppercase text-white text-xl font-bold my-2">Responsive</h1>
                <p className="text-center text-slate-300">Our commitment to being responsive means that your concerns and efficient.</p>
              </div>
              <div className="lg:w-1/4 w-full h-72 bg-green-900 rounded-xl flex flex-col justify-start items-center p-5">
                <Image className="text-white" src={'/leaf.png'} width={100} height={100} alt="leaf"></Image>
                <h1 className="uppercase text-white text-xl font-bold my-2">Green</h1>
                <p className="text-center text-slate-300">Experience the convenience of our responsive platform, ensuring swift communication.</p>
              </div>
              <div className="lg:w-1/4 w-full h-72 bg-green-900 rounded-xl flex flex-col justify-start items-center p-5">
                <Lock className="text-white text-8xl" />
                <h1 className="uppercase text-white text-xl font-bold my-2">Security</h1>
                <p className="text-center text-slate-300">Ensuring swift communication and quick solutions for all your rental needs.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:h-[90vh]">
            <h1 className="text-center lg:text-6xl text-xl text-green-700 lg:my-5">What Customers Say</h1>
            <h1 className="text-center lg:text-6xl text-xl text-green-700 lg:my-5 my-2">About Our Services</h1>
            <p className="capitalize text-center font-roboto px-5 lg:px-0">We make finding Rentals Easy, Effortless search,Endless Choice</p>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 my-20">
              <div className="lg:w-1/4 h-full flex flex-col justify-center items-center border-4 border-green-700 p-5 text-center gap-2 rounded-tl-2xl rounded-br-2xl rounded-tr-[4rem] rounded-bl-[4rem]">
                <div className="flex justify-center items-center overflow-hidden rounded-full w-20 h-20">
                  <Image className="w-20 h-20" src={'/user1.jpg'} width={200} height={200} alt={'image'}></Image>
                </div>
                <h1 className="text-green-700 font-bold text-xl">Shiv</h1>
                <p>Lorem ipsum dolor mus omnis voluptatum quod quos iusto ipsa quisquam ab maxime.</p>
              </div>
              <div className="lg:w-1/4 h-full flex flex-col justify-center items-center border-4 border-green-700 p-5 text-center gap-2 rounded-tl-2xl rounded-br-2xl rounded-tr-[4rem] rounded-bl-[4rem]">
                <div className="flex justify-center items-center overflow-hidden rounded-full w-20 h-20">
                  <Image className="w-20 h-20" src={'/user2.jpg'} width={200} height={200} alt={'image'}></Image>
                </div>
                <h1 className="text-green-700 font-bold text-xl">Shankar</h1>
                <p>Lorem ipsum dolor mus omnis voluptatum quod quos iusto ipsa quisquam ab maxime.</p>
              </div>
              <div className="lg:w-1/4 h-full flex flex-col justify-center items-center border-4 border-green-700 p-5 text-center gap-2 rounded-tl-2xl rounded-br-2xl rounded-tr-[4rem] rounded-bl-[4rem]">
                <div className="flex justify-center items-center overflow-hidden rounded-full w-20 h-20">
                  <Image className="w-20 h-20" src={'/user3.jpg'} width={200} height={200} alt={'image'}></Image>
                </div>
                <h1 className="text-green-700 font-bold text-xl">Kushwaha</h1>
                <p>Lorem ipsum dolor mus omnis voluptatum quod quos iusto ipsa quisquam ab maxime.</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full lg:h-[30vh]">
          <div className="w-full flex flex-col lg:flex-row lg:justify-around justify-center lg:items-start items-center font-sans gap-5 lg:gap-0">
            <div className="flex flex-col justify-center mb-5">
              <h1 className="uppercase text-2xl text-center lg:text-start"><span className="text-green-700 font-bold">Rent</span> <span className="text-green-700">Homes</span></h1>
              <p className="px-5 lg:px-0 text-center lg:text-start">The best and easiest way to rent homes</p>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-green-800 font-bold">Useful Links</h1>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>Blogs</Link>
              <Link href={'#'}>FAQs</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-green-800 font-bold">Main Menu</h1>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>Offers</Link>
              <Link href={'#'}>Menus</Link>
              <Link href={'#'}>Reservation</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-green-800 font-bold">Contact Us</h1>
              <Link href={'#'}>example@gmail.com</Link>
              <Link href={'#'}>+91 1234506789</Link>
              <Link href={'#'}>Social Media</Link>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-start justify-center items-center my-10 gap-5">
            <SocialMedia />
            <div>
              <p className="text-center">Copyright © 2023. | All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </Paper>
    </Provider>
  )
}