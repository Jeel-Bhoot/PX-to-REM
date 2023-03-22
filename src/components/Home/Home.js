import React, { useEffect, useState } from "react";
import ToggleSwap from "../../Assets/icons/ToggleSwap";
import "./style.css";

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
    const pxToREM = toRem(Number(value));
    setPX(value);
    setREM(pxToREM);
  };

  const onRemChange = (e) => {
    const {
      target: { value },
    } = e;
    const remToPX = toPX(Number(value));
    setPX(remToPX);
    setREM(value);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const changeConverts = () => {
    setIsREM(!isREM);
  };

  return (
    <div className="flex flex-col justify-center pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-10">
      <h1 className="flex justify-center font-semibold text-3xl sm:text-3xl tracking-tight text-slate-200">{title}</h1>
      <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between gap-8 lg:px-64 md:py-7 sm:py-7 sm:items-center">
        {/* PX */}
        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="rem" className="font-semibold text-sky-400">
              REM
            </label>
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                autoComplete="off"
                onChange={onRemChange}
                onFocus={handleFocus}
              />
              <abbr className="font-mono unit">rem</abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="pixels" className="font-semibold text-sky-400">
              Pixels
            </label>
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                autoComplete="off"
                onChange={onPxChange}
                onFocus={handleFocus}
              />
              <abbr className="font-mono unit">px</abbr>
            </div>
          </div>
        )}

        <div
          className="flex w-4 h-4 cursor-pointer items-center relative lg:top-3 sm:top-0 md:top-0"
          title="Swap"
          onClick={changeConverts}
        >
          <ToggleSwap />
        </div>

        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="pixels" className="font-semibold text-sky-400">
              Pixels
            </label>
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                onChange={onPxChange}
                autoComplete="off"
                onFocus={handleFocus}
                className="text-white"
              />
              <abbr className="font-mono unit">px</abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="rem" className="font-semibold text-sky-400">
              REM
            </label>
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                onChange={onRemChange}
                autoComplete="off"
                className="text-white"
                onFocus={handleFocus}
              />
              <abbr className="font-mono unit">rem</abbr>
            </div>
          </div>
        )}
        {/* REM */}
      </div>
    </div>
  );
}
