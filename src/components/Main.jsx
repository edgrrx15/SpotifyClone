import React from 'react';
import { albumsData } from '../data/data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full p-2 gap-2 text-neutral-400 bg-transparent custom-scrollbar'>
      <div className=' bg-gradient-to-b from-[#252525] to-[#121212] h-[100%] rounded-lg'>

      </div>
    </div>
  );
};

export default Main;
