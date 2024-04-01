import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import { faArrowsAltH, faEraser, faMagic, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PaintTool({ canvasRef }) {
  const [isEraser, setIsEraser] = useState(false);
  const [thickness, setThickness] = useState(25);

  const width = thickness;
  const widthHalf = width ? width / 2 : 0;
  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.3" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;

  useEffect(() => {
    // Add event listener for spacebar keydown
    const handleSpacebarPress = (event) => {
      if (event.code === 'Space') {
        handleOCR();
      }
    };

    window.addEventListener('keydown', handleSpacebarPress);

    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
    };
  }, []);

  const handleOCR = async () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const imageDataURL = canvas.toDataURL('image/png');

    try {
      const result = await Tesseract.recognize(imageDataURL, 'eng', {
        tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      });
      console.log('OCR Result:', result.data.text);
      playSound(result.data.text.toLowerCase());
    } catch (error) {
      console.error('Error performing OCR:', error);
    }
  };

  const playSound = (character) => {
    const audio = new Audio(`/sounds/${character}.opus`);
    audio.play();
  };

  const handleColor = () => {
    // Add color handling logic here
  };

  const handleBrush = () => {
    setIsEraser(false);
    // Add brush handling logic here
  };

  const handleEraser = () => {
    setIsEraser(true);
    // Add eraser handling logic here
  };

  const handleThickness = (event) => {
    setThickness(event.target.value);
    // Add thickness handling logic here
  };

  return (
    <div className='flex h-screen'>
      <aside className='basis-52 p-6 h-full border-r-2'>
        <div>
          <p className='text-lg font-semibold'>Pick Brush Color</p>
          <input
            type='color'
            className='w-full mt-2 cursor-pointer border-0'
            onChange={handleColor}
          />
        </div>
        <div className='mt-7'>
          <p className='text-lg font-semibold'>Tools</p>
          <div
            className={`mt-2 w-full p-1 ${!isEraser ? 'bg-green-600' : 'bg-zinc-200'} hover:bg-sky-400`}
            onClick={handleBrush}
          >
            <button className={`bg-zinc-300 p-1 `}>
              <FontAwesomeIcon icon={faPaintBrush} />
            </button>
            <span className='text-lg font-semibold px-2 text-center w-full'>Brush</span>
          </div>
          <div
            className={`mt-2 w-full p-1 ${isEraser ? 'bg-green-600' : 'bg-zinc-200'} hover:bg-sky-400`}
            onClick={handleEraser}
          >
            <button className={`bg-zinc-300 p-1 ${isEraser ? 'bg-green-600 p-1' : ''}`}>
              <FontAwesomeIcon icon={faEraser} />
            </button>
            <span className='text-lg font-semibold px-2 text-center w-full'>Eraser</span>
          </div>
        </div>
        <div className='mt-7'>
          <p className='text-lg font-semibold'>Brush Thickness</p>
          <div className='mt-2 w-full'>
            <input
              type='range'
              min={10}
              max={100}
              defaultValue={thickness}
              onChange={handleThickness}
            ></input>
          </div>
        </div>
      </aside>
      <section className='p-6 w-full'>
        <canvas style={{ cursor }} className='h-full w-full' ref={canvasRef} />
        <button onClick={handleOCR}>Perform OCR</button>
      </section>
    </div>
  );
}
