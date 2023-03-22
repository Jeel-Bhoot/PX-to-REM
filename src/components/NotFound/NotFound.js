import React from "react";
import { Helmet } from "react-helmet";
import data from "../../Data/Data.json";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>{data.notFound.nfCode}</title>
        <meta
          name="description"
          content="React boilerplate Contact Page"
        ></meta>
      </Helmet>
      <div className="h-screen flex flex-auto items-center justify-center text-center px-4 flex-col sm:flex-row p-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:border-slate-300/10 text-slate-200">
          {data.notFound.nfCode}
        </h1>
        <h2 className="mt-2 text-lg text-slate-400 sm:mt-0">
          {data.notFound.nfMessage}
        </h2>
      </div>
    </>
  );
}
