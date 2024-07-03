import React from 'react';
import { albumsData } from '../data/data';
import { Link } from 'react-router-dom';
import Goback from './goback';

const Main = () => {

  const firstEightAlbums = Object.values(albumsData).flatMap(artistAlbums => artistAlbums).slice(2,10);
  const popularAlbums = Object.values(albumsData).flatMap(artistAlbums => artistAlbums).slice(4,11);

  return (
    <div className='w-full h-full p-2 gap-2 text-neutral-400 bg-transparent custom-scrollbar'>
      <div className='bg-gradient-to-b from-[#252525] to-[#121212] h-full rounded-lg overflow-y-auto  pb-20'>
        <span>
          <Goback/>
        </span>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-4 px-6'>
          {firstEightAlbums.map(album => (
            <Link key={album.id} to={`/album/${album.id}`} className='w-full'>
              <div className='flex items-center cursor-pointer bg-[#2d2d2d] hover:text-neutral-100 transition duration-300 hover:bg-neutral-700 rounded w-full'>
                <img src={album.cover} alt={album.title} className='h-[70px] w-[70px] object-cover rounded-l shadow-[1px_12px_42px_12px_#212121]' />
                <p className='font-bold text-lg text-neutral-200  right-0 pl-2 max-w-60'>
                  {album.title.length > 42 ? album.title.slice(0, 42) + '...' : album.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className='flex p-6 pt-14'>
          <p className='text-white font-bold text-2xl hover:underline cursor-pointer'>Álbumes populares</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-4 max-w-82">
          {popularAlbums.map(album => (
            <Link key={album.id} to={`/album/${album.id}`} >
              <div className=' cursor-pointer  hover:bg-[#69696933] rounded py-3 px-3 pb-8'>
                <img src={album.cover} alt={album.title} className='h-[full] object-fit rounded shadow-[0px_15px_15px_0px_#0f0f0f] ' />
                <p className='font-semibold text-white text-left pt-2'>
                  {album.title.length > 22 ? album.title.slice(0, 22) + '...' : album.title}
                </p>
                <p>
                {album.artist.length > 22 ? album.artist.slice(0,22) + '...' : album.artist}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Main;
