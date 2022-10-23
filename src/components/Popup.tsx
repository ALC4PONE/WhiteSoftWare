import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid/index.js';


interface Info {
  src: string,
  title: string,
  downloadCount: string,
  description: string,
  downloadLink: string,
  isShow: boolean,
  closePopup: Function
}

export default function Popup({ src, title, downloadCount, description, downloadLink, isShow, closePopup }: Info) {
  if (isShow) {
    return (

      < div
        className="fixed top-0 left-0 z-20 w-full h-full bg-black/50 flex justify-center items-center"
        onClick={closePopup}
      >
        <div
          className="flex flex-col bg-white w-2/6 p-10 relative"
          onClick={e => e.stopPropagation()}
        >
          <XMarkIcon
            className="absolute top-5 right-5 w-8 cursor-pointer"
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
              <h2 className="font-mplus font-bold text-xl">
                {title}
              </h2>
              <p className="font-mplus font-light">
                {downloadCount} downloads
              </p>
            </div>
          </div>
          <p className="font-mplus font-light text-md mb-5">
            {description}
          </p>
          <div
            className="bg-indigo-100 px-5 py-3 mb-5 text-blue-500"
          >
            Password for the archive: 2022
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
