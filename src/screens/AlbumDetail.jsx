import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { albumsData, songsData } from '../data/data';
import { useNavigate } from 'react-router-dom';
import { IoPlayCircle } from 'react-icons/io5';
import { MdPauseCircle } from 'react-icons/md';
import { IoIosPlay } from "react-icons/io";
import { BsFillExplicitFill } from "react-icons/bs";
import { PiWaveformLight } from "react-icons/pi";
import GoBack from '../components/goback';

const AlbumDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const albumId = parseInt(id);
  const album = Object.values(albumsData).flat().find(album => album.id === albumId);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedSongIndex, setSelectedSongIndex] = useState(-1);
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  
  useEffect(() => {
    if (!album) {
      return <Navigate to='/not-found' replace />;
    }
  }, [album]);

  const artistKey = Object.keys(albumsData).find(key => albumsData[key]?.some(alb => alb.id === albumId));
  const songs = songsData[artistKey]?.filter(song => song.albumId === albumId) || [];

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
    setIsPlayingSong(prevState => !prevState);
  };


  return (
<div className='w-full h-[98.54%] mt-2 gap-2 text-neutral-400 bg-gradient-to-b from-[#121212] to-[#121212] custom-scrollbar rounded-lg'>
      <div className='h-[100%] rounded-lg bg-gradient-to-b from-[#ec2641ff] to-[#121212] pt-2'>
      <span>
          <GoBack/>
        </span>
        <div className='flex items-center gap-4 pl-6 pt-24'>
          <img src={album.cover} alt={album.title} className='h-64 w-64 rounded object-cover shadow-[0_20px_50px_rgba(0,0,0,_0.4)]' />
          <div className='text-white pt-10'>
            <p>Álbum</p>
            <h1 className='text-[70px] font-extrabold'>{album.title}</h1>
            <div className='flex'>
              <img src={album.cover} alt='' className='h-6 w-6 rounded-full items-center object-cover' />
              <p className='text-lg flex'>
                <span className='font-semibold pl-2 hover:underline cursor-pointer'>{album.artist}</span>, {album.year}, {album.numberOfSongs} canciones, {album.duration}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-4 bg-gradient-to-b from-[#00000033] to-[#121212] h-full'>
          <div className='p-6'>
            <button onClick={togglePlay}>
              {isPlaying ? (
                <IoPlayCircle size={72} color='#1ed760' />
              ) : (
                <MdPauseCircle size={72} color='#1ed760' />
              )}
            </button>
          </div>
          <div className='flex items-center justify-between pl-20 pr-14'>
            <p className='text-sm font-semibold'>Título</p>
          </div>
          <hr className='h-px my-8 bg-gray-900 border-0 dark:bg-neutral-700 ml-16 mr-12' />
          <ul className='mt-2 pl-6'>
            {songs.map((song, index) => (
              <li
                key={index}
                className={`text-lg justify-between items-center flex pl-14 pr-14 p-2 rounded hover:bg-[#69696933] ${
                  selectedSongIndex === index ? 'text-green-500' : 'text-neutral-200'
                }`}
                onClick={() => handleSongClick(index)}
              >
                <div className='flex items-center'>
                  <button>
                    {selectedSongIndex === index && isPlayingSong ? (
                      <PiWaveformLight className='mr-6' />
                    ) : (
                      <IoIosPlay className='mr-6' />
                    )}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{song.title}</p>
                    <div className='flex items-center'>
                      <BsFillExplicitFill size={14} color='#a4a4a4' />
                      <p className='text-sm text-neutral-400 ml-1'>{album.artist}</p>
                    </div>
                  </div>
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
};

export default AlbumDetail;
