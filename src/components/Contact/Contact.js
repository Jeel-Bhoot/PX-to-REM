import React from "react";
import { Helmet } from "react-helmet";
import data from "../../Data/Data.json";
import "./style.css";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>{data.contact.contactTitle}</title>
        <meta name="description" content={data.contact.content}></meta>
      </Helmet>
      <div className="flex flex-col justify-center pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-5">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-400">
          {data.contact.contactTitle}
        </p>
        <span className="font-semibold text-3xl sm:text-4xl tracking-tight text-slate-200">
          {data.contact.content}
        </span>
        <p className="w-full mt-4 text-md max-w-lg mx-auto text-slate-400">
          {data.contact.message}{" "}
        </p>
        <button className="w-32 mt-10 rounded-lg bg-blue-600 hover:bg-blue-700">
          <a
            href="mailto:abhiashobhashana@gmail.com?&to=m.anmolmehta@gmail.com"
            className="text-md tracking-tight"
          >
            Say hello
          </a>
        </button>
      </div>
    </>
  );
}
