// @ts-ignore
import QRious from 'qrious'
import React, { useEffect, useRef } from 'react'


type QRCodeProps = {
  value: string
  size?: number
}


const QRCode = React.memo(({ value, size }: QRCodeProps) => {
  const canvas = useRef(null)
  size = size ?? 200

  useEffect(() => {
    console.log(canvas.current)
    new QRious({
      element: canvas.current,
      value,
      size,
    })
  })

  return (
    <canvas width={size} height={size} ref={canvas}></canvas>
  )
})

export default QRCode