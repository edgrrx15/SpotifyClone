import React, { useEffect, useState} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { albumsData, songsData } from '../data/data'; // Asegúrate de importar los datos de los álbumes y canciones
import { useNavigate } from 'react-router-dom';
import { IoPlayCircle } from "react-icons/io5";
import { MdPauseCircle } from "react-icons/md";

const AlbumDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const albumId = parseInt(id);
  const album = Object.values(albumsData).flat().find(album => album.id === albumId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null)

  useEffect(() => {
    if (!album) {
      return <Navigate to='/not-found' replace />;
    }
  }, [album]);

  const artistKey = Object.keys(albumsData).find(key => albumsData[key].some(alb => alb.id === albumId));
  const songs = songsData[artistKey].filter(song => song.albumId === albumId);
  

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleSongClick = (index) => {
    setSelectedSong(index);

  };

  return (
    <div className='w-full h-[99.3%] p-2 gap-2 text-neutral-400 bg-[#121212] custom-scrollbar rounded-lg'>
      <div className=' bg-gradient-to-b from-[#e2233a] to-[#121212] h-[100%] rounded-lg'>
        <div className='flex items-center gap-4 pl-6 pt-24 '>
          <img src={album.cover} alt={album.title} className='h-64 w-64 rounded object-cover shadow-[0_20px_50px_rgba(0,0,0,_0.4)]' />
          <div className='text-white pt-10'>
            <p>Álbum</p>
            <h1 className='text-[70px] font-extrabold'>{album.title}</h1>

            <div className='flex'>
            <img src={album.cover} alt="" className='h-6 w-6 rounded-full items-center object-cover'/> 
            <p className='text-lg flex'><p className='font-semibold pl-2'>{album.artist}</p>, {album.year}, {album.numberOfSongs} canciones, {album.duration}</p>
            </div>
          </div>
        </div>
        


        <div className='mt-4 bg-gradient-to-b from-[#00000033] to-[#121212] h-full'>

        <div className='p-6'>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <IoPlayCircle size={72} color='#1ed760' />
            ) : (
              <MdPauseCircle size={72} color='#1ed760'/>
            )}
          </button>
        </div>
          <div className='flex items-center justify-between pl-20 pr-14 '>
            <p className='text-sm font-semibold'>Titulo</p>
          </div>
          <hr className='h-px my-8 bg-gray-900 border-0 dark:bg-neutral-700 ml-16 mr-12'/> 
          <ul className='mt-2 pl-6'>
            {songs.map((song, index) => ( 

              <li key={index}  onClick={() => handleSongClick(index)}className='text-lg  cursor-pointer text-neutral-200 justify-between items-center flex pl-14 pr-14 hover:bg-[#ffffff22] p-2 rounded'>
                  <div>
                    <p className='font-semibold'>{song.title}</p>
                    <p className='text-sm text-neutral-300'>{album.artist}</p>
                  </div>
                <div className='flex items-center'>
                  <p>{song.duration}</p>
                </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
