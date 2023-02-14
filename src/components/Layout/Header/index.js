import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-[#2c2c2c]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between  py-3 md:justify-between md:space-x-10">
          <div className="flex justify-start">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://static.zippia.com/ui-router/logo/full.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex-1 ml-6 hidden lg:block">
            <div className="flex">
              <input
                className="bg-white rounded-l-md border border-gray-200 ring-0 focus:ring-0 outline-none py-2 px-4"
                placeholder="Search Jobs for title"
              />
              <input
                className="bg-white w-40 border border-gray-200 ring-0 focus:ring-0 outline-none py-2 px-4"
                placeholder="Location"
              />
              <div className="w-10 cursor-pointer hover:bg-orange-700 transition duration-200 flex justify-center items-center bg-orange-600 rounded-r-md">
                <BsSearch className="text-white font-semibold" />
              </div>
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <div className="bg-gray-300 h-1 w-6" aria-hidden="true" />
                <div className="bg-gray-300 h-1 w-6" aria-hidden="true" />
                <div className="bg-gray-300 h-1 w-6" aria-hidden="true" />
              </div>
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-gray-100 hover:text-gray-300"
            >
              JOBS
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-100 hover:text-gray-300"
            >
              CAREERS
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-100 hover:text-gray-300"
            >
              POST JOB
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://static.zippia.com/ui-router/logo/full.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <div
                      className="h-6 w-6 font-black text-gray-500 font-2xl"
                      aria-hidden="true"
                    >
                      X
                    </div>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid gap-y-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  JOBS
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  CAREERS
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  POST JOB
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
