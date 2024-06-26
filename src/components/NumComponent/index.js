import React, { useRef } from 'react';
import SideToolBar from './SideToolBar';
import CanvasPreview from './CanvasPreview';
import usePaintCustomHook from './usePaintCustomHook';
import Navbarr from '../Navbar';

export default function Index() {
    const [{ canvasRef, ...states }, { init, ...handleFn }] = usePaintCustomHook();

  return (
    <>
    <Navbarr/>
    <div className='flex h-screen'>
    <SideToolBar {...handleFn} {...states} />
    <CanvasPreview
      canvasRef={canvasRef}
      init={init}
      eraser={states.isEraser}
      thickness={states.thickness}
    />
  </div>
  </>
  );
}