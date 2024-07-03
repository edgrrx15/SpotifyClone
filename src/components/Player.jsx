import React from 'react';
import { albumsData, songsData } from '../data/data';
import { IoIosSkipBackward } from "react-icons/io";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosPlayCircle } from "react-icons/io";
import { BsShuffle } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { FiVolume2 } from "react-icons/fi";
import { CgMiniPlayer } from "react-icons/cg";
import { CgArrowsExpandRight } from "react-icons/cg";
const Player = () => {
  return (
    <div className='h-[10%] bg-black flex items-center justify-between px-5 text-white'>

      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-[68px] rounded' src={albumsData.kanyeWest[0].cover} alt="" />
        <div>
          <p className='font-semibold'>{songsData.kanyeWest[0].title}</p>
          <p className='text-neutral-400 text-sm'>{albumsData.kanyeWest[1].artist}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4 items-center'>
          <BsShuffle size={20} className='text-neutral-300'/>
          <IoIosSkipBackward size={30}   className='text-neutral-300' />
          <IoIosPlayCircle size={44} />
          <IoIosSkipForward  size={30}   className='text-neutral-300'/>
          <RxLoop size={20}   className='text-neutral-300' />
        </div>

        <div className='flex items-center gap-3'>
          <p  className='text-neutral-400 text-sm'>0:00</p>
          <div className='w-[34vw] bg-neutral-600 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-20 bg-white rounded-full hover:bg-green-500' />
          </div>
          <p  className='text-neutral-400 text-sm'>4:40</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-3 opacity-75'>
        <HiOutlineQueueList size={22} className='text-neutral-300'/ >
        <LuMonitorSpeaker  size={22} className='text-neutral-300'/>
        <FiVolume2 size={23} className='text-neutral-300'/ >
        <div className='w-24 bg-neutral-400 h-[5px] border-none rounded cursor-pointer'> <hr className='h-1 border-none w-12 bg-white rounded-full hover:bg-green-400' /></div>
        <CgMiniPlayer  size={20} className='text-neutral-300' />
        <CgArrowsExpandRight   size={20} className='text-neutral-300'/>
      </div>

    </div>
  );
};

export default Player;


