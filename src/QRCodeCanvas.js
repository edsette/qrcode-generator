import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode';
export default function QRCodeCanvas({text, bgColor, fgColor}){

  const canvasRef = useRef()

  useEffect(()=>{
    QRCode.toCanvas(canvasRef.current,text,{width:500,color: { dark: fgColor, light: bgColor }},(error)=>{console.log(error)})
  },[text, bgColor, fgColor])
  return (
    <div>
      <canvas ref={canvasRef} id='canvas'></canvas>
  
  
  
  
    </div>
    )
}