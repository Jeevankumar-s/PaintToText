import React, { useEffect } from 'react';

export default function CanvasPreview({ canvasRef, init, thickness, eraser }) {
  const width = thickness;
  const widthHalf = width ? width / 2 : 0;

  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.3" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;

  useEffect(() => {
    init();
  }, []);
  return (
    <section className='p-6 w-full'>
      <canvas style={{ cursor }} className='h-full w-full' ref={canvasRef} />
    </section>
  );
}
