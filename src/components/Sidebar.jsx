import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { albumsData } from '../data/data';
import '../Sidebar.css';

const Sidebar = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  const renderAlbums = () => {
    return Object.values(albumsData).flatMap(artistAlbums =>
      artistAlbums.map(album => (
        <Link key={album.id} to={`/album/${album.id}`}>
        <div  className='flex items-center gap-3 cursor-pointer hover:text-neutral-100 transition duration-300 hover:bg-neutral-700 rounded-lg mb-2 p-2'>
          <img src={album.cover} alt={album.title} className='h-12 w-12 rounded object-cover flex-shrink-0' />
          <div className='flex flex-col'>
          <p className='font-semibold text-neutral-200'>{album.title.length > 28 ? album.title.slice(0, 28) + '...' : album.title}</p>
            <p className='text-sm text-neutral-400'>Álbum ∙ {album.artist}</p>
          </div>
        </div>
        </Link>
      ))
    );
  };

  return (
    <div className='w-[22%] h-full p-2 flex-col gap-2 text-neutral-400 hidden lg:flex'>
      <div className='bg-[#121212] h-[17%] rounded-lg flex flex-col justify-around'>
        <Link to='/' className='flex items-center gap-3 pl-8 cursor-pointer hover:text-neutral-200 transition duration-300'>
          <GoHome size={30} />
          <p className='font-bold hover:underline'>Inicio</p>
        </Link>
        <Link to='/search' className='flex items-center gap-3 pl-8 cursor-pointer hover:text-neutral-200 transition duration-300'>
          <CiSearch size={30} />
          <p className='font-bold hover:underline'>Buscar</p>
        </Link>
      </div>

      <div 
      className= {`bg-[#121212] h-[85%] rounded-lg custom-scrollbar ${isHovered ? 'custom-scrollbar' : 'custom-scrollbar-hidden'}`}
      onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
        <div className='p-4 flex flex-col gap-3 pl-4 transition duration-300'>
          <div className='flex items-center gap-3 pl-4 hover:text-neutral-200 transition duration-300 cursor-pointer'>
            <LuLibrary size={30} />
            <p className='font-bold'>Tu biblioteca</p>
          </div>
          <div>{renderAlbums()}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
