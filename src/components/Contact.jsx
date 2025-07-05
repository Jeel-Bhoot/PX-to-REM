import React from "react";
import { Helmet } from "react-helmet";
import data from "../Data/Data.json";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{data.contact.contactTitle}</title>
        <meta name="description" content={data.contact.content}></meta>
      </Helmet>
      <div className="flex flex-col justify-center pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-8 bg-light-white dark:bg-default">
        <span className="font-displayMedium text-3xl sm:text-4xl tracking-tight text-secondary dark:text-white">
          {data.contact.content}
        </span>
        <p className="w-full mt-6 text-md max-w-lg mx-auto text-light-grey-third">
          {data.contact.message}
        </p>
        <button className="w-fit mt-6 px-6 py-1.5 rounded-xl bg-blue">
          <a
            href="mailto:jeelbhoot0jb@gmail.com"
            className="text-white text-lg font-sansMedium tracking-tight"
          >
            {data.contact.hello}
          </a>
        </button>
      </div>
    </>
  );
}
