import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import data from "../Data/Data.json";
import ToggleSwap from "../Assets/icons/ToggleSwap";

export default function Header() {
  const navs = [
    {
      id: 0,
      name: data.about.aboutTitle,
      path: "/about",
    },
    {
      id: 1,
      name: data.contact.contactTitle,
      path: "/contact",
    },
  ];

  const [selected, setSelected] = useState({});
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  const handleChange = (value) => {
    setSelected(value);
    navigate(value.path);
  };

  return (
    <div className="sticky sm:fixed top-0 z-40 w-full md:py-3 sm:px-7 sm:py-4 flex justify-between items-center border-b flex-none transition-colors duration-500 border-seperator bg-light-white dark:bg-default">
      <div className="md:flex md:w-full sm:flex sm:w-full">
        <span className="font-semibold cursor-pointer" onClick={onHome}>
          <ToggleSwap />
        </span>
      </div>

      <div className="sm:hidden md:hidden lg:flex md:items-center gap-6 sm:items-center">
        {navs.map((nav) => {
          return (
            <NavLink
              key={nav.id}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold cursor-pointer text-light-white-second"
                  : "text-sm font-semibold cursor-pointer text-light-grey-third dark:text-light-grey-second hover:text-light-white-second"
              }
            >
              {nav.name}
            </NavLink>
          );
        })}
      </div>

      <div className="lg:hidden sm:flex md:flex">
        <Listbox as="div" by="id" value={selected} onChange={handleChange}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Button className="relative w-fit rounded-xl cursor-ponter focus-visible:outline-none p-0">
                <div className="w-5 h-0.5 dark:bg-light-white bg-secondary mb-1.5"></div>
                <div className="w-5 h-0.5 dark:bg-light-white bg-secondary"></div>
              </Listbox.Button>

              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-0"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-0"
              >
                <Listbox.Options className="absolute mt-6 right-[-0.5rem] max-h-60 overflow-auto rounded-xl bg-light-white dark:bg-secondary text-base shadow-lg focus:outline-none">
                  {navs.map((items) => (
                    <Listbox.Option
                      className="relative cursor-pointer select-none pl-4 pr-28 py-2.5 font-sans border-b border-seperator/10 dark:border-dark-seperator last:border-b-0"
                      key={items.id}
                      value={items}
                    >
                      <span className="block truncate font-sans text-[17px] text-secondary dark:text-white">
                        {items.name}
                      </span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
}
