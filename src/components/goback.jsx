import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from 'react-icons/io5';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    }
  };

  const handleGoForward = () => {
    if (window.history.length > 1) {
      navigate(1);
    }
  };

  return (
    <div className='p-6 flex items-center'>
      <IoChevronBackCircleSharp
        size={50}
        style={{ color: '#cdcecf', cursor: window.history.length > 1 ? 'pointer' : 'not-allowed'}}
        onClick={handleGoBack}
      />
      <IoChevronForwardCircleSharp
        size={50}
        style={{ color: '#cdcecf', cursor: window.history.length < 1 ? 'pointer' : 'not-allowed' }}
        onClick={handleGoForward}
      />
    </div>
  );
};

export default GoBack;
