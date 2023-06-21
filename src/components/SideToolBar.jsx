import React from 'react';
import { faArrowsAltH, faEraser, faMagic, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SideToolBar({
  handleColor,
  handleBrush,
  handleEraser,
  isEraser,
  handleThickness
}) {
  console.log(isEraser);
  return (
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
          className={`mt-2 w-full p-1 ${
            !isEraser ? 'bg-green-600' : 'bg-zinc-200'
          } hover:bg-sky-400`}
          onClick={handleBrush}
        >
          <button className={`bg-zinc-300 p-1 `}>
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
          <span className='text-lg font-semibold px-2 text-center w-full'>Brush</span>
        </div>
        <div
          className={`mt-2 w-full p-1 ${
            isEraser ? 'bg-green-600' : 'bg-zinc-200'
          } hover:bg-sky-400`}
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
            defaultValue={25}
            onChange={handleThickness}
          ></input>
        </div>
      </div>
    </aside>
  );
}
