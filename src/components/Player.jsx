  import React from 'react';

  const Player = () => {
    return (
      <div className='h-[10%] bg-black flex items-center justify-between px-5'>
        <div className='flex items-center space-x-4'>
          <img src="https://cdns-images.dzcdn.net/images/cover/9feb96c36993165c7e3105f3a30908b2/1900x1900-000000-80-0-0.jpg" alt="" className='w-14 h-14 rounded' />
          <div>
            <h3 className='text-sm font-semibold'>Song Title</h3>
            <p className='text-xs text-gray-400'>Artist Name</p>
          </div>
        </div>
        <div>
          <p>cONTROLES</p>
        </div>
        <div>
          <p>Volume XD</p>
        </div>
      </div>
    );
  };

  export default Player;
