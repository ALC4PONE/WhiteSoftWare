import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid/index.js';


interface Info {
  src: string,
  title: string,
  downloadCount: string,
  downloadLink: string,
  isShow: boolean,
  closePopup: Function
}

export default function Popup({ src, title, downloadCount, downloadLink, isShow, closePopup }: Info) {
  if (isShow) {
    return (

      < div
        className="fixed top-0 left-0 z-20 w-full h-full bg-black/50 flex justify-center items-center"
        onClick={closePopup}
      >
        <div
          className="flex flex-col bg-white w-80 md:w-96 lg:w-2/5 p-10 relative"
          onClick={e => e.stopPropagation()}
        >
          <XMarkIcon
            className="absolute top-2 md:top-5 right-2 md:right-5 w-6 cursor-pointer"
            onClick={closePopup}
          />
          <div
            className="flex mb-5"
          >
            <img
              src={src}
              className="mr-3 w-16"
            />
            <div>
              <h2 className="font-mplus font-bold text-md md:text-xl">
                {title}
              </h2>
              <p className="font-mplus font-light text-sm md:text-md">
                {downloadCount} downloads
              </p>
            </div>
          </div>
          <div
            className="bg-indigo-100 px-3 py-2 mb-5 text-blue-500 text-sm"
          >
            Password for the archive: 1234
          </div>
          <a
            className="bg-blue-500 self-end py-2 px-3 text-white rounded-md cursor-pointer transition duration-150 ease-in-out hover:scale-105"
            href={downloadLink}
          >
            Download
          </a>
        </div>
      </div >

    )
  }
}
