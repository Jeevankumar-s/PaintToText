import React, { useEffect } from 'react';
import Tesseract from 'tesseract.js';

export default function CanvasPreview({ canvasRef, init, thickness }) {
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
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
  
    const imageDataURL = canvas.toDataURL('image/png');
  
    try {
      const result = await Tesseract.recognize(imageDataURL, 'eng', {
        tessedit_char_whitelist: '0123456789'
      });
      console.log('OCR Result:', result.data.text);
      playSound(result.data.text);
    } catch (error) {
      console.error('Error performing OCR:', error);
    }
  };

  const playSound = (character) => {
    console.log(character);
    if (!isNaN(character)) {
      // If the character is a number, play the corresponding audio
      const audio = new Audio(`/sounds/${character}.opus`);
      console.log(audio);
      audio.play();
    } else {
      // If the character is not a number, play the default audio
      const defaultAudio = new Audio(`/sounds/default.opus`);
      defaultAudio.play();
    }
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent default context menu
    clearCanvas(); // Clear the canvas
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section className='p-6 w-full'>
      <canvas style={{ cursor }} className='h-full w-full' ref={canvasRef} onContextMenu={handleContextMenu} />
      <button onClick={handleOCR}>Play Sound</button>
    </section>
  );
}
