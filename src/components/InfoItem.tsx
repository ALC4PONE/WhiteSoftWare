import React, { Fragment } from "react";
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid/index.js';


interface Info {
  title: string,
  description: string
}

export default function({ title, description }: Info) {
  return (
    <div className="w-full p-3 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition duration-200 ease-in-out">

      <Disclosure>
        {({ open }) => (
          <Disclosure.Button className="w-full text-left text-sm font-medium focus:outline-none text-blue-600">
            <div className="flex w-full justify-between">
              <span>{title}</span>
              <ChevronUpIcon
                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-600`}
              />
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={open}
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {description}
              </Disclosure.Panel>
            </Transition>
          </Disclosure.Button>

        )}
      </Disclosure>
    </div>
  )
}
