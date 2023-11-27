import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className='absolute right-8 top-5 z-10  hover:cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ?
          <MdLightMode className='text-white text-[50px] bg-[#4B4B4B] p-3 rounded-full' /> :
          <CiDark className='text-gray-700 font-bold text-[50px] bg-[#EEEEEE] p-3 rounded-full' />}
      </div>
      <Navbar />
      <div className='dark:bg-[#111111] min-h-screen w-screen flex flex-col md:flex-row items-center justify-start'>
          <img src='https://tunis-nextjs.netlify.app/assets/img/hero/dark.jpg' alt='hi' className='h-1/2 md:h-1/4 py-5 rounded-full sm:py-10  sm:rounded-3xl'/>
          <div className='flex flex-col items-center justify-center text-center text-white'>
            <h1 className='text-3xl sm:text-5xl font-bold text-white'>Welcome to Tunis</h1>
            <p className='text-lg sm:text-2xl'>The capital of Tunisia</p>
          </div>
      </div>
    </div>
  );
}

export default App;
