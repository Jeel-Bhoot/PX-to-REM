import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import data from "../../Data/Data.json";
import "./style.css";
import ToggleSwap from "../../Assets/icons/ToggleSwap";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  function openModal() {
    setIsOpen(true);
  }

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

  return (
    <div className="sticky sm:fixed top-0 z-40 w-full md:py-4 sm:p-7 flex justify-between items-center border-b border-slate-300/10 backdrop-blur flex-none transition-colors duration-500 border-slate-50/[0.06] supports-backdrop-blur:bg-slate-900/75">
      <div className="md:flex md:w-full sm:flex sm:w-full">
        <span className="font-semibold cursor-pointer" onClick={onHome}>
          <ToggleSwap />
        </span>
      </div>
      <div className="hidden lg:flex md:items-center gap-6 light-grey sm:items-center gap-6 light-grey">
        {navs.map((nav) => {
          return (
            <NavLink
              key={nav.id}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold cursor-pointer text-sky-500"
                  : "text-sm font-semibold cursor-pointer text-slate-200 hover:text-sky-500"
              }
            >
              {nav.name}
            </NavLink>
          );
        })}
      </div>

      <button
        type="button"
        onClick={openModal}
        className="lg:hidden rounded-md bg-opacity-20 p-0 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none"
      >
        <div className="w-5 h-0.5 bg-gray-600 mb-1.5"></div>
        <div className="w-5 h-0.5 bg-gray-600"></div>
      </button>

      <Dialog
        className="fixed top-4 right-4 z-40 w-full max-w-xs rounded-lg shadow-lg p-6 text-base font-semibold bg-slate-800 text-slate-400 highlight-white/5"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          className="fixed inset-0 backdrop-blur-sm bg-slate-900/80"
          aria-hidden="true"
        />
        <div className="fixed top-4 right-4 w-full max-w-xs rounded-lg shadow-lg p-5 text-base font-semibold bg-slate-800 text-slate-400 highlight-white/5">
          <Dialog.Panel>
            <div className="flex flex-col w-full items-start justify-center gap-5">
              <span
                className="absolute top-4 right-5 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 text-slate-400 hover:text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  viewBox="0 0 10 10"
                  className="w-2.5 h-2.5 overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0L10 10M10 0L0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              {navs.map((nav) => {
                return (
                  <NavLink
                    key={nav.id}
                    to={nav.path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-sky-500"
                        : "font-bold text-slate-400 hover:text-sky-500"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {nav.name}
                  </NavLink>
                );
              })}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
