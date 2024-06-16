import React from "react";
import { Helmet } from "react-helmet";
import data from "../Data/Data.json";

export default function About() {
  return (
    <>
      <Helmet>
        <title>{data.about.aboutTitle}</title>
        <meta name="description" content={data.about.details}></meta>
      </Helmet>
      <div className="flex flex-col justify-center max-w-2xl pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-8 bg-light-white dark:bg-default">
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.about.header}
        </h1>
        <p className="mt-6 text-base max-w-md text-light-grey-third">
          {data.about.details} <code>{data.about.fontSize}</code> of{" "}
          <code>{data.about.pixelCount}</code>.
        </p>
        <p className="mt-2 text-base text-light-grey-third">
          {data.about.direction}
        </p>
        <h3 className="text-md tracking-tight font-sanMedium mt-6 dark:text-white text-secondar">
          {data.about.example}
        </h3>
        <p className="mt-2 text-base text-light-grey-third">
          {data.about.exampleDetails} <code>{data.about.onePx}</code>{" "}
          {data.about.represents} <code>{data.about.remCount}</code>{" "}
          {data.about.exampleDetailsSecond} <code>{data.about.oneRem}</code>{" "}
          {data.about.represents} <code>{data.about.pixelCount}</code>.
        </p>
        <h3 className="text-md tracking-tight font-sanMedium mt-6 dark:text-white text-secondar">
          {data.about.emRemDiff}
        </h3>
        <p className="mt-2 text-base text-light-grey-third">
          {data.about.difference} <code>{data.about.fontSize}</code>{" "}
          {data.about.exception} <code>{data.about.fontSize}</code>{" "}
          {data.about.differenceSecond}
        </p>
        <p className="mt-2 text-base text-light-grey-third">
          {data.about.remDetails}
        </p>
      </div>
    </>
  );
}
