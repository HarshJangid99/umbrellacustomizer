import React, { useState, useEffect, useRef } from 'react';
import Blue from '../assets/Blue.png';
import Pink from '../assets/Pink.png';
import Yellow from '../assets/Yellow.png';

export default function Umbrella(props) {
  const [umbrella, setUmbrella] = useState(Blue);
  const [logo, setLogo] = useState('');
const [buttoncolour, setbuttoncolour] = useState('bg-blue-500')
  const fileInputRef = useRef(null);



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className='flex justify-around flex-wrap w-full '>
       
          <div className="umbrellacontainer w-1/3 relative flex flex-col items-center">
            {/* Umbrella Image */}
            <img src={umbrella} alt="Umbrella" className="w-full h-full" />

            {/* Logo placed at the bottom but inside the umbrella */}
           {logo &&  <div className="custom absolute bottom-0 mb-4 flex justify-center">
              <img 
                src={logo } 
                alt="Logo" 
                className=" h-10"
              />
            </div>}
          </div>
       

        <div className='w-1/3 flex flex-col space-y-10 justify-center'>
          <h1 className='text-5xl font-semibold'>Custom Umbrella</h1>
          <div className='flex space-x-4'>
            <div className='w-6 h-6 rounded-full bg-pink-600 cursor-pointer' onClick={() => {setUmbrella(Pink)
              setbuttoncolour('bg-pink-600') 
              props.setbodycolour('bg-pink-200')
            }}></div>
            <div className='w-6 h-6 rounded-full bg-blue-500 cursor-pointer' onClick={() => {setUmbrella(Blue)
              setbuttoncolour('bg-blue-500')
              props.setbodycolour('bg-blue-200')
            }}></div>
            <div className='w-6 h-6 rounded-full bg-yellow-400 cursor-pointer' onClick={() => {setUmbrella(Yellow)
              setbuttoncolour('bg-yellow-400')
              props.setbodycolour('bg-yellow-100')
            }}></div>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Customize your umbrella</p>
            <p className='text-xl'>Upload a logo for an instant preview</p>
            <p>.png and .jpeg files only. Max file size is 5mb</p>
            <button 
              className={`${buttoncolour} text-white w-3/4 py-2 mt-4` }
              onClick={handleButtonClick}
            >
              Upload
            </button>
            <input 
              type="file" 
              accept="image/png, image/jpeg" 
              onChange={handleFileChange} 
              ref={fileInputRef} 
              className="hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
