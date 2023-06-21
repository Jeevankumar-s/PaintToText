import React, { useRef } from 'react';
import SideToolBar from './components/SideToolBar';
import CanvasPreview from './components/CanvasPreview';
import usePaintCustomHook from './paintCustomHook';
function App() {
  const [{ canvasRef, ...states }, { init, ...handleFn }] = usePaintCustomHook();
  return (
    <div className='flex h-screen'>
      <SideToolBar {...handleFn} {...states} />
      <CanvasPreview
        canvasRef={canvasRef}
        init={init}
        eraser={states.isEraser}
        thickness={states.thickness}
      />
    </div>
  );
}

export default App;
