import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

export default function CanvasPreview({ canvasRef, init, thickness, eraser }) {

  
  const width = thickness;
  const widthHalf = width ? width / 2 : 0;
  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.3" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;

  useEffect(() => {
    init();

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
  //   const jkaudio=new Audio(audioFiles["a"]);
  // jkaudio.play();
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
      // alert(result.data.text);
    } catch (error) {
      console.error('Error performing OCR:', error);
    }
  };

  const playSound = (character) => {
    const audio = new Audio(`/sounds/${character}.opus`);
    audio.play();
  };


  
  return (
    <section className='p-6 w-full'>
      <canvas style={{ cursor }} className='h-full w-full' ref={canvasRef} />
      <button onClick={handleOCR}>Perform OCR</button>
    </section>
  );
}