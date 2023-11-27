import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
function Navbar() {
    return (

        <div className='absolute bottom-4 w-screen  md:w-auto  md:right-8  md:h-screen flex md:flex-col items-center justify-around md:gap-5 md:justify-center'>
            <FaHome className='dark:text-white text-gray-600 text-[50px] bg-[#EEEEEE] dark:bg-[#444444] p-3 rounded-full' />
            <BsFillPersonFill className='dark:text-white text-gray-600 text-[50px] bg-[#EEEEEE] dark:bg-[#444444] p-3 rounded-full' />
            <FaBriefcase className='dark:text-white text-gray-600 text-[50px] bg-[#EEEEEE] dark:bg-[#444444] p-3 rounded-full' />
            <IoMdMail className='dark:text-white text-gray-600 text-[50px] bg-[#EEEEEE] dark:bg-[#444444] p-3 rounded-full' />
            <IoChatbubblesSharp className='dark:text-white text-gray-600 text-[50px] bg-[#EEEEEE] dark:bg-[#444444] p-3 rounded-full' />
        </div>
    )
}

export default Navbar