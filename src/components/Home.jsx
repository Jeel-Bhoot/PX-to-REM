import React, { useEffect, useState } from "react";
import ToggleSwap from "../Assets/icons/ToggleSwap";

export default function Home() {
  const [px, setPX] = useState("");
  const [rem, setREM] = useState("");
  const [isREM, setIsREM] = useState(false);
  const [title, setTitle] = useState("PX to REM Converter");

  useEffect(() => {
    if (isREM) {
      setTitle("REM to PX Converter");
    } else {
      setTitle("PX to REM Converter");
    }
  }, [isREM]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const toRem = (pixel) => {
    const rem = 0.0625 * pixel;
    return rem;
  };

  const toPX = (rem) => {
    const px = rem * 16;
    return Math.round(px);
  };

  const onPxChange = (e) => {
    const {
      target: { value },
    } = e;

    if (!isNaN(value)) {
      const pxToREM = toRem(Number(value));
      setPX(value);
      setREM(pxToREM);
    }
  };

  const onRemChange = (e) => {
    const {
      target: { value },
    } = e;

    if (!isNaN(value)) {
      const remToPX = toPX(Number(value));
      setPX(remToPX);
      setREM(value);
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const changeConverts = () => {
    setIsREM(!isREM);
  };

  useEffect(() => {
    if (px === "") {
      setREM("");
    }
    if (rem === "") {
      setPX("");
    }
  }, [px, rem]);

  return (
    <div className="flex flex-col justify-center h-screen py-12 m-auto sm:pt-20 sm:px-8 bg-light-white dark:bg-default gap-5">
      <h1 className="flex justify-center font-displayMedium text-3xl sm:text-4xl tracking-tight text-secondary dark:text-white">
        {title}
      </h1>
      <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between gap-8 lg:px-64 md:py-7 sm:py-7 sm:items-center">
        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                autoComplete="off"
                className="sm:w-full flex items-center text-center bg-light-white-second dark:bg-secondary placeholder-light-grey-third dark:placeholder-light-grey-second text-light-grey-third dark:text-light-grey-second text-3xl p-2 rounded-xl focus:outline-none"
                onChange={onRemChange}
                onFocus={handleFocus}
              />
              <abbr className="absolute top-0 bottom-0 right-4 inline-block align-middle text-base text-light-grey-third font-mono unit">
                rem
              </abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                autoComplete="off"
                className="sm:w-full flex items-center text-center bg-light-white-second dark:bg-secondary placeholder-light-grey-third dark:placeholder-light-grey-second text-light-grey-third dark:text-light-grey-second text-3xl p-2 rounded-xl focus:outline-none"
                onChange={onPxChange}
                onFocus={handleFocus}
              />
              <abbr className="absolute top-0 bottom-0 right-4 inline-block align-middle text-base text-light-grey-third font-mono unit">
                px
              </abbr>
            </div>
          </div>
        )}

        <div
          className="flex w-4 h-4 cursor-pointer items-center relative"
          title="Swap"
          onClick={changeConverts}
        >
          <ToggleSwap />
        </div>

        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                onChange={onPxChange}
                autoComplete="off"
                className="sm:w-full flex items-center text-center bg-light-white-second dark:bg-secondary placeholder-light-grey-third dark:placeholder-light-grey-second dark:text-white text-secondary text-3xl p-2 rounded-xl focus:outline-none"
                onFocus={handleFocus}
              />
              <abbr className="absolute top-0 bottom-0 right-4 inline-block align-middle text-base text-light-grey-third font-mono unit">
                px
              </abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                onChange={onRemChange}
                autoComplete="off"
                className="sm:w-full flex items-center text-center bg-light-white-second dark:bg-secondary placeholder-light-grey-third dark:placeholder-light-grey-second dark:text-white text-secondary text-3xl p-2 rounded-xl focus:outline-none"
                onFocus={handleFocus}
              />
              <abbr className="absolute top-0 bottom-0 right-4 inline-block align-middle text-base text-light-grey-third font-mono unit">
                rem
              </abbr>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
