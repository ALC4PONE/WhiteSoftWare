import React, { useState } from 'react'
import Popup from './Popup.tsx'


interface Item {
  title: string,
  src: string,
  downloadCount: string,
  downloadLink: string
}

export default function Item({ title, src, downloadCount, downloadLink }: Item) {
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => setIsShow(true)
  const closePopup = () => setIsShow(false)

  return (
    <div className="flex justify-between items-center w-full py-3">
      <img className="w-12 sm:w-16" src={src} />
      <div className="w-full text-start pl-2 sm:pl-5">
        <h3 className="font-bold text-sm sm:text-base">{title}</h3>
        <p className="font-light text-gray-400 text-xs sm:text-base">{downloadCount} downloads</p>
      </div>
      <button
        className="bg-indigo-100 py-1 sm:py-2 px-2 sm:px-4 rounded-full text-xs sm:text-base text-blue-600 hover:scale-105 transition duration-150 ease-in-out"
        onClick={handleClick}
      >
        Download
      </button>
      <Popup
        title={title}
        src={src}
        downloadCount={downloadCount}
        downloadLink={downloadLink}
        isShow={isShow}
        closePopup={closePopup}
      />
    </div>
  )
}
