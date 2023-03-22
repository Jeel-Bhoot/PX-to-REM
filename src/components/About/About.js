import React from "react";
import { Helmet } from "react-helmet";
import data from "../../Data/Data.json";
import "./style.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>{data.about.aboutTitle}</title>
        <meta name="description" content={data.about.details}></meta>
      </Helmet>
      <div className="flex flex-col justify-center max-w-2xl pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-5">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-400">
          {data.about.aboutTitle}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-200">
          {data.about.header}
        </h1>
        <p className="mt-4 text-sm max-w-md text-slate-400">
          {data.about.details} <code>{data.about.fontSize}</code> of{" "}
          <code>{data.about.pixelCount}</code> {data.pixel}.
        </p>
        <p className="mt-2 text-sm text-slate-400">{data.about.direction}</p>
        <h3 className="text-md tracking-tight font-bold mt-6 text-slate-200">
          {data.about.example}
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          {data.about.exampleDetails} <code>{data.about.onePx}</code>{" "}
          {data.about.represents} <code>{data.about.remCount}</code>{" "}
          {data.about.exampleDetailsSecond} <code>{data.about.oneRem}</code>{" "}
          {data.about.represents} <code>{data.about.pixelCount}</code>.
        </p>
        <h3 className="text-md tracking-tight font-bold mt-6 text-slate-200">
          {data.about.emRemDiff}
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          {data.about.difference} <code>{data.about.fontSize}</code>{" "}
          {data.about.exception} <code>{data.about.fontSize}</code>{" "}
          {data.about.differenceSecond}
        </p>
        <p className="mt-2 text-sm text-slate-400">{data.about.remDetails}</p>
      </div>
    </>
  );
}
